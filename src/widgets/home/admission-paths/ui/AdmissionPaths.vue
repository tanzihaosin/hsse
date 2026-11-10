<script setup lang="ts">
import type { AdmissionPathsProps } from '../model/AdmissionPaths.types'

defineProps<AdmissionPathsProps>()
</script>

<template>
  <section v-if="items.length" class="container">
    <UiHeading class="mb-10">{{ title }}</UiHeading>
    <ol class="space-y-5">
      <li v-for="(item, index) in items" :key="item.title">
        <UiInfoCard :title="item.title" :number="String(index + 1).padStart(2, '0')" orientation="horizontal" collapsible>
          <UiText>{{ item.preview }}</UiText>
          <template #details>
              <UiText class="mt-3">{{ item.details }}</UiText>
              <ul v-if="item.additional?.length" class="mt-3 list-disc space-y-1 pl-5">
                <li v-for="line in item.additional" :key="line">{{ line }}</li>
              </ul>
              <UiText v-if="item.conclusion" class="mt-3">{{ item.conclusion }}</UiText>
              <UiAction v-if="item.link" :to="item.link.to" variant="link" size="custom" class="mt-2 inline! text-left leading-normal! underline">{{ item.link.label }}</UiAction>
          </template>
        </UiInfoCard>
      </li>
    </ol>
    <UiAction v-if="action" :to="action.to" post-icon="arrow-up" class="mt-5">{{ action.label }}</UiAction>
  </section>
</template>
