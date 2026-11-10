import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import PhoneInput from '~/shared/ui/phone-input/PhoneInput.vue'
import MasterApplicationForm from './MasterApplicationForm.vue'

describe('MasterApplicationForm', () => {
  it('разблокирует отправку только после заполнения всех полей и согласия', async () => {
    const wrapper = await mountSuspended(MasterApplicationForm)
    const submit = wrapper.get('button[type="submit"]')
    expect(submit.attributes('disabled')).toBeDefined()
    for (const name of ['name', 'city', 'vuz', 'fakultet']) {
      await wrapper.get(`input[name="${name}"]`).setValue('Тест')
    }
    await wrapper.get('input[name="date"]').setValue('2026-06-01')
    await wrapper.get('input[name="daterozd"]').setValue('2000-01-01')
    await wrapper.get('input[name="email"]').setValue('student@example.com')
    wrapper.getComponent(PhoneInput).vm.$emit('validity', 'valid')
    await wrapper.vm.$nextTick()
    expect(submit.attributes('disabled')).toBeDefined()
    await wrapper.get('input[name="soglasie"]').setValue(true)
    expect(submit.attributes('disabled')).toBeUndefined()
    await wrapper.get('input[name="date"]').setValue('')
    expect(submit.attributes('disabled')).toBeDefined()
  })
})
