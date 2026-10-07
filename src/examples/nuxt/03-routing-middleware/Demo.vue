<script setup lang="ts">
import { ref, computed } from 'vue'

// Дерево страниц pages/ → маршруты
interface FileNode {
  path: string
  file: string
  note?: string
}

const pages: FileNode[] = [
  { path: '/', file: 'pages/index.vue', note: 'главная' },
  { path: '/about', file: 'pages/about.vue' },
  { path: '/users', file: 'pages/users/index.vue' },
  { path: '/users/:id', file: 'pages/users/[id].vue', note: 'динамический сегмент' },
  { path: '/files/**', file: 'pages/files/[...slug].vue', note: 'catch-all' },
  { path: '/posts/new', file: 'pages/posts/new.vue', note: 'статичный выше динамики' },
  { path: '/posts/:id', file: 'pages/posts/[id].vue' },
]

// Имитация middleware-цепочки
type Phase = 'idle' | 'middleware' | 'page' | 'done'
const phase = ref<Phase>('idle')
const target = ref(pages[3])
const log = ref<string[]>([])

const isAuthed = ref(false)
const needsAuth = computed(() => target.value.path.startsWith('/users'))

function runNavigation() {
  log.value = []
  phase.value = 'middleware'

  const steps: string[] = []
  steps.push(`navigateTo('${target.value.path}')`)

  if (target.value.path === '/files/**') {
    steps.push('middleware: (нет) → страница сразу')
  } else if (needsAuth.value && !isAuthed.value) {
    steps.push('middleware/auth.ts: token не найден → navigateTo("/login?redirect=...")')
    steps.push('страница НЕ отрендерилась — переход прерван')
    log.value = steps
    phase.value = 'done'
    return
  } else {
    if (needsAuth.value) steps.push('middleware/auth.ts: token есть → пропускаем')
    steps.push('маршрутизация: файл → ' + target.value.file)
  }

  steps.push('страница рендерится (SSR или клиент)')
  log.value = steps
  phase.value = 'done'
}
</script>

<template>
  <div class="stack">
    <div class="card">
      <b>Файловый роутинг: pages/ → маршруты</b>
      <div class="table" style="margin-top: 8px">
        <div v-for="p in pages" :key="p.file" class="row row--between" style="padding: 4px 0; border-bottom: 1px solid rgba(255,255,255,.06)">
          <span class="mono">{{ p.file }}</span>
          <span class="mono muted">{{ p.path }} <span v-if="p.note" class="tag info"> {{ p.note }}</span></span>
        </div>
      </div>
      <p class="muted" style="margin: 8px 0 0">
        [id].vue — динамический, [...slug].vue — catch-all, index.vue — корень папки. Вложенность
        папок = вложенные маршруты.
      </p>
    </div>

    <div class="card">
      <b>Middleware-цепочка (имитация)</b>
      <div class="row" style="margin-top: 8px">
        <button
          v-for="p in pages.slice(3)"
          :key="p.file"
          class="btn small"
          :class="{ primary: target.path === p.path }"
          @click="target = p"
        >
          {{ p.path }}
        </button>
        <button class="btn small" :class="{ primary: isAuthed }" @click="isAuthed = !isAuthed">
          auth: {{ isAuthed ? '✅ залогинен' : '❌ гость' }}
        </button>
      </div>
      <button class="btn primary" style="margin-top: 8px" @click="runNavigation">▶ перейти</button>

      <div class="log" style="margin-top: 8px">
        <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
        <div v-if="!log.length" class="muted">выберите маршрут и нажмите «перейти»</div>
      </div>
    </div>
  </div>
</template>
