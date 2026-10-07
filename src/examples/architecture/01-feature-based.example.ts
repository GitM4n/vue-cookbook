import { defineExample } from '../types'
import demoCode from './01-feature-based/Demo.vue?raw'

const featureCode = `// features/cart/index.ts — публичный API фичи
export { useCart } from './composables/useCart'
export { CartButton } from './components/CartButton.vue'
export type { CartItem } from './types'
// внутренности НЕ экспортируются: components/CartIcon.vue,
// api/serializers.ts — приватны, их можно менять свободно

// Правило зависимостей:
//   app/       → может импортировать всё
//   features/a → shared + свой код + публичный API других features
//   shared     → ничего из проекта (только внешние пакеты)

// features/checkout/composables/useCheckout.ts:
import { useCart } from '@/features/cart'      // ✅ публичный API
import { useCartInternals } from '@/features/cart/composables/…' // ❌ запрещено

// Эффект: границы фич = границы рефакторинга.
// Внутри cart/ можно переименовать файлы целиком —
// снаружи сломается только если изменился index.ts.`

export default defineExample({
  title: 'Feature-based архитектура',
  summary: 'Группировка по домену вместо типов: features/*/ с компонентами, композаблами, api и публичным API через index.ts.',
  demo: () => import('./01-feature-based/Demo.vue'),
  code: `// ============ Demo.vue (обзор структур) ============\n${demoCode}\n\n// ============ фича и её границы ============\n${featureCode}`,
  content: {
    intro:
      'Две классические организации кода: <b>по типам</b> (components/, composables/, stores/ — всё вперемешку) и <b>по фичам</b> (features/cart/ — всё о корзине в одном месте). Фиче-подход выигрывает с ростом проекта: изменение фичи не требует прыжков по пяти папкам, границы фич — естественные границы рефакторинга, а <b>публичный API через index.ts</b> защищает внутренности от чужих импортов. В демо — обе структуры одного и того же приложения рядом.',
    howItWorks:
      'Фича — вертикальный срез домена: свои компоненты, композаблы, api-клиент, типы. Три слоя: <b>app/</b> (сборка, роутер, провайдеры) → <b>features/</b> (домен) → <b>shared/</b> (UI-кит, утилиты без домена). Зависимости идут строго вниз; между фичами — только через <code>index.ts</code> (публичный контракт). Это даёт два эффекта: приватность внутренностей (меняй свободно) и явные точки связей (импорт чужого index.ts виден в diff-е).',
    mistakes: [
      {
        title: 'Фичи лезут во внутренности друг друга',
        text: 'Импорт features/cart/components/CartIcon.vue из checkout создаёт скрытую связность: переименование внутри cart ломает checkout.',
        code: `import { CartIcon } from '@/features/cart/components/CartIcon.vue' // ❌`,
        fix: `import { CartButton } from '@/features/cart' // ✅ через публичный API\n// или вынесите общий в shared/`,
      },
      {
        title: 'shared превращается в свалку',
        text: 'Всё, что «пригодится всем», уезжает в shared — включая доменное. Правило: shared не знает о домене (никаких Cart, User); доменное — в features.',
        code: `shared/components/UserProfileCard.vue // ❌ домен в shared`,
        fix: `features/user/components/ProfileCard.vue // ✅\n// shared/ui — только Button/Input/Modal`,
      },
      {
        title: 'Фича-монолит без слоёв внутри',
        text: 'Фича на 30 файлов с одной папкой components/ — та же проблема, что и по-типовая структура, но в миниатюре. Внутри большой фичи — те же слои.',
        code: `features/orders/ — 30 файлов в одной куче`,
        fix: `features/orders/\n  components/  composables/  api/  types.ts  index.ts`,
      },
    ],
    nuances: [
      'Фичи не обязаны быть одинаковыми: маленькая — index.ts + один файл; большая — полный срез со слоями.',
      'Циклические зависимости между фичами — сигнал ошибки проектирования: общее (типы, утилиты) уезжает вниз в shared.',
      'Публичный API фичи — контракт: экспортируйте только то, что готов поддерживать.',
      'Роутер можно собирать из фич: каждая фича экспортирует свои маршруты — app/ только собирает.',
      'Стор фичи может жить внутри фичи (features/cart/store.ts) — Pinia не требует папки stores/.',
      'Монорепо-дальше: фичи → пакеты; те же правила границ работают на уровне workspace.',
    ],
    bestPractices: [
      'Начинайте с двух-трёх фич + shared: преждевременное дробление хуже плоской структуры.',
      'Публичный API (index.ts) — обязателен с первого дня: это дёшево сейчас и бесценно потом.',
      'ESLint-правило ограничения импортов (no-restricted-imports / boundaries-плагины) — автоматический контроль границ.',
      'Домен — в фичи, переиспользуемое без домена — в shared, сборка — в app.',
      'Именование фич — существительными домена (cart, checkout, catalog), не «модуль1».',
    ],
    whenToUse:
      '<strong>Фиче-подход</strong> — от ~5+ экранов и команды 2+: окупается на первом же крупном рефакторинге. Для пет-проектов и лендингов плоская структура честнее — фичевые папки на 10 файлов создают шум. Миграция с по-типовой — постепенная: по одной фиче за раз.',
    alternative: {
      title: 'Плоская структура для малых проектов',
      text: 'До определённого масштаба components/ + composables/ + views/ — проще и быстрее: границы фич ещё не сформировались, а папки уже добавили церемоний.',
      code: `src/\n  components/   composables/   stores/\n  views/        router.ts     App.vue\n// переход на фичи — когда появится второй-третий «домен»`,
    },
    advanced: {
      title: 'Слои внутри фичи: api → domain → ui',
      text: 'Крупная фича разделяется на слои: api/ (сеть, типы ответов) → domain/ (чистая логика: валидация, расчёты — тестируется без Vue) → ui/ (компоненты). Зависимости — строго вниз.',
      code: `features/checkout/\n  api/checkout-api.ts        // fetch, маппинг DTO\n  domain/pricing.ts          // чистые функции расчёта ✅ юнит-тесты без Vue\n  composables/useCheckout.ts // связка: state + api + domain\n  components/CheckoutForm.vue\n  index.ts\n\n// правило: components → composables → { api, domain }\n// domain/ не знает о Vue — переиспользуется где угодно`,
    },
  },
})
