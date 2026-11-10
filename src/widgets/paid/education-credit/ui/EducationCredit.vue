<script setup lang="ts">
import type { EducationCreditProps } from '../model/EducationCredit.types'

defineProps<EducationCreditProps>()
</script>

<template>
  <section class="container">
    <UiHeading as="h2">{{ title }}</UiHeading>
    <div class="mt-10 grid items-center gap-8 md:mt-16 md:grid-cols-[2fr_3fr]">
      <NuxtPicture :src="image" alt="" width="201" height="121" class="mx-auto block w-50 max-w-full" :img-attrs="{ class: 'h-auto w-full' }" />
      <div>
        <UiHeading as="h3" variant="h3" uppercase class="font-semibold tracking-[2px]">{{ explanationTitle }}</UiHeading>
        <ul class="mt-7 space-y-1">
          <li v-for="term in terms" :key="term"><UiText>— {{ term }}</UiText></li>
        </ul>
      </div>
    </div>
    <div class="mt-12 space-y-2">
      <UiText v-for="paragraph in introduction" :key="paragraph">{{ paragraph }}</UiText>
    </div>
    <ul class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
      <li v-for="payment in payments" :key="payment.value" class="relative border-l border-stroke pl-5 before:absolute before:top-0 before:left-0 before:size-1.5 before:-translate-x-1/2 before:rounded-full before:bg-foreground">
        <UiText variant="caption" class="min-h-4">{{ payment.label }}</UiText>
        <UiText variant="custom" class="mt-6 font-dewi-extended text-3xl leading-none font-bold lg:text-4xl">{{ payment.value }}</UiText>
        <UiText class="mt-3">{{ payment.description }}</UiText>
      </li>
    </ul>
    <UiText variant="caption" class="mt-10 max-w-115 leading-4">{{ note }}</UiText>
  </section>
</template>
