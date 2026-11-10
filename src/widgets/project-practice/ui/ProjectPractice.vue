<script setup lang="ts">
import type { ProjectPracticeProps } from '../model/ProjectPractice.types'

defineProps<ProjectPracticeProps>()
</script>

<template>
  <section class="container">
    <div class="grid gap-10 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:items-end lg:gap-16">
      <div>
        <UiHeading class="max-w-80">{{ title }}</UiHeading>
        <div class="mt-8 space-y-4">
          <UiText v-for="description in descriptions" :key="description">{{ description }}</UiText>
        </div>
      </div>
      <UiStepsChart :steps="steps" :max-height="176" />
    </div>
    <div class="mt-12 flex items-center justify-between gap-8 lg:mt-20">
      <UiAction :to="action.to" target="_blank" post-icon="arrow-up">{{ action.label }}</UiAction>
      <NuxtPicture src="/images/project-practice-orbit.webp" alt="" width="506" height="63" class="hidden w-full max-w-82.5 md:block" :img-attrs="{ class: 'h-auto w-full' }" />
    </div>
  </section>
</template>
