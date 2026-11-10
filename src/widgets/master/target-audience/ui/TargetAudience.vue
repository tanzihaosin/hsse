<script setup lang="ts">
import type { TargetAudienceProps } from '../model/TargetAudience.types'

defineProps<TargetAudienceProps>()
</script>

<template>
  <section class="container">
    <UiHeading as="h2" class="mb-10">{{ title }}</UiHeading>
    <ul class="grid gap-5 md:grid-cols-2">
      <li v-for="item in items" :key="item.title" class="rounded-lg border-2 border-foreground bg-primary-lighter p-4">
        <UiHeading as="h3" class="font-bold uppercase">{{ item.title }}</UiHeading>
        <UiText class="mt-1 leading-5">{{ item.description }}</UiText>
      </li>
    </ul>
  </section>
</template>
