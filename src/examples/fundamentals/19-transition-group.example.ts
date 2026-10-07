import { defineExample } from '../types'
import demoCode from './19-transition-group/Demo.vue?raw'

export default defineExample({
  title: 'TransitionGroup: анимации списков',
  summary:
    'FLIP-анимации перестановок в v-for: tag, .move-класс, leave-active + position:absolute, ключи обязательны.',
  demo: () => import('./19-transition-group/Demo.vue'),
  code: demoCode,
  content: {
    intro:
      '<b>&lt;TransitionGroup&gt;</b> анимирует списки: добавление (enter), удаление (leave) и — главное — <b>перемещение</b> элементов при сортировке/фильтрации через FLIP-технику (класс <code>.{name}-move</code>). В отличие от Transition он рендерит реальный контейнер (или невидимую обёртку) и работает с <b>множеством</b> детей с ключами. В демо голосование пересортирует список, и элементы плавно меняются местами.',
    howItWorks:
      'TransitionGroup отслеживает порядок детей по ключам. Когда элемент меняет позицию, Vue измеряет старую и новую позиции и запускает CSS transition по transform (это и есть FLIP: First-Last-Invert-Play) — класс <code>.list-move</code> задаёт параметры перехода. Enter/leave работают как в Transition: <code>.list-enter-from</code>, <code>.list-leave-to</code>. Ключевой трюк для корректного leave: <code>.list-leave-active { position: absolute }</code> — уходящий элемент перестаёт влиять на поток, и остальные сдвигаются плавно, а не прыжком.',
    mistakes: [
      {
        title: 'Забыть ключи или использовать index',
        text: 'TransitionGroup различает элементы <b>только по ключам</b>. Ключ-индекс делает «перемещение» неразличимым от «замены» — FLIP-анимация не сработает или сработает неверно.',
        code: `<TransitionGroup>\n  <li v-for="(item, i) in items" :key="i">…</li> <!-- ❌ -->\n</TransitionGroup>`,
        fix: `<TransitionGroup>\n  <li v-for="item in items" :key="item.id">…</li> <!-- ✅ -->\n</TransitionGroup>`,
      },
      {
        title: 'Не задать position:absolute для leave-active',
        text: 'Уходящий элемент продолжает занимать место в потоке до конца анимации — остальные «ждут» его и прыгают после. Абсолютное позиционирование высвобождает место сразу.',
        code: `.list-leave-active { transition: all .4s; } /* ❌ элемент держит место */`,
        fix: `.list-leave-active {\n  transition: all .4s;\n  position: absolute; /* ✅ освободил поток — остальные поехали */\n}`,
        fixText: 'Внимание: абсолютный элемент позиционируется относительно ближайшего positioned-предка — дайте контейнеру position: relative.',
      },
      {
        title: 'Ожидать атрибут name-классов без name',
        text: 'Без name классы называются <code>v-move</code>, <code>v-enter-from</code> и т.д. Стили с префиксом list- просто не применятся.',
        code: `<TransitionGroup> <!-- ❌ имя не задано -->`,
        fix: `<TransitionGroup name="list"> <!-- ✅ классы .list-move, .list-enter-from… -->`,
      },
    ],
    nuances: [
      'Атрибут <code>tag</code> задаёт реальный контейнер: <code>&lt;TransitionGroup tag="ul"&gt;</code> — без него рендерится span, что ломает семантику списка.',
      '<code>.{name}-move</code> — класс именно для FLIP-перемещений; enter/leave-классы дополняют его.',
      'При leave с position:absolute элементу сохраняются его координаты — Vue сам выставляет left/top на момент старта.',
      'TransitionGroup не имеет mode — enter и leave идут одновременно, это штатно для списков.',
      'Внутри TransitionGroup нельзя обёртки-дети без ключей: <code>&lt;template v-for&gt;</code> с ключом на template работает.',
      'Большие списки + FLIP = много измерений DOM; на сотнях элементов используйте виртуализацию вместо анимации всех перестановок.',
    ],
    bestPractices: [
      'Всегда <code>tag</code> под семантику (ul/ol/tbody) и стабильные ключи из данных.',
      'Триплет стилей для списков: transition на move+enter-active+leave-active, from/to-классы и absolute у leave-active.',
      'Анимируйте transform/opacity — они дешёвые; height-перестановки вызывают layout-перерасчёт.',
      'Для drag-n-drop сортировок TransitionGroup комбинируется с pointer-событиями или берётся готовая библиотека (sortablejs + vuedraggable).',
    ],
    whenToUse:
      '<strong>TransitionGroup</strong> — для живых списков: чаты с новыми сообщениями, тосты, очереди задач, лидерборды, drag-n-drop канбан, результаты поиска с сортировкой. Не нужен для статичных списков и списков с полной перерисовкой по фильтрам (там важнее виртуализация).',
    alternative: {
      title: 'Анимация только появления',
      text: 'Если элементы только добавляются (новости, лог), достаточно CSS-анимации на самом элементе — без TransitionGroup и без измерений.',
      code: `<li v-for="item in items" :key="item.id" class="appear">…</li>\n\n<style>\n.appear { animation: appear .25s ease; }\n@keyframes appear { from { opacity: 0; transform: translateY(-8px); } }\n</style>`,
    },
    advanced: {
      title: 'FLIP вручную и Flip-плагины',
      text: 'Понимание FLIP (First-Last-Invert-Play) открывает анимации между любыми состояниями DOM: от drag-n-drop до shared element transitions. Для сложных сценариев берите GSAP FlipPlugin.',
      code: `// Идея FLIP: зафиксировать позицию (First), применить изменение (Last),\n// посчитать дельту (Invert) и проиграть через transform (Play).\nconst first = el.getBoundingClientRect()\n// ...меняем DOM...\nconst last = el.getBoundingClientRect()\nconst dx = first.left - last.left\nel.style.transform = \`translateX(\${dx}px)\`\nrequestAnimationFrame(() => {\n  el.style.transition = 'transform .4s'\n  el.style.transform = ''\n})`,
    },
  },
})
