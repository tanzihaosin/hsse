<script setup lang="ts">
import type { PartnerIntroProps } from '../model/PartnerIntro.types'

defineProps<PartnerIntroProps>()
</script>

<template>
  <section class="container mt-12 flex flex-col gap-10 min-[900px]:flex-row" aria-label="Партнёр специализации">
    <UiAction to="https://ptsecurity.com/" aria-label="Positive Technologies" variant="custom" size="custom" class="mt-1 w-72.5 max-w-full shrink-0 self-start">
      <UiSvg name="positive-technologies" :decorative="false" aria-label="Positive Technologies" class="h-auto w-full" />
    </UiAction>
    <div class="max-w-190">
      <UiText class="mb-3 font-bold">{{ introduction }}</UiText>
      <UiText class="leading-relaxed!">
        {{ about }}<br>
        Эксперты <u>{{ experts }}</u><br>
        {{ practice }}<br>
        <u>{{ conclusion }}</u>
      </UiText>
    </div>
  </section>
</template>
