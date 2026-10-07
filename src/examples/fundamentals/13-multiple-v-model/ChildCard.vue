<script setup lang="ts">
import { computed } from 'vue'

// Пропсы + события: полный «сахар», который разворачивает v-model:name
const props = defineProps<{
  name: string
  price: number
  enabled: boolean
}>()

const emit = defineEmits<{
  'update:name': [value: string]
  'update:price': [value: number]
  'update:enabled': [value: boolean]
}>()

// defineModel был бы короче, но здесь показан явный контракт:
// каждый аргумент = пара (проп, событие update:arg)
const nameProxy = computed({
  get: () => props.name,
  set: (v: string) => emit('update:name', v),
})
const priceProxy = computed({
  get: () => props.price,
  set: (v: number) => emit('update:price', v),
})
const enabledProxy = computed({
  get: () => props.enabled,
  set: (v: boolean) => emit('update:enabled', v),
})
</script>

<template>
  <div class="card">
    <b>{{ nameProxy || 'без названия' }}</b>
    <p class="mono muted" style="margin: 8px 0 0">{{ priceProxy }} ₽</p>
    <label style="margin-top: 8px; display: block">
      <input v-model="enabledProxy" type="checkbox" /> в продаже
    </label>
  </div>
</template>
