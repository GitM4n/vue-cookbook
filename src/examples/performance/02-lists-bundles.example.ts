import { defineExample } from '../types'
import demoCode from './02-lists-bundles/Demo.vue?raw'
import widgetCode from './02-lists-bundles/HeavyWidget.vue?raw'

const virtualCode = `// Виртуализация вручную (суть паттерна):
const ROW_H = 32
const scrollTop = ref(0)

const startIndex = computed(() => Math.floor(scrollTop.value / ROW_H))
const visibleCount = Math.ceil(viewportHeight / ROW_H) + 2 // буфер

const visibleRows = computed(() =>
  rows.value.slice(startIndex.value, startIndex.value + visibleCount)
)

<!-- контейнер с полной высотой: скроллбар «настоящий» -->
<div style="height: 400px; overflow: auto" @scroll="onScroll">
  <div :style="{ height: rows.length * ROW_H + 'px', position: 'relative' }">
    <div :style="{ transform: \`translateY(\${startIndex * ROW_H}px)\` }">
      <Row v-for="r in visibleRows" :key="r.id" :row="r" />
    </div>
  </div>
</div>

// Продакшен: vue-virtual-scroller / @tanstack/vue-virtual —
// добавляют переменную высоту, горизонталь, сетки`

const splitCode = `// 1) Ленивые маршруты — главный инструмент
{ path: '/editor', component: () => import('./pages/Editor.vue') }

// 2) Тяжёлые компоненты — по требованию
const Editor = defineAsyncComponent(() => import('./Editor.vue'))

// 3) Библиотеки: импортируйте точечно
import { format } from 'date-fns'           // ✅ tree-shakable
import _ from 'lodash'                       // ❌ весь lodash в бандл
import { debounce } from 'lodash-es'         // ✅

// 4) Vite: анализ и ручные чанки
// npx vite build --mode=production
import { visualizer } from 'rollup-plugin-visualizer'
export default { plugins: [visualizer({ open: true })] }
// build.rollupOptions.output.manualChunks: { vendor: ['vue', 'vue-router'] }`

export default defineExample({
  title: 'Большие списки и bundle splitting',
  summary: 'Виртуализация 5000 строк, ленивые чанки для виджетов и маршрутов, tree-shaking библиотек, анализ бандла.',
  demo: () => import('./02-lists-bundles/Demo.vue'),
  code: `// ============ Demo.vue (интерактив) ============\n${demoCode}\n\n// ============ HeavyWidget.vue (ленивый чанк) ============\n${widgetCode}\n\n// ============ виртуализация ============\n${virtualCode}\n\n// ============ code splitting ============\n${splitCode}`,
  content: {
    intro:
      'Два «пожирателя производительности» SPA: <b>огромные списки</b> в DOM и <b>толстые бандлы</b>. Виртуализация рендерит только видимое окно (20 узлов вместо 5000) — скролл остаётся плавным при любом размере данных. Code splitting выносит редкий код в отдельные чанки: маршруты и тяжёлые виджеты грузятся по требованию. В демо — переключатель «все в DOM / виртуализация» на 5000 строках и ленивая загрузка виджета.',
    howItWorks:
      'Виртуализация: контейнер со <b>скроллом полной высоты</b> (height = rows × rowHeight), внутри — абсолютное позиционирование видимого окна. По scrollTop вычисляется startIndex, рендерятся только rows.slice(start, start+count) (+буфер для плавности). Браузер работает с 20 узлами, хотя «прокручивает» 5000. Code splitting: динамический <code>import()</code> делит код на чанки; Vite/webpack выносят его при сборке; клиент грузит чанк при первом обращении. Tree-shaking отбрасывает неиспользуемые экспорты — работает только с ESM и без side-effect-ов.',
    mistakes: [
      {
        title: 'Рендерить тысячи узлов «просто потому что данные есть»',
        text: 'Каждый узел — память, vnode-ы при диффе, layout-расчёт браузера. 5000 строк тормозят не Vue, а DOM.',
        code: `<tr v-for="row in 5000rows"> <!-- ❌ 5000+ узлов, сотни КБ DOM -->`,
        fix: `// ✅ виртуализация: в DOM всегда ~20 видимых строк\n// или пагинация/«показать ещё», если виртуализация избыточна`,
      },
      {
        title: 'Импорт библиотеки целиком ради одной функции',
        text: 'import _ from \'lodash\' тянет весь пакет (~70КБ gzip). moment.js без локалей, целиком antd/element-plus — типовые раздуватели бандла.',
        code: `import _ from 'lodash'\n_.debounce(fn, 300) // ❌ 70КБ ради одной функции`,
        fix: `import { debounce } from 'lodash-es' // ✅ 2КБ\n// или своя реализация (10 строк)`,
      },
      {
        title: 'Виртуализировать всё подряд',
        text: 'Виртуализация осложняет: поиск по DOM (Ctrl+F), доступность, SSR, якорные ссылки. До ~200 строк она не нужна — браузер справляется.',
        code: `// ❌ виртуальный список из 30 строк`,
        fix: `// ✅ порог: сотни-тысячи строк; иначе обычный v-for`,
      },
    ],
    nuances: [
      'Буфер (лишние 2–5 строк сверху/снизу) обязателен: без него при быстром скролле видны «дырки».',
      'Переменная высота строк усложняет математику — берите готовую библиотеку или фиксируйте высоту.',
      'Ленивый чанк = отдельный HTTP-запрос: микрочанки по 2КБ хуже одного файла (водопад запросов).',
      'manualChunks группирует вендора: vendor-чанк кешируется между деплоями (код приложения меняется — vendor нет).',
      'Виртуализация + KeepAlive конфликтуют: при возврате скролл восстановится, но окно нужно пересчитать.',
      'Vue Devtools и Chrome Performance покажут, что тормозит: рендер Vue, layout браузера или сеть.',
    ],
    bestPractices: [
      'Ленивые маршруты по умолчанию; главный чанк — каркас приложения.',
      'Виртуализация для списков 500+ строк; пагинация — приемлемый бюджетный вариант.',
      'Импорт библиотек точечно (ESM), следите за бандл-аналитикой после добавления зависимостей.',
      'Фиксируйте высоту строк в виртуализованных списках — самый быстрый вариант.',
      'Проверяйте размер чанков в CI: порог 200–250КБ на чанк — разумный лимит.',
    ],
    whenToUse:
      '<strong>Виртуализация</strong> — ленты, логи, таблицы с большим числом строк. <strong>Code splitting</strong> — всегда: маршруты ленивы по умолчанию, тяжёлые виджеты (графики, редакторы) — по требованию. <strong>Анализ бандла</strong> — после каждого добавления крупной библиотеки.',
    alternative: {
      title: 'Пагинация и «показать ещё»',
      text: 'Классическое решение: клиент держит только страницу данных. Проще виртуализации, дружелюбнее к SEO (ссылки-страницы), но UX уступает бесконечному скроллу.',
      code: `const { data: page } = await useFetch('/api/rows', { query: { page, size: 50 } })\n<!-- 50 строк в DOM — виртуализация не нужна -->`,
    },
    advanced: {
      title: 'Динамический импорт с предзагрузкой по hover',
      text: 'Ленивость без потери скорости: чанк предзагружается при наведении на ссылку — к моменту клика код уже в кеше. Виртуальный список + предзагрузка следующей страницы данных — тот же принцип.',
      code: `const prefetched = new Set()\nfunction prefetchChunk(loader: () => Promise<unknown>) {\n  const id = loader.toString().slice(0, 50)\n  if (!prefetched.has(id)) { prefetched.add(id); loader() }\n}\n\n<RouterLink :to="url" @mouseenter="prefetchChunk(routeLoader)">`,
    },
  },
})
