import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import InfoCard from './InfoCard.vue'

describe('InfoCard', () => {
  it('связывает кнопку с подробностями и переключает их видимость', async () => {
    const wrapper = await mountSuspended(InfoCard, { props: { title: 'Программа', collapsible: true }, slots: { default: 'Описание', details: 'Подробнее' } })
    const button = wrapper.get('button')
    const details = wrapper.get(`#${button.attributes('aria-controls')}`)
    expect(button.attributes('aria-expanded')).toBe('false')
    expect(details.attributes('inert')).toBeDefined()
    await button.trigger('click')
    expect(button.attributes('aria-expanded')).toBe('true')
    expect(details.attributes('inert')).toBeUndefined()
    expect(wrapper.emitted('update:expanded')?.at(-1)).toEqual([true])
  })
})
