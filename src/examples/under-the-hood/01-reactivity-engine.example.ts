import { defineExample } from '../types'
import demoCode from './01-reactivity-engine/Demo.vue?raw'

const engineCode = `// Упрощённая модель реактивного движка Vue 3 (без деталей)
let activeEffect: Effect | null = null
const targetMap = new WeakMap<object, Map<string, Set<Effect>>>()

function track(target: object, key: string) {
  if (!activeEffect) return
  let deps = targetMap.get(target)
  if (!deps) targetMap.set(target, (deps = new Map()))
  let dep = deps.get(key)
  if (!dep) deps.set(key, (dep = new Set()))
  dep.add(activeEffect) // активный эффект подписался на это свойство
}

function trigger(target: object, key: string) {
  const dep = targetMap.get(target)?.get(key)
  if (!dep) return
  // Scheduler: не запускаем синхронно — ставим в очередь микрозадач
  dep.forEach(effect => queueJob(effect))
}

function ref(value) {
  return {
    get value() { track(this, 'value'); return value },
    set value(v) { value = v; trigger(this, 'value') },
  }
}

// Рендер компонента — тоже эффект:
// MountComponent → effect(() => { vnode = render() }, { scheduler: queueJob })`

export default defineExample({
  title: 'Реактивность внутри: track, trigger, Proxy',
  summary: 'Как ref/computed работают физически: targetMap подписок, ленивые computed, очередь эффектов и батчинг.',
  demo: () => import('./01-reactivity-engine/Demo.vue'),
  code: `// ============ Demo.vue (живая визуализация) ============\n${demoCode}\n\n// ============ упрощённая модель движка ============\n${engineCode}`,
  content: {
    intro:
      'Реактивность Vue 3 строится на трёх механизмах: <b>track</b> (чтение реактивного значения регистрирует активный эффект как подписчика), <b>trigger</b> (запись уведомляет подписчиков через очередь) и <b>Proxy</b> (перехват get/set/удалений). <b>Рендер компонента — такой же эффект</b>, как watch: он читает значения (подписываясь на них) и перезапускается при их изменении. В демо — живой лог этих событий: нажмите a++ и смотрите цепочку trigger → инвалидация computed → прогон эффекта.',
    howItWorks:
      'Глобальная переменная <code>activeEffect</code> указывает на исполняемый сейчас эффект (рендер, watch-колбэк, вычисление computed). Proxy-ловушка get вызывает track: «текущий эффект зависит от этого свойства» — связь сохраняется в WeakMap target → key → Set(эффектов). Ловушка set вызывает trigger: эффекты свойства ставятся в <b>очередь job-ов</b> (не запускаются мгновенно!) — очередь разгребается в микрозадачах, отсюда батчинг: 10 мутаций = 1 прогон. computed — эффект с флагом dirty: триггер лишь помечает его, пересчёт — при следующем чтении (ленивость).',
    mistakes: [
      {
        title: 'Думать, что мутация синхронно обновляет DOM',
        text: 'Между count.value++ и изменением DOM стоит очередь микрозадач. Синхронное чтение DOM сразу после мутации даст старое значение — нужен nextTick.',
        code: `count.value = 5\nconsole.log(el.textContent) // ❌ ещё старое значение`,
        fix: `count.value = 5\nawait nextTick()\nconsole.log(el.textContent) // ✅ после флаша очереди`,
      },
      {
        title: 'Ждать триггера от не-реактивного источника',
        text: 'Только операции, прошедшие через Proxy (reactive) или set value (ref), вызывают trigger. Мутация сырого объекта, вытащенного через toRaw(), — невидима.',
        code: `const raw = toRaw(state)\nraw.count = 5 // ❌ trigger не вызван: UI не обновится`,
        fix: `state.count = 5 // ✅ через прокси`,
      },
      {
        title: 'Полагаться на порядок триггеров',
        text: 'Порядок выполнения эффектов в очереди определяется Vue (родитель→потомок, pre/post), а не порядком мутаций. Логика, зависящая от «какой watch сработал первым», — хрупка.',
        code: `// ❌ «этот watch сработает раньше того»`,
        fix: `// ✅ явная координация: computed-цепочки,\n// flush: 'post' / nextTick / явные функции`,
      },
    ],
    nuances: [
      'WeakMap в targetMap — ключи собираются GC-ом вместе с объектами: утечек подписок на удалённые объекты нет.',
      'Одно свойство — <b>множество</b> эффектов; один эффект — подписки на множество свойств (граф, а не список).',
      'Дубликаты в Set не дают двойных прогонов: одно свойство, прочитанное дважды, подпишет эффект один раз.',
      'Новые свойства и индексы работают, потому что Proxy перехватывает ownKeys и set на любом ключе.',
      'В ветке v-if читаются только её значения: зависимости рендера пересобираются каждый прогон.',
      'effectScope группирует эффекты компонента — unmount останавливает все разом.',
    ],
    bestPractices: [
      'Думайте «кто что читает» — граф зависимостей строится из чтений, а не из ваших намерений.',
      'Не мутации важны, а чтения: если эффект ничего не прочитал, он никогда не сработает.',
      'nextTick — мост между «изменил состояние» и «DOM готов».',
      'Не выдёргивайте toRaw для мутаций «в обход» — это путь к рассинхрону.',
      'Изучите движок один раз — он объясняет 90% странного поведения реактивности.',
    ],
    whenToUse:
      'Это <strong>фундаментальная тема</strong>: возвращайтесь при отладке «почему не обновилось», при проектировании composables (вам нужен контроль подписок), при оптимизациях (понимание очереди объясняет батчинг и nextTick). Практика: лог событий в демо — точная модель того, что происходит в любом Vue-приложении.',
    alternative: {
      title: 'Событийная модель (manual subscriptions)',
      text: 'Без реактивности разработчик сам вызывает store.subscribe(...) и обновляет UI. Реактивность автоматизирует именно это: подписки строятся из чтений автоматически.',
      code: `// вручную: явные подписки\nstore.on('change:count', v => el.textContent = String(v))\n// с Vue: подписка возникает из чтения в шаблоне\n<p>{{ count }}</p>`,
    },
    advanced: {
      title: 'Dirty-флаги и ветвление зависимостей',
      text: 'computed не пересчитывается «волнами» — каждый узел решает сам: dirty-флаг сбрасывается при чтении. Условные ветки в эффектах дают <b>динамические</b> зависимости: что не прочитано в этом прогоне — отвалилось.',
      code: `const showA = ref(true)\nconst a = ref(1)\nconst b = ref(2)\n\nwatchEffect(() => {\n  // showA=true: подписка на a\n  showA.value ? console.log(a.value) : console.log(b.value)\n})\n\nshowA.value = false\n// след. прогон: подписка на b, подписка на a СБРОШЕНА\n// a.value++ больше не запускает эффект`,
    },
  },
})
