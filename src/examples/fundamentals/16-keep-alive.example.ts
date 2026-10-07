import { defineExample } from '../types'
import demoCode from './16-keep-alive/Demo.vue?raw'

export default defineExample({
  title: 'KeepAlive: кеширование компонентов',
  summary:
    '<KeepAlive> сохраняет состояние при переключении вкладок; include/exclude/max; хуки onActivated/onDeactivated.',
  demo: () => import('./16-keep-alive/Demo.vue'),
  code: demoCode,
  content: {
    intro:
      '<b>&lt;KeepAlive&gt;</b> — встроенный абстрактный компонент, который кеширует дочерние компоненты при переключении. Вместо размонтирования экземпляр <b>деактивируется</b> и прячется в кеш; возврат = активация без пересоздания. Состояние, введённый текст, скролл, подписки — всё переживает переключение. В демо счётчик и черновик выживают, а «Одноразовая» вкладка — нет, пока её имени нет в <code>include</code>.',
    howItWorks:
      'KeepAlive оборачивает динамический компонент и при замене вместо unmount кладёт vnode и его component instance в Map-кеш по ключу (имени компонента). На выходе — хуки <b>onActivated</b>/<b>onDeactivated</b> вместо onMounted/onUnmounted (но onMounted тоже сработает при первом показе). Управление кешем: <code>include</code> — список имён для кеширования, <code>exclude</code> — наоборот, <code>max</code> — LRU-лимит (старые записи вытесняются и размонтируются по-настоящему). С атрибутом <code>include</code> в демо «Одноразовая» вкладка не попадает в кеш и честно пересоздаётся.',
    mistakes: [
      {
        title: 'Обернуть всё подряд в KeepAlive',
        text: 'Кеш держит DOM и экземпляры в памяти. Десятки тяжёлых вкладок = растущий бюджет памяти и застывшие подписки. Кешируйте то, что дорого пересоздавать, остальное — честный unmount.',
        code: `<KeepAlive><component :is="anyPage" /></KeepAlive> <!-- ❌ кешируем всё -->`,
        fix: `<KeepAlive :include="['DashboardTab', 'EditorTab']" :max="5">\n  <component :is="anyPage" />\n</KeepAlive> <!-- ✅ выборочно + LRU-лимит -->`,
      },
      {
        title: 'Делать подписки в onActivated без симметричной очистки',
        text: 'onActivated срабатывает при каждом возврате вкладки. Если подписываться там без отписки в onDeactivated — накапливаются дубли слушателей.',
        code: `onActivated(() => {\n  window.addEventListener('resize', onResize) // ❌ дубли при каждом возврате\n})`,
        fix: `onActivated(() => window.addEventListener('resize', onResize))\nonDeactivated(() => window.removeEventListener('resize', onResize)) // ✅`,
        fixText: 'Либо подписывайтесь один раз в onMounted и используйте флаг «активен ли сейчас».',
      },
      {
        title: 'Ждать onUnmounted внутри KeepAlive',
        text: 'Пока компонент в кеше, unmounted не происходит — cleanup не выполняется. Логику «когда вкладка ушла с экрана» пишут в onDeactivated.',
        code: `onUnmounted(() => stopPolling()) // ❌ не вызовется при уходе в кеш`,
        fix: `onDeactivated(() => stopPolling()) // ✅\nonActivated(() => startPolling())`,
      },
    ],
    nuances: [
      'KeepAlive работает только с <b>одним</b> дочерним vnode: обёртка над <code>&lt;component :is&gt;</code> или v-if-веткой.',
      'Идентификация в кеше — по <code>name</code> компонента (или key). Безымянные компоненты кешируются по внутреннему ключу.',
      'При <code>max</code> вытеснение — LRU: давно неактивированные компоненты размонтируются полностью.',
      'Внутри KeepAlive порядок хуков при первом монтировании: onMounted → onActivated; при возврате — только onActivated.',
      'KeepAlive не работает на <b>SSR</b> (на сервере рендерится просто дочерний компонент) — не закладывайте в него серверную логику.',
      'Роутер-view + KeepAlive — штатная связка для кеширования страниц-списков при переходе «список → деталь → назад».',
    ],
    bestPractices: [
      'Всегда указывайте <code>include</code> или <code>max</code> — контролируйте память явно.',
      'Логику «проснулся/уснул» выражайте парой <b>onActivated/onDeactivated</b>, а не угадыванием в onMounted.',
      'Для страниц-списков в связке с роутером: refresh-логику данных вешайте на onActivated, а не только onMounted (кеш пропускает повторный mounted).',
      'Кешируйте компоненты с <b>дорогим восстановлением</b> (большие формы, canvas, фильтры), а не с дешёвым.',
    ],
    whenToUse:
      '<strong>KeepAlive</strong> нужен для табов с черновиками, фильтров каталога при переходе в карточку товара, шагов мастера, где возврат не должен терять прогресс. Не нужен для «одноразовых» экранов (детальный просмотр) и для почти-статичных страниц, где пересоздание бесплатно.',
    alternative: {
      title: 'Скрытие вместо кеширования: v-show',
      text: 'Если вкладок мало (2–3) и они лёгкие, можно рендерить все и прятать display:none — состояние сохранится без KeepAlive, но DOM и подписки живут всегда.',
      code: `<Stats v-show="tab === 'stats'" />\n<Profile v-show="tab === 'profile'" />`,
    },
    advanced: {
      title: 'Кеширование роутер-страниц с include по route.name',
      text: 'В связке с Vue Router управляют кешем декларативно: имена кешируемых страниц задают в meta маршрутов, а include собирают динамически.',
      code: `<!-- AppLayout.vue -->\n<RouterView v-slot="{ Component }">\n  <KeepAlive :include="cachedViews">\n    <component :is="Component" :key="$route.fullPath" />\n  </KeepAlive>\n</RouterView>\n\n// cachedViews = routes.filter(r => r.meta.keepAlive).map(r => r.name)`,
    },
  },
})
