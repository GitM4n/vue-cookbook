<script setup lang="ts">
// Presentational-компонент: только props и события, никакого состояния
defineProps<{
  query: string
  selected: string[]
  tags: string[]
}>()

const emit = defineEmits<{
  'update:query': [value: string]
  toggle: [tag: string]
  clear: []
}>()
</script>

<template>
  <div class="card">
    <div class="row">
      <input
        class="input"
        :value="query"
        placeholder="Поиск тега…"
        style="flex: 1"
        @input="emit('update:query', ($event.target as HTMLInputElement).value)"
      />
      <button class="btn small" @click="emit('clear')">сбросить</button>
    </div>
    <div class="row" style="margin-top: 10px">
      <button
        v-for="t in tags"
        :key="t"
        class="btn small"
        :class="{ primary: selected.includes(t) }"
        @click="emit('toggle', t)"
      >
        {{ t }}
      </button>
    </div>
  </div>
</template>
