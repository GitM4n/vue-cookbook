import { defineExample } from '../types'
import demoCode from './04-watch/Demo.vue?raw'

export default defineExample({
  title: 'watch — реакция на изменения',
  summary: 'Один/много источников, deep, immediate, old/new значения, flush-варианты; когда watch не нужен.',
  demo: () => import('./04-watch/Demo.vue'),
  code: demoCode,
  content: {
    intro:
      '<b>watch</b> запускает колбэк, когда меняется источник: ref, reactive-объект, getter-функция или их массив. В отличие от computed он не возвращает значение — он выполняет <b>эффект</b>: запрос, сохранение, аналитику, синхронизацию. В демо четыре подписки на два источника: одиночный (с old/new), глубокий на reactive, множественный (массив источников) и immediate — срабатывающий сразу при создании.',
    howItWorks:
      'watch создаёт effect, который читает источник и подписывается на его зависимости. Источник-объект без опции <code>deep</code> срабатывает только при <b>замене</b> объекта (ref.value = newObj); с <code>deep: true</code> — на любое вложенное изменение (рекурсивный обход — дорого на больших структурах). Колбэк получает <code>(newValue, oldValue, onCleanup)</code>; третий аргумент регистрирует cleanup, который выполнится перед следующим запуском и при остановке. Возврат функции из <code>watchEffect</code>-подобного колбэка (в Vue 3.5+) — тоже cleanup. Опция <code>immediate: true</code> вызывает колбэк сразу при создании. watch возвращает функцию <code>stop()</code> для ручной остановки.',
    mistakes: [
      {
        title: 'Смотреть reactive-объект без deep или на getter',
        text: 'watch(obj, cb) без deep сработает только при замене самого объекта — вложенные мутации пропустит. Для реактивного источника-объекта deep включается автоматически, но только если передан сам объект, а не результат операции над ним.',
        code: `const state = reactive({ list: [] })\nwatch(() => state, cb)      // ❌ getter возвращает один и тот же объект — не сработает\nwatch(state.list, cb)        // ❌ то же самое для массива внутри reactive`,
        fix: `watch(state, cb)                 // ✅ deep автоматически\nwatch(state.list, cb, { deep: true })\nwatch(() => state.list.length, cb) // ✅ точный источник`,
      },
      {
        title: 'Дублировать производные данные через watch',
        text: 'Если значение можно вывести — это computed. watch + ref = ручная синхронизация с рассинхроном при ошибках.',
        code: `const fullName = ref('')\nwatch([first, last], () => {\n  fullName.value = \`\${first.value} \${last.value}\`\n}) // ❌`,
        fix: `const fullName = computed(() => \`\${first.value} \${last.value}\`) // ✅`,
      },
      {
        title: 'Забывать stop для условных подписок',
        text: 'watch живёт пока живёт scope компонента. Если подписка создаётся динамически (по клику, внутри колбэка) — её нужно останавливать вручную.',
        code: `function onSomeEvent() {\n  watch(query, doSearch) // ❌ накапливается с каждым кликом\n}`,
        fix: `let stop: (() => void) | null = null\nfunction onSomeEvent() {\n  stop?.()\n  stop = watch(query, doSearch)\n}\nonUnmounted(() => stop?.()) // ✅`,
      },
    ],
    nuances: [
      'По умолчанию колбэк выполняется <b>после</b> рендера компонента (flush: \'post\') — DOM уже обновлён. <code>flush: \'pre\'</code> — до рендера, <code>\'sync\'</code> — синхронно (редко).',
      'Массив источников: колбэк получает массив значений; в TS кортеж сохраняет типы.',
      '<code>watch(() => obj.x.y)</code> — точечный источник дешевле deep-обхода; ставьте его первым кандидатом.',
      'С Vue 3.5 из колбэка можно вернуть cleanup-функцию, как в watchEffect.',
      'Первый вызов с immediate получает oldValue = undefined — учитывайте тип.',
      'watch над массивом срабатывает <b>один раз</b> на батч изменений, даже если изменились два источника сразу.',
      'deep watch на большом дереве — рекурсивный обход при каждом триггере: дорогая операция, избегайте.',
    ],
    bestPractices: [
      'Источники — максимально <b>узкие</b>: не весь объект, а конкретное поле или getter.',
      'Запросы и debounce — через onCleanup: отменяйте предыдущий fetch при новом вводе.',
      'Не используйте watch для производных значений — computed.',
      'Одна подписка = одна ответственность; несколько источников в одном watch — только если они логически атомарны.',
      'Динамические подписки всегда сохраняйте stop и отключайте в onUnmounted.',
    ],
    whenToUse:
      '<strong>watch</strong> — для эффектов на изменение: сохранение в localStorage, вызов API, аналитика, синхронизация с внешним стейтом, debounce. Он не нужен для вычисления значений (computed) и для реакций на каждое изменение без источников (watchEffect). Если эффект «смотрит» те же данные, что и рендер — скорее всего, это нужно делать в самом рендере или в computed.',
    alternative: {
      title: 'watchEffect — автоматические зависимости',
      text: 'Если вам не важно oldValue, а просто «на любое изменение X сделать Y» — watchEffect короче: не требует перечисления источников, читает всё, что используется.',
      code: `watchEffect(() => {\n  const q = query.value\n  if (q) fetchResults(q) // зависимости собраны автоматически\n})`,
    },
    advanced: {
      title: 'watch + flush: отложенный запуск',
      text: 'flush: \'pre\' даёт раннюю реакцию до DOM-обновления (удобно для анимаций «до»), flush: \'post\' — после (измерение DOM), \'sync\' — мгновенно (для особых случаев, например, с WebGL).',
      code: `watch(source, async (val) => {\n  // flush: 'post' по умолчанию — DOM уже обновлён\n  await nextTick()\n  // ...гарантированно после рендера\n}, { flush: 'post' })`,
    },
  },
})
