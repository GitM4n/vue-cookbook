<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string
    age: number
    role?: 'admin' | 'user'
    tags?: string[]
  }>(),
  {
    role: 'user',
    tags: () => [],
  },
)
</script>

<template>
  <div class="card">
    <div class="row row--between">
      <b>{{ props.name }}, {{ props.age }}</b>
      <span class="tag" :class="props.role === 'admin' ? 'bad' : 'ok'">{{ props.role }}</span>
    </div>
    <div class="row" style="margin-top: 8px">
      <span v-for="t in props.tags" :key="t" class="tag info">{{ t }}</span>
      <span v-if="!props.tags.length" class="muted">tags пуст (default = [])</span>
    </div>
  </div>
</template>
