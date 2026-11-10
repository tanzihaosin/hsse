import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Badge from './Badge.vue'

describe('Badge', () => {
  it('выводит содержимое слота в указанном семантическом элементе', async () => {
    const wrapper = await mountSuspended(Badge, { props: { as: 'li', variant: 'date' }, slots: { default: '21 марта' } })
    expect(wrapper.element.tagName).toBe('LI')
    expect(wrapper.text()).toBe('21 марта')
  })
})
