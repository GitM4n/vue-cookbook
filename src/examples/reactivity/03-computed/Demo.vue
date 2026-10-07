<script setup lang="ts">
import { ref, computed } from 'vue'

const price = ref(100)
const qty = ref(2)
const discountPercent = ref(10)

// Вычисляемое: кешируется, пересчитывается только при изменении зависимостей
const subtotal = computed(() => price.value * qty.value)
const total = computed(() => Math.round(subtotal.value * (1 - discountPercent.value / 100)))
const formatted = computed(() => `${total.value} ₽`)

// Кеширование: обращение к computed НЕ пересчитывает, если зависимости не менялись
let evalCount = 0
const tracked = computed(() => {
  evalCount++
  return subtotal.value
})

// Записываемый computed: get + set
const couponInput = ref('')
const coupon = computed<string>({
  get: () => couponInput.value,
  set: (v: string) => {
    couponInput.value = v.toUpperCase().trim()
  },
})

const reads = ref(0)
function readTracked() {
  reads.value++
  void tracked.value
}
</script>

<template>
  <div class="stack">
    <div class="row">
      <label class="label">цена</label>
      <input v-model.number="price" class="input" type="number" style="width: 100px" />
      <label class="label">кол-во</label>
      <input v-model.number="qty" class="input" type="number" style="width: 80px" />
      <label class="label">скидка %</label>
      <input v-model.number="discountPercent" class="input" type="number" style="width: 80px" />
    </div>

    <div class="row" style="gap: 16px">
      <div class="stat">subtotal: <b>{{ subtotal }}</b></div>
      <div class="stat">total: <b>{{ formatted }}</b></div>
    </div>

    <div class="row">
      <label class="label">промокод (writable computed: сам upper-case)</label>
      <input v-model="coupon" class="input" placeholder="SUMMER" style="width: 200px" />
      <button class="btn" @click="readTracked">прочитать tracked</button>
      <span class="muted mono">пересчётов tracked: {{ evalCount }}, чтений: {{ reads }}</span>
    </div>

    <p class="muted">
      Меняйте цену — subtotal и total пересчитаются. Нажмите «прочитать tracked» несколько раз
      <b>без изменения</b> цены: счётчик evalCount не растёт — значение закешировано.
    </p>
  </div>
</template>
