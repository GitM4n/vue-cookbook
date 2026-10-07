<script setup lang="ts">
defineProps<{
  label: string
  count: number
  step?: number
}>()

const emit = defineEmits<{
  change: [next: number]
}>()
</script>

<template>
  <div class="card">
    <div class="row row--between">
      <b>{{ label }}</b>
      <span class="stat">{{ count }}</span>
    </div>
    <div class="row" style="margin-top: 10px">
      <button class="btn small" @click="emit('change', count - (step ?? 1))">−</button>
      <button class="btn small primary" @click="emit('change', count + (step ?? 1))">+</button>
      <span class="muted">props ↓ · emit ↑</span>
    </div>
  </div>
</template>
