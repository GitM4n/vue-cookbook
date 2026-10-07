<script setup lang="ts">
import { ref, computed } from 'vue'

// Симуляция слоёного запроса: клик «отправить форму» → по слоям
interface Layer {
  name: string
  file: string
  responsibility: string
}

const layers: Layer[] = [
  { name: 'UI (компонент)', file: 'CheckoutForm.vue', responsibility: 'разметка, валидация отображения, вызов composable' },
  { name: 'Composable', file: 'useCheckout.ts', responsibility: 'состояние формы, оркестрация вызовов' },
  { name: 'Domain (чистая логика)', file: 'pricing.ts', responsibility: 'расчёты, правила — без Vue и fetch' },
  { name: 'API-клиент', file: 'checkout-api.ts', responsibility: 'HTTP, маппинг DTO → домен, ошибки сети' },
  { name: 'Server', file: 'POST /api/checkout', responsibility: 'авторизация, транзакции, реальная бизнес-логика' },
]

const phase = ref(-1) // -1: idle; 0..layers.length-1: активный слой
const log = ref<string[]>([])

const currentLayer = computed(() => (phase.value >= 0 ? layers[phase.value] : null))

const phaseLogs: Record<number, string[]> = {
  0: ['UI: пользователь нажал «Оформить»', 'UI: вызов checkout.submit(formData)'],
  1: ['Composable: валидация пройдена', 'Composable: price = calculateTotal(items) — domain-функция', 'Composable: await checkoutApi.send(order)'],
  2: ['Domain: calculateTotal(items, { discount: 10 }) → 53 991 ₽', 'Domain: чистая функция — тесты без Vue и моков сети'],
  3: ['API: POST /api/checkout { items, total }', 'API: маппинг ответа → OrderConfirmation', 'API: сеть упала? → TypedError в composable'],
  4: ['Server: авторизация ✓, транзакция ✓', 'Server: → 200 { orderId: "o-128" }'],
}

function nextPhase() {
  if (phase.value >= layers.length - 1) {
    phase.value = -1
    log.value = []
    return
  }
  phase.value++
  log.value = phaseLogs[phase.value]
}

function reset() {
  phase.value = -1
  log.value = []
}
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="nextPhase">
        {{ phase >= layers.length - 1 ? '↺ заново' : '▶ следующий слой' }}
      </button>
      <button class="btn" @click="reset">сброс</button>
      <span class="muted mono">
        {{ phase < 0 ? 'нажмите «следующий слой»' : `слой ${phase + 1}/${layers.length}` }}
      </span>
    </div>

    <div class="stack" style="gap: 6px">
      <div
        v-for="(layer, i) in layers"
        :key="layer.name"
        class="card"
        :style="{
          margin: 0,
          opacity: phase < 0 ? 0.55 : i === phase ? 1 : i < phase ? 0.35 : 0.55,
          borderColor: i === phase ? 'var(--accent)' : undefined,
        }"
      >
        <div class="row row--between">
          <span><b>{{ layer.name }}</b> <span class="mono muted">· {{ layer.file }}</span></span>
          <span v-if="i === phase" class="tag ok">активен</span>
          <span v-else-if="i < phase" class="tag">готово ✓</span>
        </div>
        <p class="muted" style="margin: 4px 0 0">{{ layer.responsibility }}</p>
      </div>
    </div>

    <div class="log">
      <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
      <div v-if="!log.length" class="muted">лог пуст</div>
    </div>

    <p class="muted">
      Поток: <b>вниз по слоям — запрос, вверх — данные</b>. Компонент не знает про HTTP; API не
      знает про Vue; domain-логика не знает ни про то, ни про другое — и потому тестируется
      тривиально.
    </p>
  </div>
</template>
