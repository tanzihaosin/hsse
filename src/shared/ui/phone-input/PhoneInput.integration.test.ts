import { describe, expect, it, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { flushPromises } from '@vue/test-utils'
import PhoneInput from './PhoneInput.vue'

const controls = vi.hoisted(() => ({ setDisabled: vi.fn(), destroy: vi.fn() }))

vi.mock('intl-tel-input', () => ({
  default: (input: HTMLInputElement) => ({
    promise: Promise.resolve(),
    setDisabled: controls.setDisabled,
    destroy: controls.destroy,
    setNumber: (value: string) => { input.value = value },
    getNumber: () => input.value.replace(/\s/g, ''),
    isValidNumber: () => input.value.replace(/\s/g, '').length >= 12,
  }),
}))

describe('PhoneInput: подключённая библиотека', () => {
  it('проверяет номер, синхронизирует состояние и освобождает ресурс', async () => {
    controls.setDisabled.mockClear()
    controls.destroy.mockClear()
    const wrapper = await mountSuspended(PhoneInput, { props: { modelValue: '+79991234567', disabled: true } })
    await flushPromises()
    expect(controls.setDisabled).toHaveBeenCalledWith(true)
    expect(wrapper.emitted('validity')?.at(-1)).toEqual(['valid'])
    await wrapper.setProps({ disabled: false, modelValue: '123' })
    await flushPromises()
    expect(controls.setDisabled).toHaveBeenLastCalledWith(false)
    expect(wrapper.emitted('validity')?.at(-1)).toEqual(['invalid'])
    wrapper.unmount()
    expect(controls.destroy).toHaveBeenCalledOnce()
  })
})
