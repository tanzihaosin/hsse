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
        class="mt-0.5 size-5 shrink-0 cursor-pointer appearance-none rounded border bg-transparent checked:border-primary checked:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50"
      >
      <label :for="id()" class="cursor-pointer text-sm font-light"><slot /></label>
    </div>
    <p v-if="error && errorMessage" :id="`${id()}-error`" class="text-error mt-1 text-xs">{{ errorMessage }}</p>
  </div>
</template>

<style scoped>
input:checked {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='m4 10 4 4 8-8' fill='none' stroke='%23f1e9e0' stroke-width='2'/%3E%3C/svg%3E");
}
</style>
