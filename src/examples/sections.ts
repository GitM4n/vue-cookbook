import type { SectionMeta } from './types'

export const sections: SectionMeta[] = [
  {
    id: 'fundamentals',
    title: 'Основы Vue',
    icon: '🧱',
    description: 'Компоненты, шаблоны, события, слоты, v-model и всё, на чём строится каждый проект.',
  },
  {
    id: 'reactivity',
    title: 'Реактивность',
    icon: '⚡',
    description: 'ref, reactive, computed, watch и устройство системы реактивности Vue.',
  },
  {
    id: 'composition',
    title: 'Composition API и Composables',
    icon: '🧩',
    description: 'Как организовывать логику: composables, жизненный цикл, cleanup, provide/inject.',
  },
  {
    id: 'router',
    title: 'Vue Router',
    icon: '🧭',
    description: 'Маршруты, вложенные роуты, guards, meta, ленивые страницы и паттерны загрузки данных.',
  },
  {
    id: 'pinia',
    title: 'Pinia',
    icon: '🗃️',
    description: 'Stores, state, getters, actions, персистентность и когда глобальный стейт не нужен.',
  },
  {
    id: 'vueuse',
    title: 'VueUse',
    icon: '🧰',
    description: 'Готовые composables для DOM, событий, тайминга, хранилищ и медиа-запросов.',
  },
  {
    id: 'nuxt',
    title: 'Nuxt',
    icon: '🏔️',
    description: 'SSR, гидрация, файловый роутинг, server routes, SEO и рендеринг-стратегии.',
  },
  {
    id: 'advanced',
    title: 'Продвинутый Vue',
    icon: '🚀',
    description: 'Render-функции, h(), JSX, плагины, директивы, headless- и renderless-компоненты.',
  },
  {
    id: 'performance',
    title: 'Производительность',
    icon: '🏎️',
    description: 'Лишние ререндеры, большие списки, виртуализация, code splitting и кеширование.',
  },
  {
    id: 'typescript',
    title: 'TypeScript в Vue',
    icon: '🔷',
    description: 'Типизация props, emits, слотов, generics, stores и API-ответов.',
  },
  {
    id: 'under-the-hood',
    title: 'Как это работает внутри',
    icon: '🔬',
    description: 'Реактивность, прокси, VDOM, scheduler, батчинг, nextTick и гидрация.',
  },
  {
    id: 'common-traps',
    title: 'Ловушки и антипаттерны',
    icon: '🪤',
    description: 'Намеренно ошибочные примеры: ❌ что сломается → ✅ как надо.',
  },
  {
    id: 'architecture',
    title: 'Архитектурные паттерны',
    icon: '🏛️',
    description: 'Feature-based структура, слой API, UI vs business компоненты, границы абстракций.',
  },
]

export const sectionById = new Map<string, SectionMeta>(sections.map((s) => [s.id, s]))
