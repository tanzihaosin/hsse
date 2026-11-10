import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import FactCard from './FactCard.vue'

describe('FactCard', () => {
  it('выводит числовой факт с единицей измерения и примечанием', async () => {
    const wrapper = await mountSuspended(FactCard, { props: { value: '4', unit: 'года', description: 'Обучение', note: 'Очная форма' } })
    expect(wrapper.text()).toContain('4')
    expect(wrapper.text()).toContain('года')
    expect(wrapper.text()).toContain('Очная форма')
    expect(wrapper.find('h3').exists()).toBe(false)
  })

  it('выводит текстовый факт как заголовок', async () => {
    const wrapper = await mountSuspended(FactCard, { props: { value: 'Практика', description: 'С первого семестра', variant: 'text' } })
    expect(wrapper.get('h3').text()).toBe('Практика')
    expect(wrapper.text()).toContain('С первого семестра')
  })
})
