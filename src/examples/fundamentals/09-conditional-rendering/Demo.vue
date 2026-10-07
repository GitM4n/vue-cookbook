<script setup lang="ts">
import { ref } from 'vue'

type State = 'empty' | 'loading' | 'error' | 'ready'

const state = ref<State>('ready')
const toggleClicks = ref(0)
const demoInput = ref('')

// Состояние внутри элементов, скрытых через v-show, сохраняется:
// узел остаётся в DOM, меняется только display.
// Через v-if узел уничтожается — состояние теряется при показе заново.
function forceToggle() {
  toggleClicks.value++
}
</script>

<template>
  <div class="stack">
    <div class="row">
      <select v-model="state" class="select">
        <option value="empty">empty</option>
        <option value="loading">loading</option>
        <option value="error">error</option>
        <option value="ready">ready</option>
      </select>
      <span class="muted">v-if / v-else-if / v-else-if / v-else</span>
    </div>

    <!-- Условный рендер через v-if: в DOM ровно одна ветка -->
    <div class="card">
      <p v-if="state === 'empty'" style="margin: 0">📭 Список пуст</p>
      <p v-else-if="state === 'loading'" style="margin: 0">⏳ Загрузка…</p>
      <p v-else-if="state === 'error'" style="margin: 0; color: var(--danger)">⚠️ Ошибка сети</p>
      <p v-else style="margin: 0">✅ Данные готовы</p>
    </div>

    <!-- v-show: узел всегда в DOM, меняется только display -->
    <div class="card">
      <div class="row row--between">
        <span>v-show узел:</span>
        <span class="tag" :class="toggleClicks % 2 ? 'ok' : 'warn'">
          переключений: {{ toggleClicks }}
        </span>
      </div>
      <input v-show="toggleClicks % 2 === 0" v-model="demoInput" class="input" placeholder="введённое сохраняется при v-show" style="margin-top: 8px" />
      <button class="btn small" style="margin-top: 8px" @click="forceToggle">
        переключить v-show
      </button>
      <p class="muted" style="margin: 8px 0 0">
        Введите текст, переключите несколько раз — текст остался: узел не уничтожался.
        Тот же тест с v-if стёр бы ввод.
      </p>
    </div>
  </div>
</template>
