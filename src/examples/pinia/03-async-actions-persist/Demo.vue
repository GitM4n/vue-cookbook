<script setup lang="ts">
import { defineStore, storeToRefs } from 'pinia'
import { ref, watch } from 'vue'

interface Note {
  id: number
  text: string
}

// Стор с async-action и ручной персистентностью через $subscribe
const useNotesStore = defineStore('notesDemo', () => {
  const notes = ref<Note[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // async action: loading/error — часть контракта стора
  async function fetchNotes() {
    loading.value = true
    error.value = null
    try {
      // имитация сети
      await new Promise(r => setTimeout(r, 700))
      if (Math.random() < 0.15) throw new Error('network glitch (имитация)')
      notes.value = [
        { id: 1, text: 'заметка с «сервера» #1' },
        { id: 2, text: 'заметка с «сервера» #2' },
      ]
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'unknown'
    } finally {
      loading.value = false
    }
  }

  function add(text: string) {
    notes.value.push({ id: Date.now(), text })
  }

  function clear() {
    notes.value = []
  }

  return { notes, loading, error, fetchNotes, add, clear }
})

const store = useNotesStore()
const { notes, loading, error } = storeToRefs(store)

// Персистентность: $subscribe на изменения state → localStorage
const STORAGE_KEY = 'pinia-notes-demo'
store.$subscribe((_, state) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.notes))
  persistCount.value++
})

const persistCount = ref(0)

// Восстановление при старте (в реальном коде — в самом сторе)
try {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    const parsed = JSON.parse(saved) as Note[]
    if (Array.isArray(parsed) && parsed.length) notes.value = parsed
  }
} catch {
  // битый JSON — игнорируем
}

const draft = ref('')
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="store.fetchNotes()" :disabled="loading">
        {{ loading ? 'загрузка…' : 'fetchNotes() (async action)' }}
      </button>
      <input v-model="draft" class="input" style="max-width: 220px" placeholder="текст заметки…" @keyup.enter="store.add(draft); draft = ''" />
      <button class="btn" @click="store.add(draft); draft = ''">add()</button>
      <button class="btn danger" @click="store.clear()">clear()</button>
    </div>

    <span v-if="error" class="tag bad">ошибка: {{ error }}</span>

    <div class="card">
      <div class="row row--between">
        <b>notes ({{ notes.length }})</b>
        <span class="tag info">$subscribe → localStorage: {{ persistCount }} записей</span>
      </div>
      <div class="log" style="margin-top: 8px">
        <div v-for="n in notes" :key="n.id" class="mono">{{ n.text }}</div>
        <div v-if="!notes.length" class="muted">пусто — загрузите или добавьте</div>
      </div>
    </div>

    <p class="muted">
      Добавьте заметки и <b>перезагрузите страницу</b> — они восстановятся из localStorage
      ($subscribe сохранял каждый change). Кнопка fetch показывает асинхронный action с
      loading/error — состояние сети живёт в сторе, а не в компонентах.
    </p>
  </div>
</template>
