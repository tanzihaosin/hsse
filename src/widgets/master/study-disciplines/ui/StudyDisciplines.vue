<script setup lang="ts">
import type { StudyDisciplinesProps } from '../model/StudyDisciplines.types'

defineProps<StudyDisciplinesProps>()
</script>

<template>
  <section class="container">
    <UiHeading as="h2" class="mb-10">{{ title }}</UiHeading>
    <div class="grid items-center gap-10 md:grid-cols-2">
      <div>
        <div class="space-y-5">
          <UiText v-for="paragraph in paragraphs" :key="paragraph">{{ paragraph }}</UiText>
        </div>
        <div v-for="group in groups" :key="group.title" class="mt-6">
          <UiHeading as="h3" variant="h3" class="text-base font-bold uppercase">{{ group.title }}</UiHeading>
          <ul class="mt-4 list-disc space-y-1 pl-7">
            <li v-for="item in group.items" :key="item"><UiText as="span">{{ item }}</UiText></li>
          </ul>
        </div>
        <UiAction :to="action.to" target="_blank" post-icon="arrow-up" class="mt-10">{{ action.label }}</UiAction>
      </div>
      <NuxtPicture :src="image" alt="" class="mx-auto w-full max-w-140" :img-attrs="{ class: 'h-auto w-full object-contain' }" />
    </div>
  </section>
</template>
