import { defineExample } from '../types'
import demoCode from './03-directives-headless/Demo.vue?raw'

const directiveCode = `// ===== Глобальная директива (plugins/directives.ts) =====
import type { Directive } from 'vue'

const vFocus: Directive<HTMLInputElement> = {
  mounted: (el) => el.focus(),
}

// v-lazy-scroll: директива с аргументом и модификатором
// <div v-lazy-scroll:300.threshold=".5">
const vLazyScroll: Directive = {
  mounted(el, binding) {
    // binding.arg → '300', binding.modifiers → { threshold: true },
    // binding.value → '.5'
  },
}

export default {
  install(app) {
    app.directive('focus', vFocus)
    app.directive('lazy-scroll', vLazyScroll)
  },
}

// main.ts: app.use(directives)
// использование: <input v-focus />`

const headlessCode = `// ===== Headless-компонент: логика в слоте-параметрах =====
<!-- MouseTracker.vue — сам НЕ рендерит разметку -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)
function update(e: MouseEvent) { x.value = e.clientX; y.value = e.clientY }
onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))
</script>

<template>
  <slot :x="x" :y="y" />
</template>

<!-- Потребитель решает, КАК показать -->
<MouseTracker v-slot="{ x, y }">
  <span class="badge">курсор: {{ x }}×{{ y }}</span>
</MouseTracker>

<!-- Headless vs composable: слот-версия даёт доступ к SSR-рендеру
     и реактивности внутри дерева; composable — просто функция -->`

export default defineExample({
  title: 'Кастомные директивы и headless-компоненты',
  summary: 'Directive с хуками и binding, глобальная vs локальная регистрация; headless/renderless через scoped slots и композаблы.',
  demo: () => import('./03-directives-headless/Demo.vue'),
  code: `// ============ Demo.vue (интерактив) ============\n${demoCode}\n\n// ============ директивы ============\n${directiveCode}\n\n// ============ headless-паттерны ============\n${headlessCode}`,
  content: {
    intro:
      '<b>Кастомная директива</b> — переиспользуемая логика низкоуровневого DOM-доступа: <code>v-focus</code> для фокуса, <code>v-tooltip</code>, <code>v-lazy</code>. Директива получает хуки жизненного цикла узла (mounted, updated, unmounted) и binding (value, arg, modifiers). <b>Headless/renderless-компоненты</b> — противоположный подход: вся логика есть, разметки нет — UI отдаётся через scoped-слоты. В демо: живая директива v-highlight и headless-паттерн useToggleList, где UI свободно меняется.',
    howItWorks:
      'Директива — объект с хуками: <code>created/beforeMount/mounted/beforeUpdate/updated/beforeUnmount/unmounted</code>. Каждый получает (el, binding, vnode, prevVnode); binding.value — значение после =, binding.arg — текст после :, binding.modifiers — объект модификаторов. В <code>&lt;script setup&gt;</code> локальная директива — переменная с именем vCamelCase (vHighlight → v-highlight). Headless-компонент рендерит только <code>&lt;slot :state="..." /&gt;</code>: потребитель получает реактивные параметры и строит любой UI. Гибрид — композабл: то же состояние без обёртки-компонента.',
    mistakes: [
      {
        title: 'Директива вместо компонента',
        text: 'Директива не рендерит — только манипулирует существующим узлом. Если нужен новый DOM (всплывающий тултип-элемент), это компонент или Teleport, не директива.',
        code: `// ❌ v-tooltip, создающий DOM внутри mounted\nel.appendChild(tooltipEl) // ручной DOM вне системы Vue`,
        fix: `// ✅ <Tooltip text="...">компонент</Tooltip>\n// или VueUse useFloating + компонент-обёртка`,
      },
      {
        title: 'Забыть updated-хук',
        text: 'mounted сработает один раз; если binding.value реактивен, при его изменении DOM не обновится без хука updated. Классика: v-color="dynamicColor" «перестаёт работать».',
        code: `const vColor = { mounted(el, b) { el.style.color = b.value } } // ❌`,
        fix: `const vColor = {\n  mounted(el, b) { el.style.color = b.value },\n  updated(el, b) { el.style.color = b.value }, // ✅\n}`,
      },
      {
        title: 'Headless через provide/inject вместо слотов',
        text: 'Скрытие состояния в inject уводит контракт «под капот»: незаметны зависимости и типы. Слоты делают параметры явными и типизированными.',
        code: `// ❌ provider с скрытым контекстом для простого hover`,
        fix: `// ✅ v-slot="{ hovered, on }" — контракт виден в месте использования`,
      },
    ],
    nuances: [
      'binding.value обновляется <b>до</b> updated — сравнение с prevVnode.props позволяет видеть старое значение.',
      'Директивы не работают на <b>компонентах</b> (только на обычных элементах); на компоненте упадёт с warning.',
      'SSR: на сервере выполняются только created/beforeMount-аналоги (getSSRProps) — DOM-хуки не сработают.',
      'Модификаторы — не «сахар события», а просто флаги: их семантику определяет ваша директива.',
      'Headless + композабл — два уровня одного паттерна: композабл для JS-контекста, headless-компонент для дерева Vue (SSR, transition-обёртки).',
      'Глобальные директивы регистрируйте плагином и типизируйте через <code>declare module \'vue\' { interface GlobalDirectives ... }</code>.',
    ],
    bestPractices: [
      'Директива — для точечного DOM-вмешательства (focus, измерения, сторонние инстансы). Бизнес-логика — никогда.',
      'Всегда пары mounted/updated для реактивных значений; cleanup в unmounted.',
      'Headless-компоненты — когда нужен рендер-контекст; композаблы — когда достаточно функций.',
      'Именуйте директивы по действию (v-focus, v-lazy), компоненты headless — по роли (MouseTracker, ListProvider).',
      'Локальные директивы (script setup) по умолчанию; глобально — только действительно сквозные.',
    ],
    whenToUse:
      '<strong>Директивы</strong> — повторяющиеся DOM-манипуляции без UI: автофокус, ленивая загрузка изображений, маски ввода, drag-хендлы. <strong>Headless</strong> — библиотеки UI-логики: combobox-поведение, drag-n-drop, virtual scroller — когда дизайн-системы хотят полной свободы разметки. Для 90% остального — обычные компоненты с пропсами и слотами.',
    alternative: {
      title: 'Композабл вместо директивы и headless',
      text: 'Чаще всего достаточно композабла: useFocus() внутри onMounted, useHover для логики. Директива и headless-компонент нужны, когда абстракция должна жить в шаблоне.',
      code: `// вместо v-focus:\nconst el = useTemplateRef<HTMLInputElement>('x')\nonMounted(() => el.value?.focus())\n\n// вместо <MouseTracker>:\nconst { x, y } = useMouse()`,
    },
    advanced: {
      title: 'Директива с SSR-поддержкой (getSSRProps)',
      text: 'Чтобы кастомная директива работала в Nuxt/SSR, определите getSSRProps: он возвращает атрибуты для серверного рендера узла — иначе Vite/Nuxt бросит ошибку о нём при SSR.',
      code: `const vLazyImage: Directive<HTMLImageElement, string> = {\n  mounted(el, b) { el.src = b.value },\n  getSSRProps(binding) {\n    return { 'data-src': binding.value } // сервер: атрибут, клиент: подмена src\n  },\n}`,
    },
  },
})
