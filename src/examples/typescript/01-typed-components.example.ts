import { defineExample } from '../types'
import demoCode from './01-typed-components/Demo.vue?raw'
import listCode from './01-typed-components/TypeList.vue?raw'

const typedCode = `// ===== Типизированные props (type-only объявление) =====
const props = defineProps<{
  user: User
  size?: 'sm' | 'md' | 'lg'
  items: Product[]
  onUpdate?: (v: string) => void
}>()
// + withDefaults (или дефолты через реактивный объект в 3.5+):
const props = withDefaults(defineProps<{ size?: 'sm' | 'md' }>(), { size: 'md' })

// ===== Типизированные emits (кортежи аргументов) =====
const emit = defineEmits<{
  save: [value: string, meta: SaveMeta]
  cancel: []
}>()
emit('save', 'x', { at: Date.now() }) // ✅ проверено
emit('save', 42)                       // ❌ TS error

// ===== Типизированный template ref =====
const input = useTemplateRef<HTMLInputElement>('search')
input.value?.focus() // ✅ known type

// ===== Component ref: тип экземпляра =====
const form = useTemplateRef<InstanceType<typeof MyForm>>('form')
form.value?.validate()`

export default defineExample({
  title: 'Типизированные props, emits, slots и generics',
  summary: 'Type-only объявление пропсов и событий, типизированные слоты, generic-компоненты, InstanceType для ref-ов.',
  demo: () => import('./01-typed-components/Demo.vue'),
  code: `// ============ Demo.vue (потребитель) ============\n${demoCode}\n\n// ============ TypeList.vue (generic-компонент) ============\n${listCode}\n\n// ============ шпаргалка типизации ============\n${typedCode}`,
  content: {
    intro:
      'TypeScript в Vue работает на всех уровнях: <b>props</b> (type-only объявление <code>defineProps&lt;{...}&gt;()</code>), <b>emits</b> (кортежи аргументов), <b>slots</b> (типы слот-параметров выводятся из пропсов), <b>template refs</b> (<code>useTemplateRef&lt;HTMLInputElement&gt;</code>). Вершина — <b>generic-компоненты</b>: <code>&lt;script setup generic="T"&gt;</code> делает компонент типо-параметричным, как функцию. В демо TypeList&lt;T&gt; выводит T из массива users, и слот знает о поле item.name — опечатка подсветится в шаблоне.',
    howItWorks:
      'Компилятор SFC разбирает type-only defineProps в рантайм-пропсы (имена + required + дефолты через withDefaults), сохраняя точные TS-типы. defineEmits&lt;{ event: [args] }&gt; возвращает типизированный emit: вызов с неверными аргументами — ошибка компиляции. Типы слотов выводятся из <code>&lt;template #item="{ item }"&gt;</code>: item получает тип T элемента списка. generic="T extends {id: number}" объявляет параметр, доступный во всех макросах и вычислениях; на теге компонента T выводится из переданного массива (inference работает в оба конца).',
    mistakes: [
      {
        title: 'Runtime-объявление вместо type-only',
        text: 'Object-синтаксис ({ type: String, required: true }) слабее: any-совместимый, без union-типов и generics. Type-only строго и кратко.',
        code: `defineProps({ user: { type: Object as PropType<User>, required: true } }) // старый стиль`,
        fix: `defineProps<{ user: User }>() // ✅ короче и строже`,
      },
      {
        title: 'Слабые типы emits',
        text: 'defineEmits([\'change\']) или { change: (v: any) => true } теряют проверку payload. Всегда кортежи.',
        code: `const emit = defineEmits(['change'])\nemit('change', 1, 2, 3) // ❌ всё разрешено`,
        fix: `const emit = defineEmits<{ change: [value: number] }>()\nemit('change', 1, 2) // ❌ ошибка — только 1 аргумент`,
      },
      {
        title: 'as any в шаблоне вместо исправления типов',
        text: 'Каждый «any ради скорости» отключает проверку целого поддерева. Правильные типы в API-слое и props-контрактах убирают желание кастовать.',
        code: `{{ (item as any).weirdField }} <!-- ❌ отключает проверки -->`,
        fix: `// ✅ опишите item правильно: type Item = { weirdField?: string }`,
      },
    ],
    nuances: [
      'Типы props в шаблоне и родителе проверяются <b>на обеих сторонах</b>: потребитель увидит ошибку передачи.',
      'withDefaults или деструктуризация с дефолтами (3.5+) — два способа значений по умолчанию.',
      'generic-компоненты поддерживают ограничения (<code>generic="T extends Identifiable"</code>) и несколько параметров.',
      '<code>InstanceType&lt;typeof Comp&gt;</code> даёт тип экземпляра — доступен только то, что expose-нуто через defineExpose.',
      'Slot-типы выводятся автоматически; для библиотек — Slot тип из vue (VNode[]-фабрики).',
      'vue-tsc обязателен: обычный tsc не понимает .vue файлы и пропустит ошибки шаблонов.',
    ],
    bestPractices: [
      'Type-only defineProps/defineEmits — по умолчанию; PropType-касты только для сложных runtime-валидаций.',
      'Типы API-ответов — единый источник (api/types.ts), переиспользуемые в props/store/slots.',
      'Никаких any в контрактах компонентов: unknown + narrowing, если форма данных неясна.',
      'Generic-компоненты для списков/таблиц/select-ов — типизация «едет» от данных к слотам.',
      'CI с vue-tsc --noEmit — единственный способ поймать ошибки шаблонов.',
    ],
    whenToUse:
      '<strong>Полная типизация</strong> — любой новый код: стоимость контракта минимальна, а выигрыш в рефакторинге огромен. <strong>Generic-компоненты</strong> — переиспользуемые списки, таблицы, формы, select-ы. Ослабление типов — только на границах с第三方 (unknown + валидация).',
    alternative: {
      title: 'JSDoc-типы для JS-проектов',
      text: 'Без миграции на TS часть безопасности даёт JSDoc: @props-аннотации и checkJs — компромисс для легаси.',
      code: `// @ts-check\n/**\n * @props {{ user: { id: number, name: string } }}\n */`,
    },
    advanced: {
      title: 'Типизация defineModel и storeToRefs',
      text: 'defineModel выводит тип из generic; storeToRefs сохраняет точные Ref-типы state/getters — вместе они дают end-to-end типобезопасность от стора до слота.',
      code: `// model типизирован автоматически
const price = defineModel<number>('price', { default: 0 })

// Pinia: state → Ref<T>, getters → ComputedRef<T> без аннотаций
const cart = useCartStore()
const { items, totalPrice } = storeToRefs(cart)
// items: Ref<CartItem[]>, totalPrice: ComputedRef<number>

// тип события компонента выводится в родителе:
// <MyInput @update:model-value="(v: string) => ..."> ✅`,
    },
  },
})
