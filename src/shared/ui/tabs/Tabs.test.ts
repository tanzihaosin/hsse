import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Tabs from './Tabs.vue'

describe('Tabs', () => {
  it('изменяет выбранный элемент и не выбирает отключённый', async () => {
    const wrapper = await mountSuspended(Tabs, {
      props: {
        modelValue: 'teachers',
        items: [
          { value: 'teachers', label: 'Преподаватели' },
          { value: 'mentors', label: 'Наставники' },
          { value: 'alumni', label: 'Выпускники', disabled: true },
        ],
      },
    })
    const buttons = wrapper.findAll('button')
    expect(buttons[0]?.attributes('aria-pressed')).toBe('true')
    await buttons[1]!.trigger('click')
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['mentors'])
    await wrapper.setProps({ modelValue: 'mentors' })
    expect(buttons[1]?.attributes('aria-pressed')).toBe('true')
    expect(buttons[0]?.attributes('aria-pressed')).toBe('false')
    await buttons[2]!.trigger('click')
    expect(buttons[2]?.element.disabled).toBe(true)
    expect(wrapper.emitted('update:modelValue')).toHaveLength(1)
  })
})
