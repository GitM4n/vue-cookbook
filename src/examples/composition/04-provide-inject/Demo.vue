<script setup lang="ts">
import { provide, ref, computed } from 'vue'
import { themeKey } from './themeKey'
import DeepChild from './DeepChild.vue'

const mode = ref<'dark' | 'light'>('dark')

// Паттерн «state + actions»: данные вниз только на чтение,
// мутации — через функции
provide(themeKey, {
  mode: computed(() => mode.value), // read-only вид: потребитель не сможет присвоить
  toggle: () => {
    mode.value = mode.value === 'dark' ? 'light' : 'dark'
  },
})
</script>

<template>
  <div class="stack">
    <div class="card">
      <div class="row row--between">
        <b>Родитель: провайдер контекста темы</b>
        <span class="tag info">provide(themeKey, …)</span>
      </div>
      <p class="muted" style="margin: 6px 0 0">
        Контекст получат <b>все потомки</b> на любой глубине — без пропсов через промежуточные
        компоненты.
      </p>
    </div>

    <div class="card">
      <b>Промежуточный компонент (ничего не знает о теме)</b>
      <p class="muted" style="margin: 6px 0 0">Он просто рендерит слот — прокидывать пропсы не нужно.</p>
      <DeepChild>
        <template #default>
          <div class="card" style="margin-top: 8px">
            <p class="muted" style="margin: 0">…а внутри него — глубокий потомок, который inject-ит тему.</p>
          </div>
        </template>
      </DeepChild>
    </div>
  </div>
</template>
