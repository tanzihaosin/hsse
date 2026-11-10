<script setup lang="ts">
import type { AdmissionStepsProps } from '../model/AdmissionSteps.types'

defineProps<AdmissionStepsProps>()
</script>

<template>
  <section class="container">
    <UiHeading as="h2" class="mb-6">{{ title }}</UiHeading>
    <ol class="space-y-5">
      <li v-for="item in items" :key="item.title">
        <UiInfoCard :title="item.title" orientation="horizontal" class="[&_h3]:text-left md:[&_h3]:pl-24">
          <UiText>{{ item.text }}<template v-if="item.emphasis">{{ ' ' }}<strong>{{ item.emphasis }}</strong><template v-if="item.textAfterEmphasis">{{ ' ' }}{{ item.textAfterEmphasis }}</template></template></UiText>
          <ul v-if="item.details?.length">
            <li v-for="detail in item.details" :key="detail"><UiText as="span">- {{ detail }}</UiText></li>
          </ul>
        </UiInfoCard>
      </li>
    </ol>
    <UiAction :to="action.to" post-icon="arrow-up" class="mt-6">{{ action.label }}</UiAction>
  </section>
</template>
