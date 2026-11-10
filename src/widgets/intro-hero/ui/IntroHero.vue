<script setup lang="ts">
import type { IntroHeroProps } from '../model/IntroHero.types'

defineProps<IntroHeroProps>()
</script>

<template>
  <section class="container grid items-center gap-8 py-10 md:py-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)]">
    <div class="order-2 lg:order-1">
      <UiBadge v-if="badge" class="mb-6">{{ badge }}</UiBadge>
      <UiHeading as="h1" variant="h2">{{ title }}</UiHeading>
      <UiText v-if="description" variant="lg" class="mt-8 max-w-120">{{ description }}</UiText>
      <ul v-if="points?.length" class="mt-10 grid gap-5 sm:grid-cols-3 md:mt-14">
        <li v-for="point in points" :key="point">
          <UiText variant="sm" class="leading-[18px]">{{ point }}</UiText>
        </li>
      </ul>
      <UiAction v-if="action" :to="action.to" post-icon="arrow-up" class="mt-6">{{ action.label }}</UiAction>
    </div>
    <NuxtPicture :src="image.src" :alt="image.alt" width="340" height="340" class="order-1 mx-auto block w-full max-w-85 lg:order-2" :img-attrs="{ class: 'h-auto w-full' }" />
  </section>
</template>
