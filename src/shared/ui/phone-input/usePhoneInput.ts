import type { Ref } from 'vue'
import type { Iti } from 'intl-tel-input'
import type { PhoneValidity } from '~/shared/lib/phone-validity'

export function usePhoneInput(model: Ref<string>, disabled: () => boolean, emitValidity: (state: PhoneValidity) => void) {
  const input = ref<HTMLInputElement | null>(null)
  const fallback = ref(false)
  let instance: Iti | undefined
  let utilsReady = false
  let disposed = false

  function updateValue() {
    if (!input.value) return
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
      input.value.addEventListener('countrychange', updateValue)
      await instance.promise
      if (disposed) return
      utilsReady = true
      updateValue()
    } catch {
      if (disposed || !input.value) return
      const value = input.value.value.trim()
      const dialCode = instance?.getSelectedCountry()?.dialCode
      input.value.removeEventListener('countrychange', updateValue)
      instance?.destroy()
      instance = undefined
      fallback.value = true
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
    instance?.destroy()
  })

  return { input, fallback, updateValue }
}
