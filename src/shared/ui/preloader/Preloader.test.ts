import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Preloader from './Preloader.vue'

describe('Preloader', () => {
  it('показывает статус загрузки только в видимом состоянии', async () => {
    const wrapper = await mountSuspended(Preloader, { props: { visible: false } })
    expect(wrapper.find('[role="status"]').exists()).toBe(false)
    await wrapper.setProps({ visible: true })
    expect(wrapper.get('[role="status"]').attributes('aria-label')).toBe('Загрузка')
  })
})
