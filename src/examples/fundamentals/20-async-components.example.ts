import { defineExample } from '../types'
import demoCode from './20-async-components/Demo.vue?raw'
import heavyCode from './20-async-components/HeavyChart.vue?raw'

const code = `// ============ Demo.vue ============\n${demoCode}\n\n// ============ HeavyChart.vue (отдельный чанк) ============\n${heavyCode}`

export default defineExample({
  title: 'Async-компоненты и code splitting',
  summary:
    'defineAsyncComponent: ленивая загрузка чанка, loadingComponent/errorComponent, delay и timeout.',
  demo: () => import('./20-async-components/Demo.vue'),
  code,
  content: {
    intro:
      '<b>defineAsyncComponent</b> оборачивает динамический <code>import()</code> в компонент: код попадает в отдельный чанк и грузится только при первом рендере. Это базовый механизм code splitting на уровне компонентов. В демо три кнопки: быстрая загрузка, загрузка с задержкой (виден <code>loadingComponent</code>) и имитация сбоя сети (виден <code>errorComponent</code>). Параметр <code>delay</code> защищает от «мигания» спиннера на быстрых ответах.',
    howItWorks:
      'Фабрика <code>loader: () => import("./HeavyChart.vue")</code> возвращает промис с модулем; Vue монтирует компонент, когда промис resolves, и до этого показывает loadingComponent (после delay мс) или errorComponent (при reject или по timeout). Простейшая форма — <code>defineAsyncComponent(() => import(...))</code>; развёрнутая — объект с опциями. Каждый вызов import() Vite/webpack выносит в отдельный чанк; повторные вызовы берут модуль из кеша модулей. В demo реактивный :key="retryKey" пересоздаёт async-компонент, чтобы повторить любой сценарий.',
    mistakes: [
      {
        title: 'Ошибка сети без errorComponent',
        text: 'Если промис отклонился и обработчика ошибки нет, компонент никогда не отрендерится и не покажет проблему — тихий белый экран. Всегда предусматривайте errorComponent или обработку onError.',
        code: `const Heavy = defineAsyncComponent(() => import('./Heavy.vue'))\n<!-- ❌ сеть упала — пользователь видит пустоту -->`,
        fix: `const Heavy = defineAsyncComponent({\n  loader: () => import('./Heavy.vue'),\n  errorComponent: ErrorState,\n  timeout: 10000,\n  onError(error, retry, fail, attempts) {\n    if (attempts <= 3) retry() // ✅ автоповтор\n    else fail()\n  },\n})`,
      },
      {
        title: 'Спиннер «мигает» на быстрых соединениях',
        text: 'delay по умолчанию 200 мс, но если loadingComponent тяжёлый, а чанк приходит за 30 мс, пользователь видит вспышку загрузчика. Увеличьте delay или откажитесь от индикатора для мелких компонентов.',
        code: `defineAsyncComponent({ loader, delay: 0 }) <!-- ❌ спиннер на каждый рендер -->`,
        fix: `defineAsyncComponent({ loader, delay: 300 }) <!-- ✅ мигания нет -->`,
      },
      {
        title: 'Разбивать на чанки всё подряд',
        text: 'Каждый чанк — отдельный HTTP-запрос и задержка. Дробление мелких компонентов даёт водопад запросов вместо быстрого рендера. Ленивый — тяжёлое и редко используемое.',
        code: `// ❌ 20 мелких чанков по 2 КБ\nconst A = defineAsyncComponent(() => import('./A.vue'))\nconst B = defineAsyncComponent(() => import('./B.vue'))\n// ...и так все`,
        fix: `// ✅ чанки по маршрутам и «тяжёлым» фичам (редактор, графики, карта)\nconst Editor = defineAsyncComponent(() => import('./Editor.vue'))`,
      },
    ],
    nuances: [
      'Роутер-маршруты с <code>component: () => import(...)</code> — это тот же механизм, но на уровне страниц; там он главный инструмент.',
      'defineAsyncComponent можно комбинировать с <b>Suspense</b> и с KeepAlive — кешируется уже загруженный компонент.',
      '<code>loadingComponent</code> показывается только после <code>delay</code> мс; если промис успел раньше — пользователь не увидит его вовсе.',
      'Повторный рендер async-компонента берёт модуль из кеша — «ленивость» срабатывает один раз за сессию.',
      'Именованные чанки: <code>import(/* webpackChunkName: "chart" */ ...)</code> для webpack; в Vite — <code>vite-plugin-chunk</code> или manualChunks.',
      'SSR: на сервере async-компоненты резолвятся синхронно в Nuxt; в чистом Vue SSR это отдельная тема согласования с гидрацией.',
    ],
    bestPractices: [
      'Ленивая загрузка для: маршрутов, модалок, тяжёлых виджетов (графики, редакторы, карты), компонентов под фолдом.',
      'Всегда задавайте <b>errorComponent</b> и retry-логику для критичных чанков.',
      'Держите баланс: чанк по странице/фиче, а не по мелкому компоненту.',
      'Проверяйте сборку через <code>rollup-plugin-visualizer</code> или <code>npx vite build --mode=analyze</code>, чтобы видеть, что реально ушло в чанки.',
    ],
    whenToUse:
      '<strong>Async-компоненты</strong> — когда нужно держать initial-бандл тонким: лендинг без админки, каталог без heavy-графиков. Также для условий «показывается редко»: диалог настроек, платный виджет, devtools-панель. Не нужно для критичного above-the-fold контента — там ленивость вредит LCP.',
    alternative: {
      title: 'Ленивые маршруты в Router',
      text: 'Самый частый случай code splitting — уже встроен в Vue Router: каждая страница отдельным чанком без defineAsyncComponent.',
      code: `const routes = [\n  { path: '/dashboard', component: () => import('./pages/Dashboard.vue') },\n  { path: '/editor', component: () => import('./pages/Editor.vue') },\n]`,
    },
    advanced: {
      title: 'Retry с экспоненциальной задержкой',
      text: 'Для мобильных сетей делают автоматический retry: attempts растёт, между попытками пауза. onError даёт полный контроль над циклом.',
      code: `function loadWithRetry(load: () => Promise<{ default: Component }>, attempts = 0): Promise<{ default: Component }> {\n  return load().catch(err => {\n    if (attempts >= 3) throw err\n    return new Promise(res => setTimeout(res, 2 ** attempts * 500)).then(() =>\n      loadWithRetry(load, attempts + 1)\n    )\n  })\n}\n\nconst Heavy = defineAsyncComponent({\n  loader: () => loadWithRetry(() => import('./Heavy.vue')),\n  errorComponent: ErrorState,\n})`,
    },
  },
})
