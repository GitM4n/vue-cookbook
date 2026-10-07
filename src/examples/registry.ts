import { defineAsyncComponent } from 'vue'
import type { Component } from 'vue'
import { sections, sectionById } from './sections'
import type { ExampleEntry, ExampleRecord, SectionId } from './types'

interface GlobModule {
  default: ExampleRecord
}

/**
 * Авто-обнаружение примеров.
 *
 * Новая тема = новый файл src/examples/<section>/<NN>-<slug>.example.ts.
 * Приложение трогать не нужно: реестр сам подхватит файл, построит
 * навигацию, маршруты и страницу примера.
 */
const globbed = import.meta.glob<GlobModule>('./*/*.example.ts', { eager: true })

function parsePath(path: string): { section: SectionId; sortKey: string; id: string } {
  // './reactivity/01-ref.example.ts'
  const match = /\.\/([^/]+)\/([^/]+)\.example\.ts$/.exec(path)
  if (!match) throw new Error(`Некорректный путь примера: ${path}`)
  const [, section, fileName] = match
  if (!sectionById.has(section as SectionId)) {
    throw new Error(`Неизвестный раздел "${section}" для ${path}. Добавьте его в src/examples/sections.ts`)
  }
  return {
    section: section as SectionId,
    sortKey: fileName,
    id: fileName.replace(/^\d+-/, ''),
  }
}

const entries: ExampleEntry[] = Object.entries(globbed)
  .map(([path, mod]) => {
    const { section, sortKey, id } = parsePath(path)
    return { sortKey, entry: { ...mod.default, id, section, key: `${section}/${sortKey}` } as ExampleEntry }
  })
  .sort((a, b) => a.sortKey.localeCompare(b.sortKey, 'en'))
  .map(({ entry }) => entry)

export const allExamples: ExampleEntry[] = []

/** Примеры по разделам, в порядке файлов (01-, 02-, ...). */
export const examplesBySection = new Map<SectionId, ExampleEntry[]>()
for (const section of sections) {
  const list = entries.filter((e) => e.section === section.id)
  if (list.length === 0) continue
  examplesBySection.set(section.id, list)
  for (const entry of list) allExamples.push(entry)
}

/** Связка «назад/вперёд» по всему справочнику. */
allExamples.forEach((entry, i) => {
  entry.prev = allExamples[i - 1]
  entry.next = allExamples[i + 1]
})

export { sections, sectionById }

const cache = new Map<string, ExampleEntry>()

export function findExample(section: string, id: string): ExampleEntry | undefined {
  const cacheKey = `${section}/${id}`
  if (cache.has(cacheKey)) return cache.get(cacheKey)
  const entry = entries.find((e) => e.section === section && e.id === id)
  if (entry) cache.set(cacheKey, entry)
  return entry
}

export function getSection(section: string) {
  return sectionById.get(section as SectionId)
}

export function getSectionExamples(section: string) {
  return examplesBySection.get(section as SectionId) ?? []
}

/** Асинхронная обёртка демо, чтобы не тянуть все демо в главный чанк. */
export function resolveDemo(entry: ExampleEntry): Component | null {
  if (!entry.demo) return null
  return defineAsyncComponent(entry.demo)
}
