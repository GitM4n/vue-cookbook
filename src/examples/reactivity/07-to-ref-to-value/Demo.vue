<script setup lang="ts">
import { ref, reactive, toRef, toRefs, toValue, unref, isRef } from 'vue'
import type { MaybeRefOrGetter } from 'vue'

const state = reactive({ count: 0, name: 'Ада' })

// toRef: один ref, связанный с полем реактивного источника
const countRef = toRef(state, 'count')

// toRefs: все поля сразу
const refs = toRefs(state)

// unref: значение или .value
function show(label: string, v: MaybeRefOrGetter<number>) {
  add(`${label}: unref → ${unref(v)}`)
}

// toValue: то же + поддержка getter-функций
const asGetter = () => 42
const asValue = 7
const asRef = ref(13)

const log = ref<string[]>([])
function add(entry: string) {
  log.value.unshift(entry)
  if (log.value.length > 10) log.value.pop()
}

function incrementAll() {
  state.count++ // меняем источник
}

function normalize(input: MaybeRefOrGetter<number>) {
  // toValue: единый способ получить значение из ref | getter | value
  return toValue(input)
}
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="incrementAll">state.count++</button>
      <button class="btn" @click="show('countRef', countRef)">прочитать toRef</button>
      <button class="btn" @click="show('toValue(getter)', normalize(asGetter))">toValue(getter)</button>
      <button class="btn" @click="show('toValue(7)', normalize(asValue))">toValue(число)</button>
      <button class="btn" @click="show('toValue(ref13)', normalize(asRef))">toValue(ref)</button>
    </div>

    <div class="grid-2">
      <div class="card">
        <b>toRef(state, 'count')</b>
        <p class="mono muted" style="margin: 6px 0 0">
          countRef.value = {{ countRef }} — живая связь с state
        </p>
        <p class="mono muted" style="margin: 4px 0 0">запись через countRef тоже обновит state</p>
      </div>

      <div class="card">
        <b>toRefs(state) — деструктуризация без потери</b>
        <p class="mono muted" style="margin: 6px 0 0">
          refs.count.value = {{ refs.count.value }}<br />
          refs.name.value = {{ refs.name.value }}<br />
          isRef(refs.count): {{ isRef(refs.count) }}
        </p>
      </div>
    </div>

    <div class="row">
      <button class="btn" @click="refs.count.value++; state.name = refs.count.value % 2 ? 'Грейс' : 'Ада'">
        запись через refs.count.value++
      </button>
      <span class="muted mono">state.count={{ state.count }}, name={{ state.name }}</span>
    </div>

    <div class="log">
      <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
    </div>

    <p class="muted">
      toRef/toRefs создают <b>связанные</b> ref — не копии. Изменение через любой путь синхронно
      отражается в источнике. toValue/unref — утилиты «снять обёртку», для функций принимающих ref|value|getter.
    </p>
  </div>
</template>
