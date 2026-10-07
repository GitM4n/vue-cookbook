import { defineExample } from '../types'
import demoCode from './04-provide-inject/Demo.vue?raw'
import keyCode from './04-provide-inject/themeKey.ts?raw'
import childCode from './04-provide-inject/DeepChild.vue?raw'

const code = `// ============ Demo.vue (провайдер) ============\n${demoCode}\n\n// ============ themeKey.ts (типизированный ключ) ============\n${keyCode}\n\n// ============ DeepChild.vue (глубокий потребитель) ============\n${childCode}`

export default defineExample({
  title: 'provide / inject',
  summary: 'Контекст для поддерева без пропс-дриллинга: типизированные ключи, паттерн state+actions, readonly-данные.',
  demo: () => import('./04-provide-inject/Demo.vue'),
  code,
  content: {
    intro:
      '<b>provide</b> на предке и <b>inject</b> у любого потомка — способ передать данные через поддерево, не прокидывая пропсы через каждый промежуточный компонент (props drilling). В отличие от глобального стора, контекст <b>scoped</b>: живёт только в поддереве и создаётся на каждый экземпляр провайдера. Канонический контракт: вниз уходит <b>read-only</b> состояние, мутации — через переданные функции (state + actions). В демо тема предоставляется на верхнем уровне, а глубокий потомок inject-ит её через Symbol-ключ.',
    howItWorks:
      'provide(key, value) сохраняет значение в экземпляре компонента; inject(key) ищет его вверх по цепочке родителей до первого совпадения. Ключ — строка или <b>Symbol</b>; типизированный <code>InjectionKey&lt;T&gt;</code> связывает provide и inject на уровне типов — TypeScript знает, что вернётся ThemeContext. inject может принимать второй аргумент — значение по умолчанию (или фабрику через <code>inject(key, () => makeDefault(), true)</code>). Реактивность: если провайдить ref/reactive, потребитель получает живую связь; если передать сам объект — см. ошибку про потерю реактивности.',
    mistakes: [
      {
        title: 'Потеря реактивности при provide обычного объекта',
        text: 'provide("user", user.value) отдаёт снимок. provide-ить нужно сам ref/reactive или делать это через computed — иначе потребитель видит замороженное значение.',
        code: `// ❌ снимок на момент provide\nprovide('count', count.value)`,
        fix: `provide('count', count) // ✅ живой ref\n// или read-only view:\nprovide('count', readonly(count))`,
      },
      {
        title: 'Строковые ключи без типов',
        text: 'Строки «theme» легко дублируются между библиотеками и опечатками, типизация теряется. Symbol + InjectionKey — стандарт.',
        code: `provide('theme', ctx)\nconst theme = inject('theme') // ❌ any / неизвестно что`,
        fix: `export const themeKey: InjectionKey<ThemeContext> = Symbol('theme')\nprovide(themeKey, ctx)\nconst theme = inject(themeKey) // ✅ ThemeContext | undefined`,
      },
      {
        title: 'inject в компоненте, где провайдер не гарантирован',
        text: 'inject без дефолта вернёт undefined, и первый же вызов theme.mode упадёт. Либо дефолт, либо честная ошибка контракта — но не тихий undefined.',
        code: `const theme = inject(themeKey)\ntheme.mode // ❌ TypeError, если provider выше нет`,
        fix: `const theme = inject(themeKey, { mode: ref('dark'), toggle: () => {} })\n// ✅ или: if (!theme) throw new Error('...') — явный контракт`,
      },
    ],
    nuances: [
      'provide/inject работает только <b>вниз</b>: предок → потомки. События наверх — через emit или callback в контексте.',
      'Контекст создаётся <b>на каждый экземпляр провайдера</b>: два ThemeProvider = два независимых поддерева с разными темами.',
      'inject ищет ближайшего провайдера: вложенные провайдеры перекрывают внешних для своего поддерева.',
      'В <code>&lt;script setup&gt;</code> provide/inject только на верхнем уровне setup (синхронный контекст).',
      'Реактивность через контекст — та же система: ref в контексте реактивен, метод в контексте — просто функция.',
      'В библиотеках UI так устроены контексты форм/таблиц/меню: FormGroup провайдит валидацию для всех полей внутри.',
    ],
    bestPractices: [
      'Паттерн <b>state + actions</b>: вниз — readonly-данные, вверх — функции-мутаторы.',
      'Ключи — Symbol + InjectionKey&lt;T&gt; в отдельном файле (контракт модуля).',
      'Дефолт или throw для обязательного контекста — никогда не молчаливый undefined.',
      'Не используйте provide/inject для данных, нужных «всему приложению» — это store; для одной пары компонентов — обычные пропсы.',
      'Композаблы-обёртки: useTheme() прячет inject внутри — потребители не знают про ключи.',
    ],
    whenToUse:
      '<strong>provide/inject</strong> — для контекста поддерева: тема, локаль, конфиг, состояние layout, контексты библиотечных компонентов (form/table/menu). Идеален, когда «данные нужны глубоко, но только внутри этого блока». Для глобальных доменных данных — Pinia; для 1–2 уровней — обычные пропсы.',
    alternative: {
      title: 'Пропсы через промежуточные компоненты',
      text: 'Если глубина 2–3 и данных мало, явный пропс-дрILING читается прямолинейнее и типизируется проще.',
      code: `<ThemeProvider :theme="t">\n  <Intermediate :theme="t">\n    <DeepChild :theme="t" />\n  </Intermediate>\n</ThemeProvider>\n<!-- при глубине 5+ это уже боль — время provide/inject -->`,
    },
    advanced: {
      title: 'Контекст через композабл-пару (provider/comsumer)',
      text: 'Библиотечный паттерн: пара функций useCreateContext/useContext прячет provide/inject за API, ключи не утекают, дефолты и ошибки — в одном месте.',
      code: `// context.ts\nexport function useCreateTheme() {\n  const mode = ref<'dark' | 'light'>('dark')\n  const ctx = { mode: readonly(mode), toggle: () => { mode.value = mode.value === 'dark' ? 'light' : 'dark' } }\n  provide(themeKey, ctx)\n  return ctx\n}\n\nexport function useTheme() {\n  const ctx = inject(themeKey)\n  if (!ctx) throw new Error('useTheme: оберните приложение в useCreateTheme')\n  return ctx\n}`,
    },
  },
})
