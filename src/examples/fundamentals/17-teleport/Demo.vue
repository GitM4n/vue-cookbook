<script setup lang="ts">
import { ref } from 'vue'

const showInApp = ref(false)
const showToBody = ref(false)

const appBox = ref<HTMLElement | null>(null)
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="showToBody = true">модалка → body</button>
      <button class="btn" @click="showInApp = true">модалка → .demo-root (disabled)</button>
    </div>

    <!-- 1. Классика: модалка уходит в body, минуя overflow/z-index родителя -->
    <Teleport to="body">
      <div
        v-if="showToBody"
        style="position: fixed; inset: 0; z-index: 50; display: flex; align-items: center; justify-content: center; background: rgba(0, 0, 0, .55)"
        @click.self="showToBody = false"
      >
        <div class="card" style="min-width: 320px; max-width: 440px">
          <div class="row row--between">
            <b>Модальное окно (teleport to body)</b>
            <button class="btn small" @click="showToBody = false">✕</button>
          </div>
          <p class="muted" style="margin: 8px 0 0">
            DOM-узел живёт в конце &lt;body&gt;, а не внутри демо-панели:overflow:hidden и
            z-index предков больше не властны.
          </p>
        </div>
      </div>
    </Teleport>

    <!-- 2. disabled: тот же код рендерится на месте, внутри демо-панели -->
    <Teleport to=".demo-root" :disabled="true">
      <div
        v-if="showInApp"
        style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0, 0, 0, .4)"
        @click.self="showInApp = false"
      >
        <div class="card" style="min-width: 280px">
          <b>Оверлей внутри панели (disabled)</b>
          <p class="muted" style="margin: 6px 0 0">
            Teleport выключен — узел отрендерился прямо здесь.
          </p>
          <button class="btn small" style="margin-top: 8px" @click="showInApp = false">закрыть</button>
        </div>
      </div>
    </Teleport>

    <p class="muted">
      Откройте DevTools: узел модалки находится в конце &lt;body&gt;, вне корневого div приложения.
    </p>
  </div>
</template>
