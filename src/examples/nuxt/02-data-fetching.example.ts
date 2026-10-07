import { defineExample } from '../types'
import demoCode from './02-data-fetching/Demo.vue?raw'

const dataCode = `// useFetch — обёртка useAsyncData над $fetch (самый частый)
const { data: todos, pending, error, refresh } = await useFetch('/api/todos')

// useAsyncData — когда нужен свой fetcher / комбинирование
const { data: page } = await useAsyncData('page', async () => {
  const [user, posts] = await Promise.all([
    $fetch('/api/me'),
    $fetch('/api/posts'),
  ])
  return { user, posts }
})

// $fetch — просто ofetch-запрос БЕЗ SSR-переноса
const res = await $fetch('/api/track', { method: 'POST', body: {...} })

// lazy-вариант: не блокирует навигацию
const { data } = await useLazyFetch('/api/comments') // pending в шаблоне

// refresh / реактивные ключи
const page = ref(1)
const { data: list } = await useFetch('/api/list', {
  query: { page },
  watch: [page], // перезапрос при смене
})`

export default defineExample({
  title: 'useFetch, useAsyncData и $fetch',
  summary: 'SSR-перенос данных в payload, дедупликация по ключу, lazy-варианты, когда обычный $fetch правильнее.',
  demo: () => import('./02-data-fetching/Demo.vue'),
  code: `// ============ Demo.vue (интерактив) ============\n${demoCode}\n\n// ============ API получения данных ============\n${dataCode}`,
  content: {
    intro:
      'В Nuxt три способа получить данные, и разница между ними — <b>где и сколько раз</b> выполнится запрос. <code>useFetch</code>/<code>useAsyncData</code> — SSR-композаблы: на сервере запрос выполняется, а его результат <b>сериализуется в payload</b> страницы — на клиенте повторного запроса нет. <code>$fetch</code> — обычный HTTP-клиент (ofetch): в setup на сервере выполнится «в никуда» — результат не перенесётся, и клиент запросит ещё раз. В демо видно, как запрос проходит фазы сервер → гидрация → клиент для каждого способа.',
    howItWorks:
      'useAsyncData(key, handler) исполняет handler на сервере, сохраняет результат под ключом в <code>nuxtApp.payload.data</code> и возвращает ref-ы data/pending/error. При гидрации клиентский экземпляр находит значение по ключу — handler не выполняется. useFetch(url, opts) — сахар над useAsyncData с $fetch и автоматическим ключом из URL+параметров. Опция <code>lazy</code> (или useLazyFetch) не блокирует навигацию: сервер отдаёт страницу с pending, данные догружаются на клиенте. Реактивные query/params пересматриваются и вызывают рефетч.',
    mistakes: [
      {
        title: 'useFetch без await',
        text: 'Без await в SSR-ветке данные не успеют доехать до payload: сервер отдаст pending-страницу, клиент догрузит на гидрации. Для SSR-данных await обязателен (в setup — топ-левел await внутри <script setup>).',
        code: `const { data } = useFetch('/api/todos') // ❌ сервер не дождётся`,
        fix: `const { data } = await useFetch('/api/todos') // ✅`,
      },
      {
        title: '$fetch для первичных данных страницы',
        text: '$fetch в setup даёт двойной запрос (сервер мимо, клиент заново) и задержку контента. Он для событий: отправка формы, трекинг, удаление — запросы «по действию».',
        code: `// в setup\nconst data = await $fetch('/api/todos') // ❌ не попадёт в payload`,
        fix: `const { data } = await useFetch('/api/todos') // ✅ SSR-перенос\n// $fetch оставьте для onSubmit:\nawait $fetch('/api/todos', { method: 'POST', body })`,
      },
      {
        title: 'Дублирующиеся ключи useAsyncData',
        text: 'Одинаковый ключ = одна запись кеша: два компонента с key "todos" разделят данные/ошибки. Ключ должен быть уникальным и отражать запрос.',
        code: `// компонент A и B:\nuseAsyncData('todos', ...) // ❌ коллизия`,
        fix: `useAsyncData(\`todos-\${page.value}\`, ...) // ✅ ключ с параметрами`,
      },
    ],
    nuances: [
      '<code>useFetch</code> ключ генерируется автоматически из URL и опций — явный key нужен при ручных useAsyncData.',
      'Дедупликация: несколько компонентов с одинаковым useFetch в одном запросе выполнят <b>один</b> вызов (кеширование по ключу).',
      '<code>refresh()</code> перезапускает handler; <code>clear()</code> (Nuxt 3.8+) сбрасывает data/pending/error.',
      'Опции <code>server: false</code> — выполнить только на клиенте; <code>lazy</code> — не блокировать навигацию.',
      'Параллельность: несколько await подряд — водопад; независимые запросы — Promise.all или <code>lazy: true</code>.',
      'Типизация выводится из $fetch: <code>data</code> автоматически получает тип ответа API (наследуется и в useAsyncData).',
    ],
    bestPractices: [
      'Первичные данные страницы — <b>await useFetch/useAsyncData</b>; действия пользователя — $fetch.',
      'Ключи включают параметры запроса — дедупликация работает на вашу пользу.',
      'Независимые запросы — параллельно: Promise.all внутри useAsyncData.',
      'Для списков с фильтрами — реактивный query + watch; для детальных страниц — ключ из params.',
      'Ошибки API обрабатывайте через error, а не try/catch вокруг await — Nuxt даёт единый паттерн.',
    ],
    whenToUse:
      '<strong>useFetch</strong> — 90% случаев простых GET-запросов. <strong>useAsyncData</strong> — комбинирование источников, трансформация, свой кеш-ключ. <strong>$fetch</strong> — мутации, отправка форм, запросы в обработчиках событий и в server routes. <strong>lazy-варианты</strong> — некритичный контент (комментарии, рекомендации), когда страница не должна ждать.',
    alternative: {
      title: 'TanStack Query в Nuxt',
      text: 'Для сложного клиентского кеша (инвалидация, мутации, оптимистичные обновления) Query-библиотека поверх Nuxt — законный паттерн; useFetch остаётся для SSR-первичных данных.',
      code: `// SSR: первичные данные\nconst { data: initial } = await useFetch('/api/posts')\n\n// клиент: динамический кеш с мутациями\nconst queryCache = useQueryCache()\n// invalidateQueries, optimistic updates и т.д.`,
    },
    advanced: {
      title: 'callOnce и кеширование вне компонентов',
      text: 'Для данных «один раз на приложение» (конфиг, справочники) useAsyncData с ключом кеширует и на сервере (per-request), и на клиенте — без лишних вызовов.',
      code: `// composables/useAppConfig.ts\nexport const useAppConfigData = () => useAsyncData(\n  'app-config',\n  () => $fetch('/api/config'),\n  { dedupe: 'defer' } // повторные вызовы ждут первый\n)\n\n// любой компонент:\nconst { data: config } = useAppConfigData() // ключ общий — 1 запрос`,
    },
  },
})
