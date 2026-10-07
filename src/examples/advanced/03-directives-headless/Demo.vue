<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, type Directive } from 'vue'

// ================= Кастомная директива v-highlight =================
interface HighlightBinding {
  color?: string
  pulse?: boolean
}

const vHighlight: Directive<HTMLElement, HighlightBinding | undefined> = {
  mounted(el, binding) {
    const { color = 'rgba(66, 184, 131, .25)', pulse = false } = binding.value ?? {}
    el.style.background = color
    if (pulse) {
      el.style.transition = 'box-shadow .3s'
      el.style.boxShadow = '0 0 0 2px rgba(66, 184, 131, .6)'
    }
  },
  updated(el, binding) {
    const { color = 'rgba(66, 184, 131, .25)' } = binding.value ?? {}
    el.style.background = color
  },
  unmounted(el) {
    el.style.background = ''
    el.style.boxShadow = ''
  },
}

// ================= Headless-паттерн: useToggleList =================
// Логика без разметки: возвращает состояние и методы, UI решает как рисовать
interface ToggleItem {
  id: string
  selected: boolean
}

function useToggleList(initial: string[]) {
  const selected = ref<Set<string>>(new Set(initial))

  function toggle(id: string) {
    const next = new Set(selected.value)
    next.has(id) ? next.delete(id) : next.add(id)
    selected.value = next
  }

  const count = computed(() => selected.value.size)
  return { selected, toggle, count }
}

const { selected, toggle, count } = useToggleList(['vue', 'router'])
const options = ['vue', 'router', 'pinia', 'vitest']

// ================= v-модификаторы через аргументы =================
const events = ref<string[]>([])
function addLog(msg: string) {
  events.value.unshift(msg)
  if (events.value.length > 5) events.value.pop()
}

onMounted(() => {
  // директивы уже инициализированы компилятором к этому моменту
  addLog('mounted: директивы инициализированы')
})
void onUnmounted // демонстрация cleanup-точки; здесь подписок нет
</script>

<template>
  <div class="stack">
    <div class="card">
      <b>v-highlight — кастомная директива</b>
      <div class="row" style="margin-top: 8px">
        <p v-highlight="{ color: 'rgba(66,184,131,.25)', pulse: true }" style="margin: 0; padding: 8px">
          Абзац с подсветкой через v-highlight
        </p>
      </div>
      <p class="muted" style="margin: 8px 0 0">
        Директива — DOM-функция: mounted/updated/unmounted хуки напрямую работают со стилями узла.
        Локальные директивы в script setup: имя vHighlight → использование v-highlight.
      </p>
    </div>

    <div class="card">
      <b>Headless: useToggleList (логика без UI)</b>
      <p class="muted" style="margin: 6px 0 0">
        Выбрано: {{ count }} — UI-реализация может быть любой (кнопки, чекбоксы, теги).
      </p>
      <div class="row" style="margin-top: 8px">
        <button
          v-for="opt in options"
          :key="opt"
          class="btn small"
          :class="{ primary: selected.has(opt) }"
          @click="toggle(opt)"
        >
          {{ selected.has(opt) ? '✓' : '' }} {{ opt }}
        </button>
      </div>
    </div>

    <div class="log">
      <div v-for="(line, i) in events" :key="i" class="mono">{{ line }}</div>
    </div>
  </div>
</template>
