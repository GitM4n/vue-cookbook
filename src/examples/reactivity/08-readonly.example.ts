import { defineExample } from '../types'
import demoCode from './08-readonly/Demo.vue?raw'

export default defineExample({
  title: 'readonly и shallowReadonly',
  summary: 'Readonly-вид на реактивное состояние: записи блокируются, источник остаётся mutable; provide/inject-контракты.',
  demo: () => import('./08-readonly/Demo.vue'),
  code: demoCode,
  content: {
    intro:
      '<b>readonly()</b> принимает reactive-объект (или ref) и возвращает <b>read-only прокси</b>: чтение работает как у оригинала и остаётся реактивным, а записи блокируются — в dev-режиме с ошибкой в консоли, в production молча. Это не копия: изменение источника видно через readonly-вид. <b>shallowReadonly</b> защищает только первый уровень. Главное применение — передача состояния вниз без права мутации: provide/inject, глобальный контекст, пропсы-объекты.',
    howItWorks:
      'readonly строит Proxy с ловушкой set/deleteProperty, которая в dev кидает предупреждение, а в prod просто возвращает false (запись игнорируется). Вложенные объекты при чтении тоже оборачиваются в readonly — защита глубокая, поэтому shallowReadonly существует как «мягкий» вариант: первый уровень защищён, вложенные структуры остаются обычными (и реактивными, если были таковыми). Важно: readonly — <b>тот же источник</b>, но другой прокси; сравнение с оригиналом по === даст false.',
    mistakes: [
      {
        title: 'Думать, что readonly копирует',
        text: 'readonly — это вид, а не снапшот: изменился источник — изменился и readonly. Если нужна неизменяемая копия, делайте глубокий клон или используйте immutable-библиотеки.',
        code: `const frozen = readonly(state)\nstate.count++\nconsole.log(frozen.count) // ❌ тоже вырос — это тот же объект`,
        fix: `// нужна независимая неизменяемая копия:\nconst snapshot = readonly(structuredClone(toRaw(state)))\n// или просто const snapshot = JSON.parse(JSON.stringify(state))`,
      },
      {
        title: 'Пытаться мутировать readonly в production-коде',
        text: 'В dev вы увидите ошибку, но в prod запись молча игнорируется — баг станет «тихим»: логика думает, что записала, а данные не изменились.',
        code: `props.user.name = 'new' // ❌ props readonly; в prod — молча`,
        fix: `// общайтесь событиями или v-model, а не мутацией\nemit('update:name', 'new')\n// или defineModel()`,
      },
      {
        title: 'readonly на_plain-объекте без реактивности',
        text: 'readonly(plainObj) вернёт прокси без реактивности — защиты будет, а живых обновлений нет. Источник должен быть реактивным.',
        code: `const frozen = readonly({ count: 0 }) // ❌ не реактивно`,
        fix: `const frozen = readonly(reactive({ count: 0 })) // ✅`,
      },
    ],
    nuances: [
      'isReadonly(frozen) → true; isProxy работает и для readonly, и для reactive.',
      'readonly <b>глубокий</b>: вложенные объекты тоже защищены; shallowReadonly — только первый уровень.',
      'Внутри Vue props组件 уже приходят shallowReadonly — потому «мутация пропа» в dev кидает ошибку.',
      'readonly + reactive = та же система: isReactive(readonly(state)) → true.',
      'Для Pinia-сторов есть <code>$subscribe</code> и storeToRefs — readonly-подход там встроен в API.',
      'toRaw() снимает любые прокси (reactive/readonly/shallow) — путь к оригинальному объекту.',
    ],
    bestPractices: [
      'Пробрасывайте состояние вниз как <code>readonly(state)</code> — контракт «только читать» зашит в API, а не в комментарии.',
      'Для provide/inject передавайте readonly-вид + отдельные функции-мутаторы (actions) — паттерн из доков Vue.',
      'Не применяйте readonly к данным, которые должны редактироваться формами — это создаст ложный барьер.',
      'В dev-тестах проверяйте, что попытки мутации действительно кидают ошибки.',
    ],
    whenToUse:
      '<strong>readonly</strong> — для защиты контрактов: глобальный конфиг приложения, provide/inject-состояние, объект-пропсы внутри библиотечных компонентов, отображение данных, которые редактируются только через actions. Не нужен там, где вы и так контролируете мутации (локальный компонент).',
    alternative: {
      title: 'TypeScript readonly-модификаторы',
      text: 'На уровне типов <code>Readonly&lt;T&gt;</code> запрещает записи compile-time — без рантайм-обёртки. Часто достаточно, когда источник контролируете вы.',
      code: `interface Config {\n  readonly apiBase: string\n  readonly version: string\n}\nconst config: Config = { apiBase: '/api', version: '1.0' }\n// config.apiBase = 'x' // ❌ TS error`,
    },
    advanced: {
      title: 'Контракт «state + actions» через provide/inject',
      text: 'Канонический паттерн из документации Vue: вниз уходит readonly-состояние и методы-мутаторы. Потребитель не может сломать инварианты.',
      code: `// provider\nconst state = reactive({ items: [] })\nprovide('store', {\n  list: readonly(state).items, // читается, не мутируется\n  addItem: (item: Item) => state.items.push(item),\n})\n\n// consumer\nconst { list, addItem } = inject('store')!\n// list.push(...) // ❌ TypeError: нельзя мутировать\naddItem({ id: 1 }) // ✅`,
    },
  },
})
