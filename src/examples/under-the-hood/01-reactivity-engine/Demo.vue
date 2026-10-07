<script setup lang="ts">import { ref, computed, watch, reactive, toRaw, isReactive } from 'vue'
// ================= living visualization of dependency tracking =================
interface DepEvent {
  time: string
  type: 'track' | 'trigger' | 'run'
  source: string
  detail: string
}

const a = ref(1)
const b = ref(2)
const sum = computed(() => a.value + b.value)
const product = computed(() => sum.value * 10)

const events = ref<DepEvent[]>([])
const flushes = ref(0)

function addEvent(type: DepEvent['type'], source: string, detail: string) {
  events.value.unshift({ time: new Date().toLocaleTimeString(), type, source, detail })
  if (events.value.length > 12) events.value.pop()
}

// watch = «эффект»: его запуск — сигнал, что граф дёрнулся
watch(product, (val, old) => {
  flushes.value++
  addEvent('run', 'watch(product)', `пересчёт ${old} → ${val} (батчинг: один прогон)`)
})

function bump(ref: 'a' | 'b') {
  if (ref === 'a') {
    a.value++
    addEvent('trigger', 'a.value', 'set → подписчики a помечены: sum')
  } else {
    b.value++
    addEvent('trigger', 'b.value', 'set → подписчики b помечены: sum')
  }
  // sum и product — computed: они «dirty», но пересчитаются лениво при чтении
  addEvent('track', 'sum (computed)', 'инвалидация: dirty=true (пересчёт отложен)')
}

// ================= Proxy: что видит система =================
const rawObj = reactive({ x: 1, nested: { y: 2 } })
const proxyInfo = ref<string[]>([])

function inspectProxy() {
  proxyInfo.value = [
    `rawObj === toRaw(rawObj) → ${rawObj === toRaw(rawObj)} (rawObj сам является прокси)`,
    `isReactive(rawObj) → ${isReactive(rawObj)}`,
    `nested тоже прокси: isReactive(rawObj.nested) → ${isReactive(rawObj.nested)} (ленивая вложенность)`,
  ]
}

// ================= Scheduler: батчинг =================
const batchedCount = ref(0)
const flushLog = ref<string[]>([])

watch(batchedCount, (v) => {
  flushLog.value.unshift(`flush #${v}: оба изменения пришли в ОДНОМ прогоне эффекта`)
})

function doubleBump() {
  // два изменения синхронно — эффект (рендер) запустится ОДИН раз
  batchedCount.value += 2
}
</script>

<template>
  <div class="stack">
    <div class="card">
      <b>Граф зависимостей: a, b → sum → product → watch</b>
      <div class="row" style="margin-top: 8px">
        <button class="btn" @click="bump('a')">a++ ({{ a }})</button>
        <button class="btn" @click="bump('b')">b++ ({{ b }})</button>
        <span class="stat">sum = {{ sum }} · product = {{ product }}</span>
        <span class="tag bad">запусков watch: {{ flushes }}</span>
      </div>
      <div class="log" style="margin-top: 8px">
        <div v-for="(e, i) in events" :key="i" class="mono">
          [{{ e.time }}] {{ e.type === 'trigger' ? '⚡' : e.type === 'track' ? '🔗' : '▶' }} {{ e.source }}: {{ e.detail }}
        </div>
        <div v-if="!events.length" class="muted">нажмите a++ или b++ — смотрите цепочку событий</div>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <b>Proxy-инспекция</b>
        <button class="btn small" style="margin-top: 8px" @click="inspectProxy">проверить</button>
        <ul class="mono muted" style="margin: 8px 0 0; padding-left: 18px">
          <li v-for="(line, i) in proxyInfo" :key="i">{{ line }}</li>
          <li v-if="!proxyInfo.length">—</li>
        </ul>
      </div>

      <div class="card">
        <b>Scheduler: батчинг изменений</b>
        <button class="btn small primary" style="margin-top: 8px" @click="doubleBump">
          batchedCount += 2 (два изменения разом)
        </button>
        <div class="log" style="margin-top: 8px">
          <div v-for="(line, i) in flushLog" :key="i" class="mono">{{ line }}</div>
          <div v-if="!flushLog.length" class="muted">—</div>
        </div>
      </div>
    </div>

    <p class="muted">
      Чтение ref-а внутри эффекта <b>регистрирует</b> зависимость (track); запись <b>уведомляет</b>
      подписчиков (trigger). Computed — узел-посредник: лениво пересчитывается только при чтении.
      Scheduler группирует несколько изменений в один прогон эффекта.
    </p>
  </div>
</template>
