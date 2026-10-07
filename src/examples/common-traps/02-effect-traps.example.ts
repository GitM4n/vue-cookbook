import { defineExample } from '../types'

export default defineExample({
  title: 'Ловушки эффектов, watch и утечек',
  summary: 'watch вместо computed, лишние watcher-ы, deep-watch, утечки слушателей, async cleanup, злоупотребление nextTick.',
  code: `// Каталог ❌ → ✅ по эффектам: watch, слушатели, таймеры, async`,
  content: {
    intro:
      'Вторая группа ловушек — <b>эффекты и их время жизни</b>: watch там, где хватит computed, лишние watcher-ы, deep-обход больших деревьев, слушатели и таймеры без отписки, незакрытые async-операции, nextTick как средство синхронизации. Все они имеют один корень: эффект создан вручную там, где декларативный механизм справился бы сам, или не очищен там, где должен.',
    howItWorks:
      'computed — <b>значение</b> с кешем и авто-зависимостями; watch — <b>эффект</b> с ручными источниками; слушатели/таймеры — внешние ресурсы, живущие до явной отписки. Правила: производное значение → computed; реакция на изменение → watch (с узкими источниками); любой ресурс, созданный в mounted/эффекте, → симметричный cleanup. VueUse-композаблы закрывают большинство типовых сценариев с встроенным cleanup.',
    mistakes: [
      {
        title: 'watch там, где хватит computed',
        text: 'Производные данные через watch + ref = ручная синхронизация с рассинхроном и лишними прогонами.',
        code: `const fullName = ref('')\nwatch([first, last], () => {\n  fullName.value = first.value + ' ' + last.value\n}) // ❌`,
        fix: `const fullName = computed(() => \`\${first.value} \${last.value}\`) // ✅`,
      },
      {
        title: 'watch без источника-вас-то-смотрит (объект целиком)',
        text: 'watch(объект, cb) без deep не сработает на вложенные мутации; с deep — рекурсивный обход на каждый триггер. Дешевле точечный getter.',
        code: `watch(state, cb) // может не сработать как ждёте\nwatch(state, cb, { deep: true }) // ❌ дорого на больших деревьях`,
        fix: `watch(() => state.list.length, cb) // ✅ точечный источник`,
      },
      {
        title: 'Слушатели/таймеры без отписки',
        text: 'addEventListener и setInterval переживают компонент: утечка памяти и призрачные обновления несуществующего UI.',
        code: `onMounted(() => {\n  window.addEventListener('resize', onResize)\n  setInterval(poll, 5000)\n}) // ❌`,
        fix: `useEventListener(window, 'resize', onResize)\nuseIntervalFn(poll, 5000) // ✅ авто-cleanup`,
      },
      {
        title: 'Async без отмены: гонка запросов',
        text: 'Медленный старый запрос приходит после быстрого нового — затирает свежие данные. AbortController в cleanup обязателен.',
        code: `watch(query, q => {\n  fetch('/api?q=' + q).then(r => results.value = r) // ❌ гонка\n})`,
        fix: `watch(query, async (q, old, onCleanup) => {\n  const ctrl = new AbortController()\n  onCleanup(() => ctrl.abort())\n  const r = await fetch('/api?q=' + q, { signal: ctrl.signal })\n  results.value = await r.json() // ✅ отменённый не перезапишет\n})`,
      },
      {
        title: 'nextTick вместо нормального потока данных',
        text: 'nextTick — мост к DOM, не инструмент бизнес-логики. Цепочки «сделай → подожди тик → сделай» рассыпаются при любом рефакторинге.',
        code: `save()\nawait nextTick()\nupdateBadge() // ❌ связь через тайминги рендера`,
        fix: `await save()\nupdateBadge() // ✅ связь через данные`,
      },
      {
        title: 'Глобальные подписки в композабле-синглтоне',
        text: 'Модульный ref + window-слушатель на уровне модуля = подписка живёт вечно и никогда не чистится (не привязана к компоненту).',
        code: `// модуль:\nwindow.addEventListener('online', sync) // ❌ никогда не снимется`,
        fix: `// ✅ подписка внутри scope: компонент или effectScope\nexport function useOnline() {\n  const online = ref(navigator.onLine)\n  useEventListener(window, 'online', () => (online.value = true))\n  return online\n}`,
      },
    ],
    nuances: [
      'watch с <code>immediate: true</code> — частая замена «watch + ручной первый вызов»; watchEffect — immediate по природе.',
      'Cleanup в watch/watchEffect (onCleanup) выполняется <b>перед</b> следующим прогоном — точка для abort/clearTimeout.',
      'deep: true на массиве объектов — обход всего дерева при каждом триггере; для больших данных — shallowRef + явные замены.',
      'Слушатели, добавленные <b>вне</b> компонента (модуль, плагин), не чистятся unmount-ом — для них нужен ручной effectScope.',
      'Двойной прогон эффекта в dev-режиме (StrictMode-подобное поведение некоторых обёрток тестов) — не баг: эффекы должны быть идемпотентны.',
      'Лишний watch часто скрывает пропущенный computed: если эффект только пишет данные — почти всегда нужен computed.',
    ],
    bestPractices: [
      'Значение → computed; действие → watch; всё внешнее → VueUse/композаблы с cleanup.',
      'Источники watch — максимально узкие getter-ы.',
      'Каждый fetch в эффекте — с AbortController через onCleanup.',
      'Ноль слушателей/таймеров вне scope-ов.',
      'Код-ревью правило: увидел watch, который пишет в ref, — спроси «почему не computed?»',
    ],
    whenToUse:
      'Возвращайтесь к каталогу, когда: эффект «срабатывает не тогда», память растёт со временем (утечки), данные «откатываются» старым ответом, логика разваливается на nextTick-цепочки. Каждому симптому соответствует пункт каталога.',
    alternative: {
      title: 'VueUse как «правильные» эффекты по умолчанию',
      text: 'Практически любой ручной эффект (события, таймеры, интервалы, наблюдатели) уже существует в VueUse с корректным cleanup и API управления.',
      code: `useEventListener, useIntervalFn, useTimeoutFn,\nuseResizeObserver, useIntersectionObserver,\nuseRafFn, useDebounceFn, useThrottleFn\n// ручной addEventListener — последний вариант`,
    },
    advanced: {
      title: "effectScope и tryOnScopeDispose для не-setup контекстов",
      text: "Если эффект создаётся вне setup (очередь задач, корень мини-приложения), берите владение явно: effectScope для групп и tryOnScopeDispose для graceful-деградации, когда композабл вызван без владеющего компонента.",
      code: `import { effectScope, tryOnScopeDispose } from 'vue'

const scope = effectScope()
scope.run(() => { watch(src, handler); listen(target, fn) })
scope.stop() // один вызов глушит всё внутри

// в композабле: явная деградация вместо утечки
tryOnScopeDispose(stopListening)`,
    },
  },
})
