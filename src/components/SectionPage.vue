<script setup lang="ts">
import { computed } from 'vue'
import { sectionById, getSectionExamples } from '../examples/registry'
import NotFound from './NotFound.vue'

const props = defineProps<{ section: string }>()

const section = computed(() => sectionById.get(props.section))
const examples = computed(() => getSectionExamples(props.section))
</script>

<template>
  <NotFound v-if="!section" :title="`Раздел «${section}» не найден.`" />

  <div v-else>
    <header class="page-head">
      <div class="breadcrumb">
        <RouterLink to="/">Главная</RouterLink>
        <span>/</span>
        <span>{{ section.title }}</span>
      </div>
      <h1><span>{{ section.icon }}</span> {{ section.title }}</h1>
      <p class="page-head__desc">{{ section.description }}</p>
    </header>

    <div class="example-list">
      <RouterLink
        v-for="entry in examples"
        :key="entry.key"
        :to="`/${entry.section}/${entry.id}`"
        class="example-list__item"
      >
        <b>{{ entry.title }}</b>
        <span>{{ entry.summary }}</span>
        <span class="arrow">→</span>
      </RouterLink>
    </div>
  </div>
</template>
