import { defineExample } from '../types'
import demoCode from './01-render-functions/Demo.vue?raw'

const hCode = `// Полный пример: Table рендерит произвольные столбцы
import { h, defineComponent, type PropType } from 'vue'

interface Column<T> {
  key: keyof T
  header: string
  render?: (row: T) => ReturnType<typeof h>
}

export const DataTable = defineComponent({
  props: {
    columns: { type: Array as PropType<Column<any>[]>, required: true },
    rows: { type: Array as PropType<any[]>, required: true },
  },
  setup(props) {
    return () =>
      h('table', { class: 'table' }, [
        h('thead', [
          h('tr', props.columns.map(c => h('th', c.header))),
        ]),
        h('tbody', props.rows.map(row =>
          h('tr', { key: row.id }, props.columns.map(c =>
            h('td', c.render ? c.render(row) : String(row[c.key]))
          ))
        )),
      ])
  },
})

// JSX-версия того же (файл .tsx):
// setup(props) {
//   return () => (
//     <table class="table">
//       <thead><tr>{props.columns.map(c => <th>{c.header}</th>)}</tr></thead>
//       <tbody>
//         {props.rows.map(row => (
//           <tr key={row.id}>
//             {props.columns.map(c => <td>{c.render ? c.render(row) : String(row[c.key])}</td>)}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   )
// }`

export default defineExample({
  title: 'Render-функции, h() и JSX',
  summary: 'Vnode-дерево вручную: h(type, props, children), когда шаблон тесен, JSX как альтернативный синтаксис.',
  demo: () => import('./01-render-functions/Demo.vue'),
  code: `// ============ Demo.vue (интерактив) ============\n${demoCode}\n\n// ============ DataTable через h() и через JSX ============\n${hCode}`,
  content: {
    intro:
      'Каждый шаблон компилируется в <b>render-функцию</b> — код, создающий vnode-дерево через <code>h(type, props, children)</code>. Обычно компилятор делает это за вас, но функцию можно написать и <b>вручную</b>: когда структура дерева заранее неизвестна (рекурсивные компоненты, динамические таблицы, слоты-фабрики) или нужна максимальная производительность. <b>JSX</b> — тот же h() с приятным синтаксисом (файлы .tsx). В демо — компонент на render-функции и полиморфный рендер с выбором тега в рантайме.',
    howItWorks:
      'h() создаёт <b>vnode</b> — JS-описание будущего DOM-узла: тип (тег/компонент), props, children. Render-функция компонента возвращает дерево vnode; Vue диффит его с предыдущим и патчит DOM. Ключи работают так же (key обязателен для списков). Пропсы в h() — объект; class и style поддерживают массивы/объекты; обработчики — префикс on (onClick). Children: строка, vnode, массив или объект слотов { default: () => ... } для компонентов. JSX — синтаксический сахар: <div class="a">{x}</div> компилируется в h(\'div\', { class: \'a\' }, x).',
    mistakes: [
      {
        title: 'Создавать vnode вне render-функции',
        text: 'Vnode, созданный один раз в setup, «застывает»: дифф увидит то же дерево и не обновит DOM. Всё создание — внутри возвращаемой функции.',
        code: `setup() {\n  const v = h('div', state.value) // ❌ создан один раз\n  return () => v\n}`,
        fix: `setup() {\n  return () => h('div', state.value) // ✅ каждый рендер новый vnode\n}`,
      },
      {
        title: 'Забывать key в списках vnode',
        text: 'Как и в шаблоне: без ключей дифф работает по индексам — перестановки ломают состояние дочерних компонентов.',
        code: `items.map(i => h('li', i.label)) // ❌`,
        fix: `items.map(i => h('li', { key: i.id }, i.label)) // ✅`,
      },
      {
        title: 'Использовать render-функции там, где шаблон проще',
        text: 'Render-функции многословны: пропсы-объекты, ручные обработчики, нет v-model/v-if сахара. 95% UI — шаблон; h() — для особых случаев.',
        code: `// ❌ простая карточка через h():\n() => h('div', { class: 'card' }, [h('b', title), h('p', text)])`,
        fix: `<div class="card"><b>{{ title }}</b><p>{{ text }}</p></div> <!-- ✅ -->`,
      },
    ],
    nuances: [
      'Первый аргумент h() — строка (тег), объект компонента, или функция (функциональный компонент).',
      'События: <code>onClick</code>, <code>onUpdate:modelValue</code> — camelCase после on.',
      'Слоты компонента передаются третьим аргументом-объектом: <code>{ default: () =&gt; [...], header: () =&gt; ... }</code>.',
      'Функциональные компоненты — просто функции без setup: <code>(props, { slots, emit }) =&gt; h(...)</code> — лёгкие обёртки без экземпляра.',
      'props в h() для компонентов включает и attrs, и emits-обработчики — наследование $attrs управляется вручную.',
      'Шаблонный компилятор использует <b>оптимизированные</b> вызовы (createVNode + patchFlags) — ручной h() чуть медленнее на больших деревьях.',
    ],
    bestPractices: [
      'Пишите render-функции в <b>.tsx</b> — JSX читается и типизируется лучше вложенных h().',
      'Выделяйте компонент-рендерер в отдельный файл с defineComponent и PropType-типами.',
      'Динамические структуры (table с render-колонками, рекурсивные деревья) — естественная зона h().',
      'Не забывайте key, и держите vnode-создание внутри render-функции.',
      'Библиотеки UI почти целиком написаны на render-функциях — там стандартизация важнее краткости шаблона.',
    ],
    whenToUse:
      '<strong>h()/JSX</strong> нужен для: компонент-рендереров с произвольной конфигурацией (таблицы, деревья, диаграммы), рекурсивных структур, библиотечных компонентов, динамического выбора тега/компонента. Шаблон остаётся выбором по умолчанию для всего остального.',
    alternative: {
      title: 'Dynamic components + слоты вместо рендер-функции',
      text: 'Многих «динамик» шаблон достигает без h(): component :is для выбора, scoped slots для кастомизации ячеек.',
      code: `<DataTable :rows="rows" :columns="cols">\n  <template #cell-price="{ row }">\n    <b>{{ formatPrice(row.price) }}</b>\n  </template>\n</DataTable>\n<!-- ячейки кастомизируются слотами — h() не понадобился -->`,
    },
    advanced: {
      title: 'Headless через render-функцию и слоты-фабрики',
      text: 'Мощный паттерн: компонент предоставляет логику, а разметку строит вызывающий через scoped slot, получающий render-параметры. Так устроены TanStack Table / vue-virtual-scroller обёртки.',
      code: `// useListProvider возвращает фабрику vnode через слот\nexport const ListProvider = defineComponent({\n  props: { items: Array as PropType<Item[]> },\n  setup(props, { slots }) {\n    const { hoveredId, setHovered } = useHover()\n    return () => slots.default?.({\n      items: props.items,\n      hoveredId: hoveredId.value,\n      setHovered,\n    })\n  },\n})\n\n// потребитель:\n// <ListProvider :items="rows" v-slot="{ items, hoveredId, setHovered }">\n//   <div v-for="i in items" @mouseenter="setHovered(i.id)">…</div>\n// </ListProvider>`,
    },
  },
})
