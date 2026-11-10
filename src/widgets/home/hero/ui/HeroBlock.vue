<script setup lang="ts">
import type { HeroBlockProps } from '../model/HeroBlock.types'
import HeroBlockProgram from './HeroBlockProgram.vue'

defineProps<HeroBlockProps>()
</script>

<template>
  <section class="container flex flex-col gap-10 overflow-x-clip lg:flex-row">
    <div class="relative flex w-full flex-col pt-5 lg:w-1/3">
      <UiHeading as="h1" class="relative z-20 max-sm:leading-9 sm:text-4xl">{{ title }}</UiHeading>
      <UiText
        v-if="description"
        class="text-foreground-muted relative z-20 mt-5 max-w-88 font-medium"
        variant="lg"
        >{{ description }}</UiText
      >
      <NuxtPicture
        v-if="image"
        :src="image"
        width="624"
        height="600"
        :img-attrs="{ fetchpriority: 'high', class: 'h-full w-full object-contain' }"
        alt=""
        class="pointer-events-none absolute -right-1/4 -bottom-1/2 z-10 mx-auto aspect-square w-full max-w-60 opacity-25 md:right-0 md:bottom-0 md:opacity-100 lg:static lg:mt-9"
      />
    </div>
    <div class="relative z-10 mt-6 w-full lg:ml-auto lg:w-2/3 lg:max-w-lg xl:max-w-xl">
      <NuxtPicture
        v-if="imageDecor"
        :src="imageDecor"
        alt=""
        aria-hidden="true"
        :img-attrs="{ class: 'h-full' }"
        class="pointer-events-none absolute -left-20 hidden h-full xl:block"
      />
      <ul class="relative flex flex-col gap-12">
        <HeroBlockProgram v-for="program in programs" :key="program.link.to" v-bind="program" />
      </ul>
    </div>
  </section>
</template>
