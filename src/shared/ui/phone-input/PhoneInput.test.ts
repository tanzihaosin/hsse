import { describe, expect, it, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { flushPromises } from '@vue/test-utils'
import PhoneInput from './PhoneInput.vue'

vi.mock('intl-tel-input', () => {
  throw new Error('Network error')
})

describe('PhoneInput', () => {
  it('принимает номер с кодом страны при ошибке загрузки выбора страны', async () => {
    const wrapper = await mountSuspended(PhoneInput)
    await flushPromises()

    expect(wrapper.text()).toContain('Не удалось загрузить выбор страны')
    const input = wrapper.get('input')
    await input.setValue('+7 999 123-45-67')
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['+7 999 123-45-67'])
    expect(wrapper.emitted('validity')?.at(-1)).toEqual(['valid'])
    await input.setValue('123')
    expect(wrapper.emitted('validity')?.at(-1)).toEqual(['invalid'])
  })

  it('сохраняет начальное значение и связывает переданный id с подписью', async () => {
    const wrapper = await mountSuspended(PhoneInput, {
      attrs: { id: 'contact-phone', 'aria-describedby': 'phone-help' },
      props: { modelValue: '+7 999 123-45-67' },
    })
    await flushPromises()

    expect((wrapper.get('input').element as HTMLInputElement).value).toBe('+7 999 123-45-67')
    expect(wrapper.get('label').attributes('for')).toBe('contact-phone')
    expect(wrapper.get('input').attributes('aria-describedby')).toBe('phone-help contact-phone-fallback')
    expect(wrapper.emitted('validity')?.at(-1)).toEqual(['valid'])
  })
})
