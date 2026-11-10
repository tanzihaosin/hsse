<script setup lang="ts">
import type { SalaryRankingProps } from '../model/SalaryRanking.types'

defineProps<SalaryRankingProps>()
</script>

<template>
  <section class="container">
    <div class="overflow-hidden rounded-lg border-2 border-dashed border-primary bg-foreground text-primary md:flex md:min-h-85 md:items-center">
      <div class="px-5 pt-6 md:w-[45%] md:py-6">
        <UiHeading as="h2" variant="h3" class="font-semibold tracking-[2px] uppercase">
          {{ titleBeforeLink }} <UiAction :to="link" variant="custom" size="custom" class="inline underline">{{ linkLabel }}</UiAction> {{ titleAfterLink }}
        </UiHeading>
        <UiText class="mt-3">{{ descriptionBeforeLink }} <UiAction :to="link" variant="custom" size="custom" class="inline underline">{{ linkLabel }}</UiAction>.</UiText>
      </div>
      <NuxtPicture :src="image" :alt="imageAlt" class="mt-6 block w-full self-end md:mt-0 md:w-[55%]" :img-attrs="{ class: 'h-auto w-full object-contain object-bottom' }" />
    </div>
  </section>
</template>
