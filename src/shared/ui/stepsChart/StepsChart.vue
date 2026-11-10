<script setup lang="ts">
import type { StepsChartProps } from './StepsChart.types'

withDefaults(defineProps<StepsChartProps>(), { maxHeight: 128 })
</script>

<template>
  <ol v-if="steps.length" class="grid" :style="{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }">
    <li v-for="(step, index) in steps" :key="step.label" class="row-span-2 grid min-w-0 grid-rows-subgrid">
      <div class="self-end">
        <UiText as="span" variant="custom" class="mb-1 block font-mono" :class="step.labelClass ?? 'text-xs text-foreground-muted md:text-sm'">{{ step.label }}</UiText>
        <div
        class="flex items-end justify-end rounded-ss-md bg-foreground text-primary md:items-center md:justify-center"
        :style="{ height: `${Math.max(0, Math.min(100, step.height)) * maxHeight / 100}px`, backgroundColor: `color-mix(in srgb, var(--color-foreground) ${40 + 60 * index / Math.max(steps.length - 1, 1)}%, transparent)` }"
      >
          <UiText v-if="step.content" as="span" variant="custom" class="max-md:pr-2 max-md:pb-2 text-xs max-md:text-right md:text-base">{{ step.content }}</UiText>
        </div>
      </div>
      <UiText v-if="step.bottomLabel" as="span" variant="custom" class="font-mono" :class="step.bottomLabelClass ?? 'text-sm text-foreground-muted'">{{ step.bottomLabel }}</UiText>
    </li>
  </ol>
</template>
