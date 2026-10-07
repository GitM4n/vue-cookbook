import { defineExample } from '../types'
import demoCode from './06-shallow/Demo.vue?raw'

export default defineExample({
  title: 'shallowRef, shallowReactive и triggerRef',
  summary: 'Поверхностная реактивность: отслеживается только ссылка; когда глубокая — избыточна; triggerRef для ручного пинка.',
  demo: () => import('./06-shallow/Demo.vue'),
  code: demoCode,
  content: {
    intro:
      'Глубокая реактивность не бесплатна: Vue проксирует <b>каждый</b> вложенный объект при первом обращении. Для больших массивов записей, неизменяемых структур или внешних библиотек это лишняя работа. <b>shallowRef</b> и <b>shallowReactive</b> отслеживают только верхний уровень: замена <code>.value</code> / полей первого уровня уведомляет, мутации вглубь — нет. <b>triggerRef</b> позволяет уведомить вручную, не меняя ссылку. В демо разница видна наглядно: мутация внутри shallowRef не обновляет UI.',
    howItWorks:
      'shallowRef — обычный ref, но без внутреннего reactive() для значения: <code>get/set value</code> работают как у ref, а вот проксирования объекта не происходит. Уведомление срабатывает только на запись <code>.value</code>. shallowReactive проксирует только поля первого уровня; вложенные объекты остаются «сырыми» и не регистрируют зависимости. triggerRef(shallow) принудительно запускает эффекты, подписанные на ref — спасает, когда объект мутируется кем-то ещё (например, библиотекой) и заменить ссылку нельзя.',
    mistakes: [
      {
        title: 'Мутировать shallowRef вглубь и ждать обновления',
        text: 'Изменение вложенного поля проходит «мимо» системы реактивности: данные меняются, UI — нет. Классическая ловушка при переходе с ref на shallowRef ради оптимизации.',
        code: `const state = shallowRef({ list: [] })\nstate.value.list.push(item) // ❌ UI не обновится`,
        fix: `state.value = { list: [...state.value.list, item] } // ✅ замена ссылки\n// или triggerRef(state) после мутации`,
      },
      {
        title: 'shallowReactive + ожидание глубокой валидации',
        text: 'Поля первого уровня реактивны, вложенные — нет. Для форм/стейта с вложенностью shallowReactive не подходит.',
        code: `const form = shallowReactive({ address: { city: '' } })\nform.address.city = 'Москва' // ❌ не обновит`,
        fix: `const form = reactive({ address: { city: '' } }) // ✅ глубокая\n// или сделайте каждый уровень shallowReactive вручную`,
      },
      {
        title: 'Использовать shallow «на всякий случай»',
        text: 'Оптимизация без измерения: на типичных объёмах данных (сотни элементов) глубокая реактивность не является узким местом. Сначала профилируйте.',
        code: `const count = shallowRef(0) // ❌ бессмысленно: примитив и так shallow`,
        fix: `// shallow имеет смысл для: больших массивов, immutable-структур,\n// инстансов классов, данных из внешних библиотек\nconst rows = shallowRef<Row[]>(fetchedRows)`,
      },
    ],
    nuances: [
      '<code>shallowRef</code> для примитивов ведёт себя как обычный ref (им и является по сути).',
      'Мутация внутри shallowRef не «сломана» — данные меняются; ломается только уведомление. Поэтому баги от неё коварны: UI просто «отстаёт».',
      'triggerRef не меняет значение — только дёргает эффекты; полезно после внешних мутаций (быстрая перерисовка canvas-обёртки).',
      '<code>isReactive(shallowRef({}).value)</code> → false: вложенность действительно не проксирована.',
      'С Vue 3.5 <code>onTriggerRef</code>-подобные утилиты для отладки — удобно видеть, кто и когда дернул ref.',
      'Комбинация <code>shallowRef + вычисляемые производные через computed</code> — частый паттерн: хранить сырые данные shallow, агрегировать computed-ом.',
    ],
    bestPractices: [
      'shallowRef — для <b>больших списков</b> данных, где обновление идёт заменой массива (immutable-style).',
      'Для инстансов сторонних библиотек (map, chart, editor) — shallowRef или markRaw: не проксируем чужие объекты.',
      'Правило команды: если shallowRef — то всегда замена .value, никогда мутации; зафиксируйте в code style.',
      'triggerRef — деликатный инструмент: используйте, когда нельзя поменять ссылку, и документируйте почему.',
    ],
    whenToUse:
      '<strong>shallow-варианты</strong> нужны при проблемах производительности с глубоким проксированием (тысячи записей), при интеграции с внешними state-менеджерами/классами и при immutable-подходе, где данные всегда заменяются целиком. В обычных формах и небольших списках они не нужны.',
    alternative: {
      title: 'Обычный ref + замена значения',
      text: 'Даже без shallow можно работать в immutable-стиле: заменять .value новым объектом. Тогда shallowRef — лишь микро-оптимизация поверх уже корректного кода.',
      code: `const rows = ref<Row[]>([])\nfunction update(id: string, patch: Partial<Row>) {\n  rows.value = rows.value.map(r => (r.id === id ? { ...r, ...patch } : r))\n}`,
    },
    advanced: {
      title: 'shallowRef для дерева с точечным triggerRef',
      text: 'Для больших деревьев (редактор, ФС) хранят корень в shallowRef, мутируют узлы напрямую, а после операции дергают triggerRef — один пинок на пакет изменений вместо проксирования тысяч узлов.',
      code: `const tree = shallowRef<TreeNode>(initialTree)\n\nfunction renameNode(id: string, name: string) {\n  findNode(tree.value, id).name = name // мутируем напрямую — дешёво\n  triggerRef(tree) // одно уведомление на весь пакет\n}`,
    },
  },
})
