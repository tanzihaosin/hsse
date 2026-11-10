import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Textarea from './Textarea.vue'

describe('Textarea', () => {
  it('связывает подпись и ошибку с полем и сообщает об изменениях', async () => {
    const wrapper = await mountSuspended(Textarea, { attrs: { id: 'question', 'aria-describedby': 'question-help' }, props: { label: 'Вопрос', error: 'Обязательное поле' } })
    const field = wrapper.get('textarea')
    expect(wrapper.get('label').attributes('for')).toBe('question')
    expect(field.attributes('aria-invalid')).toBe('true')
    expect(field.attributes('aria-describedby')).toBe('question-help question-error')
    await field.setValue('Как поступить?')
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['Как поступить?'])
  })
})
