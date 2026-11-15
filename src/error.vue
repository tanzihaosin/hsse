<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const isNotFound = computed(() => props.error.status === 404)

useSeoMeta({
  title: () => `${isNotFound.value ? 'Страница не найдена' : 'Произошла ошибка'} — ВШПИ`,
  robots: 'noindex',
})
</script>

<template>
  <NuxtLayout>
    <section class="container flex w-full flex-1 flex-col items-center justify-center py-12 text-center md:py-20">
      <UiText variant="mono" class="text-foreground-muted">Ошибка / {{ error.status }}</UiText>
      <div aria-hidden="true" class="font-dewi-extended mt-6 text-9xl leading-none font-bold tracking-tight md:text-[15rem]">
        {{ error.status }}
      </div>
      <UiHeading as="h1" class="mt-8">{{ isNotFound ? 'Страница не найдена' : 'Произошла ошибка' }}</UiHeading>
      <UiText class="text-foreground-muted mt-6 max-w-md">
        {{ isNotFound
          ? 'Возможно, она была перемещена или адрес указан неверно. Вернитесь на главную, чтобы продолжить знакомство с ВШПИ.'
          : 'Не удалось загрузить страницу. Попробуйте вернуться на главную.' }}
      </UiText>
      <UiAction class="mt-8" @click="clearError({ redirect: '/' })">На главную</UiAction>
    </section>
  </NuxtLayout>
</template>
