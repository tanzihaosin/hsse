import { describe, expect, it } from 'vitest'
import { phoneValidityError } from './index'

describe('Сообщение об ошибке номера', () => {
  it('соответствует состоянию проверки телефона', () => {
    expect(phoneValidityError('empty')).toBe('Это обязательное поле')
    expect(phoneValidityError('loading')).toBe('Дождитесь загрузки проверки номера')
    expect(phoneValidityError('invalid')).toBe('Введите корректный номер телефона')
    expect(phoneValidityError('valid')).toBe('')
  })
})
