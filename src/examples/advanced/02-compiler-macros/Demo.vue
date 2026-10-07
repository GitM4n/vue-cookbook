<script setup lang="ts">
import { ref, computed, defineModel, useTemplateRef, onMounted } from 'vue'

// ================= defineModel: v-model внутри компонента =================
// Родитель пишет <FancyInput v-model="text"> — а здесь magic:
const model = defineModel<string>({ default: '' })
const cleaned = computed(() => `символов: ${(model.value ?? '').length}`)

// ================= useTemplateRef: типизированный доступ к DOM =================
const inputEl = useTemplateRef<HTMLInputElement>('input-el')
const dialogEl = useTemplateRef<HTMLElement>('dialog-el')

const chars = ref(0)

onMounted(() => {
  // DOM готов — можно измерять/фокусировать
  inputEl.value?.focus()
})

function focusInput() {
  inputEl.value?.focus()
  chars.value = inputEl.value?.value.length ?? 0
}

function scrollToDialog() {
  dialogEl.value?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<template>
  <div class="stack">
    <div class="card">
      <div class="row row--between">
        <b>defineModel — v-model без пропс+эмит церемоний</b>
        <span class="tag ok">Vue 3.4+</span>
      </div>
      <p class="muted" style="margin: 6px 0 0">
        В этом демо компонент сам является «дочерним» для страницы: родитель (страница) владеет
        значением, здесь только model.
      </p>
      <input v-model="model" class="input" style="margin-top: 8px" placeholder="печатайте…" />
      <p class="mono muted" style="margin: 6px 0 0">{{ cleaned }} · model = {{ JSON.stringify(model) }}</p>
    </div>

    <div class="card">
      <b>useTemplateRef — доступ к DOM без magic-string в ref()</b>
      <div class="row" style="margin-top: 8px">
        <input
          ref="input-el"
          v-model="model"
          class="input"
          style="max-width: 220px"
          placeholder="этот input имеет ref"
        />
        <button class="btn" @click="focusInput">focusInput()</button>
        <button class="btn" @click="scrollToDialog">scroll к блоку</button>
      </div>
      <p class="mono muted" style="margin: 8px 0 0">
        inputEl.value?.value.length = {{ chars }} (обновляется по кнопке)
      </p>
    </div>

    <div ref="dialog-el" class="card">
      <b>Этот блок — dialogEl</b>
      <p class="muted" style="margin: 6px 0 0">
        useTemplateRef('dialog-el') привязан к этому узлу: прокрутка к нему, измерения,
        focus-менеджмент.
      </p>
    </div>

    <p class="muted">
      Компиляторные макросы (defineModel, defineProps, defineEmits, defineExpose, useTemplateRef)
      доступны в &lt;script setup&gt; без импорта — компилятор превращает их в соответствующий код
      рантайма.
    </p>
  </div>
</template>
