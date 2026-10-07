<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

// Переключатель, чтобы «нагрузить» сеть и увидеть состояния
const delay = ref(0)

function importWithDelay() {
  return new Promise<{ default: unknown }>((resolve, reject) => {
    setTimeout(() => {
      if (delay.value === -1) {
        reject(new Error('network error'))
        return
      }
      // Динамический import отдельным чанком
      import('./HeavyChart.vue')
        .then(m => resolve(m))
        .catch(reject)
    }, delay.value)
  })
}

const HeavyChart = defineAsyncComponent({
  loader: importWithDelay,
  delay: 200, // не мигать спиннером на быстрых ответах
  timeout: 15000,
  // eslint-disable-next-line
  errorComponent: { template: `<div class="tag bad">не удалось загрузить компонент — попробуйте снова</div>` },
  loadingComponent: { template: `<div class="tag info">загрузка чанка…</div>` },
})

const retryKey = ref(0)
function recreate() {
  retryKey.value++ // смена key пересоздаёт async-компонент
}
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn" @click="delay = 0; recreate()">загрузить быстро</button>
      <button class="btn" @click="delay = 1200; recreate()">загрузить с задержкой 1.2s</button>
      <button class="btn danger" @click="delay = -1; recreate()">имитировать ошибку сети</button>
    </div>

    <div class="card">
      <b>График (тяжёлый компонент отдельным чанком)</b>
      <p class="muted" style="margin: 6px 0 0">
        Код HeavyChart.vue грузится только по клику: проверьте вкладку Network —
        появится новый js-чанк.
      </p>
      <div style="margin-top: 10px">
        <HeavyChart :key="retryKey" />
      </div>
    </div>
  </div>
</template>
