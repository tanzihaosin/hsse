<script setup lang="ts">
import { sanitizeHtml } from '~/shared/lib/sanitize-html'
import type { TextProps } from './Text.types'
import { TEXT_FONT_CLASSES, TEXT_SIZE_CLASSES } from './Text.constants'

const props = withDefaults(defineProps<TextProps>(), {
  as: 'p',
})

const sanitizedHtml = computed(() => sanitizeHtml(props.html))
const fontClass = computed(() => {
  if (props.font) return TEXT_FONT_CLASSES[props.font]
  return props.variant === 'mono' || props.variant === 'label' ? TEXT_FONT_CLASSES.mono : undefined
})
</script>

<template>
  <component :is="as" :class="[TEXT_SIZE_CLASSES[variant || 'default'], fontClass]">
    <span v-if="html" v-html="sanitizedHtml" />
    <slot v-else />
  </component>
</template>
