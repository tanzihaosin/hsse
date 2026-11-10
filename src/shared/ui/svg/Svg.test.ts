import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Svg from './Svg.vue'

describe('Svg', () => {
  it('скрывает декоративные иконки от вспомогательных технологий', async () => {
    const wrapper = await mountSuspended(Svg, { props: { name: 'arrow-down' } })
    expect(wrapper.get('svg').attributes('aria-hidden')).toBe('true')
  })

  it('представляет значимую иконку с названием как изображение', async () => {
    const wrapper = await mountSuspended(Svg, { props: { name: 'arrow-down', decorative: false }, attrs: { 'aria-label': 'Открыть' } })
    expect(wrapper.get('svg').attributes('role')).toBe('img')
    expect(wrapper.get('svg').attributes('aria-label')).toBe('Открыть')
  })
})
