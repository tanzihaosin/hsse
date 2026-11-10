<script setup lang="ts">
import type { HeroBlockProgram } from '../model/HeroBlock.types'
import { typograf } from '~/shared/lib/typograf'

defineProps<HeroBlockProgram>()

const defaultLinkText = typograf('Подробнее')
</script>

<template>
  <li class="flex flex-col">
    <UiBadge class="mb-4">{{ badge }}</UiBadge>
    <div class="flex flex-col items-stretch justify-between gap-6 border-y-2 border-stroke py-2 text-foreground sm:flex-row sm:items-center">
      <UiHeading as="h2" variant="h3" uppercase class="sm:max-w-80">
        {{ title }}
      </UiHeading>
      <UiAction
        :to="link.to"
        variant="primary"
        size="custom"
        post-icon="arrow-up"
        class="shrink-0 border-2 p-3 text-base font-normal sm:w-fit"
      >
        {{ link.text ?? defaultLinkText }}
      </UiAction>
    </div>
  </li>
</template>
