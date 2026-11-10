import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Input from './Input.vue'

describe('Input', () => {
  it('связывает подпись и подсказку с полем и сообщает об изменениях', async () => {
    const wrapper = await mountSuspended(Input, { attrs: { id: 'email', 'aria-describedby': 'external-help' }, props: { label: 'Почта', hint: 'Рабочий адрес', type: 'email' } })
    const input = wrapper.get('input')
    expect(wrapper.get('label').attributes('for')).toBe('email')
    expect(input.attributes('aria-describedby')).toBe('external-help email-hint')
    await input.setValue('anna@example.com')
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['anna@example.com'])
    await wrapper.setProps({ error: 'Введите адрес' })
    expect(input.attributes('aria-invalid')).toBe('true')
    expect(input.attributes('aria-describedby')).toBe('external-help email-error')
    expect(wrapper.get('#email-error').text()).toBe('Введите адрес')
  })
})
