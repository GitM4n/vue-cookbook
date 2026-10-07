<script setup lang="ts">
import { ref, reactive, readonly, shallowReadonly, isReadonly } from 'vue'

const state = reactive({ count: 0, user: { name: 'Ада' } })

// readonly-обёртка: та же структура, но записи запрещены
const frozen = readonly(state)

// shallowReadonly: только первый уровень
const shallowFrozen = shallowReadonly({ config: 'a', nested: { editable: true } })

const log = ref<string[]>([])

function add(entry: string) {
  log.value.unshift(entry)
  if (log.value.length > 6) log.value.pop()
}

function tryWriteFrozen() {
  try {
    ;(frozen as { count: number }).count = 999
    add('запись в readonly прошла?! (не должно)')
  } catch {
    add('❌ запись в readonly: ошибка (dev-режим)')
  }
  // В production записи молча игнорируются
  add(`frozen.count = ${frozen.count} — значение не изменилось`)
}

function writeSource() {
  state.count++
  add(`источник state.count++ → frozen.count тоже ${frozen.count} (readonly — это вид)`)
}

function writeNestedThroughSource() {
  state.user.name = state.user.name === 'Ада' ? 'Грейс' : 'Ада'
  add(`state.user.name = ${state.user.name} → frozen.user.name тоже изменился`)
}

function tryWriteShallowNested() {
  shallowFrozen.nested.editable = false // вложенный уровень НЕ readonly
  add(`shallowFrozen.nested.editable = ${shallowFrozen.nested.editable} (вложенный остался writable)`)
}
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="writeSource">state.count++ (через источник)</button>
      <button class="btn danger" @click="tryWriteFrozen">попытка писать в readonly</button>
      <button class="btn" @click="writeNestedThroughSource">изменить вложенное поле</button>
      <button class="btn" @click="tryWriteShallowNested">писать в shallowReadonly.nested</button>
    </div>

    <div class="grid-2">
      <div class="card">
        <b>readonly(state)</b>
        <p class="mono muted" style="margin: 6px 0 0">
          count={{ frozen.count }} · user.name={{ frozen.user.name }}<br />
          isReadonly: {{ isReadonly(frozen) }}
        </p>
      </div>
      <div class="card">
        <b>shallowReadonly</b>
        <p class="mono muted" style="margin: 6px 0 0">
          config={{ shallowFrozen.config }} · nested.editable={{ shallowFrozen.nested.editable }}<br />
          isReadonly(shallowFrozen): {{ isReadonly(shallowFrozen) }}
        </p>
      </div>
    </div>

    <div class="log">
      <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
    </div>

    <p class="muted">
      readonly — это <b>вид</b> на источник, а не копия: изменения источника видны, записи —
      блокируются (в dev с ошибкой, в prod молча).
    </p>
  </div>
</template>
