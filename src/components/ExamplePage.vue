<script setup lang="ts">
import { computed } from 'vue'
import { findExample, sectionById, resolveDemo } from '../examples/registry'
import CodeBlock from './CodeBlock.vue'
import NotFound from './NotFound.vue'

const props = defineProps<{ section: string; slug: string }>()

const entry = computed(() => findExample(props.section, props.slug))
const section = computed(() => sectionById.get(props.section))
const demoComponent = computed(() => (entry.value ? resolveDemo(entry.value) : null))

const toc = computed(() => {
  const e = entry.value
  if (!e) return []
  const items: { id: string; label: string }[] = []
  if (e.demo) items.push({ id: 'demo', label: '🎯 Живой пример' })
  if (e.code) items.push({ id: 'code', label: '⌨️ Исходный код' })
  items.push({ id: 'how', label: '🧠 Как это работает' })
  if (e.content.mistakes.length) items.push({ id: 'mistakes', label: '❌ Ошибки' })
  if (e.content.nuances.length) items.push({ id: 'nuances', label: '📌 Нюансы' })
  if (e.content.bestPractices.length) items.push({ id: 'practices', label: '✅ Practices' })
  items.push({ id: 'when', label: '🗓 Когда использовать' })
  if (e.content.alternative) items.push({ id: 'alternative', label: '🌱 Альтернатива' })
  if (e.content.advanced) items.push({ id: 'advanced', label: '🚀 Продвинутый подход' })
  return items
})
</script>

<template>
  <NotFound v-if="!entry" :title="`Тема «${slug}» не найдена в разделе «${section}».`" />

  <article v-else>
    <header class="page-head">
      <div class="breadcrumb">
        <RouterLink to="/">Главная</RouterLink>
        <span>/</span>
        <RouterLink :to="`/${entry.section}`">{{ section?.title }}</RouterLink>
        <span>/</span>
        <span>{{ entry.title }}</span>
      </div>
      <h1>{{ entry.title }}</h1>
      <p class="page-head__desc">{{ entry.summary }}</p>
    </header>

    <nav class="toc-chips">
      <a v-for="item in toc" :key="item.id" :href="`#${item.id}`">{{ item.label }}</a>
    </nav>

    <p class="intro" v-html="entry.content.intro" />

    <section v-if="entry.demo || entry.code" id="demo" class="ex-section">
      <h2><span class="num">1</span> Живой пример</h2>
      <div class="demo-panel">
        <div class="demo-panel__head">
          <i class="dot" />
          <b>{{ entry.title }}</b>
          <span>интерактивно — попробуйте нажать, ввести, переключить</span>
        </div>
        <div class="demo-panel__body">
          <component v-if="demoComponent" :is="demoComponent" />
          <p v-else class="demo-empty">
            У этой темы нет отдельной демонстрации — она полностью раскрыта в коде ниже.
          </p>
        </div>
      </div>
    </section>

    <section v-if="entry.code" id="code" class="ex-section">
      <h2><span class="num">2</span> Исходный код</h2>
      <CodeBlock :code="entry.code" :lang="entry.code.includes('<template') ? 'vue' : 'ts'" />
    </section>

    <section id="how" class="ex-section">
      <h2><span class="num">3</span> Как работает этот код</h2>
      <div class="prose">
        <p v-html="entry.content.howItWorks" />
      </div>
    </section>

    <section v-if="entry.content.mistakes.length" id="mistakes" class="ex-section">
      <h2><span class="num">4</span> Типичные ошибки и подводные камни</h2>
      <div
        v-for="issue in entry.content.mistakes"
        :key="issue.title"
        class="issue"
        :class="issue.fix ? 'issue--bad' : ''"
      >
        <div class="issue__head">
          <span class="issue__mark">❌</span>
          <span>{{ issue.title }}</span>
          <span v-if="issue.fix" class="issue__label issue__label--bad">частая ошибка</span>
        </div>
        <p>{{ issue.text }}</p>
        <CodeBlock v-if="issue.code" :code="issue.code" lang="ts" label="Проблемный код" />

        <template v-if="issue.fix">
          <div class="issue__head" style="margin-top: 14px">
            <span class="issue__mark">✅</span>
            <span>Как надо</span>
            <span class="issue__label issue__label--good">правильно</span>
          </div>
          <CodeBlock :code="issue.fix" lang="ts" label="Исправление" />
          <p v-if="issue.fixText">{{ issue.fixText }}</p>
        </template>
      </div>
    </section>

    <section v-if="entry.content.nuances.length" id="nuances" class="ex-section">
      <h2><span class="num">5</span> Нюансы Vue</h2>
      <ul class="tip-list">
        <li v-for="n in entry.content.nuances" :key="n" v-html="n" />
      </ul>
    </section>

    <section v-if="entry.content.bestPractices.length" id="practices" class="ex-section">
      <h2><span class="num">6</span> Best practices</h2>
      <ul class="tip-list">
        <li v-for="p in entry.content.bestPractices" :key="p" v-html="p" />
      </ul>
    </section>

    <section id="when" class="ex-section">
      <h2><span class="num">7</span> Когда и зачем использовать</h2>
      <div class="when-card" v-html="entry.content.whenToUse" />
    </section>

    <section v-if="entry.content.alternative" id="alternative" class="ex-section">
      <h2><span class="num">8</span> Простая альтернатива</h2>
      <div class="note-card">
        <h3>🌱 {{ entry.content.alternative.title }}</h3>
        <p>{{ entry.content.alternative.text }}</p>
        <CodeBlock
          v-if="entry.content.alternative.code"
          :code="entry.content.alternative.code"
          lang="ts"
          label="Альтернатива"
        />
      </div>
    </section>

    <section v-if="entry.content.advanced" id="advanced" class="ex-section">
      <h2><span class="num">9</span> Продвинутый подход</h2>
      <div class="note-card">
        <h3>🚀 {{ entry.content.advanced.title }}</h3>
        <p>{{ entry.content.advanced.text }}</p>
        <CodeBlock
          v-if="entry.content.advanced.code"
          :code="entry.content.advanced.code"
          lang="ts"
          label="Продвинутый вариант"
        />
      </div>
    </section>

    <nav class="pager">
      <RouterLink v-if="entry.prev" :to="`/${entry.prev.section}/${entry.prev.id}`" class="prev">
        <small>← Назад</small>
        <b>{{ entry.prev.title }}</b>
      </RouterLink>
      <RouterLink v-if="entry.next" :to="`/${entry.next.section}/${entry.next.id}`" class="next">
        <small>Далее →</small>
        <b>{{ entry.next.title }}</b>
      </RouterLink>
    </nav>
  </article>
</template>
