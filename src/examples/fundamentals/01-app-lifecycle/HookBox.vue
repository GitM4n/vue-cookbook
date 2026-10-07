<script setup lang="ts">
import { watch, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, nextTick } from 'vue'

const props = withDefaults(
  defineProps<{
    count: number
    trace: (message: string) => void
  }>(),
  {},
)

/** Обычная (не реактивная) переменная: писать в реактивный стейт
 *  из onUpdated — прямой путь к бесконечному циклу ререндеров. */
let updates = 0

onBeforeMount(() => props.trace('HookBox: onBeforeMount — идёт создание vdom, DOM ещё нет'))
onMounted(() => props.trace('HookBox: mounted — DOM доступен, можно трогать элементы'))
onBeforeUpdate(() => {
  updates++
})
onUpdated(() => {
  updates++
})
onBeforeUnmount(() => props.trace('HookBox: onBeforeUnmount — последний шанс на cleanup'))
onUnmounted(() => props.trace('HookBox: unmounted — слушатели и таймеры можно удалять'))

watch(
  () => props.count,
  async () => {
    // watch (flush: 'pre') срабатывает ДО рендера, nextTick ждёт завершения рендера
    await nextTick()
    props.trace(`HookBox: ререндер завершён → onBeforeUpdate + onUpdated ×${updates / 2}`)
    updates = 0
  },
)
</script>

<template>
  <div class="row row--between">
    <span>Компонент жив: <b class="mono">count = {{ count }}</b></span>
    <span class="tag ok">mounted</span>
  </div>
</template>
