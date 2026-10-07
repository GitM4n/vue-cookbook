<script setup lang="ts">
import { ref } from 'vue'
import BadgeChild from './BadgeChild.vue'

const name = ref('Алиса')
const age = ref(28)
const role = ref<'admin' | 'user'>('admin')
const tags = ref(['vue', 'ts'])

// Неверный тип генерирует warning в консоли Vue — так работает runtime-проверка
const brokenType = ref(false)
</script>

<template>
  <div class="stack">
    <div class="row">
      <input v-model="name" class="input" placeholder="name" style="flex: 1" />
      <input v-model.number="age" type="number" class="input" style="width: 110px" />
      <select v-model="role" class="select">
        <option value="admin">admin</option>
        <option value="user">user</option>
      </select>
    </div>

    <div class="row">
      <button class="btn" @click="brokenType = !brokenType">
        {{ brokenType ? '✅ вернуть корректный тип' : '💥 передать строку вместо числа' }}
      </button>
      <button class="btn" @click="tags = [...tags, 'pinia']">добавить tag</button>
    </div>

    <!-- runtime-валидация типов: смотрите консоль браузера -->
    <BadgeChild
      :name="name"
      :age="brokenType ? ('28' as unknown as number) : age"
      :role="role"
      :tags="tags"
    />

    <div class="log">
      <div>name: {{ name }} (string)</div>
      <div>age: {{ age }} (number) — v-model.number гарантирует тип</div>
      <div>role: {{ role }} (union) — нарушение = warning в консоли</div>
    </div>
  </div>
</template>
