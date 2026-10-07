import { defineExample } from '../types'
import demoCode from './01-composables/Demo.vue?raw'

export default defineExample({
  title: 'Composables: дизайн и конвенции',
  summary: 'use*-функции: изоляция состояния, реф-возврат, good vs bad примеры дизайна.',
  demo: () => import('./01-composables/Demo.vue'),
  code: demoCode,
  content: {
    intro:
      '<b>Composable</b> — функция, инкапсулирующая переиспользуемую реактивную логику: имя начинается с <code>use</code>, состояние возвращается наружу (обычно ref-ы и методы). Каждый вызов создаёт <b>изолированный</b> экземпляр — это главное отличие от модульного синглтона. В демо useCounter и useMouse: один чистый, второй с DOM-подпиской и правильным cleanup. Из одного useCounter созданы три независимых счётчика.',
    howItWorks:
      'Технически composable — обычная функция, вызывающая Vue-API (ref, computed, watch, onMounted). Магия в <b>контексте</b>: если хуки (onMounted и т.д.) вызываются синхронно внутри setup-цепочки, они привязываются к текущему компоненту — поэтому composable с onMounted работает без передачи экземпляра. Контракт хорошего композабла: вход — MaybeRefOrGetter-параметры, выход — объект с ref-ами (часто через toRefs) и функциями; никаких глобальных переменных; cleanup внутри (onUnmounted/onScopeDispose).',
    mistakes: [
      {
        title: 'Глобальное состояние внутри композабла',
        text: 'Если ref объявлен на уровне модуля (вне функции), все потребители делят один экземпляр — «composable» превращается в скрытый синглтон. Иногда это нужно (shared state), но должно быть явным решением, а не случайностью.',
        code: `// ❌ module-level: все компоненты делят один count\nconst count = ref(0)\nexport function useCounter() {\n  return { count }\n}`,
        fix: `// ✅ состояние внутри функции — изолировано\nexport function useCounter() {\n  const count = ref(0)\n  return { count }\n}\n\n// ✅ или ЯВНЫЙ shared-синглтон с пометкой в имени/доках`,
      },
      {
        title: 'Хуки вне синхронного контекста',
        text: 'onMounted внутри setTimeout, Promise.then или условного блока не привяжется к компоненту (или упадёт с warning). Хуки регистрируются только синхронно в setup-цепочке.',
        code: `export function useThing() {\n  setTimeout(() => {\n    onMounted(() => {}) // ❌ слишком поздно, контекст потерян\n  }, 100)\n}`,
        fix: `export function useThing() {\n  onMounted(() => {\n    setTimeout(() => { /* работа с DOM */ }, 100) // ✅ хук снаружи\n  })\n}`,
      },
      {
        title: 'Возвращать сырые значения вместо ref-ов',
        text: 'Возврат { count: count.value } отдаёт снимок: потребитель получает число, которое никогда не обновится. Возвращайте сами ref-ы.',
        code: `export function useCounter() {\n  const count = ref(0)\n  return { count: count.value } // ❌ число-снимок\n}`,
        fix: `export function useCounter() {\n  const count = ref(0)\n  return { count } // ✅ Ref<number>\n}`,
      },
    ],
    nuances: [
      'Имя <code>use*</code> — конвенция экосистемы: линтеры, ревью и инструменты ожидают её.',
      'Композаблы могут <b>вызывать друг друга</b> — это главный способ композиции логики (useUser вызывает useFetch, useAuth вызывает useUser).',
      'Внутри композабла доступны все возможности: watch, provide/inject (если вызывается из setup), router, store.',
      '<code>onScopeDispose(cleanup)</code> — универсальный вариант onUnmounted: работает и в компоненте, и в ручном effectScope.',
      'Параметры-значения принимайте как <code>MaybeRefOrGetter&lt;T&gt;</code> + toValue — потребители смогут передавать и статику, и ref-ы.',
      'Асинхронные композаблы (с await) ломают контекст хуков — либо не делайте setup-async, либо разделяйте «создание» и «запуск».',
    ],
    bestPractices: [
      'Один композабл = <b>одна забота</b>: useMouse, useFetch, useDebounce, а не useEverything.',
      'Возвращайте плоский объект с ref-ами и методами; для сложных API группируйте через toRefs.',
      'Документируйте контракт: что возвращается (Ref/Computed), есть ли side-effects, нужен ли cleanup.',
      'Тестируйте композаблы без компонентов — в vitest с effectScope() это чистые функции.',
      'Не тащите DOM/окно-зависимости без необходимости: SSR-безопасные композаблы проверяют import.meta.env или используют guard-ы.',
    ],
    whenToUse:
      '<strong>Composables</strong> — для повторно используемой логики с состоянием: позиция мыши, таймеры, fetch-обёртки, drag-n-drop, фокус-менеджмент. Если логика без состояния (форматирование, валидация одного значения) — обычные утилиты-функции; если состояние должно быть общим — store или явный синглтон-композабл.',
    alternative: {
      title: 'Обычные утилиты без реактивности',
      text: 'Не всё нужно делать композаблом: чистые функции форматирования/валидации проще тестировать и использовать без Vue-специфики.',
      code: `// utils/format.ts — просто функции, не композаблы\nexport function formatPrice(n: number): string {\n  return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(n)\n}\nexport function isValidEmail(s: string): boolean {\n  return /^[^@]+@[^@]+$/.test(s)\n}`,
    },
    advanced: {
      title: 'Композабл с зависимостями: параметры MaybeRefOrGetter',
      text: 'Продвинутый контракт: параметры могут быть реактивными, композабл сам отслеживает их изменения через watchEffect + toValue. Так устроены композаблы VueUse.',
      code: `import type { MaybeRefOrGetter } from 'vue'\n\nexport function useFetch(url: MaybeRefOrGetter<string>) {\n  const data = ref<unknown>(null)\n  const loading = ref(false)\n\n  watchEffect(async () => {\n    loading.value = true\n    try {\n      data.value = await fetch(toValue(url)).then(r => r.json())\n    } finally {\n      loading.value = false\n    }\n  })\n\n  return { data, loading }\n}\n\n// url может быть строкой, ref или computed — всё работает`,
    },
  },
})
