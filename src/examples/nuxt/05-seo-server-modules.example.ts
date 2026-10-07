import { defineExample } from '../types'
import demoCode from './05-seo-server-modules/Demo.vue?raw'

const seoCode = `// useSeoMeta — типизированные мета-теги (все поля с автодополнением)
useSeoMeta({
  title: () => product.value ? \`\${product.value.name} — Магазин\` : 'Магазин',
  description: () => product.value?.summary ?? 'Каталог товаров',
  ogTitle: () => \`\${product.value?.name} — Магазин\`,
  ogImage: () => product.value?.image,
  robots: 'index, follow',
})

// useHead — низкоуровневый аналог: любые теги/атрибуты/скрипты
useHead({
  link: [{ rel: 'canonical', href: () => \`https://shop.dev\${route.path}\` }],
  script: [{ src: 'https://...', defer: true }],
})

// app.head в nuxt.config — глобальные дефолты (favicon, базовые meta)`

const serverCode = `// server/api/todos.get.ts — GET /api/todos
export default defineEventHandler(async (event) => {
  const query = getQuery(event)              // ?page=2
  const body = await readBody(event)         // POST-тело (в .post.ts)
  setHeader(event, 'cache-control', 'max-age=60')
  return db.todos.list(query.page)           // объект → JSON ответ
})

// server/routes/sitemap.xml.get.ts — «сырой» маршрут
export default defineEventHandler(() => {
  setHeader(event, 'content-type', 'application/xml')
  return generateSitemap()                    // строка, не JSON
})

// server/utils/db.ts — серверные утилиты (автоимпорт на сервере)
// .server.ts / .client.ts суффиксы — код только для одной стороны`

export default defineExample({
  title: 'SEO, useHead, server routes и auto-imports',
  summary: 'Мета-теги через useSeoMeta, SSR-SEO, server/api и server/routes, server middleware, автоимпорты и модули.',
  demo: () => import('./05-seo-server-modules/Demo.vue'),
  code: `// ============ Demo.vue (интерактив) ============\n${demoCode}\n\n// ============ SEO-композаблы ============\n${seoCode}\n\n// ============ server/ структура ============\n${serverCode}`,
  content: {
    intro:
      'SSR-приложение без SEO-тегов теряет главное преимущество. <code>useSeoMeta</code> задаёт <b>типизированные</b> мета-теги (title, description, OG-протокол) — реактивно, на каждую страницу. Серверная часть живёт в <code>server/</code>: <code>api/*.get.ts</code> — REST-эндпоинты, <code>routes/</code> — сырые маршруты (sitemap, robots.txt), <code>middleware/</code> — сквозная серверная логика. <b>Автоимпорты</b> избавляют от import-шума: vue-API, Nuxt-композаблы, ваши components/ и composables/ доступны напрямую. В демо — SEO-тренажёр с валидацией и карта server/-структуры.',
    howItWorks:
      'useSeoMeta/useHead строятся на Unhead: реактивные значения (функции/ref) пересчитываются и патчат <code>&lt;head&gt;</code> — на сервере при SSR-рендере (теги попадают в HTML, это и видит краулер), на клиенте при переходах. server/api файлы — H3-эндпоинты: суффикс метода (.get/.post) выбирает обработчик, getQuery/readBody читают запрос, возвращаемый объект сериализуется. Автоимпорты реализованы на этапе компиляции: компилятор видит использование <code>ref</code> и добавляет импорт — tree-shaking работает, «глобальных» переменных нет.',
    mistakes: [
      {
        title: 'SEO-теги только в index.html',
        text: 'Статичный head из шаблона одинаков для всех страниц: соцсети и поисковики видят один title на каталог, карточку и аккаунт. Уникальные теги — через useSeoMeta на страницах.',
        code: `<!-- nuxt.config app.head.title: "Магазин" — для ВСЕХ страниц -->`,
        fix: `// pages/products/[id].vue\nuseSeoMeta({ title: () => \`\${product.value.name} — Магазин\` })`,
      },
      {
        title: 'Секреты в клиентском коде вместо runtimeConfig',
        text: 'PUBLIC_-переменные попадают в бандл. Секреты (ключи API) живут в runtimeConfig.server-части и читаются только на сервере.',
        code: `const key = import.meta.env.VITE_API_SECRET // ❌ утечёт в браузер`,
        fix: `// nuxt.config: runtimeConfig: { apiSecret: '', public: { apiBase: '' } }\nconst config = useRuntimeConfig()\nconfig.apiSecret // ✅ доступен ТОЛЬКО на сервере\nconfig.public.apiBase // и на сервере, и на клиенте`,
      },
      {
        title: 'Использовать server/api как полноценный бэкенд',
        text: 'Server routes идеальны для BFF/прокси/мелких эндпоинтов, но не заменяют настоящий бэкенд: нет фоновых задач, очередей, сложной доменной логики. Не выращивайте там монолит.',
        code: `// ❌ в server/api: авторизация с БД, очереди, платежи, рассылки`,
        fix: `// ✅ server/api: прокси внешнему API, агрегация, кеш-слой\n// тяжёлая логика — в выделенном бэкенде/микросервисе`,
      },
    ],
    nuances: [
      'useSeoMeta покрывает <b>весь</b> OG/Twitter-протокол с автодополнением — опечатка в поле невозможна.',
      'Реактивный title через функцию: <code>title: () =&gt; ...</code> — обновляется при смене данных без перезагрузки.',
      '<code>server/api</code> с тем же файлом и разными суффиксами — разные обработчики (todos.get / todos.post / todos.delete).',
      'Автоимпорт ваших утилит: папка <code>utils/</code> — для клиентов, <code>server/utils/</code> — для сервера.',
      'Nuxt <b>модули</b> (@nuxt/image, @nuxtjs/tailwindcss) — плагины сборки: добавляют композаблы, компоненты и конфиги одной строкой в modules: [].',
      '<code>.server.ts</code>/<code>.client.ts</code> суффиксы и <code>&lt;ClientOnly&gt;</code> — тонкое управление стороной исполнения.',
    ],
    bestPractices: [
      'Каждая публичная страница — уникальные title/description через useSeoMeta.',
      'OG-теги обязательны для любых «шарящихся» страниц: карточки, посты, статьи.',
      'runtimeConfig: public-ключи отдельно от секретов; секреты никогда не в PUBLIC_.',
      'server/api — тонкий слой (прокси/агрегация), бизнес-логика — в выделенном бэкенде.',
      'Модули Nuxt вместо ручной настройки: экосистема решает 80% интеграций декларативно.',
    ],
    whenToUse:
      '<strong>useSeoMeta</strong> — на всех публичных страницах. <strong>server/api</strong> — BFF: скрытие ключей, агрегация нескольких API, кеширование, вебхуки с простыми проверками. <strong>Модули</strong> — стандартные интеграции (изображения, шрифты, CSS-фреймворки, sitemap) вместо ручной сборки.',
    alternative: {
      title: 'Внешний бэкенд + прокси',
      text: 'Когда логика велика, server/api не растёт: фронтенд обращается к выделенному бэкенду, а Nuxt остаётся рендер-слоем. server/api используют как тонкий прокси для cookies/секретов.',
      code: `// server/api/products.get.ts — только прокси:\nexport default defineEventHandler(async (event) => {\n  const config = useRuntimeConfig(event)\n  return $fetch(\`\${config.privateApiBase}/products\`, {\n    headers: { authorization: \`Bearer \${config.apiKey}\` },\n    query: getQuery(event),\n  })\n})`,
    },
    advanced: {
      title: 'Свой Nuxt-модуль',
      text: 'Модуль — функция, расширяющая Nuxt при сборке: добавляет композаблы, компоненты, server-хендлеры, ловит хуки сборки. Так устроена вся экосистема Nuxt.',
      code: `// modules/analytics.ts\nimport { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'\n\nexport default defineNuxtModule({\n  meta: { name: 'analytics' },\n  setup(options, nuxt) {\n    const { resolve } = createResolver(import.meta.url)\n    addPlugin(resolve('./runtime/plugin'))\n    addImports([{ name: 'useTrack', from: resolve('./runtime/composables') }])\n    nuxt.hook('nitro:config', (cfg) => { /* серверные расширения */ })\n  },\n})`,
    },
  },
})
