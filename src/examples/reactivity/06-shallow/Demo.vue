<script setup lang="ts">
import { ref, shallowRef, shallowReactive, triggerRef, isReactive } from 'vue'

// deep ref: объект внутри полностью реактивен
const deep = ref({ nested: { count: 0 } })

// shallowRef: реактивна только замена .value целиком
const shallow = shallowRef({ nested: { count: 0 } })

// shallowReactive: реактивность только первого уровня
const sReactive = shallowReactive({ top: 0, nested: { inner: 0 } })

const log = ref<string[]>([])
function add(entry: string) {
  log.value.unshift(entry)
  if (log.value.length > 8) log.value.pop()
}

function mutateDeep() {
  deep.value.nested.count++
  add(`deep.value.nested.count → ${deep.value.nested.count} (реактивно ✅)`)
}

function mutateShallowWrong() {
  shallow.value.nested.count++ // мутируем, но уведомления не будет
  add(`shallow.value.nested.count → ${shallow.value.nested.count} (внутри данных изменилось, но UI не обновится ❌)`)
}

function replaceShallow() {
  shallow.value = { nested: { count: shallow.value.nested.count + 100 } }
  add(`shallow.value = новый объект → UI обновился ✅`)
}

function forceTrigger() {
  triggerRef(shallow) // ручное уведомление без замены
  add(`triggerRef(shallow) → UI дёрнулся ✅`)
}

function mutateSReactive() {
  sReactive.top++ // первый уровень — реактивен
  sReactive.nested.inner++ // вложенный — не проксирован
  add(`top=${sReactive.top} (обновится), nested.inner=${sReactive.nested.inner} (нет)`)
}
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="mutateDeep">deep мутация</button>
      <button class="btn danger" @click="mutateShallowWrong">shallow мутация (❌)</button>
      <button class="btn" @click="replaceShallow">shallow замена .value</button>
      <button class="btn" @click="forceTrigger">triggerRef</button>
      <button class="btn" @click="mutateSReactive">shallowReactive: top++ / inner++</button>
    </div>

    <div class="grid-2">
      <div class="card">
        <b>deep (ref)</b>
        <p class="mono muted" style="margin: 6px 0 0">nested.count = {{ deep.nested.count }}</p>
      </div>
      <div class="card">
        <b>shallow (shallowRef)</b>
        <p class="mono muted" style="margin: 6px 0 0">
          nested.count = {{ shallow.nested.count }} <span class="tag" :class="shallow.nested.count % 2 ? 'warn' : 'info'">что показывает UI</span>
        </p>
      </div>
      <div class="card">
        <b>shallowReactive</b>
        <p class="mono muted" style="margin: 6px 0 0">top={{ sReactive.top }} · nested.inner={{ sReactive.nested.inner }}</p>
      </div>
      <div class="card">
        <b>Проверка</b>
        <p class="mono muted" style="margin: 6px 0 0">isReactive(shallow.nested): {{ isReactive(shallow.nested) }}</p>
      </div>
    </div>

    <div class="log">
      <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
    </div>

    <p class="muted">
      Нажмите «shallow мутация»: число в данных растёт, но отображение не меняется — пока не нажмёте
      «замена .value» или «triggerRef». Это и есть семантика shallow: отслеживается только ссылка.
    </p>
  </div>
</template>
