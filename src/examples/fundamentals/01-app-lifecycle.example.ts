import { defineExample } from '../types'
import demoCode from './01-app-lifecycle/Demo.vue?raw'
import childCode from './01-app-lifecycle/HookBox.vue?raw'

const code = `// ============ Demo.vue ============\n${demoCode}\n\n// ============ HookBox.vue ============\n${childCode}`

export default defineExample({
  title: 'Жизненный цикл Vue-приложения',
  summary: 'createApp → setup → mounted → updated → unmounted: что и когда вызывается.',
  demo: () => import('./01-app-lifecycle/Demo.vue'),
  code,
  content: {
    intro:
      'У каждого Vue-компонента есть предсказуемая последовательность хуков: приложение создаётся через <b>createApp().mount()</b>, каждый экземпляр проходит через <b>setup</b> → монтирование → обновления → размонтирование. Хуки — единственное законное место для работы с DOM, подписок, таймеров и cleanup. Нажмите кнопки в демо: слева видно, в каком порядке срабатывают хуки и как Vue объединяет два изменения состояния в один ререндер.',
    howItWorks:
      'Родитель <b>Demo.vue</b> владеет логом и решает, смонтирован ли <b>HookBox</b> через v-if. Дочерний компонент в своих хуках вызывает переданный через props колбэк trace() и пишет события в лог родителя — состояние живёт в одном месте, а события приходят из другого. Счётчик ререндеров updates намеренно сделан обычной переменной: onUpdated лишь инкрементирует её, а реактивной записи в лог Vue дожидается через <b>await nextTick()</b> внутри watch. Поэтому запись «ререндеров: N» появляется уже после завершения рендера, а не вызывает новый цикл обновлений.',
    mistakes: [
      {
        title: 'Писать реактивное состояние прямо из onUpdated',
        text: 'onUpdated вызывается после рендера. Если внутри него менять реактивные данные, Vue запланирует ещё один рендер, который снова вызовет onUpdated — и так до «Maximum recursive updates exceeded».',
        code: `onUpdated(() => {\n  // ❌ каждый рендер порождает новый рендер\n  count.value++\n})`,
        fix: `let updates = 0\nonUpdated(() => {\n  updates++ // ✅ обычное число, не реактив\n})\n\n// реактивную запись делаем вне цикла обновления\nawait nextTick()\nlog.value.push(\`renders: \${renders}\`)`,
        fixText:
          'Сайд-эффекты из хуков лучше переносить наружу (nextTick, event loop) или хранить в не-реактивных переменных.',
      },
      {
        title: 'Забыть cleanup в onUnmounted',
        text: 'addEventListener, setInterval, подписки на Store переживают компонент и продолжают работать после его удаления — это утечка памяти и «мёртвые» обновления состояния, на которое никто уже не смотрит.',
        code: `onMounted(() => {\n  window.addEventListener('resize', onResize)\n  setInterval(poll, 5000)\n})\n// ❌ размонтировались — слушатель и таймер остались`,
        fix: `onMounted(() => window.addEventListener('resize', onResize))\n// ✅ симметричная развязка\nonUnmounted(() => {\n  window.removeEventListener('resize', onResize)\n  clearInterval(timer)\n})`,
        fixText: 'Правило: всё, что подписался в mounted, отписывайся в unmounted.',
      },
      {
        title: 'Делать DOM-доступ до mounted',
        text: 'В setup и onBeforeMount реального DOM ещё нет — template refs равны null. Поиск элементов работает только начиная с onMounted.',
        code: `setup() {\n  const el = ref(null)\n  onBeforeMount(() => {\n    // ❌ el.value === null\n    el.value.getBoundingClientRect()\n  })\n}`,
        fix: `const box = useTemplateRef('box')\nonMounted(() => {\n  box.value?.scrollIntoView() // ✅ DOM готов\n})`,
      },
    ],
    nuances: [
      '<b>setup выполняется до монтирования</b> — до onMounted не существует ни одного DOM-узла, но состояние и computed уже работают.',
      '<b>Хуки OPTIONS API и COMPOSITION API вызываются в фиксированном порядке</b>: beforeCreate → created → beforeMount → mounted → beforeUpdate → updated → beforeDestroy/unmounted.',
      'Во время <b>SSR</b> выполняются только хуки до mounted: beforeCreate, created, beforeServerPrefetch. onMounted, onUpdated и onUnmounted на сервере никогда не вызываются.',
      'Хуки <b>onActivated / onDeactivated</b> работают только внутри &lt;KeepAlive&gt; и заменяют mounted/unmounted при переключении вкладок.',
      'Порядок вызовов хуков <b>детерминирован</b>: сначала родительские beforeX, потом дочерние, а при размонтировании — наоборот.',
    ],
    bestPractices: [
      'Всю логику и подписки объявляй в <b>&lt;script setup&gt;</b> на верхнем уровне — хуки видны рядом с состоянием, которое ими управляет.',
      'Слушатели и таймеры региструй в <b>onMounted</b>, а не сразу в setup: SSR не имеет window/document.',
      'Для cleanup чаще всего достаточно <b>onScopeDispose</b> — он работает и вне компонента (внутри async setup или эффекта).',
      'Не создавай компонент ради «проживания» одного хука — сначала посмотри готовый composable (useEventListener сам отписывается).',
    ],
    whenToUse:
      '<strong>Хуки жизненного цикла</strong> нужны, когда взаимодействие выходит за рамки декларативного шаблона: измерение элемента, подписка на внешние события, работа с WebSocket, фокус, интеграция с чужими библиотеками. 90% задач в шаблоне решаются без хуков — появился хук → убедись, что декларативного решения действительно нет.',
    alternative: {
      title: 'Декларативные alternatives без хуков',
      text: 'Типовые задачи lifecycle уже покрыты композаблами: подписка на события — useEventListener, таймеры — useIntervalFn / useTimeoutFn, размеры — useElementSize, доступность в DOM — v-if + шаблонные ref. Свой хук пиши только тогда, когда готовой обёртки нет или она не подходит.',
      code: `import { useEventListener, useIntervalFn } from '@vueuse/core'\n\nuseEventListener(window, 'resize', onResize) // сам отмонтируется\nuseIntervalFn(poll, 5000)                     // pause/play из коробки`,
    },
    advanced: {
      title: 'Единая точка cleanup через onScopeDispose',
      text: 'Vue связывает хуки с «эффективным скоупом» (component instance или effect scope). Если выносишь подписку в отдельную функцию или composable, вызывай onScopeDispose — отписка сработает и для компонента, и для ручного scope из effectScope().',
      code: `import { effectScope, onScopeDispose } from 'vue'\n\nfunction useConnection(url: string) {\n  const socket = new WebSocket(url)\n  onScopeDispose(() => socket.close())\n  return socket\n}\n\nconst scope = effectScope()\nscope.run(() => useConnection('wss://…'))\nscope.stop() // закроет сокет`,
    },
  },
})
