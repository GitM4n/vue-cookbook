<script setup lang="ts">
import { ref } from 'vue'
import ChildCounter from './ChildCounter.vue'

// Состояние живёт в родителе: данные вниз, события вверх
const count = ref(0)
const history = ref<number[]>([])

function onChange(next: number) {
  count.value = next
  history.value = [...history.value, next].slice(-6)
}
</script>

<template>
  <div class="stack">
    <div class="row row--between">
      <span class="label">Родитель Demo.vue</span>
      <span class="tag info">count = {{ count }}</span>
    </div>

    <!-- Данные вниз через props -->
    <ChildCounter :count="count" :step="2" label="Удвоенный счётчик" @change="onChange" />

    <div class="log">
      <div v-for="(v, i) in history" :key="i">история: {{ v }}</div>
      <div v-if="history.length === 0">// события от ребёнка появятся здесь</div>
    </div>
  </div>
</template>
