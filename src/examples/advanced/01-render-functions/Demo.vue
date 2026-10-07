<script setup lang="ts">
import { ref, h, defineComponent, type Component, type PropType } from 'vue'

const TAGS = ['div', 'section', 'article'] as const

interface Item {
  id: number
  label: string
  done: boolean
}

const items = ref<Item[]>([
  { id: 1, label: 'спроектировать', done: true },
  { id: 2, label: 'реализовать', done: false },
  { id: 3, label: 'протестировать', done: false },
])

// Render-функция: полный контроль над vnode-деревом
// В SFC это редкость — но именно так работают .tsx и внутренности библиотек
const TodoRender: Component = defineComponent({
  props: { list: { type: Array as PropType<Item[]>, required: true } },
  setup(props) {
    return () =>
      h('ul', { class: 'stack', style: 'gap: 4px' },
        props.list.map(item =>
          h('li', { key: item.id, class: 'card', style: 'margin: 0' }, [
            h('span', {
              style: item.done ? 'text-decoration: line-through; opacity: .6' : '',
            }, item.label),
            h('span', {
              class: ['tag', item.done ? 'ok' : 'info'],
              style: 'margin-left: 8px',
            }, item.done ? 'done' : 'in progress'),
          ]),
        ),
      )
  },
})

// Полиморфный рендер: тег выбирается в рантайме
const asTag = ref<'div' | 'section' | 'article'>('div')
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn" @click="items[0].done = !items[0].done">toggle первый</button>
    </div>

    <TodoRender :list="items" />

    <div class="card">
      <b>Полиморфный тег (as-проп)</b>
      <div class="row" style="margin-top: 8px">
        <button
          v-for="t in TAGS"
          :key="t"
          class="btn small"
          :class="{ primary: asTag === t }"
          @click="asTag = t"
        >
          &lt;{{ t }}&gt;
        </button>
      </div>
      <component :is="asTag" class="card" style="margin-top: 8px">
        Этот блок рендерится как <b>&lt;{{ asTag }}&gt;</b> — семантика меняется, стили те же.
      </component>
    </div>

    <p class="muted">
      h(type, props, children) — низкоуровневый «кирпич» шаблонов: компилятор SFC превращает ваш
      template ровно в такие вызовы. Ручные render-функции нужны для динамики, недостижимой в
      шаблоне: генерация произвольной вложенности, слоты-фабрики, высокопроизводительные списки.
    </p>
  </div>
</template>
