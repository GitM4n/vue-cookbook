<script setup lang="ts">
import { ref } from 'vue'

/**
 * ❌ ПЛОХО: модульный синглтон «по случайности».
 * Состояние объявлено вне функции — все компоненты делят один экземпляр.
 */
const sharedCount = ref(0)

function useBadCounter() {
  sharedCount.value++ // ❌ мутация общей переменной
  return { count: sharedCount }
}

/**
 * ✅ ХОРОШО: явный shared-стейт с документированной семантикой.
 * Тот же приём, но намеренный: имя use*Shared, комментарий-контракт.
 */
const globalTheme = ref('dark')

function useTheme() {
  function toggle() {
    globalTheme.value = globalTheme.value === 'dark' ? 'light' : 'dark'
  }
  return { theme: globalTheme, toggle }
}

const badA = useBadCounter()
const badB = useBadCounter()
const { theme, toggle } = useTheme()
</script>

<template>
  <div class="stack">
    <div class="card">
      <div class="row row--between">
        <b>❌ useBadCounter: скрытый синглтон</b>
        <span class="tag bad">антипаттерн</span>
      </div>
      <p class="muted" style="margin: 6px 0 0">
        Два «независимых» экземпляра делят один счётчик: badA.count и badB.count —
        <b>одна и та же</b> переменная.
      </p>
      <div class="row" style="margin-top: 8px">
        <button class="btn danger" @click="sharedCount++">sharedCount++</button>
        <span class="mono muted">badA.count = {{ badA.count }} · badB.count = {{ badB.count }} (совпадают!)</span>
      </div>
    </div>

    <div class="card">
      <div class="row row--between">
        <b>✅ useTheme: явный shared-стейт</b>
        <span class="tag ok">намеренный синглтон</span>
      </div>
      <p class="muted" style="margin: 6px 0 0">
        Тоже модульное состояние, но это <b>задокументированное решение</b>: тема глобальна по
        своей природе.
      </p>
      <div class="row" style="margin-top: 8px">
        <button class="btn primary" @click="toggle">
          theme = {{ theme }} (переключить)
        </button>
      </div>
    </div>

    <p class="muted">
      Разница не в коде, а в <b>намерении</b>: ref внутри функции = изоляция, ref на уровне модуля =
      разделение. Ошибочный вариант — когда разделение получилось случайно, и потребители об этом не
      знают.
    </p>
  </div>
</template>
