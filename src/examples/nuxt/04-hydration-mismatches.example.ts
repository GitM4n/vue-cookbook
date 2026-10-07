import { defineExample } from '../types'
import demoCode from './04-hydration-mismatches/Demo.vue?raw'

const fixCode = `<!-- 1) ClientOnly: блок только на клиенте (сервер рендерит fallback) -->
<ClientOnly>
  <Timestamp :value="item.createdAt" />
  <template #fallback>
    <span class="skeleton" />
  </template>
</ClientOnly>

// 2) Клиентский рендер после монтирования
const now = ref<string | null>(null)
onMounted(() => { now.value = new Date().toLocaleTimeString() })
<!-- сервер: null → пусто; клиент: время. Mismatch нет: null → контент
     не «замена текста», а отсутствие узла -->

// 3) Синхронизация через cookie (SSR-безопасная тема)
const theme = useCookie('theme', { default: () => 'dark' })
// сервер видит cookie запроса → рендерит ту же тему, что увидит клиент

// 4) Стабильные id из данных, не из рандома
<li v-for="item in items" :key="item.id"> <!-- ✅ item.id -->
<li v-for="item in items" :key="\`k-\${Math.random()}\`"> <!-- ❌ -->`

export default defineExample({
  title: 'Гидрация и hydration mismatches',
  summary: 'Почему DOM сервера и клиента расходится: время, рандом, localStorage; <ClientOnly>, cookie-синхронизация, последствия в prod.',
  demo: () => import('./04-hydration-mismatches/Demo.vue'),
  code: `// ============ Demo.vue (интерактив) ============\n${demoCode}\n\n// ============ приёмы исправления ============\n${fixCode}`,
  content: {
    intro:
      '<b>Гидрация</b> — сопоставление клиентского Vue с готовым HTML от сервера. <b>Mismatch</b> возникает, когда разметка первого клиентского рендера отличается от серверной: Vue не может «прикрепиться» к узлу. Причины всегда одинаковые: <b>нестабильные данные</b> (время, random, id), <b>клиентские источники</b> (localStorage, язык, размер окна), <b>ошибки сервера</b> (упал fetch, вернулся error-экран). В демо — сравнение «сервер vs клиент» для четырёх типовых случаев: три ломаются, один чист.',
    howItWorks:
      'Vue при гидрации идёт по vnode-дереву и ожидает то же DOM-содержимое, что сгенерировал сервер. Текстовый узел не совпал — warning (dev) и замена содержимого; структура не совпала — весь поддерево рендерится заново. В prod предупреждений нет: пользователь видит <b>мигание</b> (контент «перерисовался» после гидрации), а в тяжёлых случаях — потерю состояния фокуса и дублей. Клиентские данные вводятся только после монтирования (onMounted ref-ы стартуют null) или изолируются в <code>&lt;ClientOnly&gt;</code> с fallback-скелетоном.',
    mistakes: [
      {
        title: 'Время/даты напрямую в шаблоне',
        text: 'new Date() на сервере и на клиенте — разные значения (и разные таймзоны). Самая частая причина mismatch в реальных проектах.',
        code: `<span>Обновлено: {{ new Date().toLocaleTimeString() }}</span> <!-- ❌ -->`,
        fix: `<ClientOnly><span>Обновлено: {{ formatted }}</span></ClientOnly>\n// formatted = ref(null) → onMounted(new Date())`,
      },
      {
        title: 'localStorage в setup',
        text: 'На сервере localStorage нет — код упадёт; с try/catch сервер возьмёт дефолт, клиент — сохранённое значение → mismatch.',
        code: `const theme = localStorage.getItem('theme') ?? 'dark' // ❌`,
        fix: `// ✅ SSR-безопасный источник истины — cookie\nconst theme = useCookie('theme')\n// или клиентское применение после монтирования (useDark)`,
      },
      {
        title: 'Игнорировать prod-последствия',
        text: '«В консоли warning, но работает» — в prod мигание контента и прыжки layout. Особенно опасно для SEO-страниц: пользователь успевает увидеть старый текст.',
        code: `// dev: "[Vue warn]: Hydration node mismatch" — и молчок в prod`,
        fix: `// ✅ находите причину сразу: mismatch — всегда баг рендера,\n// а не «особенность»`,
      },
    ],
    nuances: [
      '<code>&lt;ClientOnly&gt;</code> прячет содержимое от сервера: fallback (#fallback слот) рендерится вместо него — используйте скелетоны, чтобы не прыгало.',
      'Mismatch-предупреждение показывает diff узлов в dev — читайте, там точное место.',
      'useDark/useColorMode спроектированы SSR-безопасно: применяют класс после гидрации (мгновенное «мигание темы» лечится cookie + инлайн-скриптом).',
      'Куки — единственный способ дать серверу «клиентские» знания (локаль, тема): они приходят с запросом.',
      'Ошибка SSR-данных (500) тоже даёт mismatch: сервер отдал error-страницу, клиент рендерит нормальную — обрабатывайте error в useAsyncData одинаково на обеих сторонах.',
      'Для списков важна стабильность порядка: сортировка «на лету» по нестабильному ключу ломает гидрацию списков.',
    ],
    bestPractices: [
      'Первый рендер зависит <b>только от данных запроса</b>: params, cookie, payload API.',
      'Всё нестабильное — в ClientOnly с осмысленным fallback (скелетон тех же размеров).',
      'Тема/локаль — через cookie, если важно избежать мигания.',
      'Проверяйте prod-сборку: dev-предупреждения не живут в проде, а проблемы — да.',
      'Тест на двух сторонах: интеграционные тесты должны рендерить страницу и на сервере, и на клиенте.',
    ],
    whenToUse:
      'Тема обязательна для <strong>любого SSR/SSG-проекта</strong>: понимание hydration экономит часы на «мигающих» страницах. Типовые зоны риска: футеры с копирайт-годом, даты, аватары из localStorage, счётчики корзины, виджеты с window-логикой.',
    alternative: {
      title: 'Полный CSR для проблемных страниц',
      text: 'Если страница сплошь клиентская (дашборд, редактор) — route rule <code>ssr: false</code> убирает класс проблем целиком: нет серверного HTML — нет и mismatch.',
      code: `routeRules: {\n  '/admin/**': { ssr: false }, // CSR: гидрации нет вообще\n}`,
    },
    advanced: {
      title: 'Инлайн-скрипт темы: ноль мигания',
      text: 'Продвинутый приём: до гидрации, прямо в <head>, синхронный скрипт читает cookie/localStorage и ставит класс — первый кадр уже с правильной темой, Vue гидрируется поверх без конфликтов.',
      code: `<!-- nuxt.config.ts → app.head.script -->\n{\n  innerHTML: \`(function(){try{var t=localStorage.getItem('theme');\n    if(t==='dark') document.documentElement.classList.add('dark')\n  }catch(e){}})()\`,\n  tagPosition: 'head',\n}\n/* класс ставится ДО первого рендера → CSS не мигает,\n   Vue гидрирует на уже правильном классе */`,
    },
  },
})
