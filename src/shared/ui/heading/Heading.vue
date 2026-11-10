<script setup lang="ts">
import { sanitizeHtml } from '~/shared/lib/sanitize-html'
import type { HeadingProps } from './Heading.types'
import { HEADING_CLASSES } from './Heading.constants'

const props = withDefaults(defineProps<HeadingProps>(), {
  as: 'h2',
  uppercase: false,
})

const sanitizedHtml = computed(() => sanitizeHtml(props.html))
</script>

<template>
  <component
    :is="as"
    :class="[HEADING_CLASSES[variant ?? as], { uppercase: props.uppercase }]"
  >
    <span v-if="html" v-html="sanitizedHtml" />
    <slot v-else />
  </component>
</template>
