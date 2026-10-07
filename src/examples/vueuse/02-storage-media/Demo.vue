<script setup lang="ts">
import { useLocalStorage, useMediaQuery, useBreakpoints, useDark, useToggle } from '@vueuse/core'

// 1) useLocalStorage: живой ref, синхронизированный с хранилищем
const nickname = useLocalStorage('demo-nickname', 'гость')

// 2) useMediaQuery: реактивный media query
const isWide = useMediaQuery('(min-width: 900px)')
const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

// 3) useBreakpoints: именованные брейкпоинты
const breakpoints = useBreakpoints({ sm: 640, md: 768, lg: 1024 })
const active = breakpoints.active // текущее имя брейкпоинта (computed)

// 4) useDark: тема из box (или media), переключатель через useToggle
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="stack">
    <div class="row">
      <label class="label">useLocalStorage:</label>
      <input v-model="nickname" class="input" style="max-width: 200px" />
      <span class="muted mono">localStorage[‘demo-nickname’] = {{ JSON.stringify(nickname) }}</span>
    </div>

    <div class="grid-2">
      <div class="card">
        <b>useMediaQuery</b>
        <ul class="mono muted" style="margin: 8px 0 0; padding-left: 18px">
          <li>min-width: 900px → {{ isWide }}</li>
          <li>prefers-reduced-motion → {{ prefersReducedMotion }}</li>
        </ul>
      </div>

      <div class="card">
        <b>useBreakpoints</b>
        <p class="mono muted" style="margin: 8px 0 0">
          активный брейкпоинт: <b>{{ active }}</b>
          <br />greaterOrEqual('md'): {{ breakpoints.greaterOrEqual('md') }}
        </p>
      </div>
    </div>

    <div class="row">
      <button class="btn primary" @click="toggleDark()">
        useDark: сейчас {{ isDark ? 'dark' : 'light' }} — переключить
      </button>
    </div>

    <p class="muted">
      Введите ник и <b>перезагрузите страницу</b> — значение вернётся из localStorage. Изменяйте
      размер окна: media-запросы и брейкпоинты обновляются реактивно, без слушателей resize в коде.
    </p>
  </div>
</template>
