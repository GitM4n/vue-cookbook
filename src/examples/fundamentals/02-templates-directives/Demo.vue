<script setup lang="ts">
import { ref, reactive } from 'vue'

const html = ref('<b>Жирный</b> и <i>курсив</i> — это <u>v-html</u>')
const isActive = ref(true)
const theme = ref<'green' | 'indigo'>('green')
const frozen = ref('этот текст заморожен')
const attrs = ref<Record<string, string>>({ id: 'box', 'data-state': 'dynamic' })

const styleObj = reactive({ color: '#42b883', fontSize: '17px' })

function flipTheme() {
  theme.value = theme.value === 'green' ? 'indigo' : 'green'
  styleObj.color = theme.value === 'green' ? '#42b883' : '#6c7cff'
}
</script>

<template>
  <div class="stack">
    <label class="label">v-html / v-text — содержимое:</label>
    <input v-model="html" class="input" />
    <div class="card" v-html="html" />

    <div class="row">
      <button class="btn" @click="isActive = !isActive">
        :class="{ active }" → {{ isActive }}
      </button>
      <button class="btn" @click="flipTheme">:style → {{ theme }}</button>
      <button class="btn" @click="frozen = 'теперь здесь другой текст'">
        изменить v-once
      </button>
      <button class="btn" @click="attrs['data-state'] = 'clicked'">v-bind="obj"</button>
    </div>

    <div
      class="card dyn"
      :class="{ active: isActive, indigo: theme === 'indigo' }"
      :style="styleObj"
      v-bind="attrs"
    >
      Я реактивный узел: классы, стили и произвольные атрибуты обновляются независимо.
    </div>

    <div class="card">
      v-once: <b>{{ frozen }}</b>
      <span class="muted"> — больше не перерисовывается</span>
    </div>
  </div>
</template>

<style scoped>
.dyn {
  transition: all 0.2s;
  border-left: 3px solid transparent;
}
.active {
  border-left-color: #42b883;
  background: rgba(66, 184, 131, 0.08);
}
.indigo {
  border-left-color: #6c7cff;
  background: rgba(108, 124, 255, 0.08);
}
</style>
