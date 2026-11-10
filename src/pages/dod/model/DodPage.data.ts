import type { IntroHeroProps } from '~/widgets/intro-hero'
import type { EventDetailsProps } from '~/widgets/event-details'
import type { PartnersProps } from '~/widgets/partners'
import type { EventProgramProps } from '~/widgets/event-program'
import type { ContactFormProps } from '~/widgets/contact-form'
import { typograf } from '~/shared/lib/typograf'

export const hero: IntroHeroProps = {
  badge: typograf('Архив мероприятия · 2026'),
  title: typograf('День открытых дверей Высшей школы программной инженерии МФТИ'),
  description: typograf('День открытых дверей ВШПИ МФТИ состоялся 21 марта 2026 года. На этой странице сохранена программа мероприятия.'),
  action: { label: typograf('Регистрация закрыта'), to: '#form' },
  image: { src: '/images/campus.webp', alt: 'Кампус МФТИ' },
}

export const eventDetails: EventDetailsProps = {
  items: [
    { value: typograf('21 марта 2026'), label: typograf('дата') },
    { value: typograf('11:30 — 17:00'), label: typograf('время') },
    { value: typograf('Физтех.Арктика\nМО, г. Долгопрудный,\nНаучный переулок, д. 4'), label: typograf('место'), compact: true },
  ],
}

export const partners: PartnersProps = {
  title: typograf('Партнёры'),
  description: typograf('В разработке учебных программ и обучении студентов ВШПИ принимают участие ведущие специалисты ИТ-компаний.'),
  partners: [
    { name: 'Яндекс', logo: 'yandex', width: 121 },
    { name: 'Сбер', logo: 'sber', width: 118 },
    { name: 'Благотворительный фонд «Система»', logo: 'sistema', width: 146 },
  ],
}

export const eventProgram: EventProgramProps = {
  title: typograf('В программе'),
  items: [
    { dateTime: typograf('11:30 — 12:30'), location: typograf('Физтех.Арктика, холл 1 этажа'), description: typograf('Регистрация участников Дня открытых дверей ВШПИ') },
    {
      dateTime: typograf('12:30 — 14:00'),
      location: typograf('Физтех.Арктика, холл 2 этажа'),
      description: typograf('Активности от студентов ВШПИ и партнёров факультета:'),
      details: [typograf('неформальное общение,'), typograf('решение задач,'), typograf('игры.')],
    },
    { dateTime: typograf('14:00 — 15:00'), location: typograf('Физтех.Арктика,\nПоточная аудитория, 4 этаж'), description: typograf('Выступление директора Высшей школы программной инженерии МФТИ Малеева Алексея Викторовича. Ответы на вопросы.') },
    { dateTime: typograf('15:00 — 15:30'), location: typograf('Физтех.Арктика, холл 3 этажа'), description: typograf('Кофе-брейк') },
    { dateTime: typograf('15:00 — 17:00'), location: typograf('Физтех.Арктика,\nПоточная аудитория, 4 этаж'), description: typograf('Выступление спикеров из индустрии о совместно реализуемых курсах') },
    { dateTime: typograf('17:00 — 17:30'), location: typograf('Физтех.Арктика,\nПоточная аудитория, 4 этаж'), description: typograf('Розыгрыш призов от ВШПИ и партнёров физтех-школы.') },
  ],
}

export const registration: ContactFormProps = {
  title: typograf('Регистрация на День открытых дверей'),
  image: '/images/registration-badge.svg',
  registrationClosed: true,
}
