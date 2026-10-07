<script setup lang="ts">
import { ref } from 'vue'

interface Item {
  id: number
  label: string
  votes: number
}

let nextId = 5
const items = ref<Item[]>([
  { id: 1, label: 'Vue', votes: 0 },
  { id: 2, label: 'Vite', votes: 0 },
  { id: 3, label: 'Pinia', votes: 0 },
  { id: 4, label: 'Router', votes: 0 },
])

function vote(item: Item) {
  item.votes++
  // сортировка по голосам — FLIP-анимация перестановки
  items.value = [...items.value].sort((a, b) => b.votes - a.votes || a.id - b.id)
}

function addTop() {
  items.value = [{ id: nextId++, label: `Голос #${nextId - 1}`, votes: 0 }, ...items.value]
}

function remove(id: number) {
  items.value = items.value.filter(i => i.id !== id)
}

function shuffle() {
  items.value = [...items.value].sort(() => Math.random() - 0.5)
}
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn" @click="addTop">➕ добавить</button>
      <button class="btn" @click="shuffle">🔀 перемешать</button>
      <span class="muted mono">голосуйте — элементы переезжают плавно (FLIP)</span>
    </div>

    <TransitionGroup name="list" tag="div" class="stack" style="gap: 8px">
      <div v-for="item in items" :key="item.id" class="card">
        <div class="row row--between">
          <span>
            <b>{{ item.label }}</b>
            <span class="muted mono" style="margin-left: 8px">id={{ item.id }}</span>
          </span>
          <span class="row" style="gap: 8px">
            <button class="btn small" @click="vote(item)">👍 {{ item.votes }}</button>
            <button class="btn small danger" @click="remove(item.id)">✕</button>
          </span>
        </div>
      </div>
    </TransitionGroup>

    <p class="muted">
      Удаление: элемент уходит с анимацией leave, остальные плавно «подтягиваются» (.list-move).
      Для корректного leave нужен абсолютный класс — он задан в стилях ниже.
    </p>
  </div>
</template>

<style>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-16px);
}
/* Уходящий элемент перестаёт влиять на поток — остальные сдвигаются плавно */
.list-leave-active {
  position: absolute;
}
</style>
