import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import StepsChart from './StepsChart.vue'

describe('StepsChart', () => {
  it('выводит шаги по порядку и ограничивает высоту заданным диапазоном', async () => {
    const wrapper = await mountSuspended(StepsChart, { props: { maxHeight: 200, steps: [{ label: 'Первый', height: -10 }, { label: 'Второй', height: 150, content: 'Проект' }] } })
    const steps = wrapper.findAll('li')
    expect(steps.map(step => step.text())).toEqual(['Первый', 'ВторойПроект'])
    expect(steps[0]!.html()).toContain('height: 0px')
    expect(steps[1]!.html()).toContain('height: 200px')
    await wrapper.setProps({ steps: [] })
    expect(wrapper.find('ol').exists()).toBe(false)
  })
})
