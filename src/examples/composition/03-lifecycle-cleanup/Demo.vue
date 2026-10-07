<script setup lang="ts">
import { ref, onMounted, onUnmounted, onScopeDispose } from 'vue'

const ticks = ref(0)
const running = ref(false)
const events = ref<string[]>([])

let timer: ReturnType<typeof setInterval> | null = null

function log(msg: string) {
  events.value.unshift(`[${new Date().toLocaleTimeString()}] ${msg}`)
  if (events.value.length > 8) events.value.pop()
}

function start() {
  if (timer) return
  timer = setInterval(() => {
    ticks.value++
  }, 500)
  running.value = true
  log('интервал запущен')
}

function stop() {
  if (!timer) return
  clearInterval(timer)
  timer = null
  running.value = false
  log('интервал остановлен вручную')
}

// Жизненный цикл: подписка при монтировании, симметричная развязка
onMounted(() => {
  log('onMounted: компонент в DOM')
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
    timer = null
    log('onUnmounted: интервал принудительно очищен ✅')
  }
})

// onScopeDispose сработает при unmount ИЛИ при остановке scope
onScopeDispose(() => {
  log('onScopeDispose: скоуп закрыт (unmount или scope.stop())')
})

// Символическое использование toggle: управление демонстрацией
function toggle() {
  running.value ? stop() : start()
}
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="start" :disabled="running">запустить интервал</button>
      <button class="btn" @click="stop" :disabled="!running">остановить</button>
      <button class="btn" @click="toggle">toggle</button>
      <span class="stat">ticks: <b>{{ ticks }}</b></span>
      <span class="tag" :class="running ? 'ok' : 'info'">{{ running ? 'работает' : 'остановлен' }}</span>
    </div>

    <div class="log">
      <div v-for="(line, i) in events" :key="i" class="mono">{{ line }}</div>
    </div>

    <p class="muted">
      Запустите интервал и перейдите на другую тему — в логе появится запись onUnmounted:
      симметричная очистка сработала автоматически. Это и есть «cleanup» в Vue.
    </p>
  </div>
</template>
