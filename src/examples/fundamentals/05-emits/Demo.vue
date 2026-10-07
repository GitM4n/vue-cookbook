<script setup lang="ts">
import { ref } from 'vue'
import EmitChild from './EmitChild.vue'

const received = ref<string[]>([])

function on(event: string) {
  received.value = [event, ...received.value].slice(0, 8)
}
</script>

<template>
  <div class="stack">
    <div class="row row--between">
      <span class="label">Родитель слушает события ↓</span>
      <span class="tag info">{{ received.length }} событий</span>
    </div>

    <EmitChild @save="(p) => on(`save { text: '${p.text}' }`)" @cancel="on('cancel')" />

    <div class="log">
      <div v-for="(e, i) in received" :key="i">{{ e }}</div>
      <div v-if="!received.length">// ребёнок ещё ничего не излучил</div>
    </div>
  </div>
</template>
