import { defineExample } from '../types'
import demoCode from './03-lifecycle-cleanup/Demo.vue?raw'

export default defineExample({
  title: 'Lifecycle в Composition API и cleanup',
  summary: 'onMounted/onUnmounted/onBeforeUnmount, симметричная развязка, onScopeDispose как универсальный cleanup.',
  demo: () => import('./03-lifecycle-cleanup/Demo.vue'),
  code: demoCode,
  content: {
    intro:
      'Composition API переосмысляет жизненный цикл: хуки — просто функции, которые можно вызывать <b>внутри composables</b>, привязывая их к текущему компоненту. Основная пара — <code>onMounted</code> (регистрация подписок, доступ к DOM) и <code>onUnmounted</code>/<code>onBeforeUnmount</code> (симметричная очистка). <b>onScopeDispose</b> — универсальный cleanup: срабатывает при unmount компонента И при остановке effectScope, поэтому работает даже вне компонентов. В демо — интервал с полной симметрией запуска/остановки.',
    howItWorks:
      'Каждый компонент владеет <b>effect scope</b> — контейнером всех своих эффектов (render, watch, computed). Хуки register колбэк в этом скоупе: onMounted — на событие монтирования, onUnmounted — на остановку скоупа. При удалении компонента Vue закрывает scope: останавливаются все эффекты и вызываются хуки cleanup. Отсюда правило «что подписал в mounted — отпиши в unmounted»: Vue не знает про ваши setInterval/addEventListener — их нужно чистить вручную. onScopeDispose ставит колбэк на закрытие scope независимо от того, кто владелец.',
    mistakes: [
      {
        title: 'Подписка без симметричной отписки',
        text: 'addEventListener, setInterval, WebSocket, подписки на Observable переживают компонент и продолжают работать в пустоту — утечка памяти и призрачные обновления.',
        code: `onMounted(() => {\n  window.addEventListener('resize', onResize)\n  setInterval(poll, 5000)\n}) // ❌ ничего не очищается`,
        fix: `onMounted(() => {\n  window.addEventListener('resize', onResize)\n  timer = setInterval(poll, 5000)\n})\nonUnmounted(() => {\n  window.removeEventListener('resize', onResize)\n  clearInterval(timer)\n}) // ✅ симметрия`,
      },
      {
        title: 'Хуки внутри асинхронного колбэка',
        text: 'Регистрация хука после await теряет контекст компонента — колбэк не привяжется (dev warning «onMounted is called when there is no active component instance»).',
        code: `async function setup() {\n  await fetchConfig()\n  onMounted(init) // ❌ контекст уже потерян\n}`,
        fix: `onMounted(async () => {\n  const config = await fetchConfig() // ✅ async внутри хука\n  init(config)\n})`,
      },
      {
        title: 'Забывать, что KeepAlive меняет пару хуков',
        text: 'Внутри KeepAlive onUnmounted не срабатывает при уходе вкладки — нужен onDeactivated. Логика «ушёл с экрана» не запускается.',
        code: `onUnmounted(() => stopPolling()) // ❌ в KeepAlive не вызовется`,
        fix: `onDeactivated(() => stopPolling()) // ✅\nonActivated(() => startPolling())`,
      },
    ],
    nuances: [
      'Порядок при размонтировании: <b>onBeforeUnmount</b> (компонент ещё цел) → onUnmounted (DOM удалён). Отписки можно делать в любом, но beforeUnmount — последний шанс посмотреть на DOM.',
      'onScopeDispose работает везде, где есть активный scope: компонент, effectScope в тесте, composable.',
      'Хуки OPTIONS API (mounted) и COMPOSITION (onMounted) могут сосуществовать; не смешивайте без причины.',
      'Vue <b>не</b> очищает за вас: setInterval, listeners, WebSocket, наблюдатели — только ваши подписки на Vue-API останавливаются автоматически.',
      'Ошибки в хуках unmount не блокируют размонтирование, но ломают логику очистки — держите их маленькими.',
      'Хуки принимают колбэк без аргументов; для «что изменилось» используйте watch, а не lifecycle.',
    ],
    bestPractices: [
      'Пара «подписка/отписка» — <b>рядом</b> в коде (или в одном композабле), а не разнесены по файлу.',
      'Делайте композаблы самоочищающимися: useEventListener из VueUse — эталон.',
      'Для всего побочного в композаблах — onScopeDispose, а не onUnmounted: гибче для тестов и вне-компонентного использования.',
      'Не выполняйте в unmounted тяжёлую логику — только освобождение ресурсов.',
      'Проверяйте утечки: Vue Devtools → Components → смотрим, что висит после переходов.',
    ],
    whenToUse:
      '<strong>Lifecycle-хуки</strong> нужны для точечного взаимодействия с внешним миром: таймеры, слушатели, сторонние DOM-библиотеки, метрики. Если задача решается декларативно (computed, шаблонные ref) — хуки не нужны. <strong>onScopeDispose</strong> — по умолчанию внутри composables и утилит.',
    alternative: {
      title: 'VueUse: композаблы с встроенным cleanup',
      text: 'Готовые обёртки сами отписываются: useEventListener, useIntervalFn, useRafFn — cleanup уже внутри, ошибиться негде.',
      code: `import { useEventListener, useIntervalFn } from '@vueuse/core'\n\nuseEventListener(window, 'resize', onResize) // отписка автоматом\nconst { pause, resume } = useIntervalFn(poll, 5000) // управление без setInterval`,
    },
    advanced: {
      title: 'effectScope для управления группой эффектов',
      text: 'Ручные scope позволяют запускать/останавливать пачки эффектов вне компонентов — основа для виджетов, тестов и «микро-приложений» внутри страницы.',
      code: `import { effectScope, watchEffect } from 'vue'\n\nconst scope = effectScope()\nscope.run(() => {\n  watchEffect(() => render(state.value))\n  watch(query, doSearch)\n})\n\n// полное освобождение одним вызовом:\nscope.stop()`,
    },
  },
})
