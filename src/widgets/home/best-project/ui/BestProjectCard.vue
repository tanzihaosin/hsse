<script setup lang="ts">
import type { BestProjectItem } from '../model/BestProject.types'

defineProps<{ project: BestProjectItem, number: string }>()
defineEmits<{ play: [] }>()
</script>

<template>
  <article class="relative flex h-full flex-col gap-6 rounded-lg border-2 border-dashed border-primary bg-foreground px-6 py-4 text-primary md:min-h-159 md:flex-row md:gap-10 md:pr-10">
    <UiText as="span" variant="mono" class="absolute top-2 left-2 font-light">{{ number }}</UiText>
    <div class="mt-6 flex shrink-0 items-center justify-center md:mt-0 md:w-1/3">
      <NuxtPicture :src="project.image" alt="" class="block w-full max-w-49" :img-attrs="{ class: 'w-full project-orbit motion-reduce:animate-none' }" />
    </div>
    <div class="flex flex-1 flex-col items-start md:max-w-64.25">
      <UiHeading as="h3" variant="h3" uppercase class="text-xl! font-bold">{{ project.title }}</UiHeading>
      <UiText class="mt-3"><template v-if="project.descriptionLink"><UiAction :to="project.descriptionLink.to" variant="link" size="custom" class="inline! leading-normal! underline">{{ project.descriptionLink.label }}</UiAction>{{ ' ' }}</template>{{ project.description }}</UiText>
      <UiText class="mt-3 italic">{{ project.note }}</UiText>
      <div class="min-h-10 flex-1" />
      <UiAction variant="invert" post-icon="arrow-up" class="self-end border-2" @click="$emit('play')">Посмотреть видео</UiAction>
    </div>
  </article>
</template>

<style scoped>
@keyframes project-orbit-spin {
  to { transform: rotate(360deg); }
}

:deep(.project-orbit) {
  animation: project-orbit-spin 10s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  :deep(.project-orbit) { animation: none; }
}
</style>
