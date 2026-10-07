<script setup lang="ts">
import { sections, examplesBySection } from '../examples/registry'

const sectionsWithExamples = sections.filter((s) => examplesBySection.has(s.id))
const totalExamples = [...examplesBySection.values()].reduce((sum, list) => sum + list.length, 0)
const interactive = [...examplesBySection.values()].flat().filter((e) => e.demo).length
</script>

<template>
  <div>
    <section class="hero">
      <span class="hero__badge">📘 Vue 3 · TypeScript · Nuxt</span>
      <h1>Vue Ecosystem Cookbook</h1>
      <p>
        Интерактивный справочник по Vue и его экосистеме: короткое объяснение, живой
        пример, исходный код, разбор, ошибки и лучшие практики — по каждой теме.
      </p>

      <div class="hero__stats">
        <div class="hero__stat">
          <b>{{ totalExamples }}</b>
          <span>тем</span>
        </div>
        <div class="hero__stat">
          <b>{{ sectionsWithExamples.length }}</b>
          <span>разделов</span>
        </div>
        <div class="hero__stat">
          <b>{{ interactive }}</b>
          <span>живых примеров</span>
        </div>
      </div>
    </section>

    <div class="howto">
      <h3>Как пользоваться справочником</h3>
      <ol>
        <li>Выбери тему в левой панели — или найди её поиском (Ctrl+F по браузеру тоже работает).</li>
        <li>Покрути живой пример прямо в браузере: все демо изолированы друг от друга.</li>
        <li>Разбери исходный код — он такой же, как в демо, и копируется в один клик.</li>
        <li>Прочитай блоки «Ошибки», «Нюансы» и «Когда использовать» перед тем, как применять паттерн в проекте.</li>
      </ol>
    </div>

    <div class="section-grid">
      <RouterLink
        v-for="section in sectionsWithExamples"
        :key="section.id"
        :to="`/${section.id}`"
        class="section-card"
      >
        <div class="section-card__title">
          <span>{{ section.icon }}</span>
          {{ section.title }}
        </div>
        <div class="section-card__desc">{{ section.description }}</div>
        <span class="section-card__count">
          {{ examplesBySection.get(section.id)?.length }} тем
        </span>
      </RouterLink>
    </div>
  </div>
</template>
