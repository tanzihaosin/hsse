<script setup lang="ts">
import type { ProgramHeroDirection } from '../model/ProgramHero.types'

defineProps<ProgramHeroDirection>()

const isOpen = ref(false)
const contentId = useId()
</script>

<template>
  <li>
    <UiAction v-if="description" variant="custom" size="custom" class="w-full items-start justify-start gap-3 text-left text-foreground-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground" :aria-expanded="isOpen" :aria-controls="contentId" @click="isOpen = !isOpen">
      <UiSvg name="arrow-up" class="mt-0.5 size-5 shrink-0 transition-transform motion-reduce:transition-none" :class="{ '-rotate-90': isOpen }" />
      <span>{{ title }}</span>
    </UiAction>
    <div v-else class="flex items-start gap-3 text-foreground-muted">
      <UiSvg name="arrow-up" class="mt-0.5 size-5 shrink-0" />
      <span>{{ title }}</span>
    </div>
    <div v-if="description" :id="contentId" class="grid transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none" :class="isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'" :aria-hidden="!isOpen" :inert="!isOpen || undefined">
      <div class="overflow-hidden">
        <UiText class="pt-3 pl-8">{{ description }}</UiText>
      </div>
    </div>
  </li>
</template>
