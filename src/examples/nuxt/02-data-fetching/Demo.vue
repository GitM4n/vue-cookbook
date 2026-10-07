<script setup lang="ts">
import { ref, computed } from 'vue'

// Имитация трёх способов получения данных в Nuxt
type Mode = 'useFetch' | 'useAsyncData' | 'fetch'

const mode = ref<Mode>('useFetch')
const phase = ref<'server' | 'hydration' | 'client'>('server')
const log = ref<string[]>([])

const serverRan = computed(() => phase.value !== 'client' || mode.value === 'fetch')
const clientReruns = computed(() => (mode.value === 'fetch' ? 'да — второй запрос!' : 'нет — payload перенесён'))

function setMode(m: Mode) {
  mode.value = m
  phase.value = 'server'
  log.value = []
  if (m === 'useFetch') {
    log.value.push('сервер: await useFetch("/api/todos") — данные получены')
    log.value.push('сервер: данные сериализованы в payload HTML-страницы')
  } else if (m === 'useAsyncData') {
    log.value.push('сервер: await useAsyncData("todos", () => $fetch("/api/todos"))')
    log.value.push('сервер: результат под ключом "todos" ушёл в payload')
  } else {
    log.value.push('сервер: НИЧЕГО — onMounted ещё не наступал')
    log.value.push('клиент (после гидрации): fetch выполнится только здесь')
  }
}

function toHydration() {
  phase.value = 'hydration'
  if (mode.value === 'fetch') {
    log.value.push('гидрация: компонент смонтирован, но данных ещё нет')
  } else {
    log.value.push('гидрация: Vue сопоставил DOM, данные уже на клиенте из payload')
  }
}

function toClient() {
  phase.value = 'client'
  if (mode.value === 'fetch') {
    log.value.push('клиент: onMounted → fetch → спиннер → данные. Два запроса суммарно!')
  } else {
    log.value.push('клиент: повторного запроса нет — payload использован')
  }
}
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn" :class="{ primary: mode === 'useFetch' }" @click="setMode('useFetch')">useFetch</button>
      <button class="btn" :class="{ primary: mode === 'useAsyncData' }" @click="setMode('useAsyncData')">useAsyncData</button>
      <button class="btn" :class="{ primary: mode === 'fetch' }" @click="setMode('fetch')">$fetch / onMounted</button>
    </div>

    <div class="row">
      <button class="btn" @click="phase = 'server'; log = []">1 · сервер</button>
      <button class="btn" @click="toHydration">2 · гидрация</button>
      <button class="btn" @click="toClient">3 · клиент после гидрации</button>
    </div>

    <div class="card">
      <div class="row row--between">
        <b>Что происходит ({{ mode }})</b>
        <span class="tag" :class="mode === 'fetch' ? 'bad' : 'ok'">
          повторный запрос на клиенте: {{ clientReruns }}
        </span>
      </div>
      <div class="log" style="margin-top: 8px">
        <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
        <div v-if="!log.length" class="muted">выберите режим → пройдите шаги 1→2→3</div>
      </div>
    </div>

    <p class="muted">
      Главное правило Nuxt: данные, нужные при первом рендере, получают через <b>useFetch /
      useAsyncData</b> — они выполняются на сервере и переносятся в payload. Чистый $fetch /
      onMounted откладывает данные на клиент: двойная работа и задержка.
    </p>
  </div>
</template>
