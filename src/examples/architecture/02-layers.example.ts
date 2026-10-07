import { defineExample } from '../types'
import demoCode from './02-layers/Demo.vue?raw'

const layersCode = `// ============ Слой API: DTO → домен ============
// api/checkout-api.ts — единственное место, знающее про HTTP
export async function sendOrder(dto: OrderDto): Promise<Order> {
  try {
    const res = await http.post('/api/checkout', dto)
    return mapOrder(res.data) // DTO → доменная модель
  } catch (e) {
    throw new CheckoutError(e) // типизированная ошибка домена
  }
}

// ============ Domain: чистые функции ============
// domain/pricing.ts — БЕЗ Vue, БЕЗ fetch: юнит-тесты мгновенны
export function calculateTotal(items: CartItem[], opts: { discount?: number }): number {
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0)
  return Math.round(subtotal * (1 - (opts.discount ?? 0) / 100))
}

// ============ Composable: оркестрация ============
export function useCheckout() {
  const submitting = ref(false)
  async function submit(form: CheckoutForm) {
    submitting.value = true
    try {
      const order = await sendOrder(toDto(form))
      return order
    } finally {
      submitting.value = false
    }
  }
  return { submitting, submit }
}

// ============ UI: только отображение ============
<!-- CheckoutForm.vue: разметка + вызов useCheckout, БЕЗ fetch и расчётов -->`

export default defineExample({
  title: 'Слои: UI, composables, domain, API',
  summary: 'Разделение ответственности: компоненты рендерят, композаблы оркестрируют, domain — чистые функции, api — HTTP; container/presentational.',
  demo: () => import('./02-layers/Demo.vue'),
  code: `// ============ Demo.vue (симуляция слоёв) ============\n${demoCode}\n\n// ============ слои в коде ============\n${layersCode}`,
  content: {
    intro:
      'Слоёная архитектура раздаёт ответственности: <b>UI-компоненты</b> рендерят и собирают ввод; <b>композаблы</b> держат состояние и оркестрируют; <b>domain</b> — чистые функции правил (расчёты, валидация) без Vue и сети; <b>API-слой</b> — единственное место, знающее HTTP, с маппингом DTO → домен. Связка «container/presentational»: контейнер владеет логикой, презентационный — рисует по пропсам. В демо — пошаговый поток запроса по слоям.',
    howItWorks:
      'Поток запроса: UI вызывает метод композабла → композабл валидирует/агрегирует, зовёт domain-функции (чистые расчёты) и API-клиент → API-клиент маппит домен в DTO, выполняет HTTP, маппит ответ обратно, кидает типизированные ошибки → композабл обновляет state → UI перерендерился. Каждый слой заменяем: сервер мокается в api-слое, UI мокается в тестах композабла, domain тестируется вообще без моков. Container/presentational — то же разделение внутри дерева компонентов: контейнер (умный) подписан на сторы/API, презентационный (глупый) получает пропсы и эмитит события.',
    mistakes: [
      {
        title: 'fetch и бизнес-правила в компонентах',
        text: 'HTTP в шаблонном компоненте размазывает API-контракты по всему коду: смена бэкенда = правки в 20 файлах. Компонент должен знать «что показать», а не «откуда данные».',
        code: `// ❌ в ProductCard.vue\nfetch('/api/products/' + id).then(r => r.json()).then(...)\nconst discount = price * 0.9 // правило в UI`,
        fix: `// ✅ api/products.ts: getProduct(id)\n// ✅ domain/pricing.ts: applyDiscount(price, 10)\n// ✅ composable: useProduct(id) — компонент только рендерит`,
      },
      {
        title: 'Domain-логика, зависящая от Vue',
        text: 'Правила расчёта, написанные внутри композабла с ref-ами, нельзя переиспользовать и тестировать без Vue-контекста. Чистые функции принимают данные, возвращают данные.',
        code: `function usePricing() {\n  return computed(() => items.value.reduce(...)) // логика в замыкании ❌\n}`,
        fix: `// ✅ чистая функция + тонкий композабл-адаптер\nexport function calculateTotal(items: CartItem[]): number { ... }\nconst total = computed(() => calculateTotal(items.value))`,
      },
      {
        title: 'Контейнер-компоненты с разметкой',
        text: '«Умный» компонент, который и ходит в API, и рисует, невозможно переиспользовать в другом контексте данных. Разделите: контейнер (данные) → презентационный (разметка, пропсы).',
        code: `<!-- ❌ CartPage.vue: и fetch, и 300 строк разметки -->`,
        fix: `<!-- ✅ CartContainer.vue (данные) → <CartView :items ... /> -->`,
      },
    ],
    nuances: [
      'Композаблы — «сервисы» Vue-мира: inject-ются, тестируются с effectScope, не тянут DOM.',
      'DTO ≠ домен: ответ API приводится к доменной модели в api-слое — фронтенд не зависит от формы бэкенда.',
      'Типизированные ошибки слоя (CheckoutError) дают единый обработчик в UI вместо try/catch-лапши.',
      'UI-кит (shared) не знает о домене — это делает возможной смену дизайн-системы без правки фич.',
      'Контейнер/презентационный деление не догма: маленькие компоненты — оба в одном; главное — не смешивать в крупных.',
      'Слои ≠ папки: слои — про направление зависимостей; физически domain может лежать внутри features/.',
    ],
    bestPractices: [
      'Компонент — без fetch; composable — без разметки; domain — без Vue; api — без бизнес-правил.',
      'Маппинг DTO → домен в api-слое: фронтенд живёт в своих типах.',
      'Тестируйте: domain — юнит, композаблы — с мок-апи, UI — скриншоты/интеракции.',
      'Папка api/ или services/ — единая точка HTTP: перехват ошибок, retry, авторизация.',
      'При споре «компонент или composable»: переиспользуемая логика → composable; переиспользуемая разметка → компонент.',
    ],
    whenToUse:
      '<strong>Слои</strong> нужны от момента, когда появляются 2+ потребителя одной API-логики или нетривиальные доменные правила. Для CRUD-прототипов слоёность избыточна — прямые вызовы в композаблах быстрее. Контейнер/презентационный — для страниц, которые хочется переиспользовать с разными источниками данных.',
    alternative: {
      title: 'Тонкие слои: api-функции прямо в композаблах',
      text: 'Для малых проектов полный слой API избыточен: http-клиент с типами вызывается из композаблов напрямую; слой появится, когда API станет больше 5–10 endpoints.',
      code: `// композабл с прямыми вызовами — приемлемо для малого\nexport function useProducts() {\n  const items = ref<Product[]>([])\n  async function load() {\n    items.value = await http.get('/api/products').then(r => r.data)\n  }\n  return { items, load }\n}`,
    },
    advanced: {
      title: 'Порт-адаптер: замена API/стора без правки UI',
      text: 'Продвинутая граница: композабл объявляет контракт (интерфейс), реализация внедряется (provide/фабрика) — тесты и storybook подставляют мок-реализации без правки потребителей.',
      code: `// контракт\nexport interface ProductsPort {\n  getAll(): Promise<Product[]>\n  getById(id: string): Promise<Product>\n}\n\n// реализация-адаптер\nexport const httpProducts: ProductsPort = {\n  getAll: () => http.get('/api/products').then(r => r.data.map(mapProduct)),\n  getById: (id) => http.get(\`/api/products/\${id}\`).then(r => mapProduct(r.data)),\n}\n\n// инъекция (main.ts / тесты):\nprovide(productsPortKey, isTest ? mockProducts : httpProducts)`,
    },
  },
})
