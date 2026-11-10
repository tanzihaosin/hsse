import { describe, expect, it, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { flushPromises } from '@vue/test-utils'
import PhoneInput from './PhoneInput.vue'

const controls = vi.hoisted(() => ({ setDisabled: vi.fn(), destroy: vi.fn(), country: 'us' }))

vi.mock('intl-tel-input', () => ({
  default: (input: HTMLInputElement) => {
    input.addEventListener('input', () => { input.value = input.value.replace(/[()]/g, '') })
    return {
    promise: Promise.resolve(),
    setDisabled: controls.setDisabled,
    destroy: controls.destroy,
    setNumber: (value: string) => { input.value = value },
    getNumber: () => input.value.replace(/\s/g, ''),
    getSelectedCountry: () => ({ iso2: controls.country }),
    isValidNumber: () => input.value.replace(/\s/g, '').length >= 12,
    }
  },
}))

describe('PhoneInput: подключённая библиотека', () => {
  it('проверяет номер, синхронизирует состояние и освобождает ресурс', async () => {
    controls.country = 'us'
    controls.setDisabled.mockClear()
    controls.destroy.mockClear()
    const wrapper = await mountSuspended(PhoneInput, { props: { modelValue: '+79991234567', disabled: true } })
    await vi.waitFor(() => expect(controls.setDisabled).toHaveBeenCalledWith(true))
    await flushPromises()
    expect(wrapper.emitted('validity')?.at(-1)).toEqual(['valid'])
    await wrapper.setProps({ disabled: false, modelValue: '123' })
    await flushPromises()
    expect(controls.setDisabled).toHaveBeenLastCalledWith(false)
    expect(wrapper.emitted('validity')?.at(-1)).toEqual(['invalid'])
    wrapper.unmount()
    expect(controls.destroy).toHaveBeenCalledOnce()
  })

  it('форматирует и ограничивает российский номер, включая вставленный код страны', async () => {
    controls.country = 'ru'
    controls.setDisabled.mockClear()
    const wrapper = await mountSuspended(PhoneInput)
    await vi.waitFor(() => expect(controls.setDisabled).toHaveBeenCalled())
    await flushPromises()
    const input = wrapper.get('input')
    await input.setValue('+7 977 452 52 54123')
    expect((input.element as HTMLInputElement).value).toBe('(977) 452-52-54')
    wrapper.unmount()
  })
})
