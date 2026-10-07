import { defineExample } from '../types'
import demoCode from './01-dom-events/Demo.vue?raw'

export default defineExample({
  title: 'DOM и события: useEventListener, useElementSize, useIntersectionObserver',
  summary: 'Авто-cleanup подписки, реактивные размеры элемента, видимость в вьюпорте, буфер обмена.',
  demo: () => import('./01-dom-events/Demo.vue'),
  code: demoCode,
  content: {
    intro:
      'Самая частая рутина — подписки на DOM и события — в VueUse решается композаблами со <b>встроенным cleanup</b>: <code>useEventListener</code> (события window/element), <code>useElementSize</code> (реактивные размеры через ResizeObserver), <code>useIntersectionObserver</code> (видимость в вьюпорте), <code>useClipboard</code> (буфер обмена с индикатором copied). В демо все четыре живут одновременно, и ни одна подписка не требует ручной отписки.',
    howItWorks:
      'Все композаблы построены на одной схеме: подписка в <code>onMounted</code>/<code>watchEffect</code>, отписка через <code>onScopeDispose</code>/<code>tryOnUnmounted</code>. Параметры принимаются как <code>MaybeRefOrGetter</code>: можно передать статическое имя события или реактивный ref-элемент — композабл переподписывается сам при смене. useElementSize держит ResizeObserver на элементе и обновляет ref-ы width/height; useIntersectionObserver — IntersectionObserver с опциями threshold/rootMargin.',
    mistakes: [
      {
        title: 'Дублировать вручную то, что уже есть в VueUse',
        text: 'Самописный useEventListener с ошибкой в отписке, забытый ResizeObserver disconnect — типичные утечки. Готовый композабл отлажен на тысячах проектов.',
        code: `onMounted(() => window.addEventListener('resize', onResize))\n// ❌ забыли onUnmounted — утечка`,
        fix: `import { useEventListener } from '@vueuse/core'\nuseEventListener(window, 'resize', onResize) // ✅`,
      },
      {
        title: 'Забыть, что ref-элемент должен быть привязан в шаблоне',
        text: 'useElementSize(null) молча вернёт нули, если забыть ref="box" в шаблоне. Всегда проверяйте связку ref ↔ композабл.',
        code: `const { width } = useElementSize(box)\n<!-- в шаблоне забыли: <div ref="box"> -->`,
        fix: `<div ref="box">…</div> <!-- ✅ композабл подхватит элемент -->`,
      },
      {
        title: 'stop() для «постоянных» наблюдателей вызывают зря',
        text: 'Композаблы останавливаются сами при unmount. Ручной stop нужен только для управления жизненным циклом: «слушать, пока открыта панель».',
        code: `const { stop } = useIntersectionObserver(...)\nonUnmounted(stop) // ❌ избыточно: само остановится`,
        fix: `// ✅ stop для КАЧЕСТВЕННОГО управления:\n// панель закрыта → stop(), открыта → resume()`,
      },
    ],
    nuances: [
      'Первый аргумент useEventListener — <b>цель</b>: window, элемент (ref), или массив целей.',
      'useElementSize даёт и <code>stop()</code>; наблюдатель включается только когда элемент смонтирован.',
      'useClipboard на не-HTTPS не работает (Clipboard API) — есть fallback <code>legacy: true</code> через document.execCommand.',
      'useIntersectionObserver возвращает массив entries — берите [entry] и проверяйте isIntersecting.',
      'Все композаблы SSR-безопасны: на сервере подписки не создаются, ref-ы получают дефолты.',
      'Опции (threshold, immediate, deep) — вторым аргументом; почти у всех есть immediate/once-поведение.',
    ],
    bestPractices: [
      'По умолчанию берите VueUse для стандартных DOM-задач; самописный композабл — только если готовый не подходит.',
      'Реактивные параметры: передавайте ref-ы вместо пересоздания подписок в watch.',
      'Для «ленивых» секций (загрузка при видимости) связка useIntersectionObserver + флаг — базовый паттерн.',
      'Не забывайте про cleanup собственных композаблов — равняйтесь на API VueUse (возврат stop/pause/resume).',
    ],
    whenToUse:
      '<strong>DOM-композаблы</strong> нужны почти в каждом приложении: клавиатурные шорткаты, адаптивные размеры, infinite scroll (intersection), копирование, фокус-менеджмент. Если задача — «подписаться на что-то в DOM и отреагировать», сначала смотрите VueUse.',
    alternative: {
      title: 'Чистый useEventListener внутри своего композабла',
      text: 'Когда нужна одна специфичная подписка, VueUse можно не тянуть целиком: useEventListener из @vueuse/core — точечный импорт, tree-shaking оставит только его.',
      code: `import { useEventListener } from '@vueuse/core'\n// точечный импорт: в бандл попадёт только этот композабл (~1КБ)`,
    },
    advanced: {
      title: 'Комбинирование: lazy-изображения с intersection + размеры',
      text: 'Продвинутый паттерн: элемент подгружает контент при появлении в вьюпорте и подстраивается под контейнер — ленивые галереи, виртуальные панели.',
      code: `const { width } = useElementSize(container)\nconst isVisible = ref(false)\nuseIntersectionObserver(container, ([e]) => (isVisible.value = !!e?.isIntersecting))\n\nconst cols = computed(() => Math.max(1, Math.floor(width.value / 220)))\nconst shouldLoad = computed(() => isVisible.value && cols.value > 0)`,
    },
  },
})
