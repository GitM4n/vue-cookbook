import { defineExample } from '../types'
import demoCode from './11-events/Demo.vue?raw'

export default defineExample({
  title: 'Обработка событий',
  summary: '@click, модификаторы (.stop/.prevent/.once), payload события и inline-выражения.',
  demo: () => import('./11-events/Demo.vue'),
  code: demoCode,
  content: {
    intro:
      'Синтаксис <b>v-on</b> (короткая форма <b>@</b>) привязывает обработчики к DOM-событиям: <code>@click</code>, <code>@input</code>, <code>@keydown.enter</code>. Значением может быть метод, инлайн-выражение или несколько обработчиков массивом. Важная часть — <b>модификаторы</b>: <code>.stop</code>, <code>.prevent</code>, <code>.once</code>, <code>.self</code>, клавиатурные <code>.enter/.esc/.tab</code> и системные <code>.ctrl/.alt/.meta</code>. В демо видно, как payload (число, объект события) передаётся в метод и как <code>.stop</code> разрывает всплытие.',
    howItWorks:
      'Обработчик — обычная функция. Без аргументов Vue передаёт в неё само событие (<code>@click="onClick"</code>), поэтому при необходимости получить и данные, и событие используют специальную переменную <b>$event</b>: <code>@click="onClick(5, $event)"</code>. Инлайн-выражения (<code>@click="count = 0"</code>) компилируются в функцию, и в них доступны всё из <code>&lt;script setup&gt;</code>. Модификаторы — это сгенерированные обёртки: <code>.stop</code> превращается в <code>e.stopPropagation()</code>, <code>.prevent</code> — в <code>e.preventDefault()</code>, <code>.enter</code> — в проверку <code>e.key === \'Enter\'</code>. <code>.once</code> после первого вызова снимает обработчик.',
    mistakes: [
      {
        title: 'Вызывать метод вместо передачи ссылки',
        text: 'Скобки в @click="onClick(5)" создают вызов немедленно — метод исполнится один раз при рендере, а не по клику. Для передачи аргументов используйте стрелочный стиль или $event.',
        code: `<button @click="onClick(5)">   <!-- ❌ выполняется при рендере -->\n<button @click="onClick">        <!-- ✅ передана функция -->\n<button @click="() => onClick(5)"> <!-- ✅ аргумент + ленивость -->\n<button @click="onClick(5, $event)"> <!-- ✅ аргумент + событие -->`,
      },
      {
        title: 'Путать $event в разных типах обработчиков',
        text: 'В нативных обработчиках $event — это MouseEvent/KeyboardEvent. В кастомных событиях компонентов $event — первый аргумент emit. Подмена типов при копипасте приводит к обращению к несуществующим полям.',
        code: `<!-- ❌ тут $event — emit-полезная нагрузка, не MouseEvent -->\n<MyInput @update:model-value="text = $event.target.value" />`,
        fix: `<!-- ✅ v-model сам разрулит update:modelValue -->\n<MyInput v-model="text" />`,
      },
      {
        title: 'Класть сложную логику в инлайн-выражение',
        text: 'Инлайн-обработчик сложно тестировать и невозможно переиспользовать; длинные выражения в шаблоне — признак логики, которую нужно вынести в методы или composable.',
        code: `@click="cart.push(item); total += item.price; toast('ok')" <!-- ❌ -->`,
        fix: `@click="addItem(item)" <!-- ✅ -->`,
      },
    ],
    nuances: [
      'Порядок модификаторов важен: <code>@click.prevent.self</code> блокирует <b>все</b> клики внутри, а <code>@click.self.prevent</code> — только клики по самому элементу.',
      '<code>.passive</code> сообщает браузеру, что preventDefault вызван не будет — критично для <code>scroll/touchmove</code>: слушатель не блокирует прокрутку.',
      'Клавиатурные модификаторы работают через <code>KeyboardEvent.key</code> в kebab-case: <code>@keyup.page-down</code>, <code>@keydown.arrow-down</code>.',
      'Системные модификаторы (.ctrl/.meta/.shift) в macOS сопоставляйте с учётом <code>metaKey</code> — у пользователей Mac Cmd вместо Ctrl.',
      'Точное совпадение модификаторов даёт <code>.exact</code>: <code>@click.ctrl.exact</code> сработает только при одном Ctrl, без других зажатых клавиш.',
      'Несколько обработчиков: <code>@click="[first, second]"</code> — оба вызываются по порядку.',
    ],
    bestPractices: [
      'Именуйте методы по действию (<b>addToCart</b>, <b>submitForm</b>), а не по событию (<b>onClick</b>) — код читается как сценарий.',
      'Пишите <code>.prevent</code> вместо <code>e.preventDefault()</code> в теле обработчика: интент виден в шаблоне.',
      'Не злоупотребляйте <code>.stop</code>: всплытие — штатный механизм, глушить его стоит только для реальной изоляции (модалки, drag-области).',
      'Для one-shot действий (диплой, оплата) используйте <code>.once</code> или флаг busy, чтобы исключить дубли.',
    ],
    whenToUse:
      '<strong>Обработка событий</strong> — glue между DOM и состоянием. Нативные события — через @-обработчики; события <em>компонентов</em> — через defineEmits и слушатели на теге компонента. Если обработчиков на элементе становится больше 2–3 и появляется логика — сигнал вынести её в метод или composable.',
    alternative: {
      title: 'Сигнатурные события через defineEmits',
      text: 'Для переиспользуемых компонентов не полагайтесь на нативные события DOM — объявляйте собственные семантические события (submit, change), и родитель подписывается так же, как на нативные.',
      code: `const emit = defineEmits<{ change: [value: number] }>()\nemit('change', 42)\n\n<!-- родитель: <MyControl @change="onChange" /> -->`,
    },
    advanced: {
      title: 'Пузырение кастомных событий и v-on-объект',
      text: 'Объектный синтаксис <code>v-on="{ mousedown: onDown, mouseup: onUp }"</code> вешает пачку слушателей сразу — удобно в headless-компонентах и для передачи сквозь props. Плюс все нераспознанные @-атрибуты попадают в $attrs и автоматически «проваливаются» на корневой элемент дочернего компонента.',
      code: `<!-- DemoInput.vue: слушатели с родителя попадут на <input> -->\n<input v-bind="$attrs" />\n\n<!-- родитель получает и focus, и blur без явных emits -->\n<DemoInput @focus="..." @blur="..." />`,
    },
  },
})
