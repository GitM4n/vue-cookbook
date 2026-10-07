import { defineExample } from '../types'
import demoCode from './12-v-model/Demo.vue?raw'

export default defineExample({
  title: 'Двустороннее связывание: v-model',
  summary:
    'v-model на input/select/textarea/checkbox — сахар над value + update-событием; модификаторы .lazy/.number/.trim.',
  demo: () => import('./12-v-model/Demo.vue'),
  code: demoCode,
  content: {
    intro:
      '<b>v-model</b> — синтаксический сахар для двусторонней связи: на нативном <code>&lt;input&gt;</code> он раскрывается в <code>:value</code> + <code>@input</code>, на <code>checkbox/radio</code> — в <code>:checked</code> + <code>@change</code>, на <code>select</code> — в <code>:value</code> + <code>@change</code>. Направление «из DOM в состояние» выполняет событие, «из состояния в DOM» — пропс. В демо — текст, textarea, select, checkbox-группа и три модификатора: <code>.lazy</code> (синхронизация по change, а не input), <code>.number</code> (приведение к числу) и <code>.trim</code> (обрезка пробелов).',
    howItWorks:
      'Компилятор видит <code>v-model="text"</code> и генерирует пару привязок: значение состояния передаётся в элемент, а в обработчике события записывается обратно. У <code>input type="text"</code> событие — <code>input</code> (каждый символ), поэтому модификатор <code>.lazy</code> переключает его на <code>change</code>. Checkbox-группа с одним массивом в состоянии: Vue сам добавляет/убирает значения из массива по <code>value</code> чекбокса. На компонентах v-model раскрывается в проп <b>modelValue</b> и событие <b>update:modelValue</b> — ровно та же механика, но её объявляет сам компонент.',
    mistakes: [
      {
        title: 'Ожидать, что v-model работает с не-реактивным значением',
        text: 'v-model мутирует то, что ему передано. Если передать обычную переменную (не ref/не поле reactive), запись «успешно» произойдёт, но реакции и ререндера не будет — значение как будто «не обновляется».',
        code: `let name = ''\n<input v-model="name" /> <!-- ❌ name не реактивен -->`,
        fix: `const name = ref('')\n<input v-model="name" /> <!-- ✅ -->`,
      },
      {
        title: 'v-model на пропсе внутри компонента',
        text: 'Пропсы мутировать нельзя, поэтому <code>v-model="props.title"</code> внутри дочернего компонента не работает и считается антипаттерном «мутации пропа».',
        code: `<!-- ❌ внутри Child.vue -->\n<input v-model="title" />\ndefineProps<{ title: string }>()`,
        fix: `const model = defineModel<string>({ default: '' })\n<input v-model="model" /> <!-- ✅ proxy-обёртка над props+emit -->`,
        fixText: 'defineModel (Vue 3.4+) — самый короткий корректный вариант; до него писали computed с get/set.',
      },
      {
        title: 'Дублировать .number с number-полем ввода',
        text: '<code>input type="number"</code> всё равно возвращает строку в value. Без .number состояние получает строку, и арифметика складывает строки («1» + 2 = «12»).',
        code: `<input v-model="age" type="number" /> <!-- ❌ age = "42" -->`,
        fix: `<input v-model.number="age" type="number" /> <!-- ✅ age = 42 -->`,
      },
    ],
    nuances: [
      '<b>IME-составление</b> (китайский/японский ввод): v-model не обновляет состояние, пока идёт композиция текста — это сделано намеренно, чтобы не ломать ввод.',
      'Модификаторы можно комбинировать: <code>v-model.trim.lazy</code>. Порядок значения не имеет, применяются все.',
      'На нативных элементах <code>v-model</code> игнорирует начальное <code>value</code>/<code>checked</code> из разметки — источник истины только состояние.',
      'В <code>select multiple</code> v-model работает с массивом значений.',
      'Собственный v-model компонента можно переименовать: <code>v-model:title="t"</code> → проп <code>title</code>, событие <code>update:title</code>; модификаторы приедут в проп <code>titleModifiers</code>.',
    ],
    bestPractices: [
      'По умолчанию — обычный v-model; <code>.lazy</code> включайте для тяжёлой валидации/поиска, где не нужна реакция на каждый символ.',
      'Для числовых полей всегда <code>.number</code> и проверка NaN при пустой строке.',
      'Не стройте «третье направление» из watch на v-model — если нужно реагировать на изменения, используйте computed или событие input напрямую.',
      'Для форм из многих полей используйте один реактивный объект: <code>const form = reactive({ name: "", age: 0 })</code> и <code>v-model="form.name"</code>.',
    ],
    whenToUse:
      '<strong>v-model</strong> — стандарт для любого ввода: текст, числа, выбор, чекбоксы, слайдеры, а также собственные инпут-компоненты (через defineModel). Он не подходит, когда нужно обрабатывать каждый ввод как событие с побочным эффектом (автосохранение, аналитика) — тогда явные <code>:value</code> + <code>@input</code> дают полный контроль.',
    alternative: {
      title: 'Явные value + input',
      text: 'Когда нужно «перехватить» ввод (валидация, маска, дебаунс), разворачивайте сахар обратно — так видно каждую операцию.',
      code: `<input :value="query" @input="onInput" />\n\nconst query = ref('')\nfunction onInput(e: Event) {\n  const v = (e.target as HTMLInputElement).value\n  query.value = v.toLowerCase()\n}`,
    },
    advanced: {
      title: 'Собственный v-model с модификаторами',
      text: 'Компонент может поддерживать свои модификаторы (capitalize, trim), читая объект <code>modelModifiers</code> из props, и применять трансформацию при emit.',
      code: `const [model, modifiers] = defineModel<string>({\n  set(value) {\n    if (modifiers.capitalize) return value.charAt(0).toUpperCase() + value.slice(1)\n    return value\n  },\n})\n\n<!-- родитель: <MyInput v-model.capitalize="name" /> -->`,
    },
  },
})
