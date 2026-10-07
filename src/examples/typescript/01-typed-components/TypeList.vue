<script setup lang="ts" generic="T extends { id: number }">
import { computed } from 'vue'

// generic="T" — типовой параметр компонента (Vue 3.3+)
const props = defineProps<{
  items: T[]
  filter?: (item: T) => boolean
}>()

const emit = defineEmits<{
  select: [item: T]
}>()

const filteredItems = computed(() =>
  props.filter ? props.items.filter(props.filter) : props.items,
)
</script>

<template>
  <div class="stack" style="gap: 4px">
    <button
      v-for="(item, index) in filteredItems"
      :key="item.id"
      class="card"
      style="margin: 0; text-align: left; cursor: pointer; padding: 8px 12px"
      @click="emit('select', item)"
    >
      <slot name="item" :item="item" :index="index">
        {{ String(item) }}
      </slot>
    </button>
    <p v-if="!filteredItems.length" class="muted">ничего не найдено</p>
  </div>
</template>
