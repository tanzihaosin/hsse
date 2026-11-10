<script setup lang="ts">
import type { InfoCardProps } from './InfoCard.types'

withDefaults(defineProps<InfoCardProps>(), {
  orientation: 'vertical',
  collapsible: false,
})

const expanded = defineModel<boolean>('expanded', { default: false })
const contentId = useId()
</script>

<template>
  <article
    class="relative grid h-full gap-5 rounded-lg border-2 border-dashed border-primary bg-foreground px-4 py-5 text-primary"
    :class="orientation === 'horizontal'
      ? [number !== undefined ? 'md:grid-cols-[64px_minmax(0,1fr)_minmax(0,2fr)] md:px-5 md:py-8' : 'md:grid-cols-[2fr_3fr]']
      : 'grid-rows-[auto_1fr]'"
  >
    <UiText v-if="number !== undefined" as="span" variant="mono">{{ number }}</UiText>
    <UiHeading as="h3" variant="h3" uppercase :class="number !== undefined ? 'font-medium' : 'text-center font-semibold tracking-[2px]'">{{ title }}</UiHeading>
    <div :class="{ 'pr-10 pb-4': collapsible }">
      <slot :expanded="expanded" />
      <div
        v-if="collapsible"
        :id="contentId"
        class="grid transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none"
        :class="expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
        :aria-hidden="!expanded"
        :inert="!expanded || undefined"
      >
        <div class="overflow-hidden"><slot name="details" /></div>
      </div>
    </div>
    <UiAction
      v-if="collapsible"
      variant="custom"
      size="custom"
      :aria-label="`${expanded ? 'Свернуть' : 'Подробнее'}: ${title}`"
      :aria-expanded="expanded"
      :aria-controls="contentId"
      class="absolute right-4 bottom-4 size-8 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2"
      @click="expanded = !expanded"
    >
      <UiSvg name="arrow-up" class="size-6 transition-transform motion-reduce:transition-none" :class="expanded ? '-rotate-90' : 'rotate-90'" />
    </UiAction>
  </article>
</template>
