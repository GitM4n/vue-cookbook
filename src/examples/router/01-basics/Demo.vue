<script setup lang="ts">
import { ref, computed, h, type Component } from 'vue'

// Мини-маршрутизация внутри демо: тот же принцип, что у vue-router —
// текущий путь → какой «компонент» рендерится в <component :is>
const route = ref<'home' | 'users' | 'user-profile'>('home')
const selectedUser = ref('ada')

const pages: Record<string, Component> = {
  home: {
    setup() {
      return () =>
        h('div', { class: 'card' }, [
          h('b', '🏠 Главная'),
          h('p', { class: 'muted', style: 'margin:6px 0 0' }, 'Текущий «маршрут»: /home'),
        ])
    },
  },
  users: {
    setup() {
      return () =>
        h('div', { class: 'card' }, [
          h('b', '👥 Список пользователей'),
          h(
            'p',
            { class: 'muted', style: 'margin:6px 0 0' },
            'Отсюда обычно переходят на /users/:id — динамический маршрут',
          ),
        ])
    },
  },
  'user-profile': {
    setup() {
      return () =>
        h('div', { class: 'card' }, [
          h('b', `👤 Профиль: ${selectedUser.value}`),
          h('p', { class: 'muted', style: 'margin:6px 0 0' }, 'Маршрут: /users/:id с параметром'),
        ])
    },
  },
}

const active = computed(() => pages[route.value])

function nav(target: 'home' | 'users' | 'user-profile') {
  route.value = target
  // В реальном приложении это router.push({ name: 'user', params: { id } })
}
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn" :class="{ primary: route === 'home' }" @click="nav('home')">/home</button>
      <button class="btn" :class="{ primary: route === 'users' }" @click="nav('users')">/users</button>
      <button
        class="btn"
        :class="{ primary: route === 'user-profile' }"
        @click="route = 'user-profile'"
      >
        /users/:id
      </button>
    </div>

    <div class="row">
      <select v-model="selectedUser" class="select" style="width: auto">
        <option value="ada">ada</option>
        <option value="grace">grace</option>
      </select>
      <span class="muted mono">параметр маршрута: id = {{ selectedUser }}</span>
    </div>

    <!-- В реальном приложении это <RouterView /> -->
    <component :is="active" />

    <p class="muted">
      Демо повторяет принцип vue-router: таблица маршрутов + текущий путь + одна точка рендера
      (RouterView). Сам справочник, который вы читаете, живёт на hash-роутере —
      <code>/#/router/basics</code> — так сборка открывается без серверных rewrite-правил.
    </p>
  </div>
</template>
