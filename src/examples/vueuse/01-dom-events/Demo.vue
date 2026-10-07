<script setup lang="ts">
import { ref } from 'vue'
import { useEventListener, useElementSize, useIntersectionObserver, useClipboard } from '@vueuse/core'

// 1) useEventListener: авто-отписка при unmount
const lastKey = ref('—')
useEventListener(window, 'keydown', (e: KeyboardEvent) => {
  lastKey.value = e.key
})

// 2) useElementSize: реактивные размеры контейнера
const box = ref<HTMLElement | null>(null)
const { width, height } = useElementSize(box)

// 3) useIntersectionObserver: появился ли блок в вьюпорте
const target = ref<HTMLElement | null>(null)
const isVisible = ref(false)
const { stop } = useIntersectionObserver(target, ([entry]) => {
  isVisible.value = !!entry?.isIntersecting
})

// 4) useClipboard: копирование с индикатором
const { copied, copy } = useClipboard()
</script>

<template>
  <div class="stack">
    <div class="row">
      <span class="stat">последняя клавиша: <b>{{ lastKey }}</b> (нажмите любую)</span>
    </div>

    <div
      ref="box"
      class="card"
      style="resize: horizontal; overflow: auto; min-width: 200px; max-width: 100%"
    >
      <b>Потяните за угол этого блока (resize)</b>
      <p class="mono muted" style="margin: 6px 0 0">
        useElementSize: width={{ Math.round(width) }} · height={{ Math.round(height) }}
      </p>
    </div>

    <div ref="target" class="card">
      <div class="row row--between">
        <b>useIntersectionObserver</b>
        <span class="tag" :class="isVisible ? 'ok' : 'info'">{{ isVisible ? 'виден' : 'не в вьюпорте' }}</span>
      </div>
      <p class="muted" style="margin: 6px 0 0">Прокрутите так, чтобы блок ушёл из экрана — тег изменится.</p>
    </div>

    <div class="row">
      <button class="btn primary" @click="copy('VueUse useClipboard — работает!')">
        скопировать текст
      </button>
      <span class="tag" :class="copied ? 'ok' : 'info'">{{ copied ? 'скопировано ✓' : 'в буфере ничего' }}</span>
    </div>

    <p class="muted">
      Ни одной ручной подписки и ни одного cleanup: useEventListener/useElementSize сами
      регистрируются и отписываются. Это главный выигрыш VueUse.
    </p>
  </div>
</template>
