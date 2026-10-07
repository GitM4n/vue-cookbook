<script setup lang="ts">
import { ref, computed, onActivated, onDeactivated, onMounted } from 'vue'

// Внутренний «вкладочный» компонент для демонстрации сохранения состояния
const CounterTab = {
  name: 'CounterTab',
  setup() {
    const count = ref(0)
    const activations = ref(0)
    onMounted(() => { activations.value++ })
    onActivated(() => { activations.value++ })
    return { count, activations }
  },
  template: `
    <div class="card">
      <div class="row row--between">
        <b>🔢 Счётчик</b>
        <span class="tag ok">alive</span>
      </div>
      <p class="muted" style="margin: 6px 0 0">count = {{ count }} — сохраняется при переключении вкладок.</p>
      <div class="row" style="margin-top: 8px">
        <button class="btn small primary" @click="count++">+1</button>
        <span class="muted mono">activate-событий: {{ activations }}</span>
      </div>
    </div>
  `,
}

const FormTab = {
  name: 'FormTab',
  setup() {
    const text = ref('')
    return { text }
  },
  template: `
    <div class="card">
      <b>📝 Черновик</b>
      <p class="muted" style="margin: 6px 0 0">Введите текст и переключите вкладку — он останется здесь.</p>
      <input v-model="text" class="input" style="margin-top: 8px" placeholder="черновик…" />
    </div>
  `,
}

const EphemeralTab = {
  name: 'EphemeralTab',
  setup() {
    const stamp = ref(Date.now())
    return { stamp }
  },
  template: `
    <div class="card">
      <b>⏱ Одноразовая</b>
      <p class="muted" style="margin: 6px 0 0">Этот компонент в exclude: каждое переключение пересоздаёт его.</p>
      <p class="muted mono" style="margin: 6px 0 0">создан: {{ new Date(stamp).toLocaleTimeString() }}</p>
    </div>
  `,
}

const tabs = [CounterTab, FormTab, EphemeralTab]
const labels: Record<string, string> = {
  CounterTab: 'Счётчик',
  FormTab: 'Черновик',
  EphemeralTab: 'Одноразовая',
}

const active = ref(0)
const keepEphemeral = ref(false)

// include-список: какие имена KeepAlive кеширует
const includeList = computed(() =>
  keepEphemeral.value ? 'CounterTab,FormTab,EphemeralTab' : 'CounterTab,FormTab',
)
</script>

<template>
  <div class="stack">
    <div class="row">
      <button
        v-for="(tab, i) in tabs"
        :key="tab.name"
        class="btn"
        :class="{ primary: i === active }"
        @click="active = i"
      >
        {{ labels[tab.name] }}
      </button>
      <button class="btn" :class="{ primary: keepEphemeral }" @click="keepEphemeral = !keepEphemeral">
        include: {{ keepEphemeral ? 'все три' : 'без EphemeralTab' }}
      </button>
    </div>

    <KeepAlive :include="includeList">
      <component :is="tabs[active]" />
    </KeepAlive>

    <p class="muted">
      Счётчик и черновик сохраняются. «Одноразовая» вкладка пересоздаётся при каждом возвращении,
      пока она вне include — заметьте её метку времени.
    </p>
  </div>
</template>
