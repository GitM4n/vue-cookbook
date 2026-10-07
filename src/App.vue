<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import NavSidebar from './components/NavSidebar.vue'

const route = useRoute()
const sidebarOpen = ref(false)

watch(
  () => route.path,
  () => {
    sidebarOpen.value = false
  },
)
</script>

<template>
  <div class="app">
    <header class="topbar">
      <button
        class="topbar__burger"
        type="button"
        aria-label="Открыть навигацию"
        @click="sidebarOpen = !sidebarOpen"
      >
        <span />
        <span />
        <span />
      </button>
      <RouterLink to="/" class="topbar__brand">Vue Ecosystem Cookbook</RouterLink>
    </header>

    <div class="app__overlay" v-if="sidebarOpen" @click="sidebarOpen = false" />

    <NavSidebar :open="sidebarOpen" />

    <main class="content">
      <RouterView />
    </main>
  </div>
</template>
