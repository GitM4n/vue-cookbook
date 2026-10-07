<script setup lang="ts">
import { ref, computed } from 'vue'

interface FolderNode {
  name: string
  type: 'folder' | 'file'
  children?: FolderNode[]
  note?: string
  depth?: number
}

// Две структуры одного приложения для сравнения
const byType: FolderNode = {
  name: 'src/',
  type: 'folder',
  children: [
    { name: 'components/', type: 'folder', note: '42 компонента вперемешку', children: [
      { name: 'TheHeader.vue', type: 'file' },
      { name: 'UserAvatar.vue', type: 'file' },
      { name: 'ProductCard.vue', type: 'file' },
      { name: 'CartButton.vue', type: 'file' },
      { name: '…ещё 38 файлов', type: 'file' },
    ]},
    { name: 'composables/', type: 'folder', children: [
      { name: 'useCart.ts', type: 'file' },
      { name: 'useProducts.ts', type: 'file' },
      { name: 'useCheckout.ts', type: 'file' },
    ]},
    { name: 'stores/', type: 'folder', children: [
      { name: 'cart.ts', type: 'file' },
      { name: 'products.ts', type: 'file' },
    ]},
    { name: 'api/', type: 'folder' },
    { name: 'views/', type: 'folder', children: [
      { name: 'CatalogPage.vue', type: 'file' },
      { name: 'CartPage.vue', type: 'file' },
    ]},
  ],
}

const byFeature: FolderNode = {
  name: 'src/',
  type: 'folder',
  children: [
    { name: 'features/', type: 'folder', note: 'всё о домене — вместе', children: [
      { name: 'catalog/', type: 'folder', children: [
        { name: 'components/ProductCard.vue', type: 'file' },
        { name: 'composables/useCatalogFilters.ts', type: 'file' },
        { name: 'api/catalog-api.ts', type: 'file' },
        { name: 'types.ts', type: 'file' },
        { name: 'index.ts', type: 'file', note: 'публичный API фичи' },
      ]},
      { name: 'cart/', type: 'folder', children: [
        { name: 'components/CartButton.vue', type: 'file' },
        { name: 'composables/useCart.ts', type: 'file' },
        { name: 'store/cart.ts', type: 'file' },
        { name: 'index.ts', type: 'file' },
      ]},
      { name: 'checkout/', type: 'folder', children: [
        { name: 'composables/useCheckout.ts', type: 'file' },
        { name: 'api/checkout-api.ts', type: 'file' },
        { name: 'index.ts', type: 'file' },
      ]},
    ]},
    { name: 'shared/', type: 'folder', note: 'переиспользуемое без домена', children: [
      { name: 'ui/ (Button, Input, Modal)', type: 'folder' },
      { name: 'composables/ (useTheme, useDebounce)', type: 'folder' },
      { name: 'lib/ (форматтеры, хелперы)', type: 'folder' },
    ]},
    { name: 'app/', type: 'folder', note: 'сборка и провайдеры', children: [
      { name: 'App.vue, router, layouts', type: 'file' },
    ]},
  ],
}

const selected = ref<'type' | 'feature'>('feature')
const current = computed(() => (selected.value === 'feature' ? byFeature : byType))

interface FlatNode {
  name: string
  type: 'folder' | 'file'
  depth: number
  note?: string
}

function flatten(node: FolderNode, depth = 0): FlatNode[] {
  const out: FlatNode[] = [{ name: node.name, type: node.type, depth, note: node.note }]
  for (const c of node.children ?? []) out.push(...flatten(c, depth + 1))
  return out
}
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn" :class="{ primary: selected === 'type' }" @click="selected = 'type'">
        по типам (components/, stores/)
      </button>
      <button class="btn" :class="{ primary: selected === 'feature' }" @click="selected = 'feature'">
        по фичам (features/cart/)
      </button>
    </div>

    <div class="card">
      <b>Структура «{{ selected === 'feature' ? 'по фичам' : 'по типам' }}»</b>
      <div class="mono" style="margin-top: 8px; font-size: 13px">
        <div
          v-for="(line, i) in flatten(current)"
          :key="i"
          :style="{ paddingLeft: line.depth * 18 + 'px', opacity: line.depth === 0 ? 1 : 0.85 }"
        >
          <span :style="{ color: line.type === 'folder' ? 'var(--accent)' : 'inherit' }">
            {{ line.type === 'folder' ? '📁' : '📄' }} {{ line.name }}
          </span>
          <span v-if="line.note" class="muted"> ← {{ line.note }}</span>
        </div>
      </div>
    </div>

    <p class="muted">
      Фиче-подход держит всё о домене <b>рядом</b>: найти код корзины = открыть features/cart/.
      Правило зависимостей: features → shared, app → всё; <b>features между собой — только через
      публичный API (index.ts)</b>, не копаясь во внутренностях.
    </p>
  </div>
</template>
