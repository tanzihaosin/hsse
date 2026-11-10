<script setup lang="ts">
import type { PhoneValidity } from '~/shared/lib/phone-validity'
import { describedBy } from '~/shared/lib/form-field'
import { usePhoneInput } from './usePhoneInput'
import 'intl-tel-input/styles'

defineOptions({ inheritAttrs: false })
const props = withDefaults(defineProps<{
  label?: string
  name?: string
  error?: boolean
  errorMessage?: string
  disabled?: boolean
}>(), { label: 'Телефон', name: 'phone', errorMessage: '', disabled: false })
const model = defineModel<string>({ default: '' })
const emit = defineEmits<{ validity: [state: PhoneValidity] }>()
const { input, fallback, loading, updateValue } = usePhoneInput(model, () => props.disabled, state => emit('validity', state))
const generatedId = useId()
const attrs = useAttrs()
const id = () => typeof attrs.id === 'string' ? attrs.id : generatedId
</script>

<template>
  <div :class="$attrs.class">
    <label :for="id()" class="mb-1 block text-sm font-light" :class="error && 'text-error'">{{ label }}</label>
    <input
      :id="id()"
      ref="input"
      v-bind="Object.fromEntries(Object.entries($attrs).filter(([key]) => key !== 'class'))"
      :name="name"
      :disabled="disabled"
      :readonly="loading"
      :aria-busy="loading || undefined"
      :aria-invalid="error || undefined"
      :aria-describedby="describedBy(attrs['aria-describedby'], error && errorMessage ? `${id()}-error` : undefined, fallback ? `${id()}-fallback` : undefined)"
      type="tel"
      autocomplete="tel"
      :class="['h-14 w-full rounded-[9px] border bg-transparent px-5 py-4 text-base font-light text-primary outline-none transition-colors focus:border-primary disabled:cursor-not-allowed disabled:opacity-50', error ? 'border-error focus:border-error' : 'border-foreground-muted']"
      @input="updateValue"
    >
    <p v-if="error && errorMessage" :id="`${id()}-error`" class="text-error mt-1 text-xs">{{ errorMessage }}</p>
    <p v-if="fallback" :id="`${id()}-fallback`" role="status" class="mt-1 text-xs">Не удалось загрузить выбор страны и полную проверку номера. Введите номер с кодом страны, например +7.</p>
  </div>
</template>

<style scoped>
:deep(.iti) { width: 100%; --iti-border-color: var(--color-foreground-muted); --iti-dropdown-bg: var(--color-foreground); --iti-hover-color: rgb(22 25 37 / 8%); --iti-dialcode-color: var(--color-primary); }
:deep(.iti__country-selector) { color: var(--color-primary); }
:deep(.iti__search-input) { color: var(--color-primary); background: var(--color-foreground); }
:deep(.iti__selected-country:focus-visible) { outline: 2px solid var(--color-primary); outline-offset: -3px; }
</style>
