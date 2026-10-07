import { defineExample } from '../types'
import demoCode from './03-computed/Demo.vue?raw'

export default defineExample({
  title: 'computed — вычисляемые значения',
  summary: 'Кешируемые производные значения: get/set, почему лучше методов, dirty-флаг и инвалидация.',
  demo: () => import('./03-computed/Demo.vue'),
  code: demoCode,
  content: {
    intro:
      '<b>computed</b> создаёт значение, вычисляемое из других реактивных источников, и <b>кеширует</b> его: пересчёт только когда изменилась хотя бы одна зависимость. Это главное отличие от обычной функции в шаблоне, которая выполняется на каждый ререндер. В демо subtotal и total — цепочка computed; «прочитать tracked» показывает кеш в действии: счётчик пересчётов растёт только при изменении цены или количества.',
    howItWorks:
      'computed — это special effect с флагом <b>dirty</b>. При изменении зависимости computed не пересчитывается сразу, а лишь помечается «грязным». Пересчёт происходит лениво — когда значение кто-то читает (шаблон, другой computed, watch). Если зависимости не менялись, чтение возвращает закешированное значение — именно поэтому счётчик evalCount в демо не растёт. Записываемый computed имеет и <b>set</b>: запись туда прокидывается в вашу логику (в демо — uppercase + trim промокода). Цепочки computed строят граф зависимостей: total зависит от subtotal, subtotal — от price и qty.',
    mistakes: [
      {
        title: 'Побочные эффекты в computed',
        text: 'computed должен быть чистой функцией: никаких запросов, DOM-мутаций, записи в другие ref. Vue может пересчитать его больше раз, чем вы ожидаете (или вообще не пересчитать, если значение не читается).',
        code: `const fullName = computed(() => {\n  saveToServer(first.value, last.value) // ❌ сайд-эффект\n  return \`\${first.value} \${last.value}\`\n})`,
        fix: `const fullName = computed(() => \`\${first.value} \${last.value}\`)\n\n// ✅ эффект — отдельным watch:\nwatch(fullName, (v) => saveToServer(v))`,
      },
      {
        title: 'Метод вместо computed для «дорогих» вычислений',
        text: 'Функция в шаблоне вызывается на <b>каждый</b> ререндер (и для каждого элемента списка). computed — один раз на изменение зависимостей.',
        code: `function filtered() { return items.value.filter(isExpensive) } // ❌ на каждый рендер\n<li v-for="i in filtered()">`,
        fix: `const filtered = computed(() => items.value.filter(isExpensive)) // ✅ кеш\n<li v-for="i in filtered" :key="i.id">`,
      },
      {
        title: 'Возвращать из computed не-реактивные значения',
        text: 'computed обязан читать реактивные источники. Если внутри обратились к обычной переменной — зависимостей нет, значение «застынет» и не будет обновляться.',
        code: `let external = 1\nconst derived = computed(() => external * 2) // ❌ external не реактивен\nexternal = 5 // derived не изменится`,
        fix: `const external = ref(1)\nconst derived = computed(() => external.value * 2) // ✅`,
      },
    ],
    nuances: [
      'Кеш computed <b>глубокий по умолчанию</b>: возврат нового объекта каждый раз ломает равенство (сравнивается ссылка) — для таких случаев есть опции <code>{ get: ..., set: ... }</code> и shallow-варианты.',
      'computed от <b>set-состояния</b> (writable) — двухсторонний мост: часто используется для v-model поверх пропса.',
      'Если computed зависит от большого числа источников — это нормально; граф зависимостей обрабатывается автоматически.',
      '<code>computed(() => ...)</code> синхронный; для асинхронных значений — watchEffect + ref или useAsyncState из VueUse.',
      'Чтение computed вне эффектного контекста не регистрирует зависимости (значение всё равно закешируется).',
      'computed может зависеть и от другого computed — цепочка рассинхронизируется только по leaf-узлу.',
    ],
    bestPractices: [
      'Любое «производное значение» в шаблоне — <b>computed</b>, а не метод: кеш + декларативность.',
      'Держите computed чистыми: только вычисления; эффекты — в watch/watchEffect.',
      'Сложные вычисления разбивайте на цепочку мелких computed — читается и отлаживается проще.',
      'Именуйте по результату (total, filteredUsers), а не по процессу (calculateTotal).',
      'Для вычислений над списками фильтруйте/сортируйте в computed, а не v-for + v-if.',
    ],
    whenToUse:
      '<strong>computed</strong> — для всего, что выводится из состояния: форматирование, агрегации, фильтрация, сортировка, валидационные флаги, производные props. Он же — правильный способ «адаптировать» значение в шаблоне, вместо вызова метода на каждый рендер.',
    alternative: {
      title: 'Простое выражение в шаблоне',
      text: 'Для тривиальных одношаговых выражений computed избыточен — инлайн-выражение читается короче.',
      code: `<!-- для простых случаев этого достаточно -->\n<span>{{ count * 2 }}</span>\n<span>{{ name.trim().toUpperCase() }}</span>`,
    },
    advanced: {
      title: 'Writable computed как контроллер',
      text: 'Записываемый computed — не только v-model-мост: через set можно писать в store, нормализовать, агрегировать несколько источников в один.',
      code: `const fullName = computed<string>({\n  get: () => \`\${user.value.first} \${user.value.last}\`,\n  set: (v: string) => {\n    const [first, ...rest] = v.split(' ')\n    user.value.first = first\n    user.value.last = rest.join(' ')\n  },\n})`,
    },
  },
})
