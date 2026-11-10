<script setup lang="ts">
import { describedBy } from '~/shared/lib/form-field'
import type { TextareaProps } from './Textarea.types'

defineOptions({ inheritAttrs: false })
withDefaults(defineProps<TextareaProps>(), { disabled: false })
const model = defineModel<string>()
const generatedId = useId()
const attrs = useAttrs()
const inputId = () => typeof attrs.id === 'string' ? attrs.id : generatedId
</script>

<template>
  <div>
    <label v-if="label" :for="inputId()" class="mb-1 block text-sm font-light" :class="error && 'text-error'">{{ label }}</label>
    <textarea
      :id="inputId()"
      v-model="model"
      v-bind="$attrs"
      :placeholder="placeholder"
      :disabled="disabled"
      :aria-invalid="error ? 'true' : undefined"
      :aria-describedby="describedBy(attrs['aria-describedby'], error ? `${inputId()}-error` : hint ? `${inputId()}-hint` : undefined)"
      :class="['min-h-25 w-full resize-y rounded-[9px] border bg-transparent px-5 py-4 text-base font-light text-primary placeholder:text-primary/70 outline-none transition-colors focus:border-primary disabled:cursor-not-allowed disabled:opacity-50', error ? 'border-error focus:border-error' : 'border-foreground-muted']"
    />
    <p v-if="error" :id="`${inputId()}-error`" class="text-error mt-1 text-xs">{{ error }}</p>
    <p v-else-if="hint" :id="`${inputId()}-hint`" class="mt-1 text-xs">{{ hint }}</p>
  </div>
</template>
