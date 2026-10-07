<script setup lang="ts">
import { ref } from 'vue'

const log = ref<string[]>([])
const count = ref(0)
let stop = false

function add(entry: string) {
  log.value.unshift(`[${new Date().toLocaleTimeString()}] ${entry}`)
  if (log.value.length > 8) log.value.pop()
}

function onClick(n: number, event: MouseEvent) {
  if (stop) return
  count.value += n
  add(`click ×${n} → count=${count.value}`)
}

function onKey(e: KeyboardEvent) {
  add(`keydown «${e.key}» → submit имитирован`)
}

function onInnerClick(e: MouseEvent) {
  // .stop не даёт событию дойти до внешнего обработчика
  add(`внутренний клик (stop) — внешнего вызова не было: ${e.clientX}`)
}

function onFormClick() {
  add('внешний контейнер получил click — значит .stop не сработал')
}

function onceAction() {
  add('@click.once: обработчик удалён после первого вызова')
}

function submitLike() {
  add('.prevent: сабмит отменён, вызвана своя логика')
}

function toggleStop() {
  stop = !stop
  add(stop ? 'кнопка заблокирована (не через disabled, а проверкой)' : 'разблокирована')
}
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="onClick(1, $event)">+1</button>
      <button class="btn" @click="onClick(5, $event)">+5</button>
      <button class="btn" @click="count = 0; add('reset')">сброс</button>
      <button class="btn" @click.once="onceAction">once-кнопка</button>
      <button class="btn" @click="toggleStop">{{ stop ? 'разблокировать' : 'заблокировать' }}</button>
    </div>

    <div class="row">
      <input class="input" placeholder="нажмите Enter здесь…" @keydown.enter="onKey" />
      <button class="btn small" @click.prevent="submitLike">submit с .prevent</button>
    </div>

    <div
      class="card"
      style="cursor: pointer"
      @click="onFormClick"
    >
      <div class="row row--between">
        <b>Внешний контейнер (слушает click)</b>
        <button class="btn small danger" @click.stop="onInnerClick($event)">
          внутренняя кнопка (.stop)
        </button>
      </div>
      <p class="muted" style="margin: 6px 0 0">Клик по фону карточки логируется, клик по кнопке — нет.</p>
    </div>

    <div class="row row--between">
      <span class="stat">count: <b>{{ count }}</b></span>
    </div>
    <div class="log">
      <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
      <div v-if="!log.length" class="muted">лог пуст — нажмите кнопки выше</div>
    </div>
  </div>
</template>
