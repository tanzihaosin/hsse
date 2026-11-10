<script setup lang="ts">
import type { AdmissionOverviewProps } from '../model/AdmissionOverview.types'

defineProps<AdmissionOverviewProps>()
</script>

<template>
  <section v-if="items.length" class="container">
    <UiHeading class="mb-10">{{ title }}</UiHeading>
    <ul class="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      <UiBadge
        v-for="item in items"
        :key="item.label"
        as="li"
        variant="detail"
        :class="{ 'md:col-span-2': item.wide }"
      >
        {{ item.label }}
      </UiBadge>
    </ul>
  </section>
</template>
