<script setup lang="ts">
import { ref, computed } from 'vue'
import UserTable from './UserTable.vue'

interface User {
  id: number
  name: string
  score: number
}

const users = ref<User[]>([
  { id: 3, name: 'Мария', score: 88 },
  { id: 1, name: 'Иван', score: 45 },
  { id: 2, name: 'Ольга', score: 71 },
])

const sortByScore = ref(false)

const sorted = computed(() =>
  sortByScore.value ? [...users.value].sort((a, b) => b.score - a.score) : users.value,
)

function inc(id: number) {
  const u = users.value.find((x) => x.id === id)
  if (u) u.score += 5
}
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn" @click="sortByScore = !sortByScore">
        сортировка: {{ sortByScore ? 'по score' : 'по исходному порядку' }}
      </button>
      <span class="muted">Scoped slot отдаёт строке данные — рисует её потребитель</span>
    </div>

    <div class="card">
      <UserTable :users="sorted" @inc="inc">
        <!-- Scoped slot: получаем item из дочерней таблицы и рендерим сами -->
        <template #row="{ item, index }">
          <div class="row row--between" style="padding: 6px 0">
            <span>#{{ index + 1 }} — <b>{{ item.name }}</b></span>
            <span class="row">
              <span class="tag" :class="item.score > 70 ? 'ok' : 'warn'">score: {{ item.score }}</span>
              <button class="btn small" @click="inc(item.id)">+5</button>
            </span>
          </div>
        </template>
      </UserTable>
    </div>
  </div>
</template>
