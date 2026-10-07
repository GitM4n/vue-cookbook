import { defineExample } from '../types'
import demoCode from './02-vdom-scheduler/Demo.vue?raw'

const vdomCode = `// Упрощённая модель patch-алгоритма
function patch(oldVnode, newVnode, container) {
  if (oldVnode.type !== newVnode.type) {
    // разные типы → заменить узел целиком
    unmount(oldVnode); mount(newVnode, container)
    return
  }
  if (oldVnode.key !== newVnode.key) {
    // разные ключи → это «другой» узел, даже если тег тот же
    unmount(oldVnode); mount(newVnode, container)
    return
  }
  // тот же узел: сравнить props
  patchProps(oldVnode.props, newVnode.props)
  // сравнить детей: keyed matching
  patchChildren(oldVnode.children, newVnode.children)
}

// Ключи позволяют ПЕРЕСТАВЛЯТЬ, а не пересоздавать:
// [a, b, c] → [c, a, b]: Vue находит совпадения по ключу,
// делает DOM moveChild-ы, пропсы не трогает`

const schedulerCode = `// Очередь job-ов: батчинг и приоритеты
const queue = new Set<Job>()
let isFlushing = false

function queueJob(job: Job) {
  queue.add(job) // Set — дедупликация: одно изменение = один job
  if (!isFlushing) {
    isFlushing = true
    Promise.resolve().then(flushJobs) // микрозадача!
  }
}

function flushJobs() {
  // сортировка: родитель раньше потомка, pre-watcher до рендера
  queue.sort((a, b) => a.id - b.id)
  for (const job of queue) job()
  queue.clear()
  isFlushing = false
}

// nextTick = «после текущего flushJobs»
export function nextTick(): Promise<void> {
  return isFlushing ? currentFlushPromise : Promise.resolve()
}

// Поэтому: count++ ×3 синхронно = ОДИН рендер
// И поэтому: DOM читайте после await nextTick()`

export default defineExample({
  title: 'VDOM diffing и scheduler: nextTick',
  summary: 'Как Vue сравнивает vnode-деревья (keyed reconciliation), очередь job-ов, батчинг мутаций и nextTick.',
  demo: () => import('./02-vdom-scheduler/Demo.vue'),
  code: `// ============ Demo.vue (живая визуализация) ============\n${demoCode}\n\n// ============ модель patch-алгоритма ============\n${vdomCode}\n\n// ============ модель scheduler ============\n${schedulerCode}`,
  content: {
    intro:
      'Рендер Vue — двухфазный: сначала компоненты создают <b>vnode-деревья</b> (JS-описания DOM), затем <b>patch</b> сравнивает новое дерево со старым и вносит минимальные DOM-изменения. Ключи (<code>key</code>) — язык сопоставления: узлы с совпадающим ключом <b>переставляются</b>, а не пересоздаются. <b>Scheduler</b> — очередь job-ов между этими фазами: мутации ставят эффекты в Set, который флашится в микрозадаче — отсюда батчинг и <code>nextTick</code>. В демо — живой лог mount/move/props/unmount и измерение тайминга nextTick.',
    howItWorks:
      'patch(oldVnode, newVnode): разный type/key → unmount+mount (полная замена); совпали → сравнение props (обновились только изменённые) и рекурсия в детей. Дети сравниваются алгоритмом с <b>keyed matching</b>: Vue ищет совпадения по ключам с двух концов и в середине, минимизируя перемещения. Scheduler: очередь — Set (авто-дедупликация), флаш через <code>Promise.resolve().then()</code> (микрозадача), с сортировкой по id (родители раньше потомков, pre-watcher-ы до рендера, post — после). nextTick резолвится после флаша — мост «состояние изменено» → «DOM готов».',
    mistakes: [
      {
        title: 'Читать DOM сразу после мутации состояния',
        text: 'Рендер ещё в очереди: прочтёте старое значение. Лечится nextTick — но сначала спросите себя, зачем вы читаете DOM из Vue: чаще это симптом.',
        code: `count.value++\nmeasureElement() // ❌ старые размеры`,
        fix: `count.value++\nawait nextTick()\nmeasureElement() // ✅`,
      },
      {
        title: 'nextTick как «костыль синхронизации»',
        text: 'Если логика требует nextTick, чтобы «дождаться» другой логики — это признак запутанного потока данных. Реактивные цепочки (computed/watch) синхронизируются сами.',
        code: `save()\nawait nextTick()\nreload() // ❌ синхронизация через тайминги рендера`,
        fix: `// ✅ цепочка на уровне данных:\nawait save()\nawait reload() // не зависит от рендера`,
      },
      {
        title: 'Ключи-индексы при перестановках',
        text: 'С индексами diff считает «узел 0 всё ещё узел 0» — пропсы не меняются там, где должны. Пересоздание узлов и потеря состояния (фокус, введённый текст).',
        code: `[a, b, c] → [c, a, b]:\nkey=0,1,2: Vue думает «поменялись данные у тех же узлов» ❌`,
        fix: `key=a.id,b.id,c.id: Vue видит перестановку → move-операции ✅`,
      },
    ],
    nuances: [
      'patch сравнивает <b>type + key</b>: одинаковый тег с разными ключами — разные узлы (часто используют для «сброса» компонента).',
      'Дедупликация в Set: три мутации одного ref-а в одном тике = один прогон рендера.',
      'Порядок флаша: pre-watcher-ы → рендеры (родитель → потомок) → post-watcher-ы. Поэтому watch по умолчанию видит обновлённый DOM.',
      '<code>flush: \'sync\'</code> у watch — обход очереди: срабатывает немедленно (редко нужно).',
      'Статичные vnode-ы хостируются (hoisting) при компиляции: повторный рендер переиспользует их без пересоздания.',
      'Компилятор ставит patchFlags на динамические места — узлы со статичными props-ами диффятся дешевле.',
    ],
    bestPractices: [
      'Доверяйте scheduler: не «дёргайте» DOM вручную синхронно после мутаций.',
      'nextTick — для DOM-измерений/интеграций, не для бизнес-логики.',
      'Стабильные ключи — обязательны для анимаций и сохранения состояния списков.',
      'Пишите шаблоны, дружелюбные к компилятору: статичные атрибуты без привязок — они хостятся и диффятся бесплатно.',
      'Изучите таблицу приоритетов flush — это снимает 90% вопросов «почему watch сработал до/после рендера».',
    ],
    whenToUse:
      'Понимание <strong>VDOM/scheduler</strong> нужно при: отладке таймингов (nextTick vs computed), оптимизации больших деревьев (hoisting, patchFlags), работе с анимациями (измерения после флаша). Это карта внутренностей Vue — редкий код трогает её напрямую, но каждый рендер проходит через неё.',
    alternative: {
      title: 'Fine-grained реактивность без VDOM (Solid-стиль)',
      text: 'Альтернативные фреймворки (Solid, Vue Vapor) связывают реактивность с DOM-узлами напрямую, минуя diff: обновление точечное без vnode-сравнения. Vue движется туда режимом Vapor.',
      code: `// Solid: сигналы обновляют конкретные узлы\nconst [count, setCount] = createSignal(0)\n<p>{count()}</p> // узел подписан напрямую — diff не нужен\n\n// Vue Vapor (экспериментально): шаблон без VDOM\n// ref-ы связываются с узлами при компиляции`,
    },
    advanced: {
      title: 'Compiler-informed Virtual DOM',
      text: 'Vue 3 уникален: компилятор знает шаблон заранее и ставит patchFlags (CLASS, PROPS, TEXT) и hoists статические узлы. Дифф смотрит только на отмеченные места — это гибрид VDOM и fine-grained.',
      code: `// Компилятор генерирует:
const _hoisted_1 = createStaticVNode("...статичный блок...") // hoisted

createVNode("div", { class: unref(cls) }, [
  createTextVNode(toDisplayString(msg), 1 /* TEXT */) // флаг: менять только текст
])

// Дифф не ходит по детям: флаг говорит «только текст изменился»
// На статичных сайтах разница — до 50% меньше работы на рендер`,
    },
  },
})
