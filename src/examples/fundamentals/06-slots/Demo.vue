<script setup lang="ts">
import { ref } from 'vue'
import PanelLayout from './PanelLayout.vue'

const withHeader = ref(true)
const withFooter = ref(false)
const items = ref(['Vue', 'Router', 'Pinia'])
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn" @click="withHeader = !withHeader">
        header: {{ withHeader ? 'передан' : 'fallback' }}
      </button>
      <button class="btn" @click="withFooter = !withFooter">
        footer: {{ withFooter ? 'передан' : 'скрыт' }}
      </button>
    </div>

    <PanelLayout>
      <!-- Именованный слот header -->
      <template #header>
        <b v-if="withHeader">Панель управления</b>
        <b v-else>—</b>
      </template>

      <!-- Слот по умолчанию -->
      <div class="row">
        <span v-for="i in items" :key="i" class="tag info">{{ i }}</span>
      </div>

      <!-- Именованный слот footer -->
      <template #footer>
        <small v-if="withFooter" class="muted">footer передан потребителем</small>
      </template>
    </PanelLayout>

    <p class="muted">
      Уберите передачу header — сработает fallback-контент из объявления слота.
    </p>
  </div>
</template>
