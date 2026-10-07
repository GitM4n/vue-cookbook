<script setup lang="ts">
// Имитация тяжёлой зависимости: графическая библиотека, редактор и т.п.
const bars = Array.from({ length: 36 }, (_, i) => 30 + Math.round(60 * Math.abs(Math.sin(i / 4))))
</script>

<template>
  <div class="card">
    <div class="row row--between">
      <b>📦 HeavyWidget</b>
      <span class="tag ok">отдельный чанк</span>
    </div>
    <div class="row" style="gap: 3px; align-items: flex-end; height: 60px; margin-top: 8px">
      <div
        v-for="(h, i) in bars"
        :key="i"
        style="flex: 1; background: var(--accent); opacity: .75; border-radius: 2px"
        :style="{ height: h + '%' }"
      />
    </div>
    <p class="muted mono" style="margin: 6px 0 0">
      Этот компонент + его зависимости жили бы в main-бандле без code splitting.
    </p>
  </div>
</template>
