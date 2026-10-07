<script setup lang="ts">
import { ref, h, defineAsyncComponent, type Component } from 'vue'

// Имитация ленивой страницы: компонент грузится отдельным чанком
function fakePageLoader(name: string, ms: number, fail = false): () => Promise<{ default: Component }> {
  return () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (fail) {
          reject(new Error('chunk load failed'))
          return
        }
        resolve({
          default: {
            props: {},
            setup() {
              return () =>
                h('div', { class: 'card' }, [
                  h('div', { class: 'row row--between' }, [
                    h('b', `📄 ${name}`),
                    h('span', { class: 'tag ok' }, 'чанк загружен'),
                  ]),
                  h('p', { class: 'muted', style: 'margin:6px 0 0' },
                    `Компонент был в отдельном чанке и загрузился за ${ms} мс`),
                ])
            },
          },
        })
      }, ms)
    })
}

const current = ref<Component | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)
const dataState = ref<'idle' | 'loading' | 'done' | 'error'>('idle')

// Паттерн «загрузка данных на навигации»: данные тянем при переходе,
// показываем прогресс, ошибки обрабатываем отдельно от чанка
async function navigate(page: 'dashboard' | 'reports' | 'broken') {
  current.value = null
  error.value = null
  loading.value = true
  dataState.value = 'loading'

  try {
    // 1) ленивый чанк компонента
    const loader =
      page === 'dashboard' ? fakePageLoader('Dashboard', 400)
      : page === 'reports' ? fakePageLoader('Reports', 700)
      : fakePageLoader('Broken', 300, true)

    const mod = await loader()
    current.value = mod.default

    // 2) данные страницы (в реальном коде — до монтажа, через guards/prefetch)
    await new Promise(r => setTimeout(r, 300))
    dataState.value = 'done'
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'unknown'
    dataState.value = 'error'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn" @click="navigate('dashboard')">/dashboard (ленивая)</button>
      <button class="btn" @click="navigate('reports')">/reports (медленный чанк)</button>
      <button class="btn danger" @click="navigate('broken')">/broken (сбой сети)</button>
    </div>

    <div class="card">
      <div class="row row--between">
        <b>RouterView (имитация)</b>
        <span v-if="loading" class="tag warn">загрузка чанка…</span>
        <span v-else-if="error" class="tag bad">ошибка: {{ error }}</span>
        <span v-else-if="current" class="tag ok">готово</span>
      </div>
      <div style="margin-top: 10px; min-height: 60px">
        <component v-if="current" :is="current" />
        <p v-else-if="loading" class="muted">⏳ чанк грузится — RouterView пустой или показывает fallback…</p>
        <p v-else class="muted">нажмите кнопку маршрута</p>
      </div>
    </div>

    <div class="row">
      <span class="tag" :class="dataState === 'done' ? 'ok' : dataState === 'error' ? 'bad' : 'info'">
        данные: {{ dataState }}
      </span>
      <span class="muted mono">
        в реальном приложении: component: () => import('./pages/Dashboard.vue')
      </span>
    </div>
  </div>
</template>
