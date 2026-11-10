import type { Ref } from 'vue'
import type { Iti } from 'intl-tel-input'
import type { PhoneValidity } from '~/shared/lib/phone-validity'

export function usePhoneInput(model: Ref<string>, disabled: () => boolean, emitValidity: (state: PhoneValidity) => void) {
  const input = ref<HTMLInputElement | null>(null)
  const fallback = ref(false)
  const loading = ref(true)
  let instance: Iti | undefined
  let utilsReady = false
  let disposed = false

  function updateValue() {
    if (!input.value) return
    if (utilsReady && instance?.getSelectedCountry()?.iso2 === 'ru') {
      const field = input.value
      const cursor = field.selectionStart ?? field.value.length
      const cursorDigits = field.value.slice(0, cursor).replace(/\D/g, '').length
      const rawDigits = field.value.replace(/\D/g, '')
      const digits = (field.value.trimStart().startsWith('+7') ? rawDigits.slice(1) : rawDigits).slice(0, 10)
      const format = (value: string) => {
        if (!value) return ''
        let result = `(${value.slice(0, 3)}`
        if (value.length >= 3) result += ')'
        if (value.length > 3) result += ` ${value.slice(3, 6)}`
        if (value.length > 6) result += `-${value.slice(6, 8)}`
        if (value.length > 8) result += `-${value.slice(8, 10)}`
        return result
      }
      const formatted = format(digits)
      if (field.value !== formatted) {
        const wasAtEnd = cursor === field.value.length
        field.value = formatted
        if (document.activeElement === field) {
          const position = wasAtEnd ? formatted.length : format(digits.slice(0, cursorDigits)).length
          field.setSelectionRange(position, position)
        }
      }
    }
    const value = input.value.value.trim()
    if (fallback.value) {
      model.value = value
      emitValidity(!value ? 'empty' : /^\+[1-9]\d{6,14}$/.test(value.replace(/[\s()-]/g, '')) ? 'valid' : 'invalid')
      return
    }
    if (!instance || !utilsReady) {
      model.value = value
      emitValidity(value ? 'loading' : 'empty')
      return
    }
    emitValidity(!value ? 'empty' : instance.isValidNumber() ? 'valid' : 'invalid')
    model.value = value ? instance.getNumber() || value : ''
  }

  onMounted(async () => {
    if (input.value) input.value.value = model.value
    emitValidity(model.value.trim() ? 'loading' : 'empty')
    try {
      const [{ default: intlTelInput }, { ru }] = await Promise.all([
        import('intl-tel-input'),
        import('intl-tel-input/locale'),
      ])
      if (disposed || !input.value) return
      instance = intlTelInput(input.value, {
        initialCountry: 'ru',
        countryNameLocale: 'ru',
        countrySearch: false,
        uiTranslations: ru,
        separateDialCode: true,
        allowedNumberTypes: null,
        formatAsYouType: true,
        strictMode: true,
        placeholderNumberPolicy: 'OFF',
        loadUtils: () => import('intl-tel-input/utils'),
      })
      instance.setDisabled(disabled())
      if (model.value) instance.setNumber(model.value)
      input.value.addEventListener('input', updateValue)
      input.value.addEventListener('countrychange', updateValue)
      await instance.promise
      if (disposed) return
      utilsReady = true
      loading.value = false
      updateValue()
    } catch {
      if (disposed || !input.value) return
      const value = input.value.value.trim()
      const dialCode = instance?.getSelectedCountry()?.dialCode
      input.value.removeEventListener('countrychange', updateValue)
      input.value.removeEventListener('input', updateValue)
      instance?.destroy()
      instance = undefined
      fallback.value = true
      loading.value = false
      input.value.addEventListener('input', updateValue)
      input.value.value = value && dialCode && !value.startsWith('+') ? `+${dialCode} ${value}` : value
      updateValue()
    }
  })

  watch(model, value => {
    if (fallback.value && input.value && value !== input.value.value) {
      input.value.value = value
      updateValue()
    } else if (input.value && !utilsReady && value !== input.value.value) {
      if (instance) instance.setNumber(value)
      else input.value.value = value
      updateValue()
    } else if (input.value && instance && utilsReady && value !== instance.getNumber() && value !== input.value.value) {
      instance.setNumber(value)
      updateValue()
    }
  })
  watch(disabled, value => instance?.setDisabled(value))
  onBeforeUnmount(() => {
    disposed = true
    input.value?.removeEventListener('countrychange', updateValue)
    input.value?.removeEventListener('input', updateValue)
    instance?.destroy()
  })

  return { input, fallback, loading, updateValue }
}
