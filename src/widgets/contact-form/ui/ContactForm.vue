<script setup lang="ts">
import { phoneValidityError, type PhoneValidity } from '~/shared/lib/phone-validity'
import type { ContactFormProps } from '../model/ContactForm.types'
import { closedRegistration, defaultContactForm, submissionSuccess } from '../model/ContactForm.data'

const props = withDefaults(defineProps<ContactFormProps>(), {
  title: defaultContactForm.title,
  image: defaultContactForm.image,
  privacyUrl: defaultContactForm.privacyUrl,
  registrationClosed: false,
  submissionSucceeded: false,
})
const config = useRuntimeConfig()
const privacyHref = computed(() => `${config.app.baseURL.replace(/\/$/, '')}${props.privacyUrl}`)
const imageSrc = computed(() => props.image.startsWith('/') && !props.image.startsWith('//') && /\.svg(?:[?#]|$)/i.test(props.image)
  ? `${config.app.baseURL.replace(/\/$/, '')}${props.image}`
  : props.image)
const form = reactive({ name: '', phone: '', email: '', question: '', consent: false })
const message = ref('')
const phoneValidity = ref<PhoneValidity>('empty')
const touched = reactive({ name: false, phone: false, email: false, question: false, consent: false })
const errors = computed(() => ({
  name: !form.name.trim() ? 'Это обязательное поле' : '',
  phone: phoneValidityError(phoneValidity.value),
  email: !form.email.trim() ? 'Это обязательное поле' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) ? 'Введите корректный адрес почты' : '',
  question: !form.question.trim() ? 'Это обязательное поле' : '',
  consent: !form.consent ? 'Необходимо ваше согласие' : '',
}))
const isFormValid = computed(() => !Object.values(errors.value).some(Boolean))

function submit() {
  message.value = ''
  Object.assign(touched, { name: true, phone: true, email: true, question: true, consent: true })
  if (!isFormValid.value) return
  message.value = 'Отправка вопроса пока недоступна.'
}
</script>

<template>
  <section id="form" class="bg-foreground text-primary">
    <div class="container flex flex-col gap-8 pt-12 md:flex-row md:gap-10 md:pt-16">
      <div class="flex flex-1 flex-col">
        <UiHeading as="h2" variant="h3" uppercase class="max-w-65 font-dewi font-semibold leading-6 tracking-[2px]">{{ title }}</UiHeading>
        <NuxtPicture :src="imageSrc" alt="" :width="828" :height="776" loading="lazy" class="mt-auto hidden max-w-120 pt-8 md:block" :img-attrs="{ class: 'w-full' }" />
      </div>
      <form v-if="!registrationClosed && !submissionSucceeded" class="flex flex-1 flex-col gap-4 pb-12" novalidate @submit.prevent="submit">
        <UiText>Отправка вопросов пока недоступна. Форма представлена для ознакомления.</UiText>
        <UiInput v-model="form.name" label="Имя" placeholder="Имя" name="name" autocomplete="name" :error="touched.name ? errors.name : ''" required @blur="touched.name = true" />
        <UiPhoneInput v-model="form.phone" name="tel" :error="touched.phone && !!errors.phone" :error-message="errors.phone" required @blur="touched.phone = true" @validity="phoneValidity = $event" />
        <UiInput v-model="form.email" label="Почта" placeholder="Email" type="email" name="email" autocomplete="email" :error="touched.email ? errors.email : ''" required @blur="touched.email = true" />
        <UiTextarea v-model="form.question" label="Вопрос" placeholder="Вопрос" name="question" :error="touched.question ? errors.question : ''" required @blur="touched.question = true" />
        <UiCheckbox v-model="form.consent" :error="touched.consent && !!errors.consent" :error-message="errors.consent" required @blur="touched.consent = true">
          Я подтверждаю, что принимаю <UiAction :to="privacyHref" external target="_blank" variant="link" size="custom" class="inline! underline">соглашение об обработке персональных данных МФТИ</UiAction>
        </UiCheckbox>
        <UiAction type="submit" variant="invert" post-icon="arrow-up" class="mt-5">Задать вопрос</UiAction>
        <UiText v-if="message" role="status">{{ message }}</UiText>
      </form>
      <div v-else-if="submissionSucceeded" class="flex flex-1 flex-col items-start justify-center gap-4 pb-12" role="status">
        <UiHeading as="h3" variant="h3" class="font-dewi-extended text-2xl! font-bold">{{ submissionSuccess }}</UiHeading>
      </div>
      <div v-else class="flex flex-1 flex-col items-start justify-center gap-4 pb-12">
        <UiHeading as="h3" variant="h3" class="font-dewi-extended text-2xl! font-bold">{{ closedRegistration.title }}</UiHeading>
        <UiText class="max-w-sm text-primary/70">{{ closedRegistration.description }}</UiText>
        <UiAction :to="closedRegistration.action.to" variant="invert" post-icon="arrow-up">{{ closedRegistration.action.label }}</UiAction>
      </div>
    </div>
  </section>
</template>
