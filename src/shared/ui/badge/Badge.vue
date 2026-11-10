<script setup lang="ts">
import type { BadgeProps } from './Badge.types'
import { BADGE_VARIANT_CLASSES } from './Badge.constants'

withDefaults(defineProps<BadgeProps>(), {
  variant: 'category',
  as: 'span',
})
</script>

<template>
  <component
    :is="as"
    :class="['inline-flex items-center justify-center text-center', BADGE_VARIANT_CLASSES[variant]]"
  >
    <slot />
  </component>
</template>
