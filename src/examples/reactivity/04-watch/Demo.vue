<script setup lang="ts">
import { ref, reactive, watch } from 'vue'

const count = ref(0)
const obj = reactive({ nested: { deep: 0 } })
const log = ref<string[]>([])

function add(entry: string) {
  log.value.unshift(entry)
  if (log.value.length > 10) log.value.pop()
}

// 1. Один источник
watch(count, (val, old) => add(`count: ${old} → ${val}`))

// 2. Глубокий: изменение вложенного поля
watch(obj, (val) => add(`obj changed (deep): deep=${val.nested.deep}`), { deep: true })

// 3. Множественный источник — массив
watch([count, () => obj.nested.deep], ([c, d], [pc, pd]) => {
  add(`мульти: count ${pc}→${c}, deep ${pd}→${d}`)
})

// 4. immediate: сработать сразу при создании
watch(count, (val) => add(`immediate-обработчик: current=${val}`), { immediate: true })
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="count++">count++</button>
      <button class="btn" @click="obj.nested.deep++">obj.nested.deep++</button>
    </div>

    <div class="row" style="gap: 16px">
      <div class="stat">count: <b>{{ count }}</b></div>
      <div class="stat">deep: <b>{{ obj.nested.deep }}</b></div>
    </div>

    <div class="log">
      <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
      <div v-if="!log.length" class="muted">лог пуст</div>
    </div>

    <p class="muted">
      Заметьте: immediate-обработчик сработал сразу при создании. Deep-watch срабатывает на любое
      вложенное изменение, но срабатывает <b>один раз</b> за «пакет» мутаций.
    </p>
  </div>
</template>
