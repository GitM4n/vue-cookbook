import { defineExample } from '../types'
import demoCode from './03-async-actions-persist/Demo.vue?raw'

const persistCode = `// Вариант 1: ручная персистентность в самом сторе
export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>(loadFromStorage()) // восстановление

  watch(items, (v) => {
    localStorage.setItem('cart', JSON.stringify(v)) // сохранение
  }, { deep: true })

  return { items }
})

// Вариант 2: официальный плагин pinia-plugin-persistedstate
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

createApp(App).use(createPinia().use(piniaPluginPersistedstate))

export const useCartStore = defineStore('cart', {
  state: () => ({ items: [] }),
  persist: true, // всё состояние → localStorage по id стора
  // persist: { paths: ['items'], storage: sessionStorage },
})`

export default defineExample({
  title: 'Async actions и персистентность',
  summary: 'Асинхронные actions с loading/error, $subscribe для сохранения, плагин persistedstate, SSR-осторожность.',
  demo: () => import('./03-async-actions-persist/Demo.vue'),
  code: `// ============ Demo.vue (интерактив) ============\n${demoCode}\n\n// ============ персистентность (2 варианта) ============\n${persistCode}`,
  content: {
    intro:
      'Реальные сторы общаются с API: <b>async action</b> инкапсулирует запрос, а состояния <code>loading</code>/<code>error</code> становятся частью стора — все компоненты видят единый статус сети. Вторая половина темы — <b>персистентность</b>: сохранение состояния между сессиями через localStorage. В демо $subscribe пишет каждое изменение в localStorage (перезагрузите страницу — заметки вернутся), а async action имитирует сеть с редким сбоем.',
    howItWorks:
      'Async action — обычная async-функция внутри стора: до await — мутации loading, после — запись данных, в catch — error. Компоненты просто вызывают action и читают состояние, не зная о fetch. Персистентность через <code>$subscribe</code>: колбэк получает (mutation, state) после каждой мутации — сериализуем и пишем. Восстановление — при создании стора: читаем storage и присваиваем state. Плагин <code>pinia-plugin-persistedstate</code> делает то же самое декларативно: <code>persist: true</code>, с опциями путей и storage.',
    mistakes: [
      {
        title: 'Хранить loading/error в каждом компоненте',
        text: 'Если запрос в компоненте, а состояние сети — тоже в компоненте, другие потребители данных не знают о статусе. Сетевое состояние того же ресурса — в сторе рядом с данными.',
        code: `// компонент A грузит, компонент B показывает список —\n// B не знает, что A уже грузит → дубли запросов`,
        fix: `// ✅ единый action + флаги в сторе\nasync function fetch() {\n  this.loading = true\n  try { this.items = await api.get() }\n  finally { this.loading = false }\n}`,
      },
      {
        title: 'Персистировать всё подряд',
        text: 'Сохранение всего стора тащит в localStorage transient-поля (loading, ошибки, открытые модалки) и может утечь sensitive-данные. Персистируйте явно выбранные пути.',
        code: `persist: true // ❌ вместе с token попали loading/error/секреты`,
        fix: `persist: { paths: ['items'] } // ✅ только доменные данные\n// секреты — в httpOnly cookie, не в localStorage`,
      },
      {
        title: 'Доверять данным из storage без валидации',
        text: 'localStorage может содержать устаревшую схему или битый JSON. Валидируйте при восстановлении, иначе стор получит мусор и упадёт где-то в рендере.',
        code: `const saved = JSON.parse(localStorage.getItem('cart') ?? '[]') // ❌`,
        fix: `const parsed = cartSchema.safeParse(JSON.parse(raw))\nif (parsed.success) this.items = parsed.data // ✅ zod-валидация\nelse localStorage.removeItem('cart')`,
      },
    ],
    nuances: [
      '$subscribe по умолчанию срабатывает <b>после</b> мутации; третий аргумент { detached: true } отвязывает от компонента.',
      'Сериализация reactive-Proxy через JSON.stringify работает честно (Proxy прозрачен), но Map/Set/Date теряются — используйте replacer.',
      'В SSR на сервере localStorage нет: персистентность — только на клиенте (плагин сам guard-ит) или в cookies.',
      'Асинхронные actions не «ждутся» автоматически: <code>await store.fetch()</code> — только если fetch возвращает Promise (async-функция возвращает его всегда).',
      'Два вызова одного async-action параллельно = гонка; добавляйте abort/idempotency-защиту для критичных запросов.',
      'pinia-plugin-persistedstate поддерживает sessionStorage, пути, сериализаторы и multiple storages.',
    ],
    bestPractices: [
      'Сетевое состояние ресурса (loading/error/lastFetched) — в том же сторе, что и данные.',
      'Персистируйте минимально: только то, что реально нужно восстановить.',
      'Валидируйте восстановленные данные (zod) и версионируйте ключ (cart-v2).',
      'Для идемпотентных загрузок — guard от параллельных вызовов (if (this.loading) return).',
      'Аналитику и логирование действий вешайте через $onAction, не мутируя actions.',
    ],
    whenToUse:
      '<strong>Async actions</strong> — любые данные с сервера, разделяемые компонентами: профиль, каталог, настройки. <strong>Персистентность</strong> — корзина, черновики, фильтры, тема — то, что пользователь ожидает найти после перезагрузки. Не персистируйте сессионные/чувствительные данные и transient-UI-состояние.',
    alternative: {
      title: 'Загрузка на уровне компонента (TanStack Query / useFetch)',
      text: 'Для серверного кеша с дедупликацией, рефетчем и инвалидацией специализированные библиотеки часто лучше самописного стора: они решают именно проблему «клиентского кеша серверных данных».',
      code: `import { useQuery } from '@tanstack/vue-query'\n\nconst { data, isLoading } = useQuery({\n  queryKey: ['todos'],\n  queryFn: () => api.getTodos(),\n})\n// кеш, дедуп, рефетч — из коробки; Pinia остаётся для клиентского стейта`,
    },
    advanced: {
      title: 'Undo/Redo на $subscribe + стек снапшотов',
      text: 'Подписка на мутации даёт дешёвый undo: каждый change пушим в стек, при undo — восстанавливаем прошлый снапшот через $patch.',
      code: `const history: string[] = []\nlet pointer = -1\n\nstore.$subscribe((_, state) => {\n  history.splice(pointer + 1)\n  history.push(JSON.stringify(state.notes))\n  pointer++\n})\n\nfunction undo() {\n  if (pointer > 0) {\n    pointer--\n    store.$patch({ notes: JSON.parse(history[pointer]) })\n  }\n}`,
    },
  },
})
