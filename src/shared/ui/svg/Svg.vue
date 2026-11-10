<script setup lang="ts">
import { svgIcons } from './Svg.icons'
import type { SvgProps } from './Svg.types'

const props = withDefaults(defineProps<SvgProps>(), {
  decorative: true,
})

const attrs = useAttrs()

const icon = computed(() => {
  const found = svgIcons[props.name]
  if (!found) console.warn(`[UiSvg] SVG not found: ${props.name}`)
  return found ?? null
})

if (import.meta.dev) {
  watchEffect(() => {
    if (!props.decorative && !attrs['aria-label'] && !attrs['aria-labelledby']) {
      console.warn(
        `[UiSvg] иконка "${props.name}" не декоративна (decorative=false), значит она несёт смысл — добавьте aria-label или aria-labelledby, иначе она будет недоступна для скринридеров`,
      )
    }
  })
}
</script>

<template>
  <component
    :is="icon"
    :role="decorative ? undefined : 'img'"
    :aria-hidden="decorative || undefined"
  />
</template>
