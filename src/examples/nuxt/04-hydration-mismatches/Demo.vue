<script setup lang="ts">
import { ref } from 'vue'

// Имитация: сервер и клиент рендерят независимо — совпадёт ли разметка?
interface CaseItem {
  id: string
  title: string
  serverRender: () => string
  clientRender: () => string
  fix: string
  broken: boolean
}

const now = () => new Date().toLocaleTimeString()
const randomItem = () => ['alpha', 'beta', 'gamma'][Math.floor(Math.random() * 3)]

const cases: CaseItem[] = [
  {
    id: 'time',
    title: 'Дата/время в setup',
    broken: true,
    serverRender: () => `«сгенерировано в 14:02:11» (серверное время)`,
    clientRender: () => `«сгенерировано в ${now()}» (клиентское время — другое!)`,
    fix: 'время рендерите на клиенте (onMounted / <ClientOnly>) или сериализуйте с сервера',
  },
  {
    id: 'random',
    title: 'Math.random() / id-генерация в setup',
    broken: true,
    serverRender: () => `id="card-${randomItem()}" (сервер: alpha)`,
    clientRender: () => `id="card-${randomItem()}" (клиент: gamma)`,
    fix: 'стабильные значения из данных (item.id), не из рандома',
  },
  {
    id: 'locale',
    title: 'Чтение localStorage / языка браузера',
    broken: true,
    serverRender: () => 'тема: dark (сервер не знает localStorage — дефолт)',
    clientRender: () => 'тема: light (клиент прочитал localStorage)',
    fix: 'тема применяется после монтирования (useDark так и делает) или через cookie',
  },
  {
    id: 'pure',
    title: 'Чистый рендер из пропсов/стейта',
    broken: false,
    serverRender: () => '«Ноутбук — 59 990 ₽»',
    clientRender: () => '«Ноутбук — 59 990 ₽» (совпало ✓)',
    fix: '—',
  },
]

const selected = ref(cases[0])
const step = ref<'server' | 'compare'>('server')

function compare(c: CaseItem) {
  selected.value = c
  step.value = 'compare'
}
</script>

<template>
  <div class="stack">
    <div class="row">
      <button
        v-for="c in cases"
        :key="c.id"
        class="btn"
        :class="{ primary: selected.id === c.id }"
        @click="compare(c)"
      >
        {{ c.title }}
      </button>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="row row--between">
          <b>🖥️ Сервер отрендерил</b>
        </div>
        <p class="mono muted" style="margin: 8px 0 0">{{ selected.serverRender() }}</p>
      </div>
      <div class="card">
        <div class="row row--between">
          <b>🌐 Клиент гидрирует</b>
          <span class="tag" :class="selected.broken ? 'bad' : 'ok'">
            {{ selected.broken ? 'MISMATCH' : 'совпало' }}
          </span>
        </div>
        <p class="mono muted" style="margin: 8px 0 0">{{ selected.clientRender() }}</p>
      </div>
    </div>

    <div v-if="selected.broken" class="card">
      <div class="row row--between">
        <b>Что видит пользователь</b>
        <span class="tag warn">dev: warning в консоли</span>
      </div>
      <p class="muted" style="margin: 8px 0 0">
        В dev — предупреждение «Hydration node mismatch». В <b>prod</b> Vue отбрасывает серверный
        узел и рендерит заново: <b>мигание контента</b>, потеря фокуса, иногда дубли узлов.
      </p>
    </div>

    <div class="row">
      <span class="tag ok">как исправить: {{ selected.fix }}</span>
    </div>

    <p class="muted">
      Правило: разметка первого рендера должна зависеть только от данных, <b>одинаково доступных</b>
      серверу и клиенту. Всё клиентское (время, локаль, localStorage, рандом) — после монтирования
      или в &lt;ClientOnly&gt;.
    </p>
  </div>
</template>
