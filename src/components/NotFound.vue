<script setup lang="ts">
defineProps<{ title?: string }>()
</script>

<template>
  <div class="notfound">
    <h1>404</h1>
    <p>{{ title ?? 'Такой страницы нет.' }}</p>
    <RouterLink to="/" class="btn primary">← На главную</RouterLink>
  </div>
</template>
