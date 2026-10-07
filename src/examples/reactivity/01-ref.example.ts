import { defineExample } from '../types'
import demoCode from './01-ref/Demo.vue?raw'

export default defineExample({
  title: 'ref — реактивная ссылка',
  summary: 'ref() оборачивает значение в объект с .value; авто-распаковка в шаблоне, потеря реактивности при деструктуризации.',
  demo: () => import('./01-ref/Demo.vue'),
  code: demoCode,
  content: {
    intro:
      '<b>ref()</b> — базовый примитив реактивности Vue 3. Он принимает любое значение (число, строку, объект, DOM-элемент) и возвращает объект-обёртку с единственным полем <code>.value</code>. Присвоение <code>count.value = 5</code> уведомляет всех подписчиков и вызывает ререндер. В шаблоне верхнеуровневые ref распаковываются автоматически — писать <code>.value</code> не нужно. В демо: счётчик, ручной double и массив-история — три независимых источника состояния.',
    howItWorks:
      'ref возвращает объект класса RefImpl: <code>get value()</code> регистрирует текущий активный эффект (компонентный рендер, computed, watch) как зависимость, <code>set value()</code> — уведомляет эффекты. Для <b>объектных</b> значений ref вызывает внутри reactive() — поэтому <code>ref({ x: 1 }).value.x = 2</code> тоже реактивно. Именно обёртка решает главную проблему JS: в JS примитивы передаются по значению, и обычная переменная не может «уведомить» о своей смене — обёртка может. В шаблоне компилятор добавляет <code>.value</code> сам; в <code>&lt;script setup&gt;</code> верхнеуровневые ref доступны в шаблоне как значения.',
    mistakes: [
      {
        title: 'Забыть .value в script',
        text: 'Присвоение обычной переменной не обновляет ничего: «count = 5» просто переназначает локальную переменную, ref молчит, ререндера нет.',
        code: `const count = ref(0)\nfunction inc() {\n  count++ // ❌ инкремент локальной переменной, ref не тронут\n}`,
        fix: `const count = ref(0)\nfunction inc() {\n  count.value++ // ✅\n}`,
        fixText: 'TypeScript даже не предупредит: count — это Ref<number>, а не number.',
      },
      {
        title: '.value в шаблоне или наоборот',
        text: 'В шаблоне верхнеуровневые ref распаковываются: {{ count }} — уже число. Написав {{ count.value }}, вы получите «[object Object]» (или undefined для примитивов). Внутри вложенных объектов (reactive) распаковки нет — там .value нужно.',
        code: `<p>{{ count.value }}</p> <!-- ❌ в шаблоне уже распаковано -->`,
        fix: `<p>{{ count }}</p> <!-- ✅ -->\n<!-- но: state.count.value, если state — reactive-объект с ref внутри -->`,
      },
      {
        title: 'Деструктуризация ref из composable',
        text: 'Деструктуризация снимает обёртку: вы получаете обычное значение-снимок, не связанное с источником. Реактивность теряется.',
        code: `function useCounter() {\n  const count = ref(0)\n  return { count }\n}\nconst { count } = useCounter() // ❌ count теперь просто число 0`,
        fix: `const { count } = useCounter()\n// ✅ либо не деструктурируйте, либо используйте toRefs:\nconst { count } = toRefs(useCounter())`,
      },
    ],
    nuances: [
      '<b>ref(объект)</b> внутри делает reactive() над значением: глубоко реактивно. <code>shallowRef</code> отменяет это.',
      'Замена <code>list.value = [...list.value]</code> уведомляет даже при не-глубоких изменениях — надёжный способ «дёрнуть» shallowRef.',
      '<b>Шаблонная распаковка</b> работает только для верхнеуровневых свойств рендер-контекста; в массивах и вложенных объектах ref не распаковывается.',
      '<code>isRef(x)</code> / <code>unref(x)</code> — утилиты для функций, принимающих «ref или значение».',
      'В <code>&lt;script setup&gt;</code> можно включить <b>Reactivity Transform</b>-подобное поведение через <code>$ref</code>... нет — убрано из Vue; стандарт — явный .value.',
      'ref от DOM-элемента: <code>const el = ref&lt;HTMLElement | null&gt;(null)</code> — тип обязателен, иначе TS скажет «не существует value.getBoundingClientRect».',
    ],
    bestPractices: [
      'Для состояния уровня компонента по умолчанию — <b>ref</b> (даже для объектов): единообразно, работает с .value, не теряет реактивность при передаче.',
      'Называйте ref-состояние существительными (count, users), вычисляемое — с префиксом (filteredUsers, totalPrice).',
      'Группируйте связанные ref в один reactive-объект, когда полей становится много (form, filter).',
      'В composables возвращайте объект с ref, а не распакованные значения — потребитель сам решит, распаковывать ли (toRefs).',
      'Не смешивайте ref и reactive в одном модуле без причины — выбирайте один стиль на проект.',
    ],
    whenToUse:
      '<strong>ref</strong> — выбор по умолчанию для любого локального состояния: счётчики, флаги, строки ввода, массивы, DOM-ссылки. Это «атомарное состояние» Vue. Для вычисляемых из других значений используйте computed, для группировки связанных полей — reactive, для глобального состояния — store (Pinia).',
    alternative: {
      title: 'reactive для группы полей',
      text: 'Когда полей много и они логически связаны, reactive-объект избавляет от десятков .value.',
      code: `const form = reactive({\n  email: '',\n  password: '',\n  remember: false,\n})\nform.email = 'a@b.c' // без .value`,
    },
    advanced: {
      title: 'Кастомные ref: customRef',
      text: '<code>customRef</code> даёт контроль над track и trigger — так пишут ref с debounce: значение обновляется не мгновенно, а после паузы.',
      code: `import { customRef } from 'vue'\n\nfunction debouncedRef(initial: string, ms = 300) {\n  let value = initial\n  let timer: ReturnType<typeof setTimeout>\n  return customRef((track, trigger) => ({\n    get() { track(); return value },\n    set(v: string) {\n      clearTimeout(timer)\n      timer = setTimeout(() => { value = v; trigger() }, ms)\n    },\n  }))\n}\n\nconst query = debouncedRef('', 400)`,
    },
  },
})
