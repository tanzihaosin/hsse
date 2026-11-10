<script setup lang="ts">
import { sanitizeHtml } from '~/shared/lib/sanitize-html'
import type { TextProps } from './Text.types'
import { TEXT_SIZE_CLASSES } from './Text.constants'

const props = withDefaults(defineProps<TextProps>(), {
  as: 'p',
})

const sanitizedHtml = computed(() => sanitizeHtml(props.html))
</script>

<template>
  <component :is="as" :class="[TEXT_SIZE_CLASSES[variant || 'default']]">
    <span v-if="html" v-html="sanitizedHtml" />
    <slot v-else />
  </component>
</template>
