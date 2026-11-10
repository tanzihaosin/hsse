<script setup lang="ts">
import type { FactsBlockProps } from '../model/FactsBlock.types'

defineProps<FactsBlockProps>()
</script>

<template>
  <section v-if="items.length" class="container" :aria-label="title ? undefined : 'Сведения о программе'">
    <UiHeading v-if="title" class="mb-10">{{ title }}</UiHeading>
    <ul class="grid gap-8 md:grid-cols-3">
      <li v-for="item in items" :key="`${item.value}-${item.description}`">
        <UiFactCard v-bind="item" />
      </li>
    </ul>
    <UiText v-if="note" class="mt-10 whitespace-pre-line">{{ note }}</UiText>
  </section>
</template>
