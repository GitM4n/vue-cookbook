import { defineExample } from '../types'
import demoCode from './02-option-store/Demo.vue?raw'

const optionCode = `// Option-стор: классическая структура
export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),
  getters: {
    totalPrice: (state) => state.items.reduce((s, i) => s + i.price * i.qty, 0),
    count(): number {
      return this.items.length // this для доступа к другим getters
    },
  },
  actions: {
    add(item: CartItem) {
      this.items.push(item)
    },
    async checkout() {
      await api.post('/checkout', this.items)
      this.$reset() // опция-стор умеет reset из коробки
    },
  },
})`

export default defineExample({
  title: 'Option-стор vs setup-стор',
  summary: 'Два стиля одного стора: декларативный объект (state/getters/actions) против Composition API; $reset и когда что выбирать.',
  demo: () => import('./02-option-store/Demo.vue'),
  code: `// ============ option-стор (полный пример) ============\n${optionCode}\n\n// ============ Demo.vue (оба стиля рядом) ============\n${demoCode}`,
  content: {
    intro:
      'Pinia поддерживает <b>два стиля</b> описания стора. <b>Option-стор</b> — объект из <code>state</code> (фабрика), <code>getters</code> (вычисляемые) и <code>actions</code> (методы) — визуально похож на data/computed/methods из Options API. <b>Setup-стор</b> — функция на ref/computed — то же, что и любой композабл. Они полностью взаимозаменяемы: в демо обе версии живут рядом и ведут себя одинаково. Выбор — командный стиль и потребность в фичах ($reset, приватное состояние).',
    howItWorks:
      'В option-сторе state обязан быть <b>фабрикой</b> (<code>() =&gt; ({...})</code>), чтобы каждый экземпляр (в SSR — каждый запрос) получал свежий объект. Getters получают state первым аргументом; доступ через <code>this</code> включает остальные getters (тогда типизация результата ручная). Actions — обычные методы, мутирующие this. $reset работает автоматически: пересоздаёт state из фабрики. В setup-сторе фабрикой является сама функция, «actions» — замыкания, а для $reset нужно написать его руками (или вернуть собственный reset).',
    mistakes: [
      {
        title: 'state без фабрики',
        text: 'state: { items: [] } разделяет один массив между всеми экземплярами стора — в SSR это утечка данных между запросами, в SPA — призраки после HMR.',
        code: `state: { items: [] } // ❌ общий объект`,
        fix: `state: () => ({ items: [] }) // ✅ фабрика`,
      },
      {
        title: 'Ожидать $reset в setup-сторе',
        text: 'Setup-стор не имеет автоматического $reset — вызов упадёт или warning в dev. Возвращайте собственную reset-функцию.',
        code: `const store = useSetupStore()\nstore.$reset() // ❌ нет дефолтной реализации`,
        fix: `const useSetupStore = defineStore('s', () => {\n  const initial = () => ({ count: 0 })\n  const state = reactive(initial())\n  function $reset() { Object.assign(state, initial()) }\n  return { ...toRefs(state), $reset }\n}) // ✅`,
      },
      {
        title: 'Геттер с this без явного типа возврата',
        text: 'В option-сторах getter через this без аннотации типа возвращает unknown и ломает вывод типов у потребителей.',
        code: `getters: {\n  summary() { return \`\${this.total} шт\` } // ❌ implicit any в сложных случаях\n}`,
        fix: `getters: {\n  summary(): string { return \`\${this.total} шт\` } // ✅ аннотация\n}`,
      },
    ],
    nuances: [
      'Option-стор чуть <b>упрощает Devtools-таймлайн</b>: мутации state группируются по полям.',
      'В option-сторе можно вернуть объект из actions — после() в $onAction получит результат.',
      'Setup-стор может иметь <b>приватные</b> переменные: просто не возвращайте их — снаружи не видно (в option всё «публично»).',
      'В setup-сторе доступен весь Composition API: watchEffect, useLocalStorage, инъекции — option-стор ограничен своим каркасом.',
      'Смешивать стили в одном проекте можно, но лучше выбрать один и задокументировать.',
      'Для тестов option-сторы проще мокать через testing-pinia; setup-сторы мокаются как обычные функции.',
    ],
    bestPractices: [
      'Новый код — <b>setup-стор</b>: единый стиль с остальными композаблами, приватное состояние, гибкость.',
      'Option-стор выбирайте, когда важен из коробки $reset и команда привыкла к Options-структуре.',
      'В option-сторах всегда аннотируйте типы getters, использующих this.',
      'Никогда не забывайте фабрику в state — линт-правило или code review.',
      'Сложные сторы дробите: setup-стор может собираться из нескольких внутренних композаблов.',
    ],
    whenToUse:
      'Оба стиля подходят для любых задач управления состоянием. <strong>Setup</strong> — по умолчанию в новых проектах на Composition API. <strong>Option</strong> — при миграции с Vuex (структура близка) и для простых CRUD-сторов с $reset. Не смешивайте в одном модуле без причины.',
    alternative: {
      title: 'Композабл-синглтон вместо стора',
      text: 'Мини-сторы (одна-две переменные) можно не оформлять в Pinia — модульный композабл решает ту же задачу.',
      code: `// достаточно для темы/флага\nconst mode = ref<'dark' | 'light'>('dark')\nexport function useTheme() { return { mode } }\n\n// Pinia нужен при: SSR, Devtools-требованиях, росте логики`,
    },
    advanced: {
      title: 'Гибрид: setup-стор с $reset через фабрику состояния',
      text: 'Комбинируйте преимущества: setup-стор, но state собирается фабрикой и $reset реализован явно — контракт сохраняется для потребителей.',
      code: `export const useUserStore = defineStore('user', () => {\n  const createInitialState = () => ({\n    profile: null as Profile | null,\n    roles: [] as string[],\n  })\n  const state = reactive(createInitialState())\n\n  function $reset() {\n    Object.assign(state, createInitialState())\n  }\n\n  async function login(credentials: Credentials) {\n    state.profile = await api.login(credentials)\n    state.roles = await api.roles(state.profile.id)\n  }\n\n  return { ...toRefs(state), $reset, login }\n})`,
    },
  },
})
