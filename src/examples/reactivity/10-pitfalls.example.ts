import { defineExample } from '../types'
import demoCode from './10-pitfalls/Demo.vue?raw'

export default defineExample({
  title: 'Ловушки реактивности',
  summary: 'Мифы Vue 2 (индексы, новые поля) против реальных ловушек Vue 3: деструктуризация, потеря .value, ref внутри reactive.',
  demo: () => import('./10-pitfalls/Demo.vue'),
  code: demoCode,
  content: {
    intro:
      'Многие «страшилки» про реактивность устарели: в Vue 3 <b>Proxy</b> ловит мутации по индексу и добавление новых свойств — то, что не умел Vue 2. Настоящие ловушки теперь другие: <b>деструктуризация</b> reactive-объекта, <b>потеря .value</b>, неожиданное поведение ref внутри reactive. В демо каждая кнопка проверяет один сценарий — большинство работает как ожидается, ловушка ровно одна.',
    howItWorks:
      'Proxy-ловушки <code>get/set/deleteProperty</code> + <code>ownKeys</code> покрывают <b>все</b> операции над объектом и массивом: list[0] = x, obj.b = 2, push/splice, delete obj.a — всё уведомляет подписчиков. Но Proxy защищает <b>объект</b>, а не переменную: присвоение новой локальной переменной из поля (деструктуризация) уходит мимо прокси. Ref внутри reactive автоматически распаковывается при чтении (state.count — число, а не Ref), поэтому в шаблоне .value не нужен — а в массивах ref-ы не распаковываются.',
    mistakes: [
      {
        title: 'Деструктуризация props или reactive',
        text: 'Классика: const { count } = props — и «реактивность пропала». Значение снято как обычное свойство, подписки нет.',
        code: `const { count } = props // ❌ снимок\nconst { user } = route.params // ❌ для params тоже`,
        fix: `// ✅ оставайтесь на объекте или используйте toRefs\nprops.count\nconst { count } = toRefs(props) // Ref<number>`,
      },
      {
        title: 'Смешивать ref и reactive без понимания',
        text: 'ref внутри reactive распаковывается (state.count — число), но в массивах и Map — нет (list[0] остаётся Ref). Половина кода пишет .value, половина — нет, и ошибки неизбежны.',
        code: `const state = reactive({ count: ref(1) })\nstate.count++ // ✅ распаковано — без .value\nstate.arr.push(ref(5))\nstate.arr[0].value++ // ❌ нужен .value — в массиве не распаковано`,
        fix: `// ✅ единый стиль: ref-ы снаружи, reactive — для plain-объектов\nconst count = ref(1)\nconst arr = ref([1, 2])\narr.value[0]++ // всегда .value у контейнера`,
      },
      {
        title: 'Ожидать реактивности от localStorage/DOM',
        text: 'Внешние источники не отслеживаются: прочитали localStorage в setup — и значение «замерло». Мосты строятся вручную (watch + запись) или VueUse (useLocalStorage).',
        code: `const theme = localStorage.getItem('theme') // ❌ строка, не реактивна`,
        fix: `import { useLocalStorage } from '@vueuse/core'\nconst theme = useLocalStorage('theme', 'dark') // ✅ живой ref`,
      },
    ],
    nuances: [
      '<code>list[0] = x</code> и <code>list.length = 0</code> реактивны в Vue 3 — Proxy покрывает индексные записи и length.',
      'Новые свойства (<code>obj.b = 2</code>) тоже реактивны — Vue 2-ловушка «Vue.set» не нужна.',
      '<b>ref внутри reactive распаковывается</b> только при доступе через объект; в массивах/Map/Set — нет.',
      'Присвоение reactive-объекта в ref тоже распакует: <code>ref(reactiveObj)</code> хранит прокси.',
      'Деструктуризация в <b>props</b> (defineProps&lt;{...}&gt;()) с компилятором Vue 3.5+ сохраняет реактивность для дефолтов, но общее правило — не деструктурировать.',
      'structuredClone/toRaw не сохраняют реактивность — клон всегда «мёртвый» до повторного оборачивания.',
    ],
    bestPractices: [
      'Правило номер один: <b>не деструктурируйте</b> reactive/props без toRefs.',
      'Выберите один стиль (ref-везде или reactive-группы) и следуйте ему по всему проекту.',
      'Не кладите ref внутрь массивов/Map: либо распаковывайте контейнер в ref, либо храните значения напрямую.',
      'Тестируйте «обновляется ли UI» отдельно от «обновились ли данные» — это разные сбои при ошибках реактивности.',
      'Держите источник истины один: синхронизация двух реактивных объектов через watch — источник багов.',
    ],
    whenToUse:
      'Тема-<strong>справочник</strong>: возвращайтесь, когда «данные изменились, а UI нет» или наоборот. Диагностика по шагам: 1) потеряна ли обёртка (деструктуризация/копия); 2) тот ли объект мутируется (raw vs proxy); 3) не shallow ли контейнер; 4) читается ли значение в эффекте вообще (иначе Vue не подписан).',
    alternative: {
      title: 'VueUse для внешних источников',
      text: 'Практически любой внешний источник (localStorage, URL, медиа, интервал) уже обёрнут в composable с живым ref — не стройте мосты вручную.',
      code: `import { useLocalStorage, useUrlSearchParams } from '@vueuse/core'\n\nconst theme = useLocalStorage('theme', 'dark')\nconst params = useUrlSearchParams('history') // ?page=2 → params.page`,
    },
    advanced: {
      title: 'Отладка через onTriggerRef / devtools',
      text: 'Найти «кто дернул» и «кто подписан» помогают devtools-инструменты: Vue Devtools (Inspector → Timeline) показывает trigger-события; в коде — customRef с логированием в get/set.',
      code: `import { customRef } from 'vue'\n\nfunction debugRef(initial: number, name: string) {\n  return customRef((track, trigger) => ({\n    get() { console.log(\`📖 read \${name}\`); track(); return initial },\n    set(v) { console.log(\`✍️ write \${name} =\`, v); initial = v; trigger() },\n  }))\n}\n\n// в консоли видно каждое чтение/запись — легко найти пропущенный триггер`,
    },
  },
})
