<script setup lang="ts">
import { ref, computed } from 'vue'

interface Item {
  id: number
  label: string
  typed: string
}

let nextId = 4
const useIndexKey = ref(false)

const items = ref<Item[]>([
  { id: 1, label: 'Первый', typed: '' },
  { id: 2, label: 'Второй', typed: '' },
  { id: 3, label: 'Третий', typed: '' },
])

// key = id → Vue связывает vnode с конкретным элементом
// key = index → vnode связывается с позицией: при удалении сверху
// введённый текст «прилипает» к другой строке
const keys = computed(() =>
  items.value.map((it, i) => (useIndexKey.value ? String(i) : String(it.id))),
)

function addTop() {
  items.value = [
    { id: nextId++, label: `Новый #${nextId - 1}`, typed: '' },
    ...items.value,
  ]
}

function removeTop() {
  items.value = items.value.slice(1)
}
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn" @click="addTop">➕ добавить в начало</button>
      <button class="btn danger" @click="removeTop">➖ удалить первый</button>
      <button class="btn" :class="{ primary: useIndexKey }" @click="useIndexKey = !useIndexKey">
        key: {{ useIndexKey ? 'index (❌)' : 'id (✅)' }}
      </button>
    </div>

    <p class="muted">
      Введите что-нибудь в первые поля, затем добавьте/удалите элемент сверху.
      С ключом <b>index</b> текст «переезжает» на другую строку — Vue считает позицию тем же элементом.
    </p>

    <div class="stack" style="gap: 8px">
      <div v-for="(item, i) in items" :key="keys[i]" class="card">
        <div class="row row--between">
          <b>{{ item.label }}</b>
          <span class="tag" :class="useIndexKey ? 'bad' : 'ok'">
            key = {{ useIndexKey ? i : item.id }}
          </span>
        </div>
        <input v-model="item.typed" class="input" placeholder="введённый текст…" style="margin-top: 8px" />
      </div>
    </div>
  </div>
</template>
