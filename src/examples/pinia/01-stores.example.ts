import { defineExample } from '../types'
import demoCode from './01-stores/Demo.vue?raw'
import storeCode from './01-stores/counter-store.ts?raw'

const secondPanel = `<!-- Ещё один компонент в другом конце страницы -->
<script setup lang="ts">
import { useCounterStore } from './counter-store'
const store = useCounterStore()
</script>
<template>
  <!-- тот же стор, то же значение -->
  <span>другая панель: {{ store.count }}</span>
</template>`

const code = `// ============ counter-store.ts (setup-стор) ============\n${storeCode}\n\n// ============ Demo.vue (потребитель) ============\n${demoCode}\n\n// ============ вторая панель ============\n${secondPanel}`

export default defineExample({
  title: 'Stores: state, getters, actions',
  summary: 'Setup-стор на ref/computed/функциях, storeToRefs для деструктуризации, стор как синглтон.',
  demo: () => import('./01-stores/Demo.vue'),
  code,
  content: {
    intro:
      '<b>Pinia</b> — официальный стейт-менеджер Vue: стор — это реактивное состояние, живущее <b>вне компонентов</b> и доступное всем. Setup-стиль (рекомендуемый) выглядит как обычный композабл: <code>ref</code> = state, <code>computed</code> = getters, функции = actions. Главное отличие от модульного композабла: стор — <b>синглтон с Devtools</b>, SSR-безопасностью и экосистемой плагинов. В демо три панели страницы делят один counter-store — изменения видны везде мгновенно.',
    howItWorks:
      '<code>defineStore(\'counter\', setupFn)</code> создаёт фабрику стора; первый вызов <code>useCounterStore()</code> исполняет setupFn и кеширует экземпляр — все последующие вызовы возвращают тот же объект. Внутри — обычная система реактивности Vue. <code>storeToRefs(store)</code> превращает state/getters в ref-ы (для безопасной деструктуризации), actions — обычные функции, их деструктурируют напрямую. В Vue Devtools стор виден как отдельная вкладка с state и историей мутаций; в отличие от Vuex нет mutations и нет строковых типов.',
    mistakes: [
      {
        title: 'Деструктуризация стора без storeToRefs',
        text: 'Стор — reactive-объект: деструктуризация снимает значения и рвёт реактивность. Классический симптом: «счётчик не обновляется в моей панели».',
        code: `const { count } = useCounterStore() // ❌ count — число-снимок`,
        fix: `import { storeToRefs } from 'pinia'\nconst store = useCounterStore()\nconst { count } = storeToRefs(store) // ✅ Ref<number>\nconst { increment } = store // ✅ функции можно напрямую`,
      },
      {
        title: 'Присваивать стор целиком',
        text: '<code>store = useStore()</code> с последующим переприсваиванием не работает: ссылка на стор одна, мутировать нужно поля.',
        code: `store = { ...store, count: 5 } // ❌ теряется реактивная связь`,
        fix: `store.count = 5 // ✅ или через $patch\nstore.$patch({ count: 5 })`,
      },
      {
        title: 'Создавать стор вне setup без активного Pinia',
        text: 'useStore() требует установленного Pinia. Вызов вне компонента (утилита, роутер-гард до установки) без передачи pinia-инстанса падает.',
        code: `// в router guard до app.use(pinia)\nconst store = useCounterStore() // ❌ getActivePinia was called with no active Pinia`,
        fix: `// ✅ передавайте инстанс явно в вне-setup контексте\nconst store = useCounterStore(pinia)\n// или используйте сторы после app.use(pinia)`,
      },
    ],
    nuances: [
      'Setup-стиль позволяет <b>любые</b> композаблы внутри стора: useLocalStorage, watch, даже роутер.',
      'Стор можно смотреть через <code>store.$subscribe</code> (аналог watch на весь стор) и <code>store.$onAction</code> (перехват actions — логирование, аналитика).',
      '<code>$patch</code> группирует несколько мутаций в одну запись Devtools.',
      '<code>$reset()</code> восстанавливает начальный state — работает в option-сторах из коробки, в setup-сторах требует реализации вручную.',
      'Сторы могут <b>использовать друг друга</b> (storeToRefs внутри другого стора) — но следите за циклическими зависимостями.',
      'devtools-имя стора = первый аргумент defineStore — называйте осмысленно.',
    ],
    bestPractices: [
      'Setup-стиль по умолчанию: гибче и совпадает с остальным кодом на Composition API.',
      'Деструктурируйте только через storeToRefs (state/getters) и напрямую (actions).',
      'Один стор = одна доменная область (cart, user, ui), а не «гигантский appStore».',
      'Не храните в сторе transient-состояние одного компонента (открыта ли модалка) — это локальный стейт.',
      'Именуйте: useXxxStore, файлы stores/cart.ts, stores/user.ts — по домену.',
    ],
    whenToUse:
      '<strong>Pinia</strong> — для доменных данных, разделяемых между страницами и несвязанными компонентами: пользователь/сессия, корзина, кеш сущностей, глобальные настройки. Не нужен для чисто локального UI-состояния и для родитель↔потомок-связи (пропсы и события решают это точнее).',
    alternative: {
      title: 'Модульный композабл-синглтон',
      text: 'Для маленьких приложений без SSR самописный модульный ref-синглтон покрывает потребности без зависимости.',
      code: `// stores/theme.ts\nconst mode = ref<'dark' | 'light'>('dark')\nexport function useTheme() {\n  return { mode, toggle: () => (mode.value = mode.value === 'dark' ? 'light' : 'dark') }\n}\n// минусы против Pinia: нет Devtools-интеграции, SSR-безопасности и $reset`,
    },
    advanced: {
      title: '$onAction и $subscribe для перехвата',
      text: 'Плагины и middleware строятся на двух хуках стора: $onAction перехватывает вызовы actions (логи, аналитика, undo), $subscribe следит за изменениями state (персистентность, sync).',
      code: `const store = useCounterStore()\n\nstore.$onAction(({ name, args, after, onError }) => {\n  const start = Date.now()\n  after((result) => {\n    console.log(\`\${name}(\${args}) занял \${Date.now() - start}мс\`, result)\n  })\n  onError((err) => console.error(name, err))\n})\n\nstore.$subscribe((mutation, state) => {\n  localStorage.setItem('counter', JSON.stringify(state))\n})`,
    },
  },
})
