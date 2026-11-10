import { typograf } from '~/shared/lib/typograf'

export const defaultContactForm = {
  title: typograf('Мы ответим на все вопросы!'),
  image: '/images/callcenter.webp',
  privacyUrl: '/files/Политика-обработки-персональных-данных-МФТИ.pdf',
}

export const submissionSuccess = typograf('Заявка успешно отправлена!')

export const closedRegistration = {
  title: typograf('Регистрация закрыта'),
  description: typograf('Следите за новостями ВШПИ в Telegram — там мы первыми рассказываем о новых мероприятиях.'),
  action: { label: typograf('Telegram-канал ВШПИ'), to: 'https://t.me/hsse_mipt' },
}
