import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Action from './Action.vue'

describe('Action', () => {
  it('выводит отключённую кнопку с указанным типом', async () => {
    const wrapper = await mountSuspended(Action, { props: { type: 'submit', disabled: true }, slots: { default: 'Отправить' } })
    const button = wrapper.get('button')
    expect(button.attributes('type')).toBe('submit')
    expect(button.attributes('disabled')).toBeDefined()
    expect(button.text()).toBe('Отправить')
  })

  it('выводит внешнюю ссылку с безопасными атрибутами по умолчанию', async () => {
    const wrapper = await mountSuspended(Action, { props: { to: 'https://example.com' }, slots: { default: 'Сайт' } })
    const link = wrapper.get('a')
    expect(link.attributes('href')).toBe('https://example.com')
    expect(link.attributes('target')).toBe('_blank')
    expect(link.attributes('rel')).toBe('noopener noreferrer')
  })
})
