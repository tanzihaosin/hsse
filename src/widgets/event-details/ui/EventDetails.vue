<script setup lang="ts">
import type { EventDetailsProps } from '../model/EventDetails.types'

defineProps<EventDetailsProps>()
</script>

<template>
  <section v-if="items.length" class="container" aria-label="Сведения о мероприятии">
    <ul class="grid gap-8 md:grid-cols-3">
      <li v-for="item in items" :key="item.label" class="relative flex min-h-30 flex-col border-l border-stroke py-1 pl-8 before:absolute before:top-0 before:left-0 before:size-1.5 before:-translate-x-1/2 before:rounded-full before:bg-foreground after:absolute after:bottom-0 after:left-0 after:size-1.5 after:-translate-x-1/2 after:rounded-full after:bg-foreground">
        <UiText variant="custom" class="font-dewi-extended leading-none font-bold whitespace-pre-line" :class="item.compact ? 'text-xl' : 'text-3xl'">{{ item.value }}</UiText>
        <UiText class="mt-auto pt-5">{{ item.label }}</UiText>
      </li>
    </ul>
  </section>
</template>
