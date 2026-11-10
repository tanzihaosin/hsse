export type PhoneValidity = 'empty' | 'invalid' | 'valid' | 'loading'

export function phoneValidityError(state: PhoneValidity): string {
  switch (state) {
    case 'empty': return 'Это обязательное поле'
    case 'loading': return 'Дождитесь загрузки проверки номера'
    case 'invalid': return 'Введите корректный номер телефона'
    case 'valid': return ''
  }
}
