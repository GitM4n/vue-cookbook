import { defineExample } from '../types'
import demoCode from './01-basics/Demo.vue?raw'

const routesCode = `// router.ts — полная настройка маршрутизации
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  // createWebHashHistory() — hash-режим (/#/path): работает без серверных правил
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/users', name: 'users', component: UsersPage },
    // динамический сегмент: :id доступен в route.params.id
    { path: '/users/:id', name: 'user', component: UserPage, props: true },
    // 404 — catch-all
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
  ],
})

// main.ts
createApp(App).use(router).mount('#app')`

const templateCode = `<!-- App.vue: две сущности всей навигации -->
<nav>
  <!-- RouterLink: рендерит <a>, добавляет .router-link-active -->
  <RouterLink to="/">Главная</RouterLink>
  <RouterLink :to="{ name: 'user', params: { id: 'ada' } }">Ада</RouterLink>
</nav>

<!-- RouterView: сюда рендерится matched-компонент -->
<RouterView />`

export default defineExample({
  title: 'Маршруты и RouterView',
  summary: 'Таблица маршрутов, RouterLink vs RouterView, динамические сегменты, catch-all 404, hash vs history.',
  demo: () => import('./01-basics/Demo.vue'),
  code: `// ============ router.ts ============\n${routesCode}\n\n// ============ App.vue ============\n${templateCode}\n\n// ============ Demo.vue (интерактив) ============\n${demoCode}`,
  content: {
    intro:
      'Vue Router связывает URL и дерево компонентов: <b>таблица маршрутов</b> описывает соответствие «путь → компонент», <code>&lt;RouterLink&gt;</code> создаёт ссылки (рендерит <code>&lt;a&gt;</code> с активными классами), <code>&lt;RouterView&gt;</code> — точка, куда рендерится совпавший компонент. В демо — микророутер на <code>&lt;component :is&gt;</code>: тот же принцип «текущий путь → компонент». Сам справочник использует <b>hash-историю</b> (<code>/#/router/basics</code>), чтобы собранная статика открывалась без серверных rewrite-правил.',
    howItWorks:
      'createRouter создаёт инстанс с историей (createWebHistory — History API с rewrite на сервере; createWebHashHistory — фрагмент после #, работает везде) и таблицей маршрутов. При навигации роутер ищет <b>matched</b>-маршруты, извлекает параметры (<code>:id</code> → <code>params.id</code>) и обновляет reactive-объект route; RouterView следит за ним и рендерит нужный компонент. RouterLink перехватывает клик (preventDefault) и вызывает <code>router.push()</code> — без перезагрузки страницы. Параметры передаются в компонент через props (<code>props: true</code>) — компонент остаётся чистым и тестируемым.',
    mistakes: [
      {
        title: 'Путать route и router',
        text: '<code>route</code> — текущее состояние (reactive, read-only: params, query, path); <code>router</code> — API навигации (push, replace, back). Смешение ведёт к попыткам «мутировать» route.',
        code: `route.path = '/users' // ❌ route только для чтения`,
        fix: `router.push('/users') // ✅ навигация через router\nconst { id } = route.params // ✅ чтение через route`,
      },
      {
        title: 'Не пометить 404 catch-all',
        text: 'Без catch-all маршрута неизвестный URL рендерит пустоту и молчит в консоль. Явная NotFound-страница — обязательный последний маршрут.',
        code: `routes: [{ path: '/' }, { path: '/users' }] // ❌ /xyz → пустой RouterView`,
        fix: `{ path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound } // ✅`,
      },
      {
        title: 'Ожидать перезагрузку данных при смене параметров',
        text: 'При переходе /users/1 → /users/2 <b>компонент тот же</b>: он не пересоздаётся, mounted не сработает. Следите за params через watch или onBeforeRouteUpdate.',
        code: `// ❌ mounted сработал один раз для /users/1\nonMounted(() => loadUser(props.id))`,
        fix: `watch(() => props.id, loadUser, { immediate: true }) // ✅\n// или onBeforeRouteUpdate((to) => loadUser(to.params.id))`,
      },
    ],
    nuances: [
      'Именованные маршруты (<code>name</code>) — источник истины: <code>router.push({ name: \'user\', params: { id } })</code> не ломается при смене путей.',
      'Сегменты: <code>:id</code> — обязательный, <code>:id?</code> — опциональный, <code>*:pathMatch(.*)*</code> — повторяемый catch-all.',
      '<code>props: true</code> передаёт params как пропсы — развязывает компонент и роутер; можно функцией или объектом.',
      'Активные классы RouterLink: <code>router-link-active</code> и <code>router-link-exact-active</code>; настраиваются через <code>activeClass</code>.',
      '<code>router-view</code> со слотом даёт доступ к Component для KeepAlive/Transition-обёрток.',
      'hash-история не требует сервера, но URL с # не индексируется так, как history-режим; для SEO-приложений — history + серверные fallback.',
    ],
    bestPractices: [
      'Именуйте все маршруты и навигируйте по name — рефакторинг путей не ломает код.',
      'Всегда добавляйте catch-all 404.',
      'Используйте <code>props: true</code> вместо обращения к route.params внутри компонента.',
      'Группируйте маршруты в константы/фабрики — большие приложения дробят таблицу на модули (router/routes/…).',
      'Для SPA-навигации всегда RouterLink/router.push, никогда <code>&lt;a href&gt;</code> — иначе полная перезагрузка.',
    ],
    whenToUse:
      '<strong>Маршрутизация</strong> нужна любому многостраничному SPA: разделы, детальные страницы, вложенные layout-ы. Для 1–2 экранов-«диалогов» роутер избыточен — состояния переключений достаточно. Hash-режим — для статики без сервера (как этот справочник); history — для продакшен-приложений с сервером.',
    alternative: {
      title: 'Табы на состоянии вместо роутера',
      text: 'Для локальной навигации внутри виджета (табы, шаги) достаточно ref + component :is — URL не нужен, роутер добавил бы шум в историю браузера.',
      code: `const tab = ref<'a' | 'b'>('a')\n<component :is="tab === 'a' ? TabA : TabB" />\n<!-- роутер подключают, когда URL должен отражать состояние -->`,
    },
    advanced: {
      title: 'Вложенные маршруты и named views',
      text: 'RouterView вкладывается: дочерние маршруты рендерятся в RouterView родителя. Named views позволяют нескольким RouterView получить разные компоненты одного маршрута (layout с sidebar + main + header).',
      code: `{\n  path: '/settings',\n  component: SettingsLayout,\n  children: [\n    { path: 'profile', component: ProfileSettings }, // /settings/profile\n    { path: 'billing', component: BillingSettings }, // /settings/billing\n  ],\n}\n\n{\n  path: '/dashboard',\n  components: {\n    default: DashboardMain,\n    sidebar: DashboardSidebar, // <RouterView name="sidebar" />\n  },\n}`,
    },
  },
})
