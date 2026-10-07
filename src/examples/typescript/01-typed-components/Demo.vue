<script setup lang="ts">
import { ref } from 'vue'

interface User {
  id: number
  name: string
  role: 'admin' | 'member'
}

const users = ref<User[]>([
  { id: 1, name: 'Ада', role: 'admin' },
  { id: 2, name: 'Грейс', role: 'member' },
  { id: 3, name: 'Линус', role: 'member' },
])

const selected = ref<User | null>(null)
const query = ref('')
</script>

<template>
  <div class="stack">
    <div class="row">
      <input v-model="query" class="input" style="max-width: 220px" placeholder="фильтр имени…" />
      <span class="muted mono">selected: {{ selected?.name ?? 'null' }} (тип User | null)</span>
    </div>

    <!-- Generic-компонент: T выводится из пропса users -->
    <TypeList
      :items="users"
      :filter="(u: User) => u.name.toLowerCase().includes(query.toLowerCase())"
      @select="selected = $event"
    >
      <!-- слот типизирован: item: User, index: number -->
      <template #item="{ item, index }">
        <span class="row row--between" style="width: 100%">
          <span><b>{{ item.name }}</b> · {{ index }}</span>
          <span class="tag" :class="item.role === 'admin' ? 'ok' : 'info'">{{ item.role }}</span>
        </span>
      </template>
    </TypeList>

    <p class="muted">
      Попробуйте обратиться к несуществующему полю в слоте — TypeScript подсветит ошибку прямо в
      шаблоне: <code>item.unknownField</code> не скомпилируется. Generic T выводится из массива.
    </p>
  </div>
</template>
