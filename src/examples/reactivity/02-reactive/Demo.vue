<script setup lang="ts">
import { reactive, isReactive, markRaw } from 'vue'

const state = reactive({
  user: { name: 'Ада', role: 'admin' },
  tags: ['vue', 'ts'],
  visits: 0,
})

// «Сырое» состояние нельзя сравнивать с реактивным по ===
const raw = { x: 1 }
const reactiveRaw = reactive(raw)

const config = markRaw({ apiKey: 'static-not-reactive' })

function visit() {
  state.visits++
}

function rename() {
  state.user.name = state.user.name === 'Ада' ? 'Грейс' : 'Ада'
}

function addTag() {
  state.tags.push(`tag-${state.tags.length + 1}`)
}
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="visit">+1 визит</button>
      <button class="btn" @click="rename">переименовать</button>
      <button class="btn" @click="addTag">добавить тег</button>
    </div>

    <div class="grid-2">
      <div class="card">
        <b>state (reactive)</b>
        <p class="mono muted" style="margin: 8px 0 0">
          visits={{ state.visits }}<br />
          user={{ JSON.stringify(state.user) }}<br />
          tags={{ JSON.stringify(state.tags) }}
        </p>
      </div>

      <div class="card">
        <b>Проверки</b>
        <ul class="mono muted" style="margin: 8px 0 0; padding-left: 18px">
          <li>isReactive(state): {{ isReactive(state) }}</li>
          <li>isReactive(raw): {{ isReactive(raw) }}</li>
          <li>reactive(raw) === raw: {{ reactiveRaw === raw }}</li>
          <li>config реактивен: {{ config.apiKey === 'static-not-reactive' ? 'нет (markRaw)' : 'да' }}</li>
        </ul>
      </div>
    </div>

    <p class="muted">
      Мутации вложенных полей (state.user.name) и методов массива (push) полностью реактивны —
      Proxy перехватывает и get, и set, и вызовы методов.
    </p>
  </div>
</template>
