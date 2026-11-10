<script setup lang="ts">
import type { EventCardProps } from '../model/EventCard.types'

defineProps<EventCardProps>()
</script>

<template>
  <article class="grid gap-6 rounded-md border-2 border-dashed border-foreground p-6 md:grid-cols-[320px_1fr] md:items-center md:gap-10 md:px-10 md:py-8">
    <div class="grid gap-6">
      <div class="flex items-center gap-5">
        <UiSvg name="clock" class="size-6 shrink-0" />
        <span class="sr-only">Когда: </span>
        <UiText as="span" variant="mono" class="rounded bg-foreground px-2 py-0.5 text-primary">{{ dateTime }}</UiText>
      </div>
      <div v-if="location" class="flex items-center gap-5">
        <UiSvg name="location" class="size-6 shrink-0" />
        <span class="sr-only">Место: </span>
        <UiText class="whitespace-pre-line">{{ location }}</UiText>
      </div>
    </div>
    <div>
      <UiText>{{ description }}</UiText>
      <ul v-if="details?.length" class="list-disc pl-5">
        <li v-for="detail in details" :key="detail"><UiText>{{ detail }}</UiText></li>
      </ul>
    </div>
  </article>
</template>
