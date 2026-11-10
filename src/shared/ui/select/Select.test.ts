import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Select from './Select.vue'

describe('Select', () => {
  it('выводит варианты, сообщает о выборе и связывает поле с ошибкой', async () => {
    const wrapper = await mountSuspended(Select, {
      attrs: { id: 'program', 'aria-describedby': 'program-help' },
      props: { label: 'Программа', placeholder: 'Выберите', options: [{ value: 'one', label: 'Первая' }, { value: 2, label: 'Вторая' }], error: 'Выберите программу' },
    })
    const select = wrapper.get('select')
    expect(wrapper.get('label').attributes('for')).toBe('program')
    expect(select.attributes('aria-describedby')).toBe('program-help program-error')
    expect(wrapper.get('option').attributes('disabled')).toBeDefined()
    await select.setValue('2')
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([2])
  })
})
