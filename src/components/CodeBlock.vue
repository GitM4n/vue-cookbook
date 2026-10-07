<script setup lang="ts">
import { computed, ref } from 'vue'
import { highlight } from '../framework/highlight'

const props = withDefaults(
  defineProps<{
    code: string
    lang?: string
    label?: string
  }>(),
  { lang: 'ts', label: 'Исходный код' },
)

const html = computed(() => highlight(props.code))
const copied = ref(false)

async function copy() {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => (copied.value = false), 1600)
  } catch {
    /* буфер обмена недоступен — не критично */
  }
}
</script>

<template>
  <div class="code-block">
    <div class="code-block__head">
      <span class="code-block__label">{{ label }}</span>
      <span class="code-block__lang">{{ lang }}</span>
      <button class="code-block__copy" type="button" @click="copy">
        {{ copied ? '✓ Скопировано' : 'Копировать' }}
      </button>
    </div>
    <pre><code v-html="html" /></pre>
  </div>
</template>
