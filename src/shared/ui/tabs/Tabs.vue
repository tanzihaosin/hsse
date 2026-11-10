<script setup lang="ts">
import type { TabsProps } from './Tabs.types'
import { TABS_ITEM_BASE_CLASSES, TABS_CLASSES } from './Tabs.constants'

const props = withDefaults(defineProps<TabsProps>(), {
  variant: 'filled',
  tone: 'primary',
})

const model = defineModel<string>()

const classes = computed(
  () => TABS_CLASSES[props.variant === 'underline' ? 'underline' : props.tone],
)

const select = (value: string) => {
  model.value = value
}

if (import.meta.dev) {
  watchEffect(() => {
    if (model.value !== undefined && !props.items.some((item) => item.value === model.value)) {
      console.warn(`[UiTabs]: значение "${model.value}" не найдено среди items.`)
    }
  })
}
</script>

<template>
  <div :class="classes.list">
    <button
      v-for="item in items"
      :key="item.value"
      type="button"
      :class="[
        TABS_ITEM_BASE_CLASSES,
        classes.item,
        item.value === model ? classes.active : classes.inactive,
      ]"
      :disabled="item.disabled"
      :aria-pressed="item.value === model"
      @click="select(item.value)"
    >
      {{ item.label }}
    </button>
  </div>
</template>
