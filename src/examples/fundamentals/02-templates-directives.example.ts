import { defineExample } from '../types'
import demoCode from './02-templates-directives/Demo.vue?raw'

export default defineExample({
  title: 'Шаблоны и директивы',
  summary: 'v-bind, v-on, v-html, v-once, :class / :style — декларативный слой Vue.',
  demo: () => import('./02-templates-directives/Demo.vue'),
  code: demoCode,
  content: {
    intro:
      'Шаблон Vue — это HTML с реактивными расширениями. <b>Директива</b> — атрибут с префиксом <code>v-</code>, который Vue превращает в операцию: <code>v-bind</code> привязывает атрибут к данным, <code>v-on</code> подписывается на событие, <code>v-html</code> вставляет разметку, <code>v-once</code> замораживает узел. Всё в шаблоне декларативно: вы описываете <i>что</i> показать, а Vue сама синхронизирует DOM с состоянием.',
    howItWorks:
      'Интерполяция <code>{{ }}</code> и директивы привязок компилируются в render-функцию. <code>:class</code> и <code>:style</code> принимают объекты/массивы и объединяются с обычными атрибутами — Vue сама вычисляет итоговую строку. <code>v-bind="obj"</code> разворачивает объект в атрибуты поэлементно, поэтому его можно обновлять реактивно. <code>v-once</code> говорит компилятору сгенерировать узел с флагом «не обновлять» — Vue больше не будет сравнивать его с VDOM при ререндерах.',
    mistakes: [
      {
        title: 'v-html для пользовательского контента',
        text: 'v-html вставляет разметку как есть. Данные от пользователя (комментарии, ники, API) — это готовый XSS: злонамеренный <code>&lt;img onerror&gt;</code> выполнит скрипт в контексте вашего приложения.',
        code: `<div v-html="comment.body" /> <!-- ❌ XSS -->`,
        fix: `<!-- ✅ текст экранируется автоматически -->\n<div>{{ comment.body }}</div>\n\n<!-- если нужна безопасная разметка — парси через DOMPurify -->\n<div v-html="sanitize(comment.body)" />`,
        fixText: 'v-html допустим только для данных, которым вы доверяете на 100% (например, Markdown, прогоняемый через sanitizer).',
      },
      {
        title: 'Смешение v-if и v-for на одном элементе',
        text: 'Директивы одного элемента: v-if вычисляется первым и не имеет доступа к переменной из v-for — Vue 3 выбросит предупреждение, а в Vue 2 это была логическая ошибка.',
        code: `<Item v-for="i in list" v-if="i.visible" /> <!-- ❌ -->`,
        fix: `<!-- ✅ отфильтруй данные -->\n<Item v-for="i in visibleList" :key="i.id" />\n\n<!-- ✅ или оберни в template -->\n<template v-for="i in list" :key="i.id">\n  <Item v-if="i.visible" :item="i" />\n</template>`,
      },
    ],
    nuances: [
      'Директивы <b>выполняются в порядке их появления в DOM</b>, но v-if имеет приоритет над остальными на том же узле.',
      '<code>:style</code> с объектом <b>объединяется</b> с инлайн-стилем из класса, а <code>v-bind="obj"</code> перезаписывает одноимённые атрибуты.',
      '<code>v-html</code> и <code>v-text</code> нельзя комбинировать с интерполяцией на одном элементе — интерполяция игнорируется.',
      'Vue <b>не санитизирует</b> содержимое v-html: санитизация — ответственность приложения.',
      '<code>v-once</code> полезен для статичного контента в тяжёлых списках: узел исключается из последующих патчей VDOM.',
    ],
    bestPractices: [
      'Предпочитай <code>{{ }}</code> любым другим способам вставки текста — это экранирование и статическая проверка шаблона.',
      'Классы через <code>:class</code>, статичные классы — через <code>class</code>; никогда не собирай className строкой вручную.',
      'Вычисляй производные значения в <code>computed</code>, а не внутри шаблона: шаблон должен быть «глупым».',
      'Для сложных условий вводи вычисляемые переменные (<code>const isEmpty = computed(...)</code>) — шаблон читается как английский.',
    ],
    whenToUse:
      '<strong>Директивы</strong> — инструмент первого уровня: пока задача решается v-if/v-for/v-bind/v-on, код остаётся декларативным и оптимизируемым. Пользовательские директивы (<code>v-ripple</code>, <code>v-click-outside</code>) нужны, когда одна и та же DOM-манипуляция размазана по многим местам.',
    alternative: {
      title: 'Когда директивы — не лучший выбор',
      text: 'Если привязка содержит логику (условия, форматирование, вычисления) — вынеси её в computed или метод. Шаблон с кашей из тернарников внутри :class хуже читается, чем одноимённый computed с понятным именем.',
      code: `<!-- ❌ логика в шаблоне -->\n<div :class="(a ? 'x' : '') + (b ? ' y' : '')">\n\n<!-- ✅ -->\nconst classes = computed(() => ['x', b.value && 'y'])\n<div :class="classes">`,
    },
    advanced: {
      title: 'Свои директивы через app.directive()',
      text: 'Жизненный цикл директивы — хуки <code>created / beforeMount / mounted / beforeUpdate / updated / beforeUnmount / unmounted</code>. Хуки mounted/beforeMount получают элемент напрямую; обновления идут с <code>binding.instance</code>. Компонентная директива может использоваться и в шаблонах, и в render-функциях.',
      code: `app.directive('focus', {\n  mounted(el) {\n    el.focus()\n  },\n  updated(el, binding) {\n    if (binding.value) el.focus()\n  },\n})\n\n// использование: <input v-focus="shouldFocus" />`,
    },
  },
})
