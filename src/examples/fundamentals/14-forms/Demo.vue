<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

interface Form {
  email: string
  password: string
  age: number | string
  bio: string
  plan: 'free' | 'pro'
  agree: boolean
  stack: string[]
}

const form = reactive<Form>({
  email: '',
  password: '',
  age: '',
  bio: '',
  plan: 'free',
  agree: false,
  stack: [],
})

const touched = reactive<Record<string, boolean>>({})

const errors = computed<Partial<Record<keyof Form, string>>>(() => {
  const e: Partial<Record<keyof Form, string>> = {}
  if (!form.email.includes('@')) e.email = 'нужен email с @'
  if (String(form.password).length < 6) e.password = 'минимум 6 символов'
  if (form.age !== '' && (Number(form.age) < 14 || Number(form.age) > 99)) e.age = 'от 14 до 99'
  if (form.bio.length > 120) e.bio = 'максимум 120 символов'
  if (!form.agree) e.agree = 'нужно согласие'
  return e
})

const isValid = computed(() => Object.keys(errors.value).length === 0)
const submitted = ref(false)
const submittedPayload = ref('')

function touchAll() {
  for (const k of Object.keys(form)) touched[k] = true
}

function submit() {
  submitted.value = true
  touchAll()
  if (!isValid.value) return
  submittedPayload.value = JSON.stringify({ ...form }, null, 1)
}

function reset() {
  Object.assign(form, {
    email: '',
    password: '',
    age: '',
    bio: '',
    plan: 'free',
    agree: false,
    stack: [],
  })
  for (const k of Object.keys(touched)) touched[k] = false
  submitted.value = false
  submittedPayload.value = ''
}

const plans = [
  { value: 'free', label: 'Free' },
  { value: 'pro', label: 'Pro — 10$/мес' },
] as const

const stackOptions = ['Vue', 'TypeScript', 'Vite', 'Pinia']
</script>

<template>
  <div class="stack">
    <div class="grid-2">
      <div class="stack">
        <label class="label">Email</label>
        <input v-model="form.email" class="input" :class="{ 'input--error': touched.email && errors.email }" placeholder="you@mail.dev" />
        <span v-if="touched.email && errors.email" class="tag bad">{{ errors.email }}</span>

        <label class="label">Пароль</label>
        <input v-model="form.password" class="input" type="password" placeholder="минимум 6 символов" />
        <span v-if="touched.password && errors.password" class="tag bad">{{ errors.password }}</span>

        <label class="label">Возраст (.number)</label>
        <input v-model.number="form.age" class="input" type="number" />
        <span v-if="touched.age && errors.age" class="tag bad">{{ errors.age }}</span>
      </div>

      <div class="stack">
        <label class="label">О себе (счётчик)</label>
        <textarea v-model="form.bio" class="input" rows="3" placeholder="до 120 символов" />
        <span class="muted mono">{{ form.bio.length }}/120 <span v-if="errors.bio" class="tag bad">{{ errors.bio }}</span></span>

        <label class="label">Тариф</label>
        <select v-model="form.plan" class="select">
          <option v-for="p in plans" :key="p.value" :value="p.value">{{ p.label }}</option>
        </select>

        <span class="label">Стек</span>
        <div class="row" style="gap: 12px; flex-wrap: wrap">
          <label v-for="opt in stackOptions" :key="opt"><input v-model="form.stack" type="checkbox" :value="opt" /> {{ opt }}</label>
        </div>

        <label><input v-model="form.agree" type="checkbox" /> согласен с условиями</label>
      </div>
    </div>

    <div class="row">
      <button class="btn primary" @click="submit">отправить</button>
      <button class="btn" @click="reset">сброс</button>
      <span class="tag" :class="isValid ? 'ok' : 'warn'">{{ isValid ? 'форма валидна' : 'есть ошибки' }}</span>
    </div>

    <div v-if="submitted && submittedPayload" class="card">
      <b>Отправленный payload</b>
      <pre class="mono" style="white-space: pre-wrap; margin: 8px 0 0">{{ submittedPayload }}</pre>
    </div>
  </div>
</template>
