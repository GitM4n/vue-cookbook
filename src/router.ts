import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * Hash-история: собранный справочник открывается с любого статического
 * сервера (и даже из file://) без дополнительной настройки rewrite-правил.
 */
export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./components/HomePage.vue'),
    },
    {
      path: '/:section',
      name: 'section',
      component: () => import('./components/SectionPage.vue'),
      props: true,
    },
    {
      path: '/:section/:slug',
      name: 'example',
      component: () => import('./components/ExamplePage.vue'),
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('./components/NotFound.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.path === from.path) return false
    return { top: 0 }
  },
})
