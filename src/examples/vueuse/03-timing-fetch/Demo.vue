<script setup lang="ts">
import { ref } from 'vue'
import { useDebounceFn, useThrottleFn, useIntervalFn, useTimeoutFn, useAsyncState } from '@vueuse/core'

const log = ref<string[]>([])
function add(msg: string) {
  log.value.unshift(`${new Date().toLocaleTimeString()} · ${msg}`)
  if (log.value.length > 8) log.value.pop()
}

// 1) useDebounceFn: вызов через 400мс после ПОСЛЕДНЕГО события
const debounced = useDebounceFn((v: string) => add(`debounce: «${v}» (вызван один раз)`), 400)

// 2) useThrottleFn: не чаще раза в 1000мс
const throttled = useThrottleFn(() => add('throttle: событие пропущено сквозь окно'), 1000)

// 3) useIntervalFn: с pause/resume
const ticks = ref(0)
const { pause, resume, isActive } = useIntervalFn(() => ticks.value++, 1000, { immediate: false })

// 4) useTimeoutFn: отложенный запуск с отменой
const { start: delayedStart, stop: delayedStop } = useTimeoutFn(
  () => add('timeout: сработал через 2с'),
  2000,
  { immediate: false },
)

// 5) useAsyncState: состояние async-операции из коробки
const fakeFetch = () => new Promise<string>(r => setTimeout(() => r('данные загружены'), 800))
const { state, isLoading, execute } = useAsyncState(fakeFetch, 'пока ничего', {
  delay: 300,
  onSuccess: () => void 0,
})
</script>

<template>
  <div class="stack">
    <div class="row">
      <input
        class="input"
        style="max-width: 240px"
        placeholder="печатайте — debounce 400мс…"
        @input="debounced(($event.target as HTMLInputElement).value)"
      />
      <button class="btn" @click="throttled">throttle-клик (не чаще 1с)</button>
    </div>

    <div class="row">
      <button class="btn" @click="isActive ? pause() : resume()">
        {{ isActive ? 'pause() интервала' : 'resume() интервала' }}
      </button>
      <span class="stat">ticks: <b>{{ ticks }}</b></span>
      <button class="btn" @click="delayedStart()">start timeout 2с</button>
      <button class="btn danger" @click="delayedStop()">stop timeout</button>
    </div>

    <div class="row">
      <button class="btn primary" @click="execute()">useAsyncState: execute()</button>
      <span class="tag" :class="isLoading ? 'warn' : 'ok'">{{ isLoading ? 'загрузка…' : state }}</span>
    </div>

    <div class="log">
      <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
      <div v-if="!log.length" class="muted">лог пуст</div>
    </div>

    <p class="muted">
      Печатайте быстро: debounce подождёт паузы и вызовется <b>один</b> раз. Жмите throttle-кнопку
      часто: реальных вызовов меньше, чем кликов.
    </p>
  </div>
</template>
