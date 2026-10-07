<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const a = ref(1)
const b = ref(2)
const c = ref(10)

const ab = computed(() => a.value + b.value) // зависит от a, b
const abc = computed(() => ab.value * c.value) // зависит от ab, c

const log = ref<string[]>([])
const renders = ref(0)

watch(abc, () => {
  renders.value++
  log.value.unshift(`эффект перезапущен: abc=${abc.value}`)
  if (log.value.length > 8) log.value.pop()
})

log.value.push('abc = (a + b) * c — измените a или b: ab и abc пересчитаются')

// Диаграмма вынесена в script: внутри шаблона {{ }} конфликтует с интерполяцией
const diagram = [
  '  a ─┐',
  '     ├─▶ ab ─┐',
  '  b ─┘       ├─▶ abc ──▶ [эффект: watch/рендер]',
  '  c ─────────┘',
].join('\n')

function bump(which: 'a' | 'b' | 'c') {
  if (which === 'a') a.value++
  if (which === 'b') b.value++
  if (which === 'c') c.value++
}
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn" @click="bump('a')">a++</button>
      <button class="btn" @click="bump('b')">b++</button>
      <button class="btn" @click="bump('c')">c++</button>
    </div>

    <div class="row" style="gap: 10px; flex-wrap: wrap">
      <span class="tag info">a={{ a }}</span>
      <span class="tag info">b={{ b }}</span>
      <span class="tag info">c={{ c }}</span>
      <span class="tag warn">ab = a+b = {{ ab }}</span>
      <span class="tag ok">abc = ab*c = {{ abc }}</span>
      <span class="tag bad">эффектов: {{ renders }}</span>
    </div>

    <div class="card">
      <b>Граф зависимостей</b>
      <pre class="mono muted" style="margin: 8px 0 0; white-space: pre-wrap">{{ diagram }}</pre>
      <p class="muted" style="margin: 8px 0 0">
        Нажмите a++ или b++: пересчитываются ab и abc, эффект запускается. Нажмите c++: ab НЕ
        пересчитывается (его зависимости не менялись), но abc — да. Так работает зависимость-трекинг:
        каждый computed знает ровно то, от чего зависит.
      </p>
    </div>

    <div class="log">
      <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
    </div>
  </div>
</template>
