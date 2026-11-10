<script setup lang="ts">
import type { EventsHsseProps } from '../model/EventsHsse.types'

defineProps<EventsHsseProps>()
</script>

<template>
  <section v-if="events.length" class="container">
    <UiHeading class="mb-10">{{ title }}</UiHeading>
    <div class="space-y-10">
      <article v-for="event in events" :key="`${event.datetime}-${event.title}`" class="flex flex-col-reverse gap-5 border-b-2 border-dashed border-foreground-muted pb-8 md:flex-row md:items-start md:justify-between md:gap-10">
        <div class="flex max-w-140 flex-col items-start">
          <time :datetime="event.datetime"><UiBadge variant="date">{{ event.date }}</UiBadge></time>
          <UiHeading as="h3" variant="h3" uppercase class="mt-4 mb-2 text-xl! font-semibold tracking-[0.15em]">{{ event.title }}</UiHeading>
          <div v-if="event.paragraphs.length" class="mb-5 space-y-3">
            <UiText v-for="(paragraph, index) in event.paragraphs" :key="index">{{ paragraph }}</UiText>
          </div>
          <UiAction :to="event.link" :aria-label="`${event.buttonLabel || 'Узнать больше'}: ${event.title}`" post-icon="arrow-up">{{ event.buttonLabel || 'Узнать больше' }}</UiAction>
        </div>
        <NuxtPicture :src="event.image" :alt="`Афиша: ${event.title}`" loading="lazy" class="block w-full max-w-80 shrink-0" :img-attrs="{ class: 'h-auto w-full object-contain' }" />
      </article>
    </div>
  </section>
</template>
