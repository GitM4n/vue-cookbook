<script setup lang="ts">
import { ref, computed } from 'vue'

// Имитация useHead / useSeoMeta
interface SeoState {
  title: string
  description: string
  ogTitle: string
  ogImage: string
  robots: string
}

const seo = ref<SeoState>({
  title: 'Каталог — Мой магазин',
  description: '',
  ogTitle: '',
  ogImage: '',
  robots: 'noindex',
})

const warnings = computed(() => {
  const w: string[] = []
  if (!seo.value.description) w.push('description пустой — Google возьмёт случайный текст со страницы')
  if (!seo.value.ogTitle) w.push('og:title отсутствует — соцсети покажут только URL')
  if (!seo.value.ogImage) w.push('og:image отсутствует — ссылки без превью')
  if (seo.value.robots === 'noindex' && !seo.value.title.includes('Каталог')) w.push('noindex на публичной странице — страница выпадет из поиска')
  if (seo.value.robots === 'noindex') w.push('robots: noindex — страница закрыта от индексации')
  return w
})

function setGoodSeo() {
  seo.value = {
    title: 'Ноутбуки — Мой магазин',
    description: 'Каталог ноутбуков: 120 моделей, цены от 30 000 ₽, доставка завтра.',
    ogTitle: 'Ноутбуки — Мой магазин',
    ogImage: 'https://example.com/og/laptops.jpg',
    robots: 'index, follow',
  }
}

function setBadSeo() {
  seo.value = {
    title: 'Мой магазин',
    description: '',
    ogTitle: '',
    ogImage: '',
    robots: 'noindex',
  }
}

// Серверные маршруты: структура server/
const serverRoutes = [
  { file: 'server/api/todos.get.ts', method: 'GET', path: '/api/todos', note: 'возвращает данные' },
  { file: 'server/api/todos.post.ts', method: 'POST', path: '/api/todos', note: 'создаёт' },
  { file: 'server/routes/sitemap.xml.get.ts', method: 'GET', path: '/sitemap.xml', note: 'сырой маршрут (без /api)' },
  { file: 'server/middleware/log.ts', method: '—', path: 'все запросы', note: 'до маршрутизации' },
]

// Автоимпорты: что доступно без import
const autoImports = [
  { name: 'ref, computed, watch', from: 'vue' },
  { name: 'useRoute, useRouter, navigateTo', from: 'vue-router / nuxt' },
  { name: 'useFetch, useAsyncData, $fetch', from: 'nuxt' },
  { name: 'useState, useCookie, useHead, useSeoMeta', from: 'nuxt' },
  { name: 'компоненты из components/', from: 'ваша папка' },
  { name: 'composables/ use*-функции', from: 'ваша папка' },
]
</script>

<template>
  <div class="stack">
    <div class="card">
      <div class="row row--between">
        <b>useSeoMeta — мета-теги страницы (имитация)</b>
        <button class="btn small" @click="setGoodSeo">заполнить правильно</button>
        <button class="btn small danger" @click="setBadSeo">испортить</button>
      </div>

      <div class="stack" style="gap: 6px; margin-top: 10px">
        <div class="row">
          <span class="label" style="width: 120px">title</span>
          <input v-model="seo.title" class="input" />
        </div>
        <div class="row">
          <span class="label" style="width: 120px">description</span>
          <input v-model="seo.description" class="input" placeholder="до 160 символов…" />
        </div>
        <div class="row">
          <span class="label" style="width: 120px">og:title</span>
          <input v-model="seo.ogTitle" class="input" />
        </div>
        <div class="row">
          <span class="label" style="width: 120px">og:image</span>
          <input v-model="seo.ogImage" class="input" placeholder="https://…" />
        </div>
        <div class="row">
          <span class="label" style="width: 120px">robots</span>
          <select v-model="seo.robots" class="select">
            <option value="index, follow">index, follow</option>
            <option value="noindex">noindex</option>
          </select>
        </div>
      </div>

      <div class="stack" style="gap: 4px; margin-top: 10px">
        <span v-for="w in warnings" :key="w" class="tag warn">{{ w }}</span>
        <span v-if="!warnings.length" class="tag ok">мета-теги в порядке ✓</span>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <b>server/ — серверная часть Nuxt</b>
        <div class="table" style="margin-top: 8px">
          <div v-for="r in serverRoutes" :key="r.file" style="padding: 4px 0; border-bottom: 1px solid rgba(255,255,255,.06)">
            <div class="row row--between">
              <span class="mono">{{ r.file }}</span>
              <span class="tag info">{{ r.method }}</span>
            </div>
            <span class="mono muted">{{ r.path }} · {{ r.note }}</span>
          </div>
        </div>
      </div>

      <div class="card">
        <b>Автоимпорты (без import …)</b>
        <ul class="mono muted" style="margin: 8px 0 0; padding-left: 18px">
          <li v-for="a in autoImports" :key="a.name">{{ a.name }} <span class="tag">← {{ a.from }}</span></li>
        </ul>
        <p class="muted" style="margin: 8px 0 0">
          Явные импорты тоже работают; автоимпорты — конвенция и tree-shaking по использованию.
        </p>
      </div>
    </div>

    <p class="muted">
      useSeoMeta — реактивный: title зависит от данных страницы (<code>title: () =&gt; product.value.name</code>).
      Серверные маршруты живут рядом с фронтендом — идеальны для BFF-слоя и проксирования внешних API.
    </p>
  </div>
</template>
