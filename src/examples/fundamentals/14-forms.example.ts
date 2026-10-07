import { defineExample } from '../types'
import demoCode from './14-forms/Demo.vue?raw'

export default defineExample({
  title: 'Формы',
  summary:
    'Реактивный объект формы, ошибки через computed, touched-поля, сабмит через @submit.prevent.',
  demo: () => import('./14-forms/Demo.vue'),
  code: demoCode,
  content: {
    intro:
      'Форма — классический случай, где коллекция полей удобнее набора отдельных ref: <code>const form = reactive({ … })</code> и <code>v-model="form.email"</code>. Ошибки собираются в <b>computed</b> — он сам пересчитывается при изменении любого поля и не требует watch. Ключевое UX-правило демо: не показывать ошибки сразу, а показывать их только для <b>touched</b>-полей (пользователь уже потрогал) или после сабмита.',
    howItWorks:
      'Состояние — один реактивный объект form; каждое поле связано v-model. <code>errors</code> — computed, возвращающий объект «поле → сообщение»; пустой объект означает валидность (isValid). При сабмите перехватываем <code>@submit.prevent</code> (native сабмит страницы отменяется), помечаем все поля тронутыми и показываем payload только если ошибок нет. Флаг touched хранится в отдельном reactive-объекте и включается либо по blur, либо при сабмите — так форма стартует «чистой».',
    mistakes: [
      {
        title: 'Валидация через watch на каждое поле',
        text: 'Флаг валидности — производная от состояния. watch дублирует то, что computed делает автоматически, и легко забывает зависимости (массив полей, cross-field правила).',
        code: `watch(() => form.email, v => { emailError.value = v.includes('@') ? '' : '...' })\n// ❌ N полей = N вотчеров, plus cross-проверки`,
        fix: `const errors = computed(() => ({\n  email: form.email.includes('@') ? undefined : 'нужен email',\n})) // ✅ единый источник ошибок`,
      },
      {
        title: 'Сброс формы «по одному полю»',
        text: 'Присваивать каждый ref заново — дублирование. Один реактивный объект сбрасывается Object.assign или пересозданием.',
        code: `email.value = ''; password.value = ''; age.value = 0 // ❌`,
        fix: `Object.assign(form, initialForm) // ✅\n// или: form = reactive(initialForm) если let`,
      },
      {
        title: 'Сабмит без .prevent',
        text: 'Форма без перехвата нативно отправится и перезагрузит страницу — состояние потеряется.',
        code: `<form @submit="submit"> <!-- ❌ страница перезагрузится -->`,
        fix: `<form @submit.prevent="submit"> <!-- ✅ -->`,
      },
    ],
    nuances: [
      'Атрибуты валидации HTML (<code>required</code>, <code>maxlength</code>, <code>pattern</code>) можно и стоит оставлять: они бесплатны и работают до JS.',
      '<code>maxlength</code> на textarea <b>режет</b> ввод молча; если нужен счётчик и сообщение — валидируйте сами, не ограничивая input.',
      'Событие <code>blur</code> — естественный момент пометки touched: <code>@blur="touched.email = true"</code>.',
      'Vue не навязывает библиотеку валидации: от правил в computed до zod/vuelidate/vee-validate — выбор по сложности формы.',
      'Для редактирования сущности копию данных для формы делают через <code>{ ...props.user }</code> или structuredClone — чтобы отмена не «протекала» в исходник.',
      'Submit-кнопка вне form работает через <code>form</code> атрибут; иначе просто вызывайте метод.',
    ],
    bestPractices: [
      'Состояние формы — <b>локальное</b> (компонент), а не Pinia: форма — transient-состояние, его не нужно глобализовать.',
      'Ошибки — производная (computed), а не аккумулируемый стейт: нет рассинхронизации.',
      'Разделяйте схему формы (тип Form) и логику валидации — чистая функция <code>validate(form): Errors</code> тестируется без Vue.',
      'Для сложных форм (динамические поля, шаги) выносите в composable useForm или библиотеку, не изобретая внутри компонента.',
      'Дизейблите кнопку саббита через busy-флаг при отправке, а не через валидность — пользователь должен видеть, что запрос идёт.',
    ],
    whenToUse:
      '<strong>Формы</strong> через reactive-объект — выбор по умолчанию для форм из 3+ полей: логина, регистрации, настроек, CRUD-редакторов. Для одного-двух полей достаточно отдельных ref. Когда правил валидации много и они декларативные — берите schema-валидатор (zod + computed), когда форма гигантская и многошаговая — vee-validate/formkit.',
    alternative: {
      title: 'Схемная валидация (zod + computed)',
      text: 'Схема описывает правила один раз и переиспользуется и на клиенте, и на сервере (в Nuxt — на серверной стороне тоже).',
      code: `import { z } from 'zod'\n\nconst schema = z.object({\n  email: z.string().email(),\n  password: z.string().min(6),\n  age: z.number().min(14).max(99),\n})\n\nconst errors = computed(() =>\n  schema.safeParse({ ...form, age: Number(form.age) }).error?.flatten().fieldErrors\n)`,
    },
    advanced: {
      title: 'Форма как composable',
      text: 'Логика формы (состояние + touched + validate + submit) — переиспользуемый composable: компонент остаётся только разметкой.',
      code: `// composables/useForm.ts\nexport function useForm<T extends object>(initial: T, validate: (v: T) => Partial<Record<keyof T, string>>) {\n  const form = reactive({ ...initial })\n  const touched = reactive<Record<string, boolean>>({})\n  const errors = computed(() => validate(form))\n  const isValid = computed(() => !Object.keys(errors.value).length)\n  function reset() { Object.assign(form, initial) }\n  return { form, touched, errors, isValid, reset }\n}`,
    },
  },
})
