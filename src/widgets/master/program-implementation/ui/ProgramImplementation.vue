<script setup lang="ts">
import type { ProgramImplementationProps } from '../model/ProgramImplementation.types'

defineProps<ProgramImplementationProps>()
</script>

<template>
  <section class="container grid items-center gap-12 md:grid-cols-2 md:gap-16">
    <div>
      <UiHeading as="h2" class="max-w-110">{{ title }}</UiHeading>
      <UiText class="mt-12">{{ description }}</UiText>
      <UiText class="mt-12 rounded-lg border-2 border-foreground bg-primary-lighter p-4 md:mt-20">{{ note }}</UiText>
    </div>
    <div class="min-w-0">
      <UiSwiper :options="{ slidesPerView: 1, spaceBetween: 20 }" :slide-labels="people.map(person => person.name)">
        <swiper-slide v-for="person in people" :key="person.name" class="h-auto">
          <article class="flex h-full flex-col items-center text-center">
            <div class="relative flex size-70 items-center justify-center">
              <NuxtPicture :src="background" alt="" class="absolute inset-0" :img-attrs="{ class: 'size-full object-contain' }" />
              <NuxtPicture :src="person.photo" :alt="person.name" class="relative block size-42" :img-attrs="{ class: 'size-full rounded-full object-cover' }" />
            </div>
            <UiHeading as="h3" variant="h3" class="mt-5 max-w-70 font-semibold uppercase">{{ person.name }}</UiHeading>
            <UiText class="mt-7 max-w-80">{{ person.description }}</UiText>
          </article>
        </swiper-slide>
      </UiSwiper>
    </div>
  </section>
</template>
