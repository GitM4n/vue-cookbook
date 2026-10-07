<script setup lang="ts">
import { defineStore, storeToRefs } from 'pinia'
import { ref, computed } from 'vue'

// ========== OPTION-стор: state/getters/actions как поля объекта ==========
const useTodoOption = defineStore('todoOption', {
  state: () => ({
    items: ['выучить Pinia', 'попробовать setup-стор'] as string[],
    filter: 'all' as 'all' | 'done' | 'active',
  }),
  getters: {
    total: (state) => state.items.length,
    // доступ к другим getters через this
    summary(): string {
      return `${this.total} задач, фильтр: ${this.filter}`
    },
  },
  actions: {
    add(text: string) {
      this.items.push(text)
    },
    clear() {
      this.items = []
    },
  },
})

// ========== SETUP-стор: та же логика в другом стиле ==========
const useTodoSetup = defineStore('todoSetup', () => {
  const items = ref<string[]>([])
  const filter = ref<'all' | 'done' | 'active'>('all')
  const total = computed(() => items.value.length)
  function add(text: string) {
    items.value.push(text)
  }
  function clear() {
    items.value = []
  }
  return { items, filter, total, add, clear }
})

const option = useTodoOption()
const setup = useTodoSetup()
const oRefs = storeToRefs(option)
const sRefs = storeToRefs(setup)

function seedBoth() {
  option.add('задача A')
  setup.add('задача A')
}
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="seedBoth">добавить задачу в оба стора</button>
      <button class="btn" @click="option.clear(); setup.clear()">очистить оба</button>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="row row--between">
          <b>Option-стор</b>
          <span class="tag info">state/getters/actions</span>
        </div>
        <p class="mono muted" style="margin: 6px 0 0">
          {{ oRefs.items.value.length }} задач · «{{ option.summary }}»
        </p>
        <div class="log" style="margin-top: 6px">
          <div v-for="(t, i) in oRefs.items.value" :key="i" class="mono">{{ t }}</div>
        </div>
      </div>

      <div class="card">
        <div class="row row--between">
          <b>Setup-стор</b>
          <span class="tag ok">ref/computed/fn</span>
        </div>
        <p class="mono muted" style="margin: 6px 0 0">{{ sRefs.items.value.length }} задач</p>
        <div class="log" style="margin-top: 6px">
          <div v-for="(t, i) in sRefs.items.value" :key="i" class="mono">{{ t }}</div>
        </div>
      </div>
    </div>

    <p class="muted">
      Оба стора полностью эквивалентны. Option — декларативная структура, удобна для $reset и
      простых CRUD. Setup — вся мощь Composition API: watch, композаблы, приватные переменные.
    </p>
  </div>
</template>
