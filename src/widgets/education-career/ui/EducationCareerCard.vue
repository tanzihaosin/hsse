<script setup lang="ts">
import type { EducationCareerStage } from '../model/EducationCareer.types'

defineProps<{ stage: EducationCareerStage, active: boolean }>()
</script>

<template>
  <div class="flex h-full flex-col">
    <UiHeading variant="h3" as="h3" class="mb-7 font-dewi-extended text-2xl!" :class="active ? 'text-foreground' : 'text-foreground-muted'">{{ stage.title }}</UiHeading>
    <div class="relative mb-9 border-t border-stroke">
      <span class="absolute top-0 left-0 size-4 -translate-y-1/2 rounded-full bg-foreground" />
    </div>
    <article class="relative flex min-h-132 flex-1 flex-col overflow-hidden rounded-lg border border-foreground md:flex-row" :class="active ? 'bg-primary' : 'bg-primary-lighter'">
      <div class="relative z-10 flex flex-1 flex-col justify-center gap-4 p-6 md:p-10" :class="{ 'md:order-2': stage.imagePosition === 'left' }">
        <UiText>
          {{ stage.introduction }}<template v-if="stage.introductionLink">{{ ' ' }}<UiAction :to="stage.introductionLink.to" variant="link" size="custom" class="inline! leading-normal! underline">{{ stage.introductionLink.label }}</UiAction>.</template>
        </UiText>
        <ul v-if="stage.links?.length" class="list-disc space-y-1 pl-6">
          <li v-for="link in stage.links" :key="link.to">
            <UiAction :to="link.to" variant="link" size="custom" class="inline! leading-normal! underline">{{ link.label }}</UiAction>
          </li>
        </ul>
        <UiText v-if="stage.description">{{ stage.description }}</UiText>
        <ol v-if="stage.tracks?.length" class="space-y-3">
          <li v-for="(track, index) in stage.tracks" :key="track.title ?? index">
            <template v-if="track.title">{{ index + 1 }}. {{ track.title }}</template>
            <ul class="space-y-3" :class="{ 'mt-3 pl-5': track.title }">
              <UiBadge v-for="item in track.items" :key="item" as="li" variant="outline" class="w-full">{{ item }}</UiBadge>
            </ul>
          </li>
        </ol>
      </div>
      <div class="flex h-60 items-end justify-center md:h-auto md:w-[40%] md:shrink-0" :class="{ 'md:order-1': stage.imagePosition === 'left' }">
        <NuxtPicture :src="stage.image" alt="" class="max-w-full" :img-attrs="{ class: 'max-h-72 max-w-full object-contain object-bottom' }" />
      </div>
    </article>
  </div>
</template>
