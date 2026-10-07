import { defineExample } from '../types'
import demoCode from './05-watch-effect/Demo.vue?raw'

export default defineExample({
  title: 'watchEffect — эффект без источников',
  summary: 'Автоматический сбор зависимостей, immediate по умолчанию, onCleanup; watchEffect vs watch.',
  demo: () => import('./05-watch-effect/Demo.vue'),
  code: demoCode,
  content: {
    intro:
      '<b>watchEffect</b> запускает функцию немедленно и автоматически отслеживает <b>все</b> реактивные значения, которые она читает: любое изменение любого из них повторяет эффект. Это «трекинг без перечисления источников» — удобно, когда источников много или их набор заранее неизвестен. Колбэк получает <code>onCleanup</code> для отмены предыдущего запуска. watchEffect срабатывает <b>до</b> первого рендера (в отличие от watch, который ждёт изменения).',
    howItWorks:
      'Механика та же, что у рендера: функция выполняется в контексте эффекта, каждое чтение .value/поля reactive регистрирует зависимость. После изменения зависимости эффект помечается и ставится в очередь микрозадач (батчинг — несколько изменений = один запуск). В отличие от watch, старое значение недоступно — есть только текущее. Асинхронные части после первого await уже <b>не</b> трекаются — зависимости собираются только в синхронной части до первого await.',
    mistakes: [
      {
        title: 'Асинхронный колбэк теряет зависимости после await',
        text: 'Зависимости собираются синхронно, до первого await. Всё, что читается после, не отслеживается — эффект не сработает на их изменение.',
        code: `watchEffect(async () => {\n  const id = idRef.value // ✅ отслеживается\n  const data = await fetch(url)\n  const extra = other.value // ❌ после await — не отслеживается\n})`,
        fix: `watchEffect(async () => {\n  const id = idRef.value // все чтения до await\n  const { data } = await useFetch(url(id))\n})\n// или используйте watch([idRef], ...) с явными источниками`,
      },
      {
        title: 'Скрытое чтение внутри функций',
        text: 'Не-реактивные чтения (localStorage, Date.now(), Math.random()) делают эффект «слепым» или наоборот — вызывают его в неожиданные моменты, если случайно читается реактивная переменная.',
        code: `watchEffect(() => {\n  localStorage.setItem('last', query.value) // ок\n  console.log(Date.now()) // ок, но бессмысленно в эффекте\n  const random = Math.random() // ❌ не реактивно — эффект не сработает на него\n})`,
        fix: `// держите эффекты чистыми: только реактивные зависимости\nwatchEffect(() => {\n  localStorage.setItem('last', query.value)\n})`,
      },
      {
        title: 'watchEffect вместо computed',
        text: 'Если результат — значение для шаблона, используйте computed: он кешируется и отдаёт значение. watchEffect выполняет эффект без результата.',
        code: `let result: number\nwatchEffect(() => { result = a.value * b.value }) // ❌ хак`,
        fix: `const result = computed(() => a.value * b.value) // ✅`,
      },
    ],
    nuances: [
      'watchEffect выполняется <b>сразу</b> при создании (immediate встроен) и затем на изменение зависимостей.',
      'Трекинг происходит только в синхронной части — после первого await чтения не регистрируются.',
      'Батчинг: несколько одновременных изменений = <b>один</b> запуск эффекта (микротаска-очередь).',
      'Для контроля flush есть варианты: <code>watchPostEffect</code> (после рендера), <code>watchSyncEffect</code> (синхронно).',
      'Функция <code>stop()</code> из возврата watchEffect останавливает эффект; в компоненте это происходит автоматически при unmount.',
      'onCleanup в аргументе колбэка срабатывает перед следующим запуском и при остановке — место для AbortController, clearInterval.',
    ],
    bestPractices: [
      'watchEffect — для эффектов без значения (fetch, сохранение, подписка); для производных значений — computed.',
      'Если нужно oldValue или выборочное срабатывание — watch с явными источниками.',
      'Держите синхронную часть короткой: только сбор зависимостей; тяжёлое — после await или в onCleanup.',
      'Для запросов всегда cleanup: AbortController.abort() в onCleanup.',
      'В компонентах watchEffect на верхнем уровне setup — не внутри условий/циклов.',
    ],
    whenToUse:
      '<strong>watchEffect</strong> хорош для «связанных эффектов»: синхронизация query → fetch, сохранение состояния формы в localStorage, обновление заголовка документа. Когда источников известно немного и нужны old-значения или пропуск первого запуска — берите watch.',
    alternative: {
      title: 'watch с явными источниками',
      text: 'Когда список источников известен и важен контроль (oldValue, точечные зависимости) — watch читается и ведёт себя предсказуемее.',
      code: `watch([query, page], ([q, p], [pq, pp]) => {\n  fetchResults(q, p)\n}, { immediate: true })`,
    },
    advanced: {
      title: 'scopeStop и ручной effectScope',
      text: 'Вне компонента эффекты живут в effectScope: ручной скоуп позволяет запускать/останавливать пачки эффектов (например, для тестов или виджетов вне Vue-приложения).',
      code: `import { effectScope } from 'vue'\n\nconst scope = effectScope()\nscope.run(() => {\n  watchEffect(() => render(query.value))\n  watch(prefs, applyPrefs)\n})\n// позже:\nscope.stop() // остановит ВСЕ эффекты внутри`,
    },
  },
})
