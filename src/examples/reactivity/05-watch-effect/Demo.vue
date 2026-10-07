<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const query = ref('')
const log = ref<string[]>([])

function add(entry: string) {
  log.value.unshift(entry)
  if (log.value.length > 8) log.value.pop()
}

// Зависимости собираются автоматически: всё, что прочитано в колбэке
watchEffect((onCleanup) => {
  const q = query.value // ← это чтение становится зависимостью
  if (!q) {
    add('watchEffect: пустой запрос — ждём ввод')
    return
  }
  add(`эффект: запрос «${q}» (имитация fetch)`)
  // Cleanup сработает перед следующим запуском и при остановке
  const timer = setTimeout(() => add(`fetch «${q}» завершён`), 800)
  onCleanup(() => {
    clearTimeout(timer)
    add(`cleanup: предыдущий fetch «${q}» отменён`)
  })
})

// Возвращает stop()
const stop = watchEffect(() => {
  void query.value.length
})
setTimeout(stop, 5000)
</script>

<template>
  <div class="stack">
    <div class="row">
      <input v-model="query" class="input" placeholder="введите запрос…" style="max-width: 320px" />
    </div>
    <div class="log">
      <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
    </div>
    <p class="muted">
      Вводите текст: эффект срабатывает на каждое изменение. Заметьте cleanup перед каждым новым
      запуском — так отменяют прошлые запросы.
    </p>
  </div>
</template>
