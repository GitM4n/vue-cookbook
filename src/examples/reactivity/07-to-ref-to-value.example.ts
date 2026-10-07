import { defineExample } from '../types'
import demoCode from './07-to-ref-to-value/Demo.vue?raw'

export default defineExample({
  title: 'toRef, toRefs, toValue, unref',
  summary: 'Мосты между reactive и ref: связанные ref-ы, безопасная деструктуризация, утилиты снятия обёртки.',
  demo: () => import('./07-to-ref-to-value/Demo.vue'),
  code: demoCode,
  content: {
    intro:
      'Эти четыре утилиты решают одну проблему: <b>reactive нельзя деструктурировать</b>, а функции хотят принимать «ref или значение». <code>toRef(state, \'count\')</code> делает ref, <b>связанный</b> с полем источника; <code>toRefs(state)</code> — сразу все поля. <code>unref(x)</code> возвращает значение из ref или само значение; <code>toValue(x)</code> — расширенная версия, понимающая ещё и getter-функции. В демо видно двустороннюю связь: изменение через state, toRef или toRefs синхронно везде.',
    howItWorks:
      'toRef создаёт ObjectRefImpl — тонкую обёртку с get/set, перенаправляющими к <code>source[prop]</code>: чтение регистрирует зависимость поля, запись уведомляет. toRefs проходит по всем ключам и возвращает объект таких ref. Это не копии — все ссылки ведут на один источник. unref — это просто <code>isRef(v) ? v.value : v</code>. toValue добавляет случай getter: <code>isFunction(v) ? v() : unref(v)</code> — благодаря этому API composables может принимать «значение, ref или функцию» — гибкий контракт без перегрузок.',
    mistakes: [
      {
        title: 'Думать, что toRef копирует значение',
        text: 'toRef не делает снимок — это живая ссылка на поле источника. Если источник отсутствует в момент создания, ref вернёт undefined, но останется «привязанным» к пути.',
        code: `const s = reactive({ count: 0 })\nconst c = toRef(s, 'count')\nc.value = 5 // ✅ s.count тоже 5 — это НЕ копия`,
        fix: `// нужна именно независимая копия?\nconst copy = ref(s.count) // снимок, связи нет`,
      },
      {
        title: 'toRefs на обычном (не реактивном) объекте',
        text: 'toRefs работает с reactive-источниками. На plain-объекте ref-ы получатся, но зависимостей у них не будет — «живой» связи не возникнет.',
        code: `const plain = { count: 0 }\nconst refs = toRefs(plain) // ❌ ref-ы не реактивны к plain`,
        fix: `const state = reactive({ count: 0 })\nconst refs = toRefs(state) // ✅`,
      },
      {
        title: 'Путать unref и toValue на getter-ах',
        text: 'unref(функция) вернёт саму функцию, а не её результат. Для API, принимающих «ref | value | getter», нужен именно toValue.',
        code: `function useThing(src: MaybeRefOrGetter<number>) {\n  const v = unref(src) // ❌ если src — () => 42, получим функцию\n}`,
        fix: `function useThing(src: MaybeRefOrGetter<number>) {\n  const v = toValue(src) // ✅ 42\n}\n// src может быть: 42 | ref(42) | () => 42`,
      },
    ],
    nuances: [
      'toRefs полезен ровно в одном месте — <b>возврат из composable</b>: потребитель деструктурирует без потери реактивности.',
      'toRef для несуществующего поля не падает: вернёт undefined и привяжется к пути (полезно для опциональных структур).',
      '<code>toValue</code> появился в Vue 3.3; до него писали <code>isRef(v) ? v.value : isFunction(v) ? v() : v</code>.',
      'Тип <code>MaybeRefOrGetter&lt;T&gt;</code> из vue — стандартный контракт для «параметра-значения» composables.',
      'toRefs деструктуризация сохраняет <b>связь</b>, но не делает поля shallow-независимыми: вложенные объекты остаются общими.',
      'В шаблоне refs из toRefs распаковываются автоматически — <code>{{ refs.count }}</code> покажет число.',
    ],
    bestPractices: [
      'Composables: возвращайте <code>toRefs(reactiveState)</code>, а не сам reactive — API гибче для потребителей.',
      'Параметры composables принимайте как <code>MaybeRefOrGetter&lt;T&gt;</code> и читайте через <code>toValue</code> — поддержка всех вариантов без перегрузок.',
      'Не создавайте toRef/toRefs «на всякий случай»: если деструктуризации не будет, они не нужны.',
      'Помните: связанные ref — это алиасы; документируйте, кто источник истины.',
    ],
    whenToUse:
      '<strong>toRef/toRefs</strong> — на границе reactive ↔ ref: возврат из composables, проброс поля стора в компонент, адаптация API. <strong>toValue/unref</strong> — внутри универсальных composables, принимающих параметры в любом виде. В обычном коде компонентов они почти не нужны.',
    alternative: {
      title: 'Просто не деструктурировать',
      text: 'Часто самый простой вариант — оставить доступ через объект: state.count вместо деструктуризации. Меньше утилит, меньше путаницы.',
      code: `const state = reactive({ count: 0 })\n// в шаблоне: {{ state.count }}\n// в script: state.count++ — реактивно, без toRefs`,
    },
    advanced: {
      title: 'Тип MaybeRefOrGetter для публичных composables',
      text: 'Стандартная сигнатура библиотечных composables: вход — MaybeRefOrGetter, выход — Ref. Так работает сам VueUse: каждый параметр может быть реактивным или статическим.',
      code: `import type { MaybeRefOrGetter } from 'vue'\n\nexport function useTitle(\n  title: MaybeRefOrGetter<string>,\n) {\n  watchEffect(() => {\n    document.title = toValue(title)\n  })\n}\n\n// вызовы: useTitle('x') | useTitle(titleRef) | useTitle(() => computed.value)`,
    },
  },
})
