<script setup lang="ts">
import { ref, computed } from 'vue'
import FilterPanel from './FilterPanel.vue'

const query = ref('')
const selected = ref<string[]>([])

const allTags = ['vue', 'nuxt', 'pinia', 'router', 'vite']

const result = computed(() =>
  allTags.filter(
    (t) =>
      t.includes(query.value.toLowerCase()) &&
      (selected.value.length === 0 || selected.value.includes(t)),
  ),
)

function toggleTag(tag: string) {
  selected.value = selected.value.includes(tag)
    ? selected.value.filter((t) => t !== tag)
    : [...selected.value, tag]
}
</script>

<template>
  <div class="stack">
    <!-- Родитель: состояние + данные; ребёнок: только отображение и события -->
    <FilterPanel :query="query" :selected="selected" :tags="allTags" @update:query="query = $event" @toggle="toggleTag" @clear="selected = []" />

    <div class="card">
      <div class="label" style="margin-bottom: 8px">Результат (computed от state)</div>
      <div class="row">
        <span v-for="t in result" :key="t" class="tag ok">{{ t }}</span>
        <span v-if="!result.length" class="muted">ничего не найдено</span>
      </div>
    </div>
  </div>
</template>
