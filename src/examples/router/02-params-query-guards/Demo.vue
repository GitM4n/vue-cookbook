<script setup lang="ts">
import { ref, computed } from 'vue'

// Имитация route-объекта vue-router
interface FakeRoute {
  path: string
  params: Record<string, string>
  query: Record<string, string>
}

const current = ref<FakeRoute>({
  path: '/catalog/vue/3',
  params: {},
  query: {},
})

const log = ref<string[]>([])
function add(msg: string) {
  log.value.unshift(msg)
  if (log.value.length > 6) log.value.pop()
}

function nav(category: string, page: number) {
  // router.push({ name: 'category', params: { category }, query: { page: String(page) } })
  const path = `/catalog/${category}`
  current.value = {
    path,
    params: { category },
    query: { page: String(page) },
  }
  add(`push → ${path}?page=${page}: params.category=${category}, query.page=${page}`)
}

const page = computed(() => Number(current.value.query.page || 1))
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn" :class="{ primary: current.params.category === 'vue' }" @click="nav('vue', page)">
        /catalog/vue
      </button>
      <button class="btn" :class="{ primary: current.params.category === 'nuxt' }" @click="nav('nuxt', page)">
        /catalog/nuxt
      </button>
      <button class="btn" @click="nav(current.params.category || 'vue', page + 1)">
        page++ (query)
      </button>
    </div>

    <div class="card">
      <b>route-объект (имитация)</b>
      <pre class="mono muted" style="margin: 8px 0 0; white-space: pre-wrap">{{ JSON.stringify(current, null, 1) }}</pre>
    </div>

    <div class="row" style="gap: 12px">
      <div class="stat">params.category: <b>{{ current.params.category || '—' }}</b></div>
      <div class="stat">query.page: <b>{{ page }}</b></div>
    </div>

    <div class="log">
      <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
    </div>

    <p class="muted">
      Параметры (<code>:category</code>) — часть пути, обязательные и влияют на «какой ресурс».
      Query (<code>?page=2</code>) — опциональные фильтры состояния: их смена обычно не меняет
      matched-компонент.
    </p>
  </div>
</template>
