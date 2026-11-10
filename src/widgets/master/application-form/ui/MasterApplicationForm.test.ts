import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import PhoneInput from '~/shared/ui/phone-input/PhoneInput.vue'
import MasterApplicationForm from './MasterApplicationForm.vue'

describe('MasterApplicationForm', () => {
  it('показывает ошибки при выходе из поля и отправке пустой формы', async () => {
    const wrapper = await mountSuspended(MasterApplicationForm)
    const submit = wrapper.get('button[type="submit"]')
    expect(submit.attributes('disabled')).toBeUndefined()
    const email = wrapper.get('input[name="email"]')
    await email.setValue('wrong')
    await email.trigger('blur')
    expect(wrapper.text()).toContain('Введите корректный адрес почты')
    await wrapper.get('form').trigger('submit')
    for (const name of ['name', 'date', 'city', 'vuz', 'daterozd', 'fakultet', 'soglasie']) {
      expect(wrapper.get(`input[name="${name}"]`).attributes('aria-invalid')).toBe('true')
    }
    expect(wrapper.text()).toContain('Необходимо ваше согласие')
    await wrapper.get('input[name="date"]').setValue('2026-06-01')
    expect(wrapper.get('input[name="date"]').attributes('aria-invalid')).toBeUndefined()
  })

  it('принимает заполненную форму', async () => {
    const wrapper = await mountSuspended(MasterApplicationForm)
    for (const name of ['name', 'city', 'vuz', 'fakultet']) await wrapper.get(`input[name="${name}"]`).setValue('Тест')
    await wrapper.get('input[name="date"]').setValue('2026-06-01')
    await wrapper.get('input[name="daterozd"]').setValue('2000-01-01')
    await wrapper.get('input[name="email"]').setValue('student@example.com')
    await wrapper.get('input[name="soglasie"]').setValue(true)
    wrapper.getComponent(PhoneInput).vm.$emit('validity', 'valid')
    await wrapper.get('form').trigger('submit')
    expect(wrapper.get('[role="status"]').text()).toBe('Отправка анкеты пока недоступна.')
  })
})
