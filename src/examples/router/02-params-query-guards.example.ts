import { defineExample } from '../types'
import demoCode from './02-params-query-guards/Demo.vue?raw'

const guardsCode = `// === Глобальные хуки ===
router.beforeEach((to) => {
  // meta: обязательное поле auth из таблицы маршрутов
  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
  // динамический заголовок через meta
  document.title = to.meta.title ?? 'Приложение'
})

// === Хук внутри компонента ===
import { onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router'

onBeforeRouteUpdate((to, from) => {
  // смена params внутри того же компонента (/users/1 → /users/2)
  if (to.params.id !== from.params.id) loadUser(to.params.id as string)
})

onBeforeRouteLeave(() => {
  if (hasUnsavedChanges.value) {
    return window.confirm('Есть несохранённые изменения. Уйти?')
  }
})`

export default defineExample({
  title: 'Params, query и navigation guards',
  summary: 'Динамические сегменты, query-строка, beforeEach/resolve/afterEach, meta-поля и guards внутри компонента.',
  demo: () => import('./02-params-query-guards/Demo.vue'),
  code: `// ============ Demo.vue (интерактив) ============\n${demoCode}\n\n// ============ guards.ts ============\n${guardsCode}`,
  content: {
    intro:
      'URL несёт два вида данных: <b>params</b> — обязательные сегменты пути (<code>/users/:id</code>) и <b>query</b> — опциональные пары после <code>?</code> (<code>?page=2&sort=asc</code>). Навигационные хуки (<b>guards</b>) перехватывают переходы: проверка авторизации, подмена адреса, подтверждение ухода. <b>meta</b> — произвольные поля маршрута (<code>meta: { requiresAuth: true, title: ... }</code>), через которые guards получают декларативные правила.',
    howItWorks:
      'Router парсит путь: динамические сегменты попадают в <code>route.params</code>, всё после <code>?</code> — в <code>route.query</code>. Объект route — reactive и read-only. Guards — цепочка async-функций: <code>beforeEach</code> (глобально перед каждым переходом), <code>beforeResolve</code> (после resolve всех ленивых компонентов), <code>afterEach</code> (после навигации — аналитика, title). Guard может вернуть <code>false</code> (отмена), путь/объект локации (редирект) или undefined (пропуск). Внутри компонента — <code>onBeforeRouteUpdate</code> (смена params при живом компоненте) и <code>onBeforeRouteLeave</code> (уход с маршрута).',
    mistakes: [
      {
        title: 'Проверять auth в компонентах, а не в guards',
        text: 'Разбросанные по компонентам проверки пропускают прямые URL-переходы и глубокие ссылки. Авторизация — ответственность guards на маршруте.',
        code: `onMounted(() => { if (!user) router.push('/login') }) // ❌ дыра`,
        fix: `{ path: '/admin', meta: { requiresAuth: true }, ... }\nrouter.beforeEach((to) => {\n  if (to.meta.requiresAuth && !isAuthed()) return { name: 'login' }\n}) // ✅`,
      },
      {
        title: 'Считать, что query всегда строка',
        text: 'query-значения — строки (или массивы). <code>Number(query.page)</code> нужен перед арифметикой; отсутствие параметра — undefined.',
        code: `route.query.page + 1 // ❌ "2" + 1 = "21"`,
        fix: `Number(route.query.page || 1) + 1 // ✅`,
      },
      {
        title: 'Терять redirect после логина',
        text: 'Классика: guard отправляет на /login?redirect=/admin, а после логина пользователь попадает «куда-то». Сохраняйте redirect из query и восстанавливайте его.',
        code: `await login()\nrouter.push('/') // ❌ пользователь потерял путь`,
        fix: `router.push((route.query.redirect as string) ?? '/') // ✅`,
      },
    ],
    nuances: [
      'Guards <b>не блокируют рендер</b> уже открытого компонента: они управляют навигацией. Для «страница ждёт данные» — async setup + Suspense или loading-стейт.',
      'Асинхронные guards: возвращайте Promise — навигация подождёт (setTimeout в guard реально тормозит переход).',
      'meta доступна через <code>to.meta</code> (merged с родительскими meta) — удобно для каскадных флагов (layout.requiresAuth у родителя).',
      'afterEach — единственное место без отмены: аналитика и document.title живут там.',
      'onBeforeRouteLeave с confirm-возвратом — штатный «несохранённые изменения».',
      'params не участвуют в истории браузера при push с name+params; query — участвует (в URL).',
    ],
    bestPractices: [
      'Правила доступа — <b>декларативно в meta</b>, исполняются единым beforeEach.',
      'Типизируйте meta через <code>declare module \'vue-router\' { interface RouteMeta { requiresAuth?: boolean } }</code>.',
      'Query — для состояния, которым можно поделиться ссылкой (фильтры, страница, таб).',
      'Сложные проверки (роли) выносите в отдельные guard-фабрики и композируйте.',
      'Не делайте guards «тяжёлыми»: каждый переход ждёт их завершения.',
    ],
    whenToUse:
      '<strong>Params</strong> — идентификация ресурса (/users/42, /posts/slug). <strong>Query</strong> — фильтры, пагинация, сортировка, табы — всё, что должно жить в ссылке. <strong>Guards</strong> — auth/role-правила, редиректы, аналитика, защита от ухода с несохранённой формой. <strong>meta</strong> — любые маршруто-специфичные флаги и данные (title, layout, breadcrumbs).',
    alternative: {
      title: 'Middleware-подобная проверка в layout',
      text: 'Для групп страниц иногда проще проверять в layout-компоненте (например, AdminLayout сам редиректит) — когда правила простые, а guards не хочется плодить.',
      code: `// AdminLayout.vue\nwatchEffect(() => {\n  if (!store.user?.isAdmin) router.replace({ name: 'not-found' })\n})`,
    },
    advanced: {
      title: 'Типизированный meta и guard-фабрики',
      text: 'RouteMeta-интерфейс делает meta безопасным контрактом; фабрики guards возвращают замыкания с зависимостями (store, permissions) и композируются в цепочку.',
      code: `declare module 'vue-router' {\n  interface RouteMeta {\n    requiresAuth?: boolean\n    roles?: string[]\n    title?: string\n  }\n}\n\nconst requireRoles = (roles: string[]) => (to: RouteLocationNormalized) => {\n  if (to.meta.roles && !roles.some(r => to.meta.roles!.includes(r))) {\n    return { name: 'forbidden' }\n  }\n}\n\nrouter.beforeEach(requireRoles(['admin']))`,
    },
  },
})
