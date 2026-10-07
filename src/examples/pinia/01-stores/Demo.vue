<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from './counter-store'

const store = useCounterStore()

// storeToRefs: сохраняет реактивность при деструктуризации state/getters
// (actions деструктурируются напрямую — это просто функции)
const { count, double, isPositive, history } = storeToRefs(store)
const { increment, reset } = store
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="increment">increment()</button>
      <button class="btn" @click="reset">reset()</button>
      <span class="stat">count: <b>{{ count }}</b></span>
      <span class="stat">double: <b>{{ double }}</b></span>
      <span class="tag" :class="isPositive ? 'ok' : 'info'">{{ isPositive ? 'положительный' : 'нулевой' }}</span>
    </div>

    <div class="card">
      <b>history (state-массив)</b>
      <div class="log" style="margin-top: 8px">
        <div v-for="(h, i) in history" :key="i" class="mono">шаг {{ i + 1 }}: count = {{ h }}</div>
        <div v-if="!history.length" class="muted">пусто</div>
      </div>
    </div>

    <p class="muted">
      Этот стор используют <b>три независимые панели</b> на этой странице (см. код ниже) — и они
      всегда показывают одно и то же: стор — синглтон. Это и есть «разделяемое состояние» в Pinia.
    </p>
  </div>
</template>
