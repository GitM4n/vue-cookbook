<script setup lang="ts">
import { ref, computed } from 'vue'

type Strategy = 'csr' | 'ssr' | 'ssg' | 'hybrid'

interface Step {
  label: string
  detail: string
  time: string
}

const strategies: Record<Strategy, { title: string; steps: Step[]; verdict: string; use: string }> = {
  csr: {
    title: 'CSR ( SPA ) — чистый клиент',
    steps: [
      { label: '1. Браузер → сервер', detail: 'сервер отдаёт почти пустой HTML + js-бандл', time: '~50 мс' },
      { label: '2. Загрузка и парсинг JS', detail: 'скачивается весь app-бандл', time: '500–2000 мс' },
      { label: '3. JS монтирует Vue', detail: 'создаётся DOM, появляется контент', time: '100–300 мс' },
      { label: '4. Данные', detail: 'API-запросы начинаются только сейчас', time: '+200–800 мс' },
    ],
    verdict: 'Пользователь долго смотрит на белый экран / спиннер. SEO страдает: crawler видит пустой div.',
    use: 'Админки, дашборды за логином, внутренние инструменты — где SEO не нужен, а интерактивность главнее.',
  },
  ssr: {
    title: 'SSR — сервер рендерит на каждый запрос',
    steps: [
      { label: '1. Браузер → сервер', detail: 'Nuxt запускает Vue на сервере', time: '~50 мс' },
      { label: '2. Сервер рендерит HTML', detail: 'с данными: fetch на сервере рядом с БД', time: '100–500 мс' },
      { label: '3. HTML показан сразу', detail: 'контент виден до загрузки JS (FCP/LCP быстрые)', time: 'итого ~150–600 мс' },
      { label: '4. Гидрация', detail: 'JS оживает: слушатели, интерактив', time: '+300–1000 мс' },
    ],
    verdict: 'Контент виден быстро и индексируется. Сервер работает на каждый запрос — нужны кеши и масштабирование.',
    use: 'Каталоги, маркетплейсы, контент с динамикой — где важно SEO и персонализация.',
  },
  ssg: {
    title: 'SSG — HTML собран при билде',
    steps: [
      { label: '1. Браузер → CDN', detail: 'статика отдаётся с edge-кеша', time: '~20–80 мс' },
      { label: '2. HTML готов заранее', detail: 'самый быстрый FCP из возможных', time: 'мгновенно' },
      { label: '3. Гидрация', detail: 'как SSR — страница оживает', time: '+300–1000 мс' },
      { label: '4. Данные', detail: 'заморожены на момент билда; свежесть — по ребилду', time: '—' },
    ],
    verdict: 'Максимальная скорость и дешёвый хостинг. Данные устаревают: нужен ISR/ребилд или client-fetch.',
    use: 'Блоги, документация, лендинги — контент меняется редко, скорость решает.',
  },
  hybrid: {
    title: 'Hybrid rendering — route rules выбирают стратегию',
    steps: [
      { label: '/', detail: 'prerender: лендинг собран при билде', time: 'мгновенно' },
      { label: '/catalog/**', detail: 'ssr: динамический каталог с SEO', time: 'на запрос' },
      { label: '/account/**', detail: 'ssr: false → csr: только клиент', time: 'после JS' },
      { label: '/blog/**', detail: 'isr: 3600 — регенерация раз в час', time: 'кеш + ребилд' },
    ],
    verdict: 'Каждый маршрут получает оптимальную стратегию. Требует понимания кешей и заголовков.',
    use: 'Реальные приложения: лендинг + каталог + аккаунт — всё в одном проекте.',
  },
}

const selected = ref<Strategy>('ssr')
const current = computed(() => strategies[selected.value])
const stepIndex = ref(4) // показывать все шаги по умолчанию

function pick(s: Strategy) {
  selected.value = s
  stepIndex.value = 4
}

function playStep() {
  if (stepIndex.value < current.value.steps.length) stepIndex.value++
  else stepIndex.value = 1
}

const visibleSteps = computed(() => current.value.steps.slice(0, stepIndex.value))
</script>

<template>
  <div class="stack">
    <div class="row">
      <button
        v-for="(s, key) in strategies"
        :key="key"
        class="btn"
        :class="{ primary: selected === key }"
        @click="pick(key as Strategy)"
      >
        {{ key.toUpperCase() }}
      </button>
      <button class="btn" @click="playStep">▶ проиграть по шагам</button>
    </div>

    <div class="card">
      <b>{{ current.title }}</b>
      <div class="stack" style="gap: 6px; margin-top: 10px">
        <div v-for="(step, i) in visibleSteps" :key="i" class="card" style="margin: 0">
          <div class="row row--between">
            <span><b>{{ step.label }}</b> — {{ step.detail }}</span>
            <span class="mono muted">{{ step.time }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="row" style="gap: 12px">
      <span class="tag warn">итог: {{ current.verdict }}</span>
    </div>
    <div class="row">
      <span class="tag ok">когда применять: {{ current.use }}</span>
    </div>

    <p class="muted">
      Гидрация (шаг 4 у SSR/SSG) — превращение статичного HTML в живое приложение. Пока JS не
      загрузился, страница выглядит готовой, но не отвечает: это и есть «окно неинтерактивности».
    </p>
  </div>
</template>
