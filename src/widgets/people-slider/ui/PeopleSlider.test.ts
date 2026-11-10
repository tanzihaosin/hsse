import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import PeopleSlider from './PeopleSlider.vue'

describe('PeopleSlider', () => {
  it('сохраняет выбор при обновлении групп и выбирает первую доступную после удаления выбранной', async () => {
    const groups = [
      { id: 'teachers', label: 'Преподаватели', people: [{ name: 'Анна', description: 'Преподаватель' }] },
      { id: 'mentors', label: 'Наставники', people: [{ name: 'Иван', description: 'Наставник' }] },
    ]
    const wrapper = await mountSuspended(PeopleSlider, { props: { title: 'Команда', groups }, global: { stubs: { UiSwiper: { template: '<div><slot /></div>' } } } })
    const buttons = wrapper.findAll('button')
    await buttons[1]!.trigger('click')
    expect(wrapper.text()).toContain('Иван')
    await wrapper.setProps({ groups: [...groups].reverse() })
    expect(wrapper.text()).toContain('Иван')
    await wrapper.setProps({ groups: [groups[0]!] })
    expect(wrapper.text()).toContain('Анна')
    expect(wrapper.text()).not.toContain('Иван')
    await wrapper.setProps({ groups: [] })
    expect(wrapper.find('section').exists()).toBe(false)
    await wrapper.setProps({ groups: [groups[1]!] })
    expect(wrapper.text()).toContain('Иван')
  })
})
