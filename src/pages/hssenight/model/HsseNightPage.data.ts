import type { IntroHeroProps } from '~/widgets/intro-hero'
import type { EventDetailsProps } from '~/widgets/event-details'
import type { PartnersProps } from '~/widgets/partners'
import type { EventProgramProps } from '~/widgets/event-program'
import type { ContactFormProps } from '~/widgets/contact-form'
import { typograf } from '~/shared/lib/typograf'

export const hero: IntroHeroProps = {
  badge: typograf('Архив мероприятия · 2025'),
  title: typograf('Ночь открытых дверей Высшей школы программной инженерии МФТИ'),
  description: typograf('Ночь открытых дверей ВШПИ МФТИ состоялась 4 июля 2025 года. На этой странице сохранена программа мероприятия.'),
  action: { label: typograf('Регистрация закрыта'), to: '#form' },
  image: { src: '/images/campus.webp', alt: 'Кампус МФТИ' },
}

export const eventDetails: EventDetailsProps = {
  items: [
    { value: typograf('4 июля 2025'), label: typograf('дата') },
    { value: typograf('18:30 — 23:30'), label: typograf('время') },
    { value: typograf('Физтех.Цифра\nМО, г. Долгопрудный,\nНаучный переулок, д. 4, к. 1'), label: typograf('место'), compact: true },
  ],
}

export const partners: PartnersProps = {
  title: typograf('Партнёры'),
  description: typograf('В разработке учебных программ и обучении студентов ВШПИ принимают участие ведущие специалисты ИТ-компаний.'),
  partners: [
    { name: 'Яндекс', logo: 'yandex', width: 121 },
    { name: 'Сбер', logo: 'sber', width: 118 },
    { name: 'Благотворительный фонд «Система»', logo: 'sistema', width: 146 },
    { name: '1С', logo: '1c', width: 80 },
  ],
}

export const eventProgram: EventProgramProps = {
  title: typograf('В программе'),
  items: [
    { dateTime: typograf('18:30 — 19:00'), location: typograf('Физтех.Цифра'), description: typograf('Регистрация участников Ночи открытых дверей') },
    { dateTime: typograf('19:00 — 23:30'), location: typograf('Физтех.Цифра'), description: typograf('Консультации. На протяжении всего мероприятия руководство факультета и студенты готовы ответить на вопросы абитуриентов и родителей. У гостей также будет возможность проконсультироваться у специалиста Сбера о возможностях образовательного кредита.') },
    { dateTime: typograf('19:10 — 20:00'), location: typograf('Физтех.Цифра'), description: typograf('Неформальная беседа с руководством ВШПИ. Подробно расскажем об образовательной программе, специализациях и партнёрах, а также условиях поступления к нам в 2025 году и, конечно же, ответим на ваши вопросы.') },
    { dateTime: typograf('20:00 — 20:30'), location: typograf('Физтех.Цифра'), description: typograf('Кофе-брейк') },
    { dateTime: typograf('20:30 — 21:30'), location: typograf('Физтех.Цифра'), description: typograf('Представители партнёров ВШПИ расскажут о том, какие курсы реализуются на факультете.') },
    { dateTime: typograf('21:30 — 22:00'), location: typograf('Физтех.Цифра'), description: typograf('Учёба, проекты, стажировка — как всё успевать? Узнаем от студентов ВШПИ') },
    { dateTime: typograf('22:00 — 23:15'), location: typograf('Физтех.Цифра'), description: typograf('Квест по ночному кампусу Физтеха') },
    { dateTime: typograf('23:15 — 23:30'), location: typograf('Физтех.Цифра'), description: typograf('Розыгрыш мерча с символикой ВШПИ МФТИ') },
  ],
}

export const registration: ContactFormProps = {
  title: typograf('Регистрация на Ночь открытых дверей'),
  image: '/images/registration-badge.svg',
  registrationClosed: true,
}
