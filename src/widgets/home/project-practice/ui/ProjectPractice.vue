<script setup lang="ts">
import type { ProjectPracticeProps } from '../model/ProjectPractice.types'

defineProps<ProjectPracticeProps>()
</script>

<template>
  <section class="container">
    <UiStepsChart class="mb-6" :steps="steps" />
    <div class="flex flex-col gap-4 md:flex-row md:gap-[10%]">
      <UiText v-for="description in descriptions" :key="description" class="w-full">
        {{ description }}
      </UiText>
    </div>
  </section>
</template>
