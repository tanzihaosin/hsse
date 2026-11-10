import { describe, expect, it, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ContactForm from './ContactForm.vue'
import PhoneInput from '~/shared/ui/phone-input/PhoneInput.vue'

describe('ContactForm: проверка формы', () => {
  it('показывает успешную отправку только после подтверждения родительским компонентом', async () => {
    const wrapper = await mountSuspended(ContactForm, {
      props: { title: 'Вопросы', image: '/image.webp', privacyUrl: '/policy.pdf' },
    })

    expect(wrapper.text()).not.toContain('Заявка успешно отправлена!')
    expect(wrapper.find('form').exists()).toBe(true)
    await wrapper.setProps({ submissionSucceeded: true, registrationClosed: true })
    expect(wrapper.text()).toContain('Заявка успешно отправлена!')
    expect(wrapper.find('form').exists()).toBe(false)
    expect(wrapper.text()).not.toContain('Регистрация закрыта')
  })

  it('заменяет форму сообщением о закрытой регистрации', async () => {
    const wrapper = await mountSuspended(ContactForm, {
      props: { title: 'Вопросы', image: '/image.webp', privacyUrl: '/policy.pdf', registrationClosed: true },
    })

    expect(wrapper.text()).toContain('Вопросы')
    expect(wrapper.text()).toContain('Регистрация закрыта')
    expect(wrapper.get('a').attributes('href')).toBe('https://t.me/hsse_mipt')
    expect(wrapper.find('form').exists()).toBe(false)
    await wrapper.setProps({ registrationClosed: false })
    expect(wrapper.find('form').exists()).toBe(true)
  })

  it('показывает ошибки при потере фокуса или отправке и убирает их после исправления', async () => {
    const wrapper = await mountSuspended(ContactForm, {
      props: { title: 'Вопросы', image: '/image.webp', privacyUrl: '/policy.pdf' },
    })
    const name = wrapper.get('input[name="name"]')
    const email = wrapper.get('input[name="email"]')

    expect(wrapper.text()).not.toContain('Это обязательное поле')
    await name.trigger('blur')
    expect(wrapper.text()).toContain('Это обязательное поле')
    await name.setValue('Анна')
    expect(wrapper.text()).not.toContain('Это обязательное поле')

    await email.setValue('wrong')
    await email.trigger('blur')
    expect(wrapper.text()).toContain('Введите корректный адрес почты')
    await wrapper.get('form').trigger('submit')
    expect(wrapper.text().match(/Это обязательное поле/g)).toHaveLength(2)
    expect(wrapper.text()).toContain('Необходимо ваше согласие')
  })

  it('сохраняет корректные значения формы без отправки запроса', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch')
    try {
      const wrapper = await mountSuspended(ContactForm, {
        props: { title: 'Вопросы', image: '/image.webp', privacyUrl: '/policy.pdf' },
      })
      await wrapper.get('input[name="name"]').setValue('Анна')
      await wrapper.get('input[name="email"]').setValue('anna@example.com')
      await wrapper.get('textarea[name="question"]').setValue('Как поступить?')
      await wrapper.get('input[type="checkbox"]').setValue(true)
      wrapper.getComponent(PhoneInput).vm.$emit('validity', 'valid')
      await wrapper.get('form').trigger('submit')

      expect(fetchSpy).not.toHaveBeenCalled()
      expect(wrapper.text()).toContain('Отправка вопроса пока недоступна')
      expect((wrapper.get('textarea').element as HTMLTextAreaElement).value).toBe('Как поступить?')
    } finally {
      fetchSpy.mockRestore()
    }
  })

  it('позволяет отправить пустую форму и показывает ошибки', async () => {
    const wrapper = await mountSuspended(ContactForm)
    const submit = wrapper.get('button[type="submit"]')
    expect(submit.attributes('disabled')).toBeUndefined()
    await wrapper.get('form').trigger('submit')
    expect(wrapper.get('input[name="name"]').attributes('aria-invalid')).toBe('true')
    expect(wrapper.text()).toContain('Необходимо ваше согласие')
  })
})
