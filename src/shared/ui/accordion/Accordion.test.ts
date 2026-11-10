import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Accordion from './Accordion.vue'

describe('Accordion', () => {
  it('связывает кнопку с содержимым и переключает его видимость', async () => {
    const wrapper = await mountSuspended(Accordion, { props: { title: 'Вопрос' }, slots: { default: '<a href="/">Ответ</a>' } })
    const button = wrapper.get('button')
    const panel = wrapper.get(`#${button.attributes('aria-controls')}`)
    expect(button.attributes('aria-expanded')).toBe('false')
    expect(panel.attributes('inert')).toBeDefined()
    await button.trigger('click')
    expect(button.attributes('aria-expanded')).toBe('true')
    expect(panel.attributes('inert')).toBeUndefined()
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([true])
  })

  it('не раскрывается в отключённом состоянии', async () => {
    const wrapper = await mountSuspended(Accordion, { props: { title: 'Вопрос', disabled: true } })
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
  })
})
