<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

// Три «страницы» с одинаковым интерфейсом, но разными компонентами
const StaticTab = {
  name: 'StaticTab',
  setup() {
    const views = ref(0)
    onMounted(() => { views.value++ })
    return { views }
  },
  template: `
    <div class="card">
      <b>📊 Статистика</b>
      <p class="muted" style="margin: 6px 0 0">Локальное состояние: просмотров = {{ views }}.</p>
      <p class="muted" style="margin: 6px 0 0">При переключении вкладок компонент <b>уничтожается</b> — счётчик сбрасывается.</p>
    </div>
  `,
}

const ProfileTab = {
  name: 'ProfileTab',
  setup() {
    const edits = ref(0)
    return { edits }
  },
  template: `
    <div class="card">
      <b>👤 Профиль</b>
      <p class="muted" style="margin: 6px 0 0">Это другой компонент со своим состоянием (edits = {{ edits }}).</p>
    </div>
  `,
}

const SettingsTab = {
  name: 'SettingsTab',
  setup() {
    const dark = ref(true)
    return { dark }
  },
  template: `
    <div class="card">
      <b>⚙️ Настройки</b>
      <p class="muted" style="margin: 6px 0 0">Своё состояние: dark = {{ dark }} (кликните переключатель).</p>
      <label style="margin-top: 8px; display: block"><input type="checkbox" v-model="dark" /> тёмная тема</label>
    </div>
  `,
}

const tabs = [
  { id: 'stats', label: 'Статистика', component: StaticTab },
  { id: 'profile', label: 'Профиль', component: ProfileTab },
  { id: 'settings', label: 'Настройки', component: SettingsTab },
]

const active = ref(tabs[0])
const switchCount = ref(0)

function pick(tab: (typeof tabs)[number]) {
  if (tab.id === active.value.id) return
  active.value = tab
  switchCount.value++
}

const note = computed(() =>
  switchCount.value === 0
    ? 'Состояние вкладок пока не сбрасывалось.'
    : `Вкладок сменено: ${switchCount.value} — состояние каждой вкладки при этом терялось (кроме KeepAlive, о нём дальше).`,
)
</script>

<template>
  <div class="stack">
    <div class="row">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="btn"
        :class="{ primary: tab.id === active.id }"
        @click="pick(tab)"
      >
        {{ tab.label }}
      </button>
    </div>

    <component :is="active.component" />

    <p class="muted">{{ note }}</p>
    <p class="muted mono">Сейчас отрендерен: {{ active.component.name }}</p>
  </div>
</template>
