<script setup lang="ts">
import type { HeaderProgram } from '../model/TheHeader.types'

defineProps<{ entry: HeaderProgram, mobile?: boolean }>()
</script>

<template>
  <UiAction
    :to="entry.link"
    variant="custom"
    size="custom"
    class="flex-col items-start rounded-lg text-foreground"
    :class="mobile
      ? 'border border-stroke px-4 py-3'
      : 'gap-1 p-3 hover:bg-primary-lighter'"
  >
    <span class="text-[10px] tracking-wider text-foreground-muted uppercase" :class="{ 'mb-1': mobile }">{{ entry.overTitle }}</span>
    <span class="text-sm leading-snug">{{ entry.text }}</span>
  </UiAction>
</template>
