<script setup lang="ts">
import { inject } from 'vue'
import { themeKey } from './themeKey'

// inject типизирован через InjectionKey — ThemeContext выводится автоматически
const theme = inject(themeKey)

if (!theme) {
  // ключ обязателен: если провайдера нет — явная ошибка контракта
  throw new Error('themeKey не найден: используйте внутри ThemeProvider')
}
</script>

<template>
  <div class="stack">
    <slot />
    <div class="row row--between">
      <span>
        Тема: <b>{{ theme.mode.value }}</b>
        <span class="tag" :class="theme.mode.value === 'dark' ? 'info' : 'warn'">injected</span>
      </span>
      <button class="btn primary" @click="theme.toggle()">переключить тему</button>
    </div>
  </div>
</template>
