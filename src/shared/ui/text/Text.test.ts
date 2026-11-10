import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Text from './Text.vue'

describe('Text', () => {
  it('выводит содержимое слота в указанном элементе', async () => {
    const wrapper = await mountSuspended(Text, { props: { as: 'span' }, slots: { default: 'Описание' } })
    expect(wrapper.element.tagName).toBe('SPAN')
    expect(wrapper.text()).toBe('Описание')
  })

  it('очищает переданный HTML от опасного содержимого', async () => {
    const wrapper = await mountSuspended(Text, { props: { html: '<strong>Текст</strong><img src=x onerror="alert(1)"><script>alert(1)</script>' } })
    expect(wrapper.text()).toContain('Текст')
    expect(wrapper.find('script').exists()).toBe(false)
    expect(wrapper.html()).not.toContain('onerror')
  })
})
