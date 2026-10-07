<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')

// Типизированные события: payload описан в виде кортежа
const emit = defineEmits<{
  save: [payload: { text: string; at: number }]
  cancel: []
}>()

function onSave() {
  const value = text.value.trim()
  if (!value) return
  emit('save', { text: value, at: Date.now() })
  text.value = ''
}
</script>

<template>
  <div class="card">
    <div class="row">
      <input
        v-model="text"
        class="input"
        placeholder="Сообщение для emit…"
        style="flex: 1"
        @keyup.enter="onSave"
      />
      <button class="btn primary" :disabled="!text.trim()" @click="onSave">
        emit('save')
      </button>
      <button class="btn" @click="emit('cancel')">emit('cancel')</button>
    </div>
    <p class="muted" style="margin: 10px 0 0">
      Ребёнок не знает, что произойдёт дальше, — только сообщает.
    </p>
  </div>
</template>
