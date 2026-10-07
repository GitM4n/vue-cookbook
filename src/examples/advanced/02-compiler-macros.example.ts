import { defineExample } from '../types'
import demoCode from './02-compiler-macros/Demo.vue?raw'

const macrosCode = `// ===== defineModel: двустороннее связывание (3.4+) =====
const title = defineModel<string>({ required: true })
const enabled = defineModel<boolean>('enabled', { default: false })
// на теге: <FancyInput v-model="t" v-model:enabled="e" />

// ===== useTemplateRef (3.5+): именованный template ref =====
const inputEl = useTemplateRef<HTMLInputElement>('my-input')
// <input ref="my-input" /> → inputEl.value — HTMLElement | null
// раньше: const inputEl = ref(null) + <input ref="inputEl"> — имя через переменную

// ===== defineExpose: что наружу через родительский ref =====
// Child.vue
const validate = () => true
defineExpose({ validate })
// родитель:
const child = useTemplateRef<typeof Child>('child')
child.value?.validate()

// ===== defineOptions: опции компонента в script setup =====
defineOptions({
  name: 'FancyInput',
  inheritAttrs: false,
})

// ===== defineProps/defineEmits — типизированные =====
const props = defineProps<{ user: User; size?: 'sm' | 'lg' }>()
const emit = defineEmits<{ save: [value: string]; cancel: [] }>()`

export default defineExample({
  title: 'Компиляторные макросы: defineModel, useTemplateRef, defineExpose',
  summary: 'Макросы <script setup>: v-model внутри компонента, типизированные template ref, публичный API через defineExpose.',
  demo: () => import('./02-compiler-macros/Demo.vue'),
  code: `// ============ Demo.vue (интерактив) ============\n${demoCode}\n\n// ============ шпаргалка макросов ============\n${macrosCode}`,
  content: {
    intro:
      '<b>Компиляторные макросы</b> — специальные функции <code>&lt;script setup&gt;</code>, которые компилятор превращает в код рантайма: импортировать их не нужно. Главные: <code>defineModel</code> (двусторонняя связь одной строкой), <code>useTemplateRef</code> (доступ к DOM по имени ref-атрибута), <code>defineExpose</code> (публичный API компонента для родителя), <code>defineOptions</code> (name/inheritAttrs), <code>defineProps</code>/<code>defineEmits</code>. В демо — живой defineModel-инпут и useTemplateRef с фокусом и скроллом.',
    howItWorks:
      'defineModel компилируется в проп modelValue + emit update:modelValue (+ возвращает ref-подобный объект: чтение — из пропа, запись — emit). Именованные модели — <code>defineModel&lt;T&gt;(\'name\')</code>. useTemplateRef(\'name\') возвращает ref на элемент с <code>ref="name"</code> — надёжнее старого «ref-переменная совпадает с именем атрибута», особенно при переименованиях. defineExpose определяет, что увидит родитель через template ref (по умолчанию в script setup закрыто — в отличие от Options API). defineOptions задаёт обычные options-поля (name, inheritAttrs: false) — раньше требовался второй &lt;script&gt;-блок.',
    mistakes: [
      {
        title: 'defineModel без слушателя на родителе',
        text: 'Запись в model эмитит update:modelValue. Если родитель не передал v-model, значение вернётся к дефолту/пропу после каждого ререндера — «ввод не сохраняется».',
        code: `<FancyInput /> <!-- ❌ без v-model -->\n// внутри: model.value = 'x' — emit уходит в пустоту`,
        fix: `<FancyInput v-model="text" /> <!-- ✅ -->`,
      },
      {
        title: 'Обращаться к template ref до монтирования',
        text: 'До mounted inputEl.value === null: измерения и focus в setup падают. Ждите onMounted (или используйте watch + flush: \'post\').',
        code: `const el = useTemplateRef('x')\nel.value?.focus() // ❌ null на этапе setup`,
        fix: `onMounted(() => el.value?.focus()) // ✅`,
      },
      {
        title: 'defineExpose всей внутренней кухни',
        text: 'Раскрытый наружу API — обязательство: родители начнут дергать internals, рефакторинг сломает их. Экспонируйте только контрактные методы.',
        code: `defineExpose({ state, doStuff, internalCache, temp }) // ❌`,
        fix: `defineExpose({ validate: () => true }) // ✅ минимальный API`,
      },
    ],
    nuances: [
      'defineModel возвращает объект с .value — можно watch-ить, передавать дальше в v-model, мутировать (это emit).',
      'Модификаторы v-model на компоненте приедут вторым элементом: <code>const [model, mods] = defineModel()</code>.',
      'useTemplateRef типизируется генериком: <code>useTemplateRef&lt;HTMLInputElement&gt;(\'x\')</code>.',
      'Для v-for-refs (множество элементов) старый подход с массивом ref ещё актуален; useTemplateRef — для одиночных.',
      '<code>defineOptions({ inheritAttrs: false })</code> + <code>useAttrs()</code> — база полиморфных/обёрточных компонентов.',
      'defineExpose-объект типизируется автоматически: родительский ref знает о методах (через InstanceType).',
    ],
    bestPractices: [
      'defineModel вместо ручных props+emit для любых инпут-компонентов.',
      'useTemplateRef с осмысленными именами (ref="search-input") — рефакторобезопасно.',
      'defineExpose — минимально и только контрактом (validate, focus, reset).',
      'Для родительского доступа к методам сначала подумайте: может, это emit/состояние, а не imperative-API?',
      'Указывайте name через defineOptions у библиотечных компонентов — читаемость Devtools/KeepAlive-include.',
    ],
    whenToUse:
      '<strong>defineModel</strong> — все form-контролы и переключатели. <strong>useTemplateRef</strong> — фокус, скролл, измерения, интеграция с DOM-библиотеками. <strong>defineExpose</strong> — контракты «вызови у меня validate» для форм/мастеров. <strong>defineOptions</strong> — нейминг и inheritAttrs у обёрток.',
    alternative: {
      title: 'Классические props + emits',
      text: 'defineModel — сахар; явный контракт (defineProps + defineEmits + computed get/set) остаётся валидным и чуть более явным для сложных геттеров/сеттеров.',
      code: `const props = defineProps<{ modelValue: string }>()\nconst emit = defineEmits<{ 'update:modelValue': [string] }>()\nconst value = computed({\n  get: () => props.modelValue,\n  set: (v) => emit('update:modelValue', v),\n})`,
    },
    advanced: {
      title: 'Генерик-компонент с defineModel и слотами',
      text: 'Макросы комбинируются с generic-компонентами: типобезопасный select/dropdown, где model типизирован по вариантам опций, а рендер опций отдаётся слоту.',
      code: `<!-- GenericSelect.vue -->\n<script setup lang="ts" generic="T extends { id: string }">\nconst model = defineModel<T | null>({ required: true })\ndefineProps<{ options: T[] }>()\n</script>\n\n<template>\n  <select :value="model?.id" @change="model = options.find(o => o.id === ($event.target as HTMLSelectElement).value) ?? null">\n    <option v-for="o in options" :key="o.id" :value="o.id">\n      <slot :option="o">{{ o.id }}</slot>\n    </option>\n  </select>\n</template>\n\n// родитель: model типизирован как User | null автоматически`,
    },
  },
})
