<script setup lang="ts">
import type { FaqGroup } from '../model/FaqBlock.types'

defineProps<{ group: FaqGroup }>()
</script>

<template>
  <UiAccordion :title="group.title" variant="group" class="border-b border-stroke">
    <UiAccordion
      v-for="(item, index) in group.questions"
      :key="item.question"
      :title="item.question"
      :number="String(index + 1).padStart(2, '0')"
    >
      <div class="space-y-3">
        <UiText v-for="(answer, answerIndex) in item.answers" :key="answerIndex" :html="answer" />
      </div>
    </UiAccordion>
  </UiAccordion>
</template>
