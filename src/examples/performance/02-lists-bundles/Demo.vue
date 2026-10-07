<script setup lang="ts">
import { ref, computed, defineAsyncComponent } from 'vue'

interface BigRow {
  id: number
  name: string
  value: number
}

// Генерация «большого» набора
const COUNT = 5000
const allRows: BigRow[] = Array.from({ length: COUNT }, (_, i) => ({
  id: i + 1,
  name: `row-${i + 1}`,
  value: Math.round(Math.random() * 1000),
}))

// ================= 1. Обычный рендер vs «виртуальный» =================
const renderMode = ref<'full' | 'virtual'>('virtual')
const scrollTop = ref(0)
const ROW_H = 32
const VIEW_H = 200

const startIndex = computed(() =>
  renderMode.value === 'virtual' ? Math.floor(scrollTop.value / ROW_H) : 0,
)
const visibleCount = Math.ceil(VIEW_H / ROW_H) + 2
const visibleRows = computed(() =>
  renderMode.value === 'virtual'
    ? allRows.slice(startIndex.value, startIndex.value + visibleCount)
    : allRows,
)

function onScroll(e: Event) {
  scrollTop.value = (e.target as HTMLElement).scrollTop
}

// ================= 2. Code splitting: ленивая загрузка =================
const HeavyWidget = defineAsyncComponent(() => import('./HeavyWidget.vue'))
const widgetLoaded = ref(false)
const mainBundleKb = ref(42) // условный размер «основного» чанка
</script>

<template>
  <div class="stack">
    <div class="card">
      <div class="row row--between">
        <b>1. Список {{ COUNT.toLocaleString('ru') }} строк</b>
        <div class="row" style="gap: 6px">
          <button class="btn small" :class="{ primary: renderMode === 'full' }" @click="renderMode = 'full'">
            все в DOM
          </button>
          <button class="btn small" :class="{ primary: renderMode === 'virtual' }" @click="renderMode = 'virtual'">
            виртуализация
          </button>
        </div>
      </div>

      <div
        class="mono"
        style="overflow: auto; height: 200px; margin-top: 8px; border: 1px solid rgba(255,255,255,.08); border-radius: 6px"
        @scroll="onScroll"
      >
        <div
          v-if="renderMode === 'virtual'"
          :style="{ height: `${COUNT * ROW_H}px`, position: 'relative' }"
        >
          <div
            class="row row--between"
            :style="{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              transform: `translateY(${startIndex * ROW_H}px)`,
            }"
          >
            <div v-for="r in visibleRows" :key="r.id" class="row row--between" :style="{ height: ROW_H + 'px', width: '100%' }">
              <span>{{ r.name }}</span>
              <span class="muted">{{ r.value }}</span>
            </div>
          </div>
        </div>

        <div v-else>
          <div v-for="r in visibleRows" :key="r.id" class="row row--between" :style="{ height: ROW_H + 'px' }">
            <span>{{ r.name }}</span>
            <span class="muted">{{ r.value }}</span>
          </div>
          <p class="muted" style="padding: 8px">
            ⚠️ Все {{ COUNT.toLocaleString('ru') }} узлов в DOM: скролл подтормаживает на слабых
            машинах, память растёт.
          </p>
        </div>
      </div>

      <p class="mono muted" style="margin: 8px 0 0">
        в DOM: {{ visibleRows.length }} узлов (режим: {{ renderMode }})
      </p>
    </div>

    <div class="card">
      <div class="row row--between">
        <b>2. Code splitting</b>
        <span class="mono muted">main-бандл: {{ mainBundleKb }} КБ{{ widgetLoaded ? ' + widget-чанк' : '' }}</span>
      </div>
      <p class="muted" style="margin: 8px 0 0">
        Тяжёлый виджет не входит в main-чанк — грузится по требованию (defineAsyncComponent /
        ленивый маршрут). Проверьте Network: при клике появится отдельный js-файл.
      </p>
      <button class="btn primary" style="margin-top: 8px" @click="widgetLoaded = true">
        загрузить виджет лениво
      </button>
      <div v-if="widgetLoaded" style="margin-top: 8px">
        <HeavyWidget />
      </div>
    </div>
  </div>
</template>
