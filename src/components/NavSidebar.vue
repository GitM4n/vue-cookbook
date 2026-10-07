<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { sections, examplesBySection } from '../examples/registry'
import type { SectionId } from '../examples/types'

defineProps<{ open: boolean }>()

const route = useRoute()
const query = ref('')

const openSections = ref<Set<string>>(new Set())

function toggle(id: string) {
  const next = new Set(openSections.value)
  if (next.has(id)) next.delete(id)
  else next.add(id)
  openSections.value = next
}

watch(
  () => route.params.section,
  (section) => {
    if (typeof section === 'string') {
      const next = new Set(openSections.value)
      next.add(section)
      openSections.value = next
    }
  },
  { immediate: true },
)

const normalizedQuery = computed(() => query.value.trim().toLowerCase())

const visibleSections = computed(() => {
  const q = normalizedQuery.value
  return sections
    .map((section) => {
      const list = examplesBySection.get(section.id as SectionId) ?? []
      if (!q) return { section, list }
      const filtered = list.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.summary.toLowerCase().includes(q) ||
          section.title.toLowerCase().includes(q),
      )
      return filtered.length > 0 ? { section, list: filtered } : null
    })
    .filter((s): s is NonNullable<typeof s> => s !== null)
})

const totalCount = computed(() => {
  let count = 0
  for (const list of examplesBySection.values()) count += list.length
  return count
})
</script>

<template>
  <aside class="sidebar" :class="{ open }">
    <RouterLink to="/" class="sidebar__brand">
      <svg class="sidebar__logo" viewBox="0 0 32 32" aria-hidden="true">
        <path fill="#42b883" d="M16 4 2 30h8.5L16 17.5 21.5 30H30z" />
        <path fill="#35495e" d="M16 4l-5.5 9.5h11z" />
      </svg>
      <span>
        Vue Cookbook
        <small>интерактивный справочник</small>
      </span>
    </RouterLink>

    <div class="sidebar__search">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
      <input v-model="query" type="search" placeholder="Поиск по темам…" aria-label="Поиск" />
    </div>

    <RouterLink to="/" class="sidebar__home">🏠 Главная страница</RouterLink>

    <nav>
      <div v-for="{ section, list } in visibleSections" :key="section.id" class="nav-section">
        <button class="nav-section__head" type="button" @click="toggle(section.id)">
          <span class="icon">{{ section.icon }}</span>
          <span>{{ section.title }}</span>
          <span class="count">{{ list.length }}</span>
          <svg
            class="chev"
            :class="{ open: openSections.has(section.id) }"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2.4"
            stroke-linecap="round"
          >
            <path d="m9 6 6 6-6 6" />
          </svg>
        </button>

        <ul
          v-if="openSections.has(section.id) || normalizedQuery"
          class="nav-section__list"
        >
          <li v-for="entry in list" :key="entry.key">
            <RouterLink :to="`/${entry.section}/${entry.id}`">
              {{ entry.title }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <p v-if="visibleSections.length === 0" class="sidebar__empty">
        Ничего не найдено по запросу «{{ query }}».
      </p>
    </nav>

    <div class="sidebar__footer">
      {{ totalCount }} тем · Vue 3 · TypeScript · локальный запуск
    </div>
  </aside>
</template>
