<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(true)
const mode = ref<'fade' | 'slide' | 'scale' | 'bounce'>('fade')
const swapCount = ref(0)

const messages = ['Первый экран', 'Второй экран', 'Третий экран']
const msgIndex = ref(0)

function nextMessage() {
  msgIndex.value = (msgIndex.value + 1) % messages.length
  swapCount.value++
}

function onEnter(el: Element, done: () => void) {
  // JS-хук: библиотека анимации сама управляет завершением
  const e = el as HTMLElement
  e.style.opacity = '0'
  requestAnimationFrame(() => {
    e.style.transition = 'opacity .4s'
    e.style.opacity = '1'
  })
  setTimeout(done, 420)
}
</script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="visible = !visible">
        {{ visible ? 'спрятать' : 'показать' }}
      </button>
      <button class="btn" @click="nextMessage">сменить экран (key)</button>
      <select v-model="mode" class="select" style="width: auto">
        <option value="fade">fade</option>
        <option value="slide">slide</option>
        <option value="scale">scale</option>
        <option value="bounce">bounce</option>
      </select>
    </div>

    <!-- Одиночный элемент: enter/leave классы -->
    <Transition :name="mode" appear>
      <p v-if="visible" class="card" style="margin: 0">
        <b>Transition</b> — v-if-элемент. Сейчас: режим «{{ mode }}», appear включён.
      </p>
    </Transition>

    <!-- Смена содержимого через key: enter + leave по очереди (out-in) -->
    <Transition name="slide" mode="out-in">
      <p :key="msgIndex" class="card" style="margin: 0">
        {{ messages[msgIndex] }} <span class="muted mono">#{{ msgIndex + 1 }}</span>
      </p>
    </Transition>

    <!-- JS-хуки вместо CSS -->
    <Transition :css="false" @enter="onEnter">
      <p v-if="visible" class="tag info" style="display: inline-block; margin: 0">
        JS-хук @enter: анимируем без CSS-классов
      </p>
    </Transition>

    <div class="muted mono" style="margin-top: 4px">смен экрана: {{ swapCount }}</div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  opacity: 0;
  transform: translateX(24px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-24px);
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.25s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
</style>
