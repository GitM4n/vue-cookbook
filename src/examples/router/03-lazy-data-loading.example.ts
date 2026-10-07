import { defineExample } from '../types'
import demoCode from './03-lazy-data-loading/Demo.vue?raw'

const lazyCode = `// Ленивые маршруты: каждая страница — отдельный чанк
const routes = [
  { path: '/', component: Home }, // статический — в основном бандле
  { path: '/dashboard', component: () => import('./pages/Dashboard.vue') },
  { path: '/admin', component: () => import('./pages/Admin.vue') },
]

// Группировка чанков (webpack); в Vite — manualChunks или /* @vite-ignore */
{ path: '/admin', component: () => import(/* webpackChunkName: "admin" */ './pages/Admin.vue') }`

const dataCode = `// Паттерн 1: данные в onMounted/loading-стейт (самый частый)
// Dashboard.vue
const { data, loading, error } = useFetch('/api/stats')\n\n// Паттерн 2: загрузка до входа через guard (данные готовы к монтированию)
router.beforeEach(async (to) => {
  if (to.name === 'user') {
    to.meta.user = await api.getUser(to.params.id) // блокирует переход
  }
})\n\n// Паттерн 3: resolve в async setup + Suspense
<script setup lang="ts">
const { data, pending, error } = await useFetch(\`/api/user/\${props.id}\`) // топ-левел await
</script>
<!-- родитель оборачивает RouterView в <Suspense> -->`

export default defineExample({
  title: 'Ленивые маршруты и загрузка данных',
  summary: 'Code splitting по страницам, паттерны data loading: mounted / guards / async setup, состояния загрузки и ошибки чанка.',
  demo: () => import('./03-lazy-data-loading/Demo.vue'),
  code: `// ============ Demo.vue (интерактив) ============\n${demoCode}\n\n// ============ ленивые маршруты ============\n${lazyCode}\n\n// ============ паттерны загрузки данных ============\n${dataCode}`,
  content: {
    intro:
      'Два механизма делают SPA быстрым: <b>ленивые маршруты</b> (код страницы грузится только при первом переходе — <code>component: () =&gt; import(...)</code>) и <b>паттерны загрузки данных</b> (когда и как страница получает свои данные). Демо показывает оба состояния: задержку чанка и его сбой, плюс отдельный трекинг «данных страницы». В продакшен-приложении основной бандл держат тонким: на нём — только каркас и главная.',
    howItWorks:
      'Динамический import() на уровне маршрута Vite/webpack выносит в отдельный чанк; роутер резолвит его при совпадении пути (beforeResolve ждёт все ленивые компоненты). Загрузка данных бывает в трёх вариантах: 1) <b>после монтирования</b> — onMounted/сразу в setup: страница появляется мгновенно, данные догружаются с loading-состоянием; 2) <b>до входа</b> — guard или prefetch: переход блокируется, но страница рендерится с готовыми данными; 3) <b>async setup + Suspense</b>: топ-левел await, родитель управляет fallback. Выбор — компромисс между скоростью первого рендера и «прыжками» контента (CLS).',
    mistakes: [
      {
        title: 'Ждать данные, не показывая состояние',
        text: 'Пустой экран без спиннера/скелетона выглядит как зависание. У каждого ленивого перехода должно быть видимое промежуточное состояние.',
        code: `onMounted(async () => {\n  data.value = await api.get() // ❌ 2 секунды пустоты\n})`,
        fix: `const { data, loading } = useFetch()\n<!-- <Spinner v-if="loading" /> / <Skeleton /> -->\n<!-- ✅ пользователь понимает, что происходит -->`,
      },
      {
        title: 'Не обрабатывать сбой загрузки чанка',
        text: 'Обновление приложения, плохая сеть, удалённый деплой — import() отклоняется. Без обработки пользователь застревает с пустой страницей; лечится errorComponent и retry с перезагрузкой.',
        code: `{ path: '/p', component: () => import('./P.vue') } // ❌ упал чанк → белая страница`,
        fix: `{ path: '/p', component: () => import('./P.vue'),\n  // + глобально:\n  router.onError((error, to) => {\n    if (error.message.includes('Failed to fetch dynamically imported module')) {\n      window.location = to.fullPath // полная перезагрузка — новый деплой\n    }\n  }) }`,
      },
      {
        title: 'Блокировать навигацию тяжёлыми guards',
        text: 'Данные «до входа» удваивают ожидание (guard + рендер). Для большинства страниц loading-стейт после монтирования быстрее по воспринимаемой производительности.',
        code: `router.beforeEach(async (to) => {\n  to.meta.data = await heavyFetch() // ❌ каждая навигация ждёт\n})`,
        fix: `// ✅ блокирующая загрузка — только для критичных данных (auth, разрешения)\n// остальное — параллельно с рендером через loading-стейт`,
      },
    ],
    nuances: [
      'Ленивость маршрутов — главный источник code splitting: main-чанк держит только layout и критичный код.',
      'beforeResolve срабатывает после резолва <b>всех</b> ленивых компонентов — там можно ждать данных, зная что код уже есть.',
      '<code>router.onError</code> — глобальная точка обработки сбоев чанков; перезагрузка — штатное решение после нового деплоя.',
      'Suspense даёт один fallback на всё дерево async-setup-компонентов; вложенные Suspense — отдельные fallback-зоны.',
      'Prefetch по hover: <code>&lt;RouterLink :to&gt;</code> + слушатель mouseenter → preload чанка — ускоряет частые переходы.',
      'В Nuxt большая часть этого встроена: страницы ленивы по умолчанию, useFetch/useAsyncData решают data loading с дедупликацией.',
    ],
    bestPractices: [
      'Все маршруты, кроме главной — ленивые; критический путь минимален.',
      'Единый компонент загрузки (спиннер/скелетон) на уровне RouterView-обёртки — единообразие UX.',
      'Критичные данные (auth, разрешения) — до входа; контентные — после монтирования с loading.',
      'Настройте retry/перезагрузку при сбое чанка — обязательно для долго живущих SPA.',
      'Группируйте чанки по фичам, а не по страницам, если страницы делят тяжёлые зависимости.',
    ],
    whenToUse:
      '<strong>Ленивые маршруты</strong> — всегда, кроме главной страницы. <strong>Загрузка после монтирования</strong> — для контентных страниц (списки, дашборды). <strong>Загрузка до входа</strong> — когда без данных рендер бессмысленен или нужны гарантии (роль, существование ресурса). <strong>Suspense</strong> — когда хочется декларативности и единого fallback.',
    alternative: {
      title: 'Prefetch по hover вместо полной ленивости',
      text: 'Компромисс: чанки остаются ленивыми, но предзагружаются при наведении на ссылку — переход почти мгновенный, основной бандл не растёт.',
      code: `function prefetch(to: string) {\n  // из таблицы маршрутов берём loader и вызываем заранее\n  router.resolve(to).matched.forEach(m => m.components?.default?.())\n}\n\n<RouterLink :to="url" @mouseenter="prefetch(url)">`,
    },
    advanced: {
      title: 'Прогрессивная загрузка: preload при idle',
      text: 'requestIdleCallback предзагружает вероятные следующие страницы в свободное время браузера: ленивость сохраняется, но переходы становятся мгновенными.',
      code: `const preloadRoutes = ['/dashboard', '/settings']\n\nrequestIdleCallback(() => {\n  preloadRoutes.forEach(p => router.resolve(p).matched.forEach(m => {\n    Object.values(m.components ?? {}).forEach(c => 'load' in c && c.load?.())\n  }))\n})`,
    },
  },
})
