import type { TheFooterProps } from './TheFooter.types'
import { typograf } from '~/shared/lib/typograf'

export const theFooterData: TheFooterProps = {
  logos: [
    { to: '/', icon: 'hsse-logo', label: 'ВШПИ МФТИ — на главную' },
    { to: 'https://mipt.ru/', icon: 'mipt-logo', label: 'Сайт МФТИ' },
  ],
  navigation: [
    { to: '/#about', label: typograf('О ВШПИ') },
    { to: '/#learn', label: typograf('Программа обучения') },
    { to: '/#team', label: typograf('Команда и менторы') },
    { to: '/#kakpostupit', label: typograf('Как поступить') },
    { to: '/#footer', label: typograf('Контакты') },
  ],
  phone: { label: '+7 (498) 713-92-27', to: 'tel:+74987139227', hours: typograf('10:00 — 18:00') },
  email: 'hsse@mipt.ru',
  address: typograf('Московская обл., г. Долгопрудный, Научный пер., д. 4, корпус 1, МФТИ, корпус «Физтех.Цифра», ауд. 3.23'),
  socialLinks: [
    { to: 'https://t.me/hsse_mipt', icon: 'social-telegram', label: 'Telegram' },
    { to: 'https://vk.com/hssemiptru', icon: 'social-vk', label: 'ВКонтакте' },
    { to: 'https://max.ru/join/q3UOUYqw155ZPX9GezSnXtNmNQ1FERZrYh_Xu85JMFg', icon: 'social-max', label: 'MAX' },
  ],
  legalLinks: [
    { to: '/files/Политика-обработки-персональных-данных-МФТИ.pdf', label: typograf('Политика обработки персональных данных МФТИ'), localFile: true },
    { to: 'https://new.mipt.ru/sveden/common', label: typograf('Сведения об образовательной организации') },
  ],
}
