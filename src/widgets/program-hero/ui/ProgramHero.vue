<script setup lang="ts">
import type { ProgramHeroProps } from '../model/ProgramHero.types'
import ProgramHeroDirection from './ProgramHeroDirection.vue'

defineProps<ProgramHeroProps>()
const emit = defineEmits<{ action: [] }>()
</script>

<template>
  <section class="container relative overflow-hidden py-8 md:py-12">
    <div class="relative z-10 max-w-180 lg:pr-8">
      <UiBadge>{{ badge }}</UiBadge>
      <UiHeading as="h1" class="mt-6 whitespace-pre-line">{{ title }}</UiHeading>
      <UiText v-if="description" variant="lg" class="mt-10 max-w-145 text-foreground-muted leading-normal">{{ description }}</UiText>
      <ul v-if="directions?.length" class="mt-10 space-y-5 text-lg leading-6">
        <ProgramHeroDirection v-for="direction in directions" :key="direction.title" v-bind="direction" />
      </ul>
      <div v-if="partner" class="mt-12 flex flex-wrap items-center gap-6">
        <UiText variant="lg" class="font-bold">{{ partner.label }}</UiText>
        <NuxtPicture v-if="partner.logo.startsWith('/')" :src="partner.logo" :alt="partner.name" class="w-36" :img-attrs="{ class: 'h-auto w-full object-contain' }" />
        <UiSvg v-else :name="partner.logo" :aria-label="partner.name" :decorative="false" class="h-8 w-36" />
      </div>
      <UiAction v-if="action" :to="action.to" variant="custom" post-icon="arrow-up" class="mt-10 w-full rounded-full border border-foreground bg-foreground font-light text-primary hover:bg-primary hover:text-foreground md:w-fit" @click="!action.to && emit('action')">{{ action.label }}</UiAction>
    </div>
    <NuxtPicture src="/images/hero-orbit.webp" alt="" width="624" height="600" class="pointer-events-none absolute top-20 -right-1/4 aspect-square w-full max-w-60 opacity-25 md:right-0 lg:top-1/2 lg:w-90 lg:max-w-none lg:-translate-y-1/2 lg:opacity-100" :img-attrs="{ class: 'h-full w-full object-contain' }" />
  </section>
</template>
