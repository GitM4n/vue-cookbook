<script setup lang="ts">
// Слоты объявляются шаблоном: fallback виден, когда слот не передан
</script>

<template>
  <div class="card panel">
    <div class="panel__head">
      <slot name="header">Заголовок по умолчанию (слот не передан)</slot>
    </div>
    <div class="panel__body">
      <slot>Контент по умолчанию — родитель ничего не передал.</slot>
    </div>
    <div class="panel__foot">
      <slot name="footer" />
      <span class="muted" style="font-size: 12px">footer-слот объявлен, но пуст</span>
    </div>
  </div>
</template>

<style scoped>
.panel {
  border: 1px dashed var(--border-strong);
}
.panel__head {
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 10px;
  color: var(--accent);
}
.panel__body {
  min-height: 46px;
}
.panel__foot {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px dashed var(--border);
}
</style>
