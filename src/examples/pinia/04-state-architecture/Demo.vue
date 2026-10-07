<script setup lang="ts">
import { ref, computed } from 'vue'

interface Option {
  id: string
  label: string
  answer: string
  tag: string
  tagType: 'ok' | 'info' | 'warn' | 'bad'
}

const options: Option[] = [
  {
    id: 'local',
    label: 'Используется только в одном компоненте (открыта ли модалка, активный таб)',
    answer: 'Локальный ref/reactive внутри компонента. Никакого стора.',
    tag: '→ локальный ref',
    tagType: 'ok',
  },
  {
    id: 'props',
    label: 'Общается родитель ↔ потомок (данные вниз, события вверх)',
    answer: 'Props вниз, emit вверх. Стор здесь избыточен и путает контракт.',
    tag: '→ props + emit',
    tagType: 'ok',
  },
  {
    id: 'subtree',
    label: 'Нужно всему поддереву (layout → все страницы внутри, контекст формы/таблицы)',
    answer: 'provide/inject: scoped-контекст с state + actions.',
    tag: '→ provide/inject',
    tagType: 'info',
  },
  {
    id: 'url',
    label: 'Хочется делиться ссылкой (фильтры, страница, таб)',
    answer: 'route.query: состояние в URL — шаринг, кнопка «назад», SSR-дружелюбность.',
    tag: '→ route.query',
    tagType: 'info',
  },
  {
    id: 'domain',
    label: 'Доменные данные многих несвязанных компонентов (user, cart, настройки)',
    answer: 'Pinia-стор по домену: синглтон, Devtools, actions как API мутаций.',
    tag: '→ Pinia',
    tagType: 'warn',
  },
  {
    id: 'server',
    label: 'Серверные данные с рефетчем, инвалидацией, дедупликацией',
    answer: 'Pinia — если логика простая; TanStack Query / SWR — если кеш-логика сложная.',
    tag: '→ стор или Query-библиотека',
    tagType: 'warn',
  },
]

const selected = ref<string | null>(null)
const current = computed(() => options.find(o => o.id === selected.value) ?? null)
</script>

<template>
  <div class="stack">
    <p class="muted" style="margin: 0">«Где должно жить это состояние?» — выберите описание:</p>

    <div class="stack" style="gap: 6px">
      <button
        v-for="o in options"
        :key="o.id"
        class="btn"
        :class="{ primary: selected === o.id }"
        style="text-align: left; justify-content: flex-start"
        @click="selected = o.id"
      >
        {{ o.label }}
      </button>
    </div>

    <div v-if="current" class="card">
      <div class="row row--between">
        <b>Рекомендация</b>
        <span class="tag" :class="current.tagType">{{ current.tag }}</span>
      </div>
      <p style="margin: 8px 0 0">{{ current.answer }}</p>
    </div>

    <p class="muted">
      Общий принцип: состояние живёт на <b>самом узком</b> уровне из достаточных. Поднять в стор
      легко — убрать из глобального доступа трудно.
    </p>
  </div>
</template>
