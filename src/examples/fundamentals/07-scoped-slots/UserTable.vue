<script setup lang="ts">
interface User {
  id: number
  name: string
  score: number
}

const props = defineProps<{
  users: User[]
}>()

// Скоуп слота — то, что таблица отдаёт наружу:
// #{row} получает { item, index } (см. Demo.vue)
</script>

<template>
  <div class="table-wrap">
    <div class="row row--between" style="padding-bottom: 8px; border-bottom: 1px solid var(--border)">
      <span class="label">UserTable (не знает, как рисовать строку)</span>
      <span class="label">{{ props.users.length }} rows</span>
    </div>

    <!-- Каждую строку рендерит потребитель, данные — из скоупа слота -->
    <div v-for="(item, index) in props.users" :key="item.id" class="row-item">
      <slot name="row" :item="item" :index="index">
        {{ index + 1 }}. {{ item.name }}
      </slot>
    </div>
  </div>
</template>

<style scoped>
.row-item {
  padding: 8px 0;
  border-bottom: 1px dashed var(--border);
}
.row-item:last-child {
  border-bottom: none;
}
</style>
