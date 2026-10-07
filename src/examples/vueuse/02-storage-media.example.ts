import { defineExample } from '../types'
import demoCode from './02-storage-media/Demo.vue?raw'

export default defineExample({
  title: 'Хранилища и медиа: useLocalStorage, useMediaQuery, useBreakpoints, useDark',
  summary: 'Живой ref ↔ localStorage, реактивные media-запросы, именованные брейкпоинты, тёмная тема.',
  demo: () => import('./02-storage-media/Demo.vue'),
  code: demoCode,
  content: {
    intro:
      '<code>useLocalStorage(key, default)</code> возвращает <b>живой ref</b>: запись обновляет хранилище, внешние изменения (другая вкладка) — ref. <code>useMediaQuery(query)</code> превращает CSS-медиа-условие в реактивный boolean. <code>useBreakpoints(config)</code> — словарь именованных брейкпоинтов с хелперами (greater, between, active). <code>useDark</code> — готовая тёмная тема: класс на html + синхронизация с системной настройкой. В демо всё это работает одновременно.',
    howItWorks:
      'useLocalStorage оборачивает чтение/запись в customRef с сериализацией (JSON по умолчанию) и слушателем <code>storage</code> события для синхронизации вкладок. useMediaQuery создаёт <code>matchMedia(query)</code> и подписывается на его change-событие, возвращая read-only ref. useBreakpoints — надстройка: набор useMediaQuery с границами и комбинаторы (greater/between/smaller). useDark комбинирует useLocalStorage + usePreferredDark + watch и вешает класс <code>dark</code> на <code>&lt;html&gt;</code>.',
    mistakes: [
      {
        title: 'Хранить в useLocalStorage не-сериализуемое',
        text: 'Map, Set, Date, классы не переживают JSON.stringify/parse: восстановится ломаная структура. Храните plain-данные или задавайте свой serializer.',
        code: `const state = useLocalStorage('s', new Map()) // ❌ восстановится как {}`,
        fix: `const state = useLocalStorage('s', initial, {\n  serializer: {\n    read: (v) => new Map(JSON.parse(v)),\n    write: (m) => JSON.stringify([...m]),\n  },\n}) // ✅`,
      },
      {
        title: 'Дублировать CSS-брейкпоинты и JS-константы',
        text: 'Если Tailwind-классы ломаются на 768px, а JS-логика на 900px — рассинхрон. Выносите границы в общий конфиг (CSS custom properties ↔ useBreakpoints config).',
        code: `const bp = useBreakpoints({ md: 900 }) // ❌ а в CSS — 768px`,
        fix: `// ✅ единый источник: один конфиг и для CSS (переменные), и для JS\nconst bp = useBreakpoints(themeConfig.breakpoints)`,
      },
      {
        title: 'useDark без стилей под класс .dark',
        text: 'useDark только вешает класс/атрибут — сама тема это CSS-переменные. Без <code>.dark { --bg: ... }</code> переключатель ничего не визуально не меняет.',
        code: `const isDark = useDark() // и… ничего не происходит`,
        fix: `/* ✅ стили реагируют на класс */\n.dark { --bg: #0d1117; --text: #e6edf3; }`,
      },
    ],
    nuances: [
      'useLocalStorage пишет <b>лениво</b>: без flush-опций запись в момент мутации; для高频 обновлений есть опция <code>flush</code>.',
      'Синхронизация между вкладками — штатно (событие storage); для «одного таба» есть <code>useSessionStorage</code>.',
      'useMediaQuery SSR-безопасен: на сервере возвращается <code>false</code> без гидрационного скачка (проверяйте свой UI).',
      '<code>breakpoints.active()</code> — getter, вызывайте как функцию в шаблоне; там же доступны greater/smaller/between.',
      'useDark умеет <code>valueAuto</code> и хранит выбор в localStorage (ключ <code>vueuse-color-scheme</code>).',
      'Для «системная тема + ручной оверрайд» есть <code>useColorMode</code> с режимами auto/light/dark.',
    ],
    bestPractices: [
      'Персистентные настройки пользователя (тема, язык, размер шрифта) — через useLocalStorage: одна строка вместо watch+serialize.',
      'Брейкпоинты держите в одном конфиге с CSS — никаких магических чисел в двух местах.',
      'Для доступности проверяйте prefers-reduced-motion и prefers-contrast как обычные media-флаги.',
      'useDark/useColorMode + CSS-переменные — минимальная тема без UI-библиотек.',
    ],
    whenToUse:
      '<strong>useLocalStorage</strong> — любые настройки, черновики, «последний визит». <strong>useMediaQuery/useBreakpoints</strong> — когда поведение (а не только вид) зависит от экрана: сворачивать ли сайдбар, включать ли virtualization. <strong>useDark</strong> — тёмная тема из коробки. Всё это почти всегда лучше самописных композаблов.',
    alternative: {
      title: 'CSS-first: только медиа-запросы',
      text: 'Если JS-логика не зависит от экрана, адаптивность решается чистым CSS — без композаблов и без JS-оверлея на layout.',
      code: `/* без useMediaQuery: сетка перестраивается сама */\n.grid { display: grid; grid-template-columns: repeat(3, 1fr); }\n@media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }`,
    },
    advanced: {
      title: 'useColorMode: трёхуровневая тема',
      text: 'useColorMode добавляет режим auto (следовать системе) с явным оверрайдом пользователя — стандартный UX современных приложений.',
      code: `import { useColorMode } from '@vueuse/core'\n\nconst mode = useColorMode({\n  modes: { light: '', dark: 'theme-dark', dim: 'theme-dim' },\n  attribute: 'data-theme',\n})\n// mode.value = 'auto' | 'light' | 'dark' | 'dim'\n// useToggle(mode) для переключения по циклу`,
    },
  },
})
