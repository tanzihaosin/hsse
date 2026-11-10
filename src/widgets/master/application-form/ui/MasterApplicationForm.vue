<script setup lang="ts">
import { phoneValidityError, type PhoneValidity } from '~/shared/lib/phone-validity'
withDefaults(defineProps<{ submissionSucceeded?: boolean }>(), {
  submissionSucceeded: false,
})

const form = reactive({ name: '', date: '', city: '', vuz: '', daterozd: '', fakultet: '', tel: '', email: '', soglasie: false })
const phoneValidity = ref<PhoneValidity>('empty')
const phoneTouched = ref(false)
const touched = reactive({ name: false, city: false, vuz: false, fakultet: false })
const message = ref('')
const phoneError = computed(() => phoneValidityError(phoneValidity.value))
const errors = computed(() => ({
  name: form.name.trim() ? '' : 'Это обязательное поле',
  city: form.city.trim() ? '' : 'Это обязательное поле',
  vuz: form.vuz.trim() ? '' : 'Это обязательное поле',
  fakultet: form.fakultet.trim() ? '' : 'Это обязательное поле',
}))
const isFormValid = computed(() =>
  !phoneError.value
  && !Object.values(errors.value).some(Boolean)
  && !!form.date
  && !!form.daterozd
  && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
  && form.soglasie,
)

function submit() {
  message.value = ''
  phoneTouched.value = true
  Object.assign(touched, { name: true, city: true, vuz: true, fakultet: true })
  if (!isFormValid.value) return
  message.value = 'Отправка анкеты пока недоступна.'
}
</script>

<template>
  <form v-if="!submissionSucceeded" @submit.prevent="submit">
    <UiText class="mb-6">Отправка анкет пока недоступна. Форма представлена для ознакомления.</UiText>
    <div class="grid gap-x-10 gap-y-4 md:grid-cols-2">
      <UiInput v-model="form.name" label="ФИО" placeholder="Фамилия Имя Отчество" name="name" autocomplete="name" :error="touched.name ? errors.name : ''" required @blur="touched.name = true" />
      <UiInput v-model="form.date" label="Дата окончания бакалавриата" type="date" name="date" required />
      <UiInput v-model="form.city" label="Город проживания" placeholder="Город проживания" name="city" autocomplete="address-level2" :error="touched.city ? errors.city : ''" required @blur="touched.city = true" />
      <UiInput v-model="form.vuz" label="Вуз" placeholder="Вуз" name="vuz" autocomplete="organization" :error="touched.vuz ? errors.vuz : ''" required @blur="touched.vuz = true" />
      <UiInput v-model="form.daterozd" label="Дата рождения" type="date" name="daterozd" autocomplete="bday" required />
      <UiInput v-model="form.fakultet" label="Факультет" placeholder="Факультет" name="fakultet" :error="touched.fakultet ? errors.fakultet : ''" required @blur="touched.fakultet = true" />
      <UiPhoneInput v-model="form.tel" name="tel" :error="phoneTouched && !!phoneError" :error-message="phoneError" required @blur="phoneTouched = true" @validity="phoneValidity = $event" />
      <UiInput v-model="form.email" label="Почта" placeholder="Email" type="email" name="email" autocomplete="email" required />
    </div>
    <div class="mt-6 grid items-center gap-6 md:grid-cols-2 md:gap-10">
      <UiCheckbox v-model="form.soglasie" name="soglasie" required>
        Я подтверждаю, что принимаю <UiAction to="/files/Политика-обработки-персональных-данных-МФТИ.pdf" target="_blank" variant="link" size="custom" class="inline! underline">соглашение об обработке персональных данных МФТИ</UiAction>
      </UiCheckbox>
      <UiAction type="submit" variant="invert" post-icon="arrow-up" :disabled="!isFormValid" class="md:justify-self-end">Отправить анкету</UiAction>
    </div>
    <UiText v-if="message" role="status" class="mt-4">{{ message }}</UiText>
  </form>
  <div v-else role="status">
    <UiHeading as="h3" variant="h3" class="font-dewi-extended text-2xl! font-bold">Заявка успешно отправлена!</UiHeading>
  </div>
</template>
