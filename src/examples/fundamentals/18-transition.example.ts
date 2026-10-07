import { defineExample } from '../types'
import demoCode from './18-transition/Demo.vue?raw'

export default defineExample({
  title: 'Transition: анимации появления',
  summary:
    '<Transition> добавляет enter/leave классы; name, appear, mode="out-in", JS-хуки; key для смены содержимого.',
  demo: () => import('./18-transition/Demo.vue'),
  code: demoCode,
  content: {
    intro:
      '<b>&lt;Transition&gt;</b> — обёртка, которая во время входа/выхода элемента добавляет CSS-классы: <code>.v-enter-from</code> → <code>.v-enter-active</code> → <code>.v-enter-to</code> и зеркально для leave. Вы пишете только стили, Vue управляет моментами старта и конца. В демо четыре режима анимации на переключателе, смена «экранов» через <code>:key</code> + <code>mode="out-in"</code> и вариант с JS-хуками, когда CSS-классов мало (например, внутри GSAP).',
    howItWorks:
      'Transition следит за единственным корневым элементом внутри и ловит его появление/исчезновение (v-if, v-show, <code>:key</code>, динамический компонент). На кадр вставки он вешает <code>{name}-enter-from</code> и <code>{name}-enter-active</code>; в следующем кадре from убирается — CSS transition запускается; когда браузер сообщает об окончании, классы снимаются. <code>appear</code> запускает enter-анимацию и на первом рендере. <code>mode="out-in"</code> ставит leave перед enter, чтобы элементы не жили в DOM одновременно (для позиции — <code>out-in</code>, для FLIP-списков — TransitionGroup). <code>:css="false"</code> отключает авто-детект и передаёт управление JS-хукам, где <code>done()</code> объявляет конец.',
    mistakes: [
      {
        title: 'Transition на нескольких детях или текстовом узле без условия',
        text: 'Transition работает с <b>одним</b> элементом/компонентом. Два корневых узла или обычный текст без v-if/key не дают события входа/выхода — анимации нет.',
        code: `<Transition>\n  <p>Один</p>\n  <p>Два</p> <!-- ❌ два корневых узла -->\n</Transition>`,
        fix: `<Transition>\n  <p v-if="show">Один</p>\n</Transition>\n<!-- или режим two-way через key + mode="out-in" -->\n<Transition mode="out-in">\n  <p :key="page">…</p>\n</Transition>`,
      },
      {
        title: 'Забыть v-if/v-show или key — «Transition не работает»',
        text: 'Transition сам ничего не включает и не выключает: нужен источник смены (v-if, v-show, :key). Статичный элемент не анимируется никогда.',
        code: `<Transition name="fade">\n  <div>всегда в DOM</div> <!-- ❌ нет события входа/выхода -->\n</Transition>`,
        fix: `<Transition name="fade">\n  <div v-if="show">…</div> <!-- ✅ -->\n</Transition>`,
      },
      {
        title: 'Не указать длительность там, где Vue её не видит',
        text: 'Vue определяет конец по transition/animation на корневом элементе. Если анимация на потомке или сделана в JS — укажите <code>duration</code> или вызовите done() явно, иначе DOM-узел «зависнет».',
        code: `<Transition name="fade">\n  <div v-if="show" class="wrapper">\n    <div class="inner-fade"></div> <!-- ❌ анимация на потомке -->\n  </div>\n</Transition>`,
        fix: `<Transition name="fade" :duration="{ enter: 300, leave: 200 }"> <!-- ✅ явная длительность -->\n  <div v-if="show" class="wrapper">…</div>\n</Transition>`,
      },
    ],
    nuances: [
      'Полные классы: <code>{name}-enter-from/-enter-active/-enter-to</code> и <code>-leave-from/-leave-active/-leave-to</code>. Без атрибута <code>name</code> префикс — <code>v-</code>.',
      '<code>mode="out-in"</code> — старый уходит, потом новый входит; <code>in-out</code> — наоборот (редко нужен); без mode элементы анимируются одновременно.',
      '<code>appear</code> нужен, чтобы анимация сработала и при первом рендере, а не только при последующих переключениях.',
      'Для v-show Transition вешает display:none в конце leave — удобно для тултипов, которые часто переключаются.',
      'TransitionGroup (следующая тема) — отдельный компонент для списков с FLIP-анимациями перемещения; Transition для этого не годится.',
      'На SSR Transition рендерит детей как есть — анимации начинаются уже на клиенте; appear + SSR может дать скачок контента.',
    ],
    bestPractices: [
      'Именуйте анимации по эффекту (<b>fade</b>, <b>slide-up</b>) и держите их в общем CSS, а не в каждом компоненте.',
      'Длительность 150–300 мс для UI-микровзаимодействий — дольше воспринимается как тормоз.',
      'Для позиционных перестановок (сортировка, drag) используйте TransitionGroup, а не Transition + watch.',
      'Не анимируйте layout-свойства (width/height/top) без нужды — transform/opacity композитятся на GPU.',
      'Пользователям с <code>prefers-reduced-motion</code> отключайте анимации медиа-запросом.',
    ],
    whenToUse:
      '<strong>Transition</strong> — для появления/исчезновения одиночных элементов: модалки, дропдауны, тосты, разворачивающиеся панели, смена таба/экрана через key. Не нужен для статичного контента и для списков (там TransitionGroup).',
    alternative: {
      title: 'CSS-анимация без Transition',
      text: 'Если анимация не привязана к условному рендеру (бесконечный пульс, hover-эффект), обычный CSS с классами проще и без обёртки.',
      code: `<div class="pulse">…</div>\n\n<style>\n.pulse { animation: pulse 2s infinite; }\n@keyframes pulse { 50% { opacity: .5; } }\n</style>`,
    },
    advanced: {
      title: 'JS-хуки + библиотека анимации',
      text: 'Хуки <code>@before-enter/@enter/@leave</code> с <code>:css="false"</code> отдают контроль GSAP/Anime.js: библиотека анимирует, done() сообщает Vue о завершении.',
      code: `import gsap from 'gsap'\n\nfunction onEnter(el: Element, done: () => void) {\n  gsap.fromTo(el, { opacity: 0, y: 20 }, {\n    opacity: 1, y: 0, duration: 0.4, onComplete: done,\n  })\n}\n\n<Transition :css="false" @enter="onEnter">\n  <Modal v-if="open" />\n</Transition>`,
    },
  },
})
