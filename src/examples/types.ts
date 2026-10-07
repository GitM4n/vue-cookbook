import type { Component } from 'vue'

/**
 * Идентификаторы разделов справочника.
 * Каждый раздел — директория в src/examples/<section>/.
 */
export type SectionId =
  | 'fundamentals'
  | 'reactivity'
  | 'composition'
  | 'router'
  | 'pinia'
  | 'vueuse'
  | 'nuxt'
  | 'advanced'
  | 'performance'
  | 'typescript'
  | 'under-the-hood'
  | 'common-traps'
  | 'architecture'

export interface SectionMeta {
  id: SectionId
  title: string
  description: string
  icon: string
}

/** Ошибка / антипаттерн: ❌ неправильно → ✅ правильно. */
export interface Issue {
  title: string
  text: string
  /** ❌ Код с проблемой. */
  code?: string
  /** ✅ Исправленный код. */
  fix?: string
  /** Почему исправление работает лучше. */
  fixText?: string
}

/** Дополнительный блок: «простая альтернатива» или «продвинутый подход». */
export interface Note {
  title: string
  text: string
  code?: string
}

/** Обязательная структура контента каждой темы. */
export interface ExampleContent {
  /** 1. Краткое объяснение по-русски. */
  intro: string
  /** 4. Как устроен и работает код примера. */
  howItWorks: string
  /** 5. Типичные ошибки и подводные камни. */
  mistakes: Issue[]
  /** 6. Нюансы, характерные именно для Vue. */
  nuances: string[]
  /** 7. Лучшие практики. */
  bestPractices: string[]
  /** 8. Когда и зачем это использовать. */
  whenToUse: string
  /** 9. Простая альтернатива (если применимо). */
  alternative?: Note
  /** 10. Продвинутый подход (если применимо). */
  advanced?: Note
}

/** Ленивая фабрика демо-компонента → код попадает в отдельный чанк. */
export type DemoFactory = () => Promise<{ default: Component }>

/** Сырая запись, которую экспортирует *.example.ts (без id и section). */
export interface ExampleRecord {
  /** Порядок внутри раздела задаётся именем файла (01-..., 02-...). */
  title: string
  summary: string
  /** Живой интерактивный пример. */
  demo?: DemoFactory
  /** Исходный код примера (обычно `import code from './Demo.vue?raw'`). */
  code?: string
  content: ExampleContent
}

/** Полная запись после сбора реестром. */
export interface ExampleEntry extends ExampleRecord {
  id: string
  section: SectionId
  /** Полный путь типа `reactivity/01-ref`. */
  key: string
  /** Для удобной навигации «назад/вперёд». */
  prev?: ExampleEntry
  next?: ExampleEntry
}

/** Хелпер с автодополнением, чтобы не терять поля контента. */
export function defineExample(record: ExampleRecord): ExampleRecord {
  return record
}
