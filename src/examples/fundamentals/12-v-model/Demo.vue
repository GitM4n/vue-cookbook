<script setup lang="ts">
import { ref, computed } from 'vue'

const text = ref('привет')
const nickname = ref('')
const synced = ref('двусторонняя')
const country = ref('')
const tags = ref<string[]>([])
const range = ref(20)
const notify = ref(true)
const log = ref<string[]>([])

function push(msg: string) {
  log.value.unshift(msg)
  if (log.value.length > 6) log.value.pop()
}

const normalized = computed(() => nickname.value.trim().toLowerCase())

function showState() {
  push(`text=${JSON.stringify(text.value)} nick=${JSON.stringify(nickname.value)} country=${country.value || '—'} tags=[${tags.value.join(',')}] range=${range.value} notify=${notify.value}`)
}

push('состояние синхронизируется в обе стороны')
</script>

<template>
  <div class="stack">
    <div class="grid-2">
      <div class="stack">
        <label class="label">Текст (v-model → ref)</label>
        <input v-model="text" class="input" />
        <p class="muted mono">← ref: {{ JSON.stringify(text) }}</p>

        <label class="label">Модификатор .trim + .lazy</label>
        <input v-model.trim.lazy="nickname" class="input" placeholder="синхронизируется по blur" />
        <p class="muted mono">normalized: {{ JSON.stringify(normalized) }}</p>

        <label class="label">Модификатор .number</label>
        <input v-model.number="range" type="range" min="0" max="100" style="width: 100%" />
        <p class="muted mono">range: {{ range }} (typeof {{ typeof range }})</p>
      </div>

      <div class="stack">
        <label class="label">Textarea</label>
        <textarea v-model="synced" class="input" rows="2" />

        <label class="label">Select</label>
        <select v-model="country" class="select">
          <option value="" disabled>выберите страну…</option>
          <option value="ru">Россия</option>
          <option value="kz">Казахстан</option>
          <option value="de">Германия</option>
        </select>

        <span class="label">Checkbox-группа (один ref на массив)</span>
        <div class="row" style="gap: 12px">
          <label><input v-model="tags" type="checkbox" value="vue" /> vue</label>
          <label><input v-model="tags" type="checkbox" value="ts" /> ts</label>
          <label><input v-model="tags" type="checkbox" value="vite" /> vite</label>
        </div>

        <label><input v-model="notify" type="checkbox" /> уведомления: {{ notify }}</label>
      </div>
    </div>

    <div class="row">
      <button class="btn primary" @click="showState">показать состояние</button>
    </div>
    <div class="log">
      <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
    </div>
  </div>
</template>
