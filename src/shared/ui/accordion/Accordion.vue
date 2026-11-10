<script setup lang="ts">
import type { AccordionProps } from './Accordion.types'

const contentId = useId()

withDefaults(defineProps<AccordionProps>(), {
  variant: 'item',
  icon: 'arrow-down',
  iconSize: 'size-6',
  disabled: false,
})

const isOpen = defineModel<boolean>({ default: false })

function onToggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div :class="{ 'border-t border-stroke': variant === 'item' }">
    <button
      :aria-controls="contentId"
      type="button"
      class="flex w-full cursor-pointer items-start gap-4 py-4 text-left text-foreground transition-colors hover:text-foreground-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground disabled:cursor-not-allowed disabled:opacity-40 md:items-center"
      :class="variant === 'item' ? 'px-5 md:py-6' : ''"
      :aria-expanded="isOpen"
      :disabled="disabled"
      @click="onToggle"
    >
      <span class="flex min-w-0 flex-col gap-2 md:flex-row md:items-center md:gap-4" :class="{ 'flex-1': variant === 'item' }">
        <span v-if="number !== undefined" class="shrink-0 font-mono text-base md:w-16">{{ number }}</span>
        <span class="min-w-0">
          <span class="font-semibold uppercase" :class="variant === 'item' ? 'text-base md:text-lg' : 'text-lg'">{{ title }}</span>
          <span v-if="subtitle" class="mt-2 block text-base font-normal">{{ subtitle }}</span>
        </span>
      </span>

      <slot name="icon" :is-open="isOpen">
        <UiSvg
          :name="icon"
          :class="[
            'shrink-0 transition-transform duration-200 motion-reduce:transition-none',
            iconSize,
            isOpen && 'rotate-180',
          ]"
        />
      </slot>
    </button>

    <div
      :id="contentId"
      class="grid transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none"
      :class="isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
      :aria-hidden="!isOpen"
      :inert="!isOpen || undefined"
    >
      <div class="overflow-hidden">
        <div :class="variant === 'item' ? 'px-5 pb-4' : 'pb-4'">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
