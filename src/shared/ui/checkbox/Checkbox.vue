<script setup lang="ts">
import { describedBy } from '~/shared/lib/form-field'
defineOptions({ inheritAttrs: false })
withDefaults(defineProps<{ name?: string, error?: boolean, errorMessage?: string, disabled?: boolean }>(), { name: '', errorMessage: '', disabled: false })
const model = defineModel<boolean>({ default: false })
const generatedId = useId()
const attrs = useAttrs()
const id = () => typeof attrs.id === 'string' ? attrs.id : generatedId
</script>

<template>
  <div :class="$attrs.class">
    <div class="flex items-start gap-3">
      <span class="relative mt-0.5 size-5 shrink-0">
        <input
          :id="id()"
          v-model="model"
          v-bind="Object.fromEntries(Object.entries($attrs).filter(([key]) => key !== 'class'))"
          :name="name"
          :disabled="disabled"
          :aria-invalid="error || undefined"
          :aria-describedby="describedBy(attrs['aria-describedby'], error && errorMessage ? `${id()}-error` : undefined)"
          :class="error ? 'border-error' : 'border-foreground-muted'"
          type="checkbox"
          class="peer size-5 cursor-pointer appearance-none rounded border bg-transparent checked:border-primary checked:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50"
        >
        <UiSvg name="check" class="pointer-events-none absolute inset-0 size-5 text-foreground opacity-0 peer-checked:opacity-100 peer-checked:peer-disabled:opacity-50" />
      </span>
      <label :for="id()" class="cursor-pointer text-[13px] leading-5 font-light"><slot /></label>
    </div>
    <p v-if="error && errorMessage" :id="`${id()}-error`" class="text-error mt-1 text-xs">{{ errorMessage }}</p>
  </div>
</template>

