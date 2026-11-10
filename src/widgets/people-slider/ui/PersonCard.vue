<script setup lang="ts">
import type { Person } from '../model/PeopleSlider.types'

const props = defineProps<{ person: Person }>()
const nameParts = computed(() => {
  const [first = '', ...rest] = props.person.name.trim().split(/\s+/)
  return { first, rest: rest.join(' ') }
})
</script>

<template>
  <article class="flex h-full min-h-94 flex-col items-center rounded-2xl border border-foreground p-6 text-center">
    <NuxtPicture v-if="person.photo" :src="person.photo" :alt="person.name" class="mb-7 block size-42 shrink-0" :img-attrs="{ class: 'size-full rounded-full object-cover' }" />
    <div v-else aria-hidden="true" class="relative mb-7 size-42 shrink-0 overflow-hidden rounded-full bg-foreground-muted">
      <span class="absolute top-9 left-1/2 size-14 -translate-x-1/2 rounded-full bg-primary/50" />
      <span class="absolute bottom-0 left-1/2 h-17 w-28 -translate-x-1/2 rounded-t-full bg-primary/50" />
    </div>
    <UiHeading as="h3" variant="h3" class="mb-7 font-semibold uppercase">
      {{ nameParts.first }}<template v-if="nameParts.rest"><br>{{ nameParts.rest }}</template>
    </UiHeading>
    <UiText class="whitespace-pre-line">{{ person.description }}</UiText>
  </article>
</template>
