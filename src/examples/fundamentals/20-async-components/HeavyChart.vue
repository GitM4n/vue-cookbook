<script setup lang="ts">
const points = 60
const bars = Array.from({ length: 24 }, (_, i) => 20 + Math.round(70 * Math.abs(Math.sin(i / 3))))
</script>

<template>
  <div class="card">
    <div class="row row--between">
      <b>📈 HeavyChart</b>
      <span class="tag ok">чанк загружен</span>
    </div>
    <div class="row" style="gap: 4px; align-items: flex-end; height: 80px; margin-top: 8px">
      <div
        v-for="(h, i) in bars"
        :key="i"
        style="flex: 1; background: var(--accent); opacity: .7; border-radius: 3px"
        :style="{ height: h + '%' }"
      />
    </div>
    <p class="muted mono" style="margin: 6px 0 0">{{ points }} точек, {{ bars.length }} баров — «тяжёлый» для примера</p>
  </div>
</template>
