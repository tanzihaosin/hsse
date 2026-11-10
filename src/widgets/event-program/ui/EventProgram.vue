<script setup lang="ts">
import type { EventProgramProps } from '../model/EventProgram.types'
import EventCard from './EventCard.vue'

defineProps<EventProgramProps>()
</script>

<template>
  <section v-if="items.length" class="container">
    <UiHeading>{{ title }}</UiHeading>
    <ol class="mt-10 grid gap-4">
      <li v-for="item in items" :key="`${item.dateTime}-${item.description}`">
        <EventCard v-bind="item" />
      </li>
    </ol>
  </section>
</template>
