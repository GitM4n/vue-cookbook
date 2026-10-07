import { defineExample } from '../types'
import demoCode from './03-routing-middleware/Demo.vue?raw'

const routingCode = `pages/
├── index.vue              →  /
├── about.vue              →  /about
├── users/
│   ├── index.vue          →  /users
│   └── [id].vue           →  /users/:id
├── posts/
│   ├── new.vue            →  /posts/new      (статичный ПЕРЕД [id])
│   └── [id].vue           →  /posts/:id
└── files/
    └── [...slug].vue      →  /files/**       (catch-all)

layouts/default.vue   →  <slot /> обёртка для всех страниц
pages/users/[id].vue  →  defineProps<{ id: string }>() — params как пропс`

const middlewareCode = `// middleware/auth.ts (route middleware)
export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore() // или useCookie('token')
  if (!auth.isLoggedIn) {
    return navigateTo('/login', { redirectCode: 302, replace: true })
      // + query redirect для возврата
  }
})

// подключение: в definePageMeta страницы
<script setup>
definePageMeta({ middleware: 'auth' })
</script>

// или глобально: middleware/auth.global.ts — на каждый переход

// server middleware (server/middleware/) — другая сущность:
// выполняется на СЕРВЕРЕ для всех запросов, до маршрутизации
// (логи, добавление заголовков, SSR-контекст)`

export default defineExample({
  title: 'Файловый роутинг и middleware',
  summary: 'pages/ → маршруты, [id] и [...slug], layouts, definePageMeta, route middleware vs server middleware.',
  demo: () => import('./03-routing-middleware/Demo.vue'),
  code: `// ============ Demo.vue (интерактив) ============\n${demoCode}\n\n// ============ структура pages/ ============\n${routingCode}\n\n// ============ middleware ============\n${middlewareCode}`,
  content: {
    intro:
      'Nuxt генерирует маршруты из <b>файловой структуры</b> папки <code>pages/</code>: файл — страница, <code>[id].vue</code> — динамический сегмент, <code>[...slug].vue</code> — catch-all, <code>index.vue</code> — корень. <b>Middleware</b> — функции между переходами: route middleware (аналог guards) объявляется в <code>definePageMeta</code> или глобально (<code>.global.ts</code>). В демо — интерактивное дерево маршрутов и цепочка middleware с проверкой auth.',
    howItWorks:
      'Nuxt сканирует pages/ при сборке и строит таблицу маршрутов (vue-router под капотом). Приоритет: статичный сегмент > динамический ([id]) > catch-all ([...slug]) — поэтому /posts/new выигрывает у /posts/:id. Параметры приходят в страницу пропсами (defineProps). Route middleware работает как guard: возвращает navigateTo/abortNavigation или ничего. Отличать от <b>server middleware</b>: тот живёт в server/middleware/ и выполняется до SSR-маршрутизации для всех запросов (заголовки, логи, контекст).',
    mistakes: [
      {
        title: 'Динамический сегмент «съедает» статичный',
        text: 'Если [id].vue объявлен, а new.vue создан позже/не туда — /posts/new открывает страницу с id="new". Статика должна существовать на том уровне, приоритет она получит автоматически.',
        code: `pages/posts/[id].vue   → /posts/new рендерит [id] с id="new" ❌\n// забыли создать pages/posts/new.vue`,
        fix: `pages/posts/new.vue  ← ✅ статичный файл переопределяет динамику`,
      },
      {
        title: 'Смешивать route middleware и server middleware',
        text: 'Это разные слои: route middleware — клиентский/SSR-переход между страницами; server middleware — HTTP-слой до Nuxt-роутинга. Auth-проверка cookie может быть и там, и там — но назначение разное.',
        code: `// server/middleware/auth.ts\nexport default defineEventHandler((event) => {\n  // ❌ здесь нет navigateTo — это HTTP-слой\n  navigateTo('/login')\n})`,
        fix: `// ✅ сервер: 401/редирект на уровне HTTP\nsetResponseStatus(event, 401)\n// ✅ страницы: route middleware с navigateTo`,
      },
      {
        title: 'Тяжёлая логика в global middleware',
        text: '.global.ts выполняется на <b>каждый</b> переход — включая первый SSR-рендер. Дорогие проверки (запросы разрешений) замедлят всё приложение.',
        code: `// auth.global.ts\nconst perms = await $fetch('/api/permissions') // ❌ на каждый переход`,
        fix: `// ✅ точечное подключение через definePageMeta\n// + кеширование разрешений в стор/cookie`,
      },
    ],
    nuances: [
      'Папки без файла не создают маршрут: <code>users/index.vue</code> обязателен для /users.',
      '<code>definePageMeta</code> — метаданные страницы (layout, middleware, keepalive) — компилируется, не попадает в рантайм-бандл.',
      'Layouts: <code>definePageMeta({ layout: \'admin\' })</code> переключает обёртку; layout может быть у групп страниц.',
      'Переходы с shared-компонентом: Nuxt поддерживает Transition/KeepAlive через definePageMeta.',
      '<code>navigateTo</code> — универсальный редирект (работает и на сервере, и на клиенте); на сервере отдаёт правильные HTTP-редиректы.',
      'Вложенные маршруты: <code>pages/parent.vue</code> + <code>pages/parent/child.vue</code> — в parent нужен <code>&lt;NuxtPage /&gt;</code>.',
    ],
    bestPractices: [
      'Группируйте страницы по разделам папками; имена файлов — по маршруту, а не «Page2.vue».',
      'auth-проверка — route middleware + серверная проверка на API (не доверяйте только фронтовому middleware).',
      'global middleware держите минимальным (1-2 штуки), остальное — через definePageMeta.',
      'Параметры страниц принимайте defineProps — типизация и независимость от route-объекта.',
      'Для «только для этой страницы» логики — definePageMeta + page-specific middleware, а не глобальные if-ы.',
    ],
    whenToUse:
      'Файловый роутинг — стандарт Nuxt: экономит таблицу маршрутов и даёт конвенцию. <strong>Route middleware</strong> — auth, роли, A/B-редиректы, аналитика переходов. <strong>Server middleware</strong> — сквозная серверная логика: заголовки безопасности, логирование, SSR-контекст.',
    alternative: {
      title: 'Ручная таблица маршрутов',
      text: 'pages/ можно отключить (pages: false) и описать маршруты в vue-router-стиле — иногда проще для небольших разделов или библиотек компонентов.',
      code: `// nuxt.config.ts\nexport default defineNuxtConfig({ pages: false })\n// + свои RouterLink/RouterView — контроль, но без конвенций`,
    },
    advanced: {
      title: 'Route rules + middleware для кеширования',
      text: 'Комбинация декларативного кеширования (route rules) и middleware даёт полный контроль: что кешировать решает конфиг, «свежесть» и персонализацию — middleware.',
      code: `// nuxt.config.ts\nrouteRules: {\n  '/catalog/**': { isr: 600, headers: { 'x-segment': 'dynamic' } },\n}\n\n// middleware/cache-bypass.ts\nexport default defineNuxtRouteMiddleware((to) => {\n  if (to.query.preview) {\n    // персональный предпросмотр — минуем кеш на уровне заголовка\n    to.meta.bypassCache = true\n  }\n})`,
    },
  },
})
