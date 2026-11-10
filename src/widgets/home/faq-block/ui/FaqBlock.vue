<script setup lang="ts">
import type { FaqBlockProps } from '../model/FaqBlock.types'
import FaqGroup from './FaqGroup.vue'

defineProps<FaqBlockProps>()
</script>

<template>
  <section v-if="groups.length" class="container">
    <UiHeading class="mb-10">{{ title }}</UiHeading>
    <div class="space-y-5">
      <FaqGroup v-for="group in groups" :key="group.title" :group="group" />
    </div>
  </section>
</template>
