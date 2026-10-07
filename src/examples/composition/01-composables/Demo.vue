<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

/**
 * ✅ Хорошая композиция: чистая функция, без DOM-зависимостей,
 * возвращает ref-ы — потребитель сам решает, как их использовать.
 */
function useCounter(initial = 0) {
  const count = ref(initial)
  const double = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function reset() {
    count.value = initial
  }
  return { count, double, increment, reset }
}

/**
 * ✅ Композабл с DOM: подписка в onMounted, отписка в onUnmounted.
 * Имя по конвенции use*, состояние возвращается наружу.
 */
function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function update(e: MouseEvent) {
    x.value = e.clientX
    y.value = e.clientY
  }

  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  return { x, y }
}

const { count, double, increment, reset } = useCounter(5)
const { x, y } = useMouse()

// Два независимых счётчика из одного композабла — состояния изолированы
const counterA = useCounter(0)
const counterB = useCounter(100)
</script>

<template>
  <div class="stack">
    <div class="grid-2">
      <div class="card">
        <b>useCounter (главный)</b>
        <div class="row" style="margin-top: 8px">
          <button class="btn primary" @click="increment">increment</button>
          <button class="btn" @click="reset">reset</button>
          <span class="stat">count={{ count }} · double={{ double }}</span>
        </div>
      </div>

      <div class="card">
        <b>useMouse (двигайте мышь по странице)</b>
        <p class="mono muted" style="margin: 8px 0 0">x={{ x }} · y={{ y }}</p>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <b>counterA = useCounter(0)</b>
        <p class="mono muted" style="margin: 6px 0 0">count={{ counterA.count }} — независимое состояние</p>
      </div>
      <div class="card">
        <b>counterB = useCounter(100)</b>
        <p class="mono muted" style="margin: 6px 0 0">count={{ counterB.count }} — тоже своё</p>
      </div>
    </div>

    <p class="muted">
      Композабл — функция, которая инкапсулирует реактивную логику. Каждый вызов создаёт
      <b>изолированный</b> экземпляр состояния. Это отличает его от модульного синглтона (про это —
      в теме «локальное vs разделяемое состояние»).
    </p>
  </div>
</template>
