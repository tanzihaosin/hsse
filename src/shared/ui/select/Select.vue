<script setup lang="ts">
import { describedBy } from '~/shared/lib/form-field'
defineOptions({ inheritAttrs: false })
withDefaults(defineProps<{
  label?: string
  options: { value: string | number, label: string }[]
  placeholder?: string
  name?: string
  error?: string
  disabled?: boolean
}>(), { label: '', placeholder: '', name: '', error: '', disabled: false })
const model = defineModel<string | number>()
const generatedId = useId()
const attrs = useAttrs()
const id = () => typeof attrs.id === 'string' ? attrs.id : generatedId
</script>

<template>
  <div :class="$attrs.class">
    <label v-if="label" :for="id()" class="mb-1 block text-sm font-light">{{ label }}</label>
    <div class="relative">
      <select
        :id="id()"
        v-model="model"
        v-bind="Object.fromEntries(Object.entries($attrs).filter(([key]) => key !== 'class'))"
        :name="name"
        :disabled="disabled"
        :aria-invalid="!!error || undefined"
        :aria-describedby="describedBy(attrs['aria-describedby'], error ? `${id()}-error` : undefined)"
        :class="['h-14 w-full appearance-none rounded-[9px] border bg-transparent px-5 pr-12 text-base font-light text-primary outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-50', error ? 'border-error focus:border-error' : 'border-foreground-muted']"
      >
        <option v-if="placeholder" disabled value="">{{ placeholder }}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
      </select>
      <UiSvg name="arrow-down" class="pointer-events-none absolute top-1/2 right-5 size-4 -translate-y-1/2 text-primary" />
    </div>
    <p v-if="error" :id="`${id()}-error`" class="text-error mt-1 text-xs">{{ error }}</p>
  </div>
</template>
