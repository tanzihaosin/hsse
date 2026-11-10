<script setup lang="ts">
import type { AdmissionStepsProps } from '../model/AdmissionSteps.types'

defineProps<AdmissionStepsProps>()
const emit = defineEmits<{ action: [] }>()
</script>

<template>
  <section class="container">
    <UiHeading as="h2" class="mb-10">{{ title }}</UiHeading>
    <ol class="space-y-5">
      <li v-for="(item, index) in items" :key="item.title">
        <UiInfoCard :title="item.title" :number="String(index + 1).padStart(2, '0')" orientation="horizontal">
          <UiText v-if="item.text">
            {{ item.text }}<template v-if="item.emphasis">{{ ' ' }}<strong>{{ item.emphasis }}</strong>{{ item.textAfterEmphasis }}</template>
          </UiText>
          <ul v-if="item.details?.length" class="mt-3 list-disc space-y-1 pl-6">
            <li v-for="detail in item.details" :key="detail"><UiText as="span">{{ detail }}</UiText></li>
          </ul>
          <UiAction v-if="item.action" :to="item.action.to" target="_blank" variant="custom" :post-icon="item.action.externalIcon ? 'arrow-up' : undefined" class="w-full rounded-full border border-primary bg-primary text-center font-light text-foreground hover:bg-foreground hover:text-primary md:w-fit" :class="{ 'mt-5': item.text || item.details?.length }" @click="!item.action.to && emit('action')">{{ item.action.label }}</UiAction>
        </UiInfoCard>
      </li>
    </ol>
  </section>
</template>
