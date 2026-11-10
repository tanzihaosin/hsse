<script setup lang="ts">
import type { AboutProgramProps } from '../model/AboutProgram.types'

defineProps<AboutProgramProps>()
</script>

<template>
  <section class="container">
    <div class="grid gap-8 md:grid-cols-2 md:gap-12">
      <div>
        <UiHeading as="h2" class="max-w-110">{{ title }}</UiHeading>
        <div class="mt-12 space-y-5">
          <UiText v-for="paragraph in paragraphs" :key="paragraph">{{ paragraph }}</UiText>
        </div>
      </div>
      <NuxtPicture :src="image" alt="" class="mx-auto w-full max-w-110 self-center" :img-attrs="{ class: 'h-auto w-full' }" />
    </div>
    <div class="mt-16">
      <UiText>{{ tracksTitle }}</UiText>
      <ul class="mt-4 flex flex-wrap gap-5">
        <li v-for="track in tracks" :key="track" class="rounded-lg border-2 border-foreground bg-primary-lighter px-4 py-4 font-bold uppercase">
          {{ track }}
        </li>
      </ul>
      <UiText class="mt-5">{{ note }}</UiText>
    </div>
  </section>
</template>
