<script setup lang="ts">
import { ref } from 'vue'

// Компонент с несколькими v-model: имя и цена редактируются родителем
const name = ref('Сертификат')
const price = ref(100)
const enabled = ref(true)

function reset() {
  name.value = 'Сертификат'
  price.value = 100
  enabled.value = true
}
</script>

<template>
  <div class="stack">
    <div class="card">
      <div class="row row--between">
        <b>Родитель владеет состоянием</b>
        <span class="tag info">v-model:name / v-model:price / v-model:enabled</span>
      </div>
      <p class="muted" style="margin: 6px 0 0">
        Дочерний компонент не хранит копию — он читает пропсы и эмитит update-события.
      </p>
    </div>

    <div class="grid-2">
      <div class="stack">
        <label class="label">Название (v-model:name)</label>
        <input v-model="name" class="input" />

        <label class="label">Цена (v-model:price + .number)</label>
        <input v-model.number="price" class="input" type="number" min="0" />
      </div>

      <div class="stack">
        <label class="label">Предпросмотр карточки товара (дочерний компонент)</label>
        <div class="card">
          <div class="row row--between">
            <b>{{ name || 'без названия' }}</b>
            <span class="tag" :class="enabled ? 'ok' : 'bad'">{{ enabled ? 'в продаже' : 'скрыт' }}</span>
          </div>
          <p class="mono muted" style="margin: 8px 0 0">
            {{ price }} ₽ · переключите чекбокс ниже
          </p>
        </div>

        <label><input v-model="enabled" type="checkbox" /> показывать в каталоге</label>
      </div>
    </div>

    <div class="row">
      <button class="btn" @click="reset">сбросить всё</button>
    </div>
    <p class="muted mono">
      name={{ JSON.stringify(name) }} · price={{ price }} · enabled={{ enabled }}
    </p>
  </div>
</template>
