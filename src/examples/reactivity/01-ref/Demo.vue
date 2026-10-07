<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const double = ref(0) // заполняется вручную — только чтобы показать .value
const history = ref<number[]>([])

function increment() {
  count.value += 1
  double.value = count.value * 2
  history.value.push(count.value)
}

function reset() {
  count.value = 0
  double.value = 0
  history.value = []
}
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="increment">+1</button>
      <button class="btn" @click="reset">сброс</button>
    </div>

    <div class="row" style="gap: 16px">
      <div class="stat">count: <b>{{ count }}</b></div>
      <div class="stat">double: <b>{{ double }}</b></div>
      <div class="stat">history: <b>{{ history.length }}</b></div>
    </div>

    <div class="log">
      <div v-for="(h, i) in history" :key="i" class="mono">клик #{{ h }} → count={{ h }}, double={{ h * 2 }}</div>
      <div v-if="!history.length" class="muted">нажмите +1</div>
    </div>

    <p class="muted mono">
      В script: count.value += 1 — без .value ничего не произойдёт. В шаблоне: <span v-pre>{{ count }}</span> — .value не нужен.
    </p>
  </div>
</template>
