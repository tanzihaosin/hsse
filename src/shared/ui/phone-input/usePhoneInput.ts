import type { Ref } from 'vue'
import type { Iti } from 'intl-tel-input'
import type { InputMask, MaskedPattern } from 'imask'
import type { PhoneValidity } from '~/shared/lib/phone-validity'
import { phoneMasks } from './phoneMasks'

export function usePhoneInput(model: Ref<string>, disabled: () => boolean, emitValidity: (state: PhoneValidity) => void) {
  const input = ref<HTMLInputElement | null>(null)
  const fallback = ref(false)
  const loading = ref(true)
  let instance: Iti | undefined
  let mask: InputMask<MaskedPattern> | undefined
  let disposed = false

  function updateValue() {
    if (!input.value) return
    if (fallback.value) {
      const value = input.value.value.trim()
      model.value = value
      emitValidity(!value ? 'empty' : /^\+[1-9]\d{6,14}$/.test(value.replace(/[\s()-]/g, '')) ? 'valid' : 'invalid')
      return
    }
    if (!instance || !mask) return
    const digits = mask.unmaskedValue
    const dialCode = instance.getSelectedCountry()?.dialCode || ''
    const counts = new Map<string, number>()
    for (const digit of `${dialCode}${digits}`) counts.set(digit, (counts.get(digit) || 0) + 1)
    emitValidity(!digits ? 'empty' : mask.masked.isComplete && ![...counts.values()].some(count => count > 6) ? 'valid' : 'invalid')
    model.value = digits ? `+${dialCode}${digits}` : ''
  }

  function changeCountry() {
    if (!instance || !mask) return
    const country = instance.getSelectedCountry()
    mask.updateOptions({ mask: phoneMasks[country?.iso2 || ''] || '#'.repeat(15 - (country?.dialCode?.length || 0)) })
    mask.value = ''
    updateValue()
  }

  function pasteNumber(event: ClipboardEvent) {
    const value = event.clipboardData?.getData('text').trim()
    if (!value?.startsWith('+') || !instance || !mask) return
    const digits = value.replace(/\D/g, '')
    if (!digits) return
    event.preventDefault()
    instance.setNumber(value)
    const country = instance.getSelectedCountry()
    const dialCode = country?.dialCode || ''
    mask.updateOptions({ mask: phoneMasks[country?.iso2 || ''] || '#'.repeat(15 - dialCode.length) })
    mask.unmaskedValue = digits.startsWith(dialCode) ? digits.slice(dialCode.length) : digits
    updateValue()
  }

  onMounted(async () => {
    if (input.value) input.value.value = model.value
    emitValidity(model.value.trim() ? 'loading' : 'empty')
    try {
      const [{ default: intlTelInput }, { ru }, { default: IMask }] = await Promise.all([
        import('intl-tel-input'),
        import('intl-tel-input/locale'),
        import('imask'),
      ])
      if (disposed || !input.value) return
      instance = intlTelInput(input.value, {
        initialCountry: 'ru',
        countryNameLocale: 'ru',
        countrySearch: false,
        uiTranslations: ru,
        separateDialCode: true,
        formatAsYouType: false,
        strictMode: false,
        placeholderNumberPolicy: 'OFF',
        loadUtils: () => import('intl-tel-input/utils'),
      })
      instance.setDisabled(disabled())
      if (model.value) instance.setNumber(model.value)
      await instance.promise
      if (disposed || !input.value) return
      const country = instance.getSelectedCountry()
      const initialValue = input.value.value
      mask = IMask(input.value, {
        mask: phoneMasks[country?.iso2 || ''] || '#'.repeat(15 - (country?.dialCode?.length || 0)),
        lazy: false,
        definitions: { '#': /\d/ },
      })
      if (model.value) mask.value = initialValue
      mask.on('accept', updateValue)
      input.value.addEventListener('countrychange', changeCountry)
      input.value.addEventListener('paste', pasteNumber)
      loading.value = false
      updateValue()
    } catch {
      if (disposed || !input.value) return
      const value = input.value.value.trim()
      const dialCode = instance?.getSelectedCountry()?.dialCode
      input.value.removeEventListener('countrychange', changeCountry)
      input.value.removeEventListener('paste', pasteNumber)
      mask?.destroy()
      instance?.destroy()
      instance = undefined
      mask = undefined
      fallback.value = true
      loading.value = false
      input.value.value = value && dialCode && !value.startsWith('+') ? `+${dialCode} ${value}` : value
      input.value.addEventListener('input', updateValue)
      updateValue()
    }
  })

  watch(model, value => {
    if (!input.value) return
    if (fallback.value) {
      if (value !== input.value.value) input.value.value = value
      updateValue()
    } else if (instance && mask && value !== (mask.unmaskedValue ? `+${instance.getSelectedCountry()?.dialCode || ''}${mask.unmaskedValue}` : '')) {
      instance.setNumber(value)
      const country = instance.getSelectedCountry()
      mask.updateOptions({ mask: phoneMasks[country?.iso2 || ''] || '#'.repeat(15 - (country?.dialCode?.length || 0)) })
      mask.value = input.value.value
      updateValue()
    }
  })
  watch(disabled, value => instance?.setDisabled(value))
  onBeforeUnmount(() => {
    disposed = true
    input.value?.removeEventListener('countrychange', changeCountry)
    input.value?.removeEventListener('paste', pasteNumber)
    input.value?.removeEventListener('input', updateValue)
    mask?.destroy()
    instance?.destroy()
  })

  return { input, fallback, loading }
}
