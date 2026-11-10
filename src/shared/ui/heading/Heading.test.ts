import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Heading from './Heading.vue'

describe('Heading', () => {
  it('использует семантический тег независимо от визуального варианта', async () => {
    const wrapper = await mountSuspended(Heading, { props: { as: 'h1', variant: 'h3' }, slots: { default: 'Заголовок' } })
    expect(wrapper.element.tagName).toBe('H1')
    expect(wrapper.text()).toBe('Заголовок')
  })

  it('очищает переданный HTML от опасного содержимого', async () => {
    const wrapper = await mountSuspended(Heading, { props: { html: '<b>Текст</b><img src=x onerror="alert(1)"><script>alert(1)</script>' } })
    expect(wrapper.text()).toContain('Текст')
    expect(wrapper.find('script').exists()).toBe(false)
    expect(wrapper.html()).not.toContain('onerror')
  })
})
