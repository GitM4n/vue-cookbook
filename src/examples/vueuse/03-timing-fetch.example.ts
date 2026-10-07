import { defineExample } from '../types'
import demoCode from './03-timing-fetch/Demo.vue?raw'

export default defineExample({
  title: 'Тайминг и async: useDebounceFn, useThrottleFn, useIntervalFn, useAsyncState',
  summary: 'Дебаунс/троттл с авто-cleanup, управляемые интервалы и таймауты, состояние async-операции.',
  demo: () => import('./03-timing-fetch/Demo.vue'),
  code: demoCode,
  content: {
    intro:
      'Таймеры и частые события — второй по частоте источник утечек после слушателей. VueUse даёт управляемые обёртки: <code>useDebounceFn</code> (вызов после паузы), <code>useThrottleFn</code> (не чаще N мс), <code>useIntervalFn</code>/<code>useTimeoutFn</code> (с pause/resume/stop и авто-очисткой при unmount), <code>useAsyncState</code> (данные + isLoading из одного вызова). В демо все паттерны видны в живом логе.',
    howItWorks:
      'useDebounceFn/useThrottleFn возвращают <b>обёрнутую функцию</b>: вызовы проходят через окно debounce/throttle внутри. useIntervalFn/useTimeoutFn стартуют по immediate-опции и возвращают pause/resume/stop; при unmount компонента таймеры очищаются автоматически (onScopeDispose). useAsyncState исполняет промис и раздаёт <code>state</code>, <code>isLoading</code>, <code>error</code>, <code>execute</code> для повторного запуска — типовой шаблон «данные + статус» без ручных ref-ов.',
    mistakes: [
      {
        title: 'Дебаунс там, где нужен троттл (и наоборот)',
        text: 'Debounce ждёт паузу: для скролла/драга пользователь получит ответ только когда остановится — UX «залипает». Throttle даёт регулярные обновления. Поиск — debounce; скролл/resize/mousemove — throttle.',
        code: `const onScroll = useDebounceFn(handle, 300) // ❌ логи «догоняют» после остановки`,
        fix: `const onScroll = useThrottleFn(handle, 100) // ✅ плавные обновления`,
      },
      {
        title: 'setInterval без очистки',
        text: 'Голый setInterval в компоненте переживает unmount и продолжает тикать «в пустоту», накапливаясь с каждым монтированием страницы.',
        code: `onMounted(() => setInterval(poll, 5000)) // ❌`,
        fix: `import { useIntervalFn } from '@vueuse/core'\nconst { pause, resume } = useIntervalFn(poll, 5000) // ✅ само очистится`,
      },
      {
        title: 'Гонка async-состояния при быстрых повторных вызовах',
        text: 'execute() дважды — два промиса; отработавший последним «побеждает» даже если он был запущен раньше. Для отменяемых запросов используйте AbortController внутри.',
        code: `execute(); execute() // ❌ два параллельных запроса`,
        fix: `// ✅ guard внутри fetchFn:\nlet ctrl: AbortController | null = null\nconst fetchFn = (url: string) => {\n  ctrl?.abort()\n  ctrl = new AbortController()\n  return fetch(url, { signal: ctrl.signal })\n}`,
      },
    ],
    nuances: [
      'Обе обёртки возвращают функцию с методом <code>.cancel()</code> (в VueUse 10+) — принудительная отмена отложенного вызова.',
      'useIntervalFn опция <code>immediateCallback</code> вызывает обработчик сразу при resume, не дожидаясь первого тика.',
      'useAsyncState: <code>immediate: false</code> откладывает первый запуск — вызывайте execute() сами (по кнопке, по условию).',
      'Дебаунс с <code>{ maxWait }</code> не даст отложенному вызову «застрять» при непрерывном потоке событий.',
      'useTimeoutFn/useIntervalFn принимают reactive-интервал: смените ref — период обновится.',
      'Все таймерные композаблы SSR-безопасны: на сервере не запускаются.',
    ],
    bestPractices: [
      'Поиск/автосохранение/валидация — <b>debounce</b>; анимации/скролл/resize/mousemove — <b>throttle</b>.',
      'Поллинг — только useIntervalFn: pause при document.hidden (useDocumentVisibility) — тривиально.',
      'useAsyncState для простых сценариев; сложные кеши — TanStack Query.',
      'Не debounce-ите действия пользователя с финансовыми последствиями (клики оплаты) — там явные busy-флаги.',
    ],
    whenToUse:
      '<strong>Тайминг-композаблы</strong> нужны везде, где есть частые события или фоновая периодика: поиск, бесконечные ленты, поллинг статусов, автосейв, «долго не активен — разлогинить». Используйте их вместо голых setTimeout/setInterval всегда — cleanup бесплатен.',
    alternative: {
      title: 'watchDebounced / watchThrottled из VueUse',
      text: 'Если источник — реактивное состояние, а не DOM-событие, проще следить за ref с встроенным debounce/throttle, чем оборачивать обработчик.',
      code: `import { watchDebounced } from '@vueuse/core'\n\nwatchDebounced(query, (q) => search(q), { debounce: 400 })\n// вместо ручного useDebounceFn внутри watch`,
    },
    advanced: {
      title: 'Поллинг с паузой на скрытой вкладке',
      text: 'Комбинация useIntervalFn + useDocumentVisibility: фоновая вкладка не тратит запросы, при возврате — мгновенное обновление. Стандарт для дашбордов и мессенджеров.',
      code: `import { useIntervalFn, useDocumentVisibility } from '@vueuse/core'\n\nconst visibility = useDocumentVisibility()\nconst { pause, resume } = useIntervalFn(poll, 5000)\n\nwatch(visibility, (v) => {\n  v === 'visible' ? (poll(), resume()) : pause()\n})`,
    },
  },
})
