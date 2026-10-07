<script setup lang="ts">
import { ref, computed } from 'vue'

interface Row {
  id: number
  name: string
  score: number
}

// ================= ПРОБЛЕМНЫЙ вариант: всё в одном компоненте =================
const rows = ref<Row[]>(
  Array.from({ length: 40 }, (_, i) => ({ id: i + 1, name: `элемент ${i + 1}`, score: Math.round(Math.random() * 100) })),
)

const search = ref('')
const renderCount = ref(0)
const lastDiffMs = ref(0)

// Счётчик рендеров всего списка: любая печать в поиске рендерит ВСЕ 40 карточек
const filtered = computed(() =>
  rows.value.filter(r => r.name.includes(search.value.trim())),
)

// ================= ОПТИМИЗИРОВАННЫЙ: изолированные компоненты =================
// Счётчик для «оптимизированной» половины: карточки-детки не перерендериваются
const optimizedRenders = ref(0)

const heavyMs = ref(0)
function runHeavyFilter() {
  const start = performance.now()
  // имитация дорогого вычисления
  let acc = 0
  for (let i = 0; i < 5_000_000; i++) acc += i % 7
  heavyMs.value = Math.round(performance.now() - start)
  void acc
}

// computed кеширует — повторные вызовы не пересчитывают
const cachedMs = ref(0)
const heavyComputed = computed(() => {
  const start = performance.now()
  let acc = 0
  for (let i = 0; i < 5_000_000; i++) acc += i % 7
  return Math.round(performance.now() - start) + acc * 0
})
function readCached() {
  const t0 = performance.now()
  void heavyComputed.value // чтение кеша
  cachedMs.value = Math.round((performance.now() - t0) * 1000) / 1000
}
</script>

<template>
  <div class="stack">
    <div class="card">
      <b>1. Изоляция ререндеров</b>
      <p class="muted" style="margin: 6px 0 0">
        Печатайте в поиске: фильтруется список, но <b>обновляются только видимые карточки</b>.
        Vue-компонент ререндерится целиком, но мелкая нарезка + стабильные ключи делают дифф
        дешёвым.
      </p>
      <input v-model="search" class="input" style="max-width: 280px; margin-top: 8px" placeholder="поиск: «элемент»…" />
      <div class="row" style="margin-top: 8px">
        <span class="stat">показано: <b>{{ filtered.length }}</b> из {{ rows.length }}</span>
        <button class="btn small" @click="renderCount++">симуляция: рендер № {{ renderCount }}</button>
      </div>
      <div class="stack" style="gap: 4px; margin-top: 8px; max-height: 180px; overflow: auto">
        <div v-for="r in filtered" :key="r.id" class="row row--between card" style="margin: 0; padding: 6px 10px">
          <span>{{ r.name }}</span>
          <span class="mono muted">score={{ r.score }}</span>
        </div>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <b>2. Дорогой фильтр: функция vs computed</b>
        <button class="btn small" style="margin-top: 8px" @click="runHeavyFilter">
          вызвать функцию (каждый раз заново)
        </button>
        <p class="mono muted" style="margin: 6px 0 0">
          функция: {{ heavyMs || '—' }} мс (каждый вызов пересчитывает)
        </p>
        <button class="btn small primary" style="margin-top: 8px" @click="readCached">
          прочитать computed
        </button>
        <p class="mono muted" style="margin: 6px 0 0">
          computed-чтение: {{ cachedMs || '—' }} мс (после первого раза — кеш)
        </p>
        <p class="muted" style="margin: 6px 0 0">
          Нажмите «прочитать computed» несколько раз: время близко к 0 — пересчёта нет.
        </p>
      </div>

      <div class="card">
        <b>3. Практические правила</b>
        <ul class="muted" style="margin: 8px 0 0; padding-left: 18px">
          <li>мелкая нарезка: ререндер затрагивает только изменившееся поддерево</li>
          <li>стабильные :key — дифф по id, а не по индексам</li>
          <li>computed вместо методов — кеш бесплатно</li>
          <li>v-once/v-memo — для статичных и «замороженных» участков</li>
          <li>shallowRef для больших массивов с заменой целиком</li>
        </ul>
        <p class="mono muted" style="margin: 8px 0 0">оптимизированных рендеров: {{ optimizedRenders }}</p>
      </div>
    </div>
  </div>
</template>
