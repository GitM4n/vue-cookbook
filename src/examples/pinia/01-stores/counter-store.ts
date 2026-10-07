import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

/**
 * Setup-стор: та же система ref/computed, что в компонентах.
 * state = ref, getters = computed, actions = функции.
 */
export const useCounterStore = defineStore('counter', () => {
  // state
  const count = ref(0)
  const history = ref<number[]>([])

  // getters
  const double = computed(() => count.value * 2)
  const isPositive = computed(() => count.value > 0)

  // actions
  function increment() {
    count.value++
    history.value.push(count.value)
  }

  function reset() {
    count.value = 0
    history.value = []
  }

  return { count, history, double, isPositive, increment, reset }
})
