<script setup lang="ts">
import { ref, nextTick } from 'vue'

// ================= VDOM diff: keyed reconciliation =================
interface Node {
  id: number
  label: string
  color: string
}

let nextId = 1
const palette = ['#42b883', '#64b5f6', '#ffb74d', '#e57373', '#ba68c8']

const nodes = ref<Node[]>([])
const patchLog = ref<string[]>([])

function log(msg: string) {
  patchLog.value.unshift(msg)
  if (patchLog.value.length > 8) patchLog.value.pop()
}

function addNode() {
  const node: Node = {
    id: nextId++,
    label: `node-${nextId - 1}`,
    color: palette[nextId % palette.length],
  }
  nodes.value.push(node)
  log(`Mount: создан узел #${node.id} (новый vnode → новый DOM)`)
}

function shuffleNodes() {
  nodes.value = [...nodes.value].sort(() => Math.random() - 0.5)
  log('Patch (keyed): порядок vnode изменился → DOM-узлы ПЕРЕСТАВИЛИСЬ (move), не пересоздались')
}

function changeFirst() {
  if (nodes.value[0]) {
    nodes.value[0] = { ...nodes.value[0], label: nodes.value[0].label + '*' }
    log(`Patch (props): у первого узла сменился label → обновился ТОЛЬКО текст`)
  }
}

function removeFirst() {
  if (nodes.value[0]) {
    const id = nodes.value[0].id
    nodes.value = nodes.value.slice(1)
    log(`Unmount: узел #${id} удалён из vnode-дерева → DOM-узел снят`)
  }
}

function resetAll() {
  nodes.value = []
  patchLog.value = []
  nextId = 1
}

// ================= nextTick: очередь и флаш =================
const counter = ref(0)
const domValue = ref('(прочитайте после nextTick)')
const el = ref<HTMLElement | null>(null)

async function showTiming() {
  counter.value++
  // синхронное чтение — DOM ещё старый (эффект в очереди)
  const before = el.value?.textContent
  await nextTick()
  const after = el.value?.textContent
  domValue.value = `синхронно: «${before}» → после nextTick: «${after}»`
}
</script>

<template>
  <div class="stack">
    <div class="card">
      <b>VDOM: vnode-дерево и reconciliation</b>
      <div class="row" style="margin-top: 8px">
        <button class="btn" @click="addNode">+ mount</button>
        <button class="btn" @click="shuffleNodes">🔀 переставить (keyed move)</button>
        <button class="btn" @click="changeFirst">поменять props первого</button>
        <button class="btn danger" @click="removeFirst">− unmount первого</button>
        <button class="btn small" @click="resetAll">сброс</button>
      </div>

      <div class="row" style="gap: 8px; margin-top: 12px; flex-wrap: wrap">
        <span
          v-for="n in nodes"
          :key="n.id"
          class="tag"
          style="padding: 6px 12px; border-radius: 6px; color: #0b0e14"
          :style="{ background: n.color }"
        >
          #{{ n.id }} {{ n.label }}
        </span>
        <span v-if="!nodes.length" class="muted">дерево пусто — добавьте узлы</span>
      </div>

      <div class="log" style="margin-top: 8px">
        <div v-for="(line, i) in patchLog" :key="i" class="mono">{{ line }}</div>
      </div>
    </div>

    <div class="card">
      <b>Scheduler и nextTick</b>
      <div class="row" style="margin-top: 8px">
        <button class="btn primary" @click="showTiming">counter++ и прочитать DOM</button>
        <span class="mono muted">{{ domValue }}</span>
      </div>
      <p class="mono muted" style="margin: 8px 0 0">
        counter = {{ counter }} · DOM-текст: <span ref="el">{{ counter }}</span>
      </p>
      <p class="muted" style="margin: 8px 0 0">
        Изменение ref-а ставит рендер-эффект в очередь микрозадач; nextTick возвращает promise,
        резолвящийся после флаша очереди. Это и есть «когда DOM обновился».
      </p>
    </div>
  </div>
</template>
