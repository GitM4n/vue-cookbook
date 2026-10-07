<script setup lang="ts">
import { ref, nextTick } from 'vue'
import HookBox from './HookBox.vue'

const show = ref(true)
const count = ref(0)
const log = ref<string[]>(['// покрутите кнопки — события живого цикла появятся здесь'])

function trace(message: string) {
  log.value.push(message)
}

function mutateOnce() {
  count.value++
  trace('пользователь: count++')
}

async function mutateTwice() {
  count.value++
  count.value++
  trace('пользователь: count++ дважды в одном tick')
  await nextTick()
  // Vue объединяет оба изменения в один ререндер — так и работает батчинг
  trace('Vue: batched → один рендер вместо двух')
}
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="show = !show">
        {{ show ? '💥 Размонтировать' : '♻️ Смонтировать' }} HookBox
      </button>
      <button class="btn" @click="mutateOnce">Изменить состояние</button>
      <button class="btn" @click="mutateTwice">Изменить дважды за tick</button>
      <span class="tag info">count = {{ count }}</span>
    </div>

    <div class="card">
      <HookBox v-if="show" :count="count" :trace="trace" />
      <p v-else class="muted">HookBox размонтирован — его onUnmounted уже отработал ↑</p>
    </div>

    <div class="log">
      <div v-for="(line, i) in log" :key="i">{{ line }}</div>
    </div>
  </div>
</template>
