import { defineExample } from '../types'
import demoCode from './13-multiple-v-model/Demo.vue?raw'
import childCode from './13-multiple-v-model/ChildCard.vue?raw'

const code = `// ============ Demo.vue (родитель) ============\n${demoCode}\n\n// ============ ChildCard.vue (компонент с тремя v-model) ============\n${childCode}`

export default defineExample({
  title: 'Несколько v-model на компоненте',
  summary:
    'v-model:name, v-model:price: один компонент — несколько двусторонних связей; defineModel против явного пропс+эмит.',
  demo: () => import('./13-multiple-v-model/Demo.vue'),
  code,
  content: {
    intro:
      'Начиная с Vue 3 компонент может принимать <b>несколько v-model</b>: <code>v-model:name="n"</code>, <code>v-model:price="p"</code>. Каждый аргумент — независимая пара «проп <code>name</code> + событие <code>update:name</code>». Это идеальный контракт для <em>презентационных</em> компонентов форм: инпут ничего не хранит, а транслирует ввод наружу. В демо родитель владеет всеми тремя значениями, а карточка товара (дочерний компонент) — «глухая» обёртка над пропсами и событиями.',
    howItWorks:
      'В дочернем ChildCard контракт прописан явно: три пропса и три события <code>update:*</code>, а в шаблоне — computed-прокси с get/set, где сеттер эмитит событие. Именно этот шаблон и разворачивает компилятор из <code>v-model:enabled</code> на теге компонента. Современный способ — <b>defineModel</b>: <code>const name = defineModel&lt;string&gt;()</code> возвращает ref-подобный объект, чтение идёт из пропа, запись — автоматически через emit. В демо <code>ChildCard.vue</code> намеренно показывает старый явный стиль, чтобы была видна механика.',
    mistakes: [
      {
        title: 'Копировать проп в локальный ref «для удобства»',
        text: 'Локальная копия отвязывается от родителя: родитель меняет проп — копия молчит. Получается два источника истины и рассинхрон.',
        code: `const props = defineProps<{ name: string }>()\nconst local = ref(props.name) // ❌ замороженное значение на момент монтирования`,
        fix: `const name = defineModel<string>('name') // ✅ живая двусторонняя связь\n// или computed({ get: () => props.name, set: v => emit('update:name', v) })`,
      },
      {
        title: 'Эмитить update: без слушателя на родителе',
        text: 'v-model:price на теге обязателен: событие <code>update:price</code> без пары <code>v-model:price</code> или <code>@update:price</code> просто улетает в пустоту — значение «не сохраняется».',
        code: `<ChildCard :price="p" @update:name="n => ..." /> <!-- ❌ update:price никто не слушает -->`,
        fix: `<ChildCard v-model:price="p" /> <!-- ✅ -->`,
      },
      {
        title: 'Путать регистр аргумента',
        text: 'Аргумент v-model в шаблоне — camelCase-имя пропа: <code>v-model:modelValue</code> и <code>v-model:first-name</code> (DOM-шаблоны) пишутся по-разному; в SFC используйте camelCase и не смешивайте kebab/camel в одном проекте.',
        code: `<!-- ❌ разнобой: -->\n<ChildCard v-model:first-name="f" v-model:lastName="l" />`,
        fix: `<!-- ✅ единый camelCase в SFC -->\n<ChildCard v-model:firstName="f" v-model:lastName="l" />`,
      },
    ],
    nuances: [
      'Аргумент v-model может иметь <b>модификаторы</b>: <code>v-model:price.number</code> приедет в проп <code>priceModifiers</code> — компонент сам решает, как их применить.',
      '<code>defineModel</code> возвращает <b>ref</b>: можно менять .value, передавать дальше в v-model, watch-ить — emit происходит под капотом.',
      'Если родитель не передал значение, defineModel с <code>{ default: ... }</code> даёт локальный фолбэк без emit (в противном случае запись всегда уходит родителю).',
      'Несколько v-model — это не «много modelValue»: безымянный <code>v-model</code> и именованные могут сосуществовать.',
      'Каждая пара «проп+событие» независима: один может быть строкой, другой числом — типизируйте каждый отдельно.',
    ],
    bestPractices: [
      'Формы-компоненты: <b>пропсы вниз, события вверх</b>, никакого локального дублирования состояния.',
      'Для простого инпута — <code>defineModel</code>; для контракта из 3+ полей явные пропсы+эмит читаются лучше.',
      'Именуйте аргументы v-model по домену (name, price, enabled), а не model1/model2.',
      'Держите дочерний компонент чистым: валидацию и нормализацию значений делайте на родителе или в отдельном слое, а не внутри презентационного компонента.',
    ],
    whenToUse:
      '<strong>Несколько v-model</strong> — для переиспользуемых форм-компонентов: CustomInput, DateRangePicker, карта с v-model:lat/v-model:lng, диалог с v-model:open. Если компонент владеет бизнес-логикой и ему не нужна двусторонняя связь — обычные пропсы и семантические события (submit, change) уместнее.',
    alternative: {
      title: 'Один объектный проп + update:object',
      text: 'Вместо пяти v-model можно передавать один реактивный объект и эмитить его целиком. Меньше пропсов, но связь менее явная и мутировать поля объекта внутри ребёнка — нарушение однонаправленности.',
      code: `<!-- родитель -->\n<FilterForm v-model="filter" />\n\n<!-- ребёнок: defineModel<Filter>() и мутируемые поля -->\nconst filter = defineModel<Filter>()\nfilter.value.status = 'open' // мутируем объект родителя`,
    },
    advanced: {
      title: 'defineModel с трансформацией и валидацией',
      text: 'defineModel принимает опции get/set: геттер может подставлять фолбэк, сеттер — нормализовать значение (trim, округление, каст) перед emit. Так компонент остаётся тонким, а логика преобразования — локализованной.',
      code: `const price = defineModel<number>('price', {\n  set(v) {\n    const n = Math.max(0, Math.round(Number(v) || 0))\n    return n\n  },\n})`,
    },
  },
})
