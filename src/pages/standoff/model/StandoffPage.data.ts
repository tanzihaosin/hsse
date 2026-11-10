import type { IntroHeroProps } from '~/widgets/intro-hero'
import type { EventProgramProps } from '~/widgets/event-program'
import type { ContactFormProps } from '~/widgets/contact-form'
import type { PartnersProps } from '~/widgets/partners'
import { typograf } from '~/shared/lib/typograf'

export const hero: IntroHeroProps = {
  badge: typograf('Мероприятие ВШПИ х Standoff 365'),
  title: typograf('Практико-ориентированное соревнование по информационной безопасности «Standoff Young»'),
  description: typograf('Специальное соревнование для студентов, обучающихся по подготовке топ-специалистов в сфере информационных технологий уровней'),
  action: { label: typograf('Подробнее о регистрации'), to: '#form' },
  image: { src: '/images/campus.webp', alt: 'Кампус МФТИ' },
}

export const stages = [
  typograf('Регистрация команд\n(до 5 участников)\nдо 03.11.2026'),
  typograf('Индивидуальный онлайн-отбор\n3–4 ноября'),
  typograf('Очный финал для 20 команд (до 5 участников)\n15 ноября'),
]

export const partners: PartnersProps = {
  title: typograf('Официальные партнёры соревнований'),
  partners: [
    { name: 'Positive Technologies', href: 'https://ptsecurity.com/', logo: 'positive-technologies', width: 290 },
    { name: 'Standoff 365', href: 'https://standoff365.com/', image: { src: '/images/standoff/standoff-logo.png', height: 28 }, width: 241 },
  ],
}

export const competitionLinkLabel = typograf('На киберполигоне Standoff365')
export const competitionLink = 'https://standoff365.com/'
export const introduction = typograf('будет развернута виртуальная инфраструктура металлургической отрасли, чтобы каждый участник смог попробовать себя в роли специалиста по анализу защищенности, выполняя задания, с которыми сталкиваются практикующие эксперты.')
export const stagesTitle = typograf('Само соревнование состоит из трех ключевых этапов:')
export const competitionStages = [
  typograf('Формирование команды и подача индивидуальной заявки от каждого участника.'),
  typograf('Онлайн-отбор в индивидуальном формате. Баллы каждого участника пойдут в рейтинг его команды для определения финалистов.'),
  typograf('Финал для топ-20 команд (до 5 участников в команде).'),
]
export const rules = typograf('Подробнее о правилах и механике — в регламенте соревнований.')
export const rulesLabel = typograf('Смотреть регламент соревнований')
export const rulesLink = '/files/standoff.pdf'

export const eventProgram: EventProgramProps = {
  title: typograf('В программе'),
  items: [
    { dateTime: typograf('3 ноября'), description: typograf('Окончание регистрации участников') },
    { dateTime: typograf('2 ноября'), description: typograf('Вводный вебинар для участников') },
    { dateTime: typograf('3–4 ноября'), description: typograf('Онлайн-отбор, по итогам которого в финальный очный этап будут отобраны 20 команд') },
    { dateTime: typograf('15 ноября'), location: typograf('ВШПИ МФТИ, г. Долгопрудный'), description: typograf('Очный этап на площадке ВШПИ МФТИ') },
    { dateTime: typograf('16 ноября'), description: typograf('Посещение Кибердома') },
    { dateTime: typograf('17 ноября'), description: typograf('Награждение победителей') },
  ],
}

export const registration: ContactFormProps = {
  title: typograf('Регистрация'),
  image: '/images/registration-badge.svg',
  registrationClosed: true,
}

export const contacts = [
  { text: typograf('По техническим вопросам проведения соревнований обращаться к Тембулату Битокову, комьюнити-менеджеру Standoff (e-mail —'), email: 'tbitokov@ptsecurity.com' },
  { text: typograf('По вопросам организационного характера по участию в очном туре обращаться к Владимиру Тимохину, организатору (e-mail —'), email: 'timokhin.vn@mipt.ru' },
]
