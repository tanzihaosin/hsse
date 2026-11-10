<script setup lang="ts">
import type { ActionProps } from './Action.types'
import {
  ACTION_BASE_CLASSES,
  ACTION_VARIANT_CLASSES,
  ACTION_SIZE_CLASSES,
} from './Action.constants'

const props = withDefaults(defineProps<ActionProps>(), {
  variant: 'primary',
  size: 'lg',
  type: 'button',
  iconClass: 'size-5 shrink-0',
  disabled: false,
  external: null,
})

const NuxtLink = resolveComponent('NuxtLink')

const isLink = computed(() => !!props.to && !props.disabled)
const tag = computed(() => (isLink.value ? NuxtLink : 'button'))

const isExternal = computed(() => {
  if (typeof props.external === 'boolean') return props.external
  return typeof props.to === 'string' && /^([a-z][a-z0-9+.-]*:|\/\/)/i.test(props.to)
})

const target = computed(() => props.target ?? (isExternal.value ? '_blank' : '_self'))

const rel = computed(() => {
  if (props.rel !== undefined) return props.rel
  return target.value === '_blank' ? 'noopener noreferrer' : undefined
})

const bindings = computed(() =>
  isLink.value
    ? {
        to: props.to,
        external: isExternal.value,
        target: target.value,
        rel: rel.value,
        activeClass: props.activeClass,
        exactActiveClass: props.exactActiveClass,
      }
    : { type: props.type, disabled: props.disabled },
)

if (import.meta.dev) {
  watchEffect(() => {
    if (props.icon && !props.ariaLabel) {
      console.warn('[UiAction]: `ariaLabel` должен быть задан, если используется только иконка.')
    }
  })
}
</script>

<template>
  <component
    :is="tag"
    v-bind="bindings"
    :aria-label="ariaLabel"
    :class="[
      ACTION_BASE_CLASSES,
      ACTION_SIZE_CLASSES[size],
      ACTION_VARIANT_CLASSES[disabled ? 'disabled' : variant],
      disabled && 'pointer-events-none',
    ]"
  >
    <UiSvg v-if="icon" :name="icon" :class="iconClass" />
    <template v-else>
      <UiSvg v-if="preIcon" :name="preIcon" :class="iconClass" />
      <slot />
      <UiSvg v-if="postIcon" :name="postIcon" :class="iconClass" />
    </template>
  </component>
</template>
