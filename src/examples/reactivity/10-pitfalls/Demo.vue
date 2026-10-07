<script setup lang="ts">
import { ref, reactive } from 'vue'

const list = reactive([1, 2, 3])
const obj = reactive({ a: 1 })
const snapshotObj = ref({ items: [1, 2, 3] })
const state = reactive({ count: 1, inner: ref(100) })

const log = ref<string[]>([])
function add(entry: string) {
  log.value.unshift(entry)
  if (log.value.length > 8) log.value.pop()
}

function indexMutation() {
  list[0] = list[0] + 10
  add(`list[0] += 10 → UI обновился ✅ (Vue 3 Proxy ловит индексы)`)
}

function newProp() {
  ;(obj as Record<string, number>).b = 2
  add(`obj.b = 2 → UI обновился ✅ (новые свойства реактивны в Vue 3)`)
}

function wholeReplacement() {
  snapshotObj.value = { items: [9, 9, 9] }
  add(`ref.value = новый объект → обновился ✅`)
}

function destructureTrap() {
  const { count } = state // ❌ сняли значение
  const fake = count + 1
  add(`деструктуризация: локально ${fake}, но state.count=${state.count} — связи нет ❌`)
}

function refInReactive() {
  state.count++
  add(`state.count++ → {{ state.count }} в шаблоне показывает число (ref распакован)`)
}
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn" @click="indexMutation">list[0] += 10</button>
      <button class="btn" @click="newProp">obj.b = 2</button>
      <button class="btn" @click="wholeReplacement">ref.value = новый</button>
      <button class="btn danger" @click="destructureTrap">деструктуризация (❌)</button>
      <button class="btn" @click="refInReactive">state.count++</button>
    </div>

    <div class="row" style="gap: 12px">
      <div class="stat">list: <b>{{ list.join(', ') }}</b></div>
      <div class="stat">obj: <b>{{ JSON.stringify(obj) }}</b></div>
      <div class="stat">items: <b>{{ snapshotObj.items.join(', ') }}</b></div>
      <div class="stat">state.count: <b>{{ state.count }}</b></div>
      <div class="stat">state.inner: <b>{{ state.inner }}</b></div>
    </div>

    <div class="log">
      <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
    </div>

    <p class="muted">
      Все «страшилки» из Vue 2 (индексы, новые свойства) в Vue 3 <b>исправлены</b> Proxy-ом.
      Главные ловушки теперь другие: деструктуризация и потеря .value.
    </p>
  </div>
</template>
