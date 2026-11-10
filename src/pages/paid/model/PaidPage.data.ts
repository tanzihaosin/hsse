import type { IntroHeroProps } from '~/widgets/intro-hero'
import type { FactsBlockProps } from '~/widgets/facts-block'
import type { PaidAdmissionStepsProps } from '~/widgets/paid/admission-steps'
import type { EducationCreditProps } from '~/widgets/paid/education-credit'
import type { VideoBlockProps } from '~/widgets/video-block'
import { typograf } from '~/shared/lib/typograf'

export const hero: IntroHeroProps = {
  title: typograf('Платное обучение в престижном вузе — долгосрочная инвестиция в твою карьеру:'),
  points: [
    typograf('Высокий уровень образования и репутация выпускника МФТИ окупится быстрым карьерным ростом и высоким уровнем заработной платы.'),
    typograf('Платное обучение выгоднее, чем потеря времени или получение диплома вуза, который не ценится на рынке труда.'),
    typograf('Образовательный кредит с господдержкой и низкими ежемесячными платежами делает платное образование доступным.'),
  ],
  image: { src: '/images/paid/intro.png', alt: 'Студент за ноутбуком' },
}

export const admissionFacts: FactsBlockProps = {
  title: typograf('Приём на 2027'),
  items: [
    { value: '41*', description: typograf('платное место'), compact: true },
    { value: typograf('1 441 000 ₽'), description: typograf('стоимость обучения в год'), compact: true },
    {
      value: typograf('350 000 ₽**'),
      description: typograf('зарплата выпускников'),
      compact: true,
      note: typograf('**Средняя зарплата выпускников МФТИ в области ИТ согласно рейтингу Superjob'),
    },
  ],
  note: typograf('*Количество мест и условия набора определяются в соответствии с правилами приёма МФТИ. Информация будет обновлена после утверждения контрольных цифр набора на 2027 год.'),
}

export const admissionSteps: PaidAdmissionStepsProps = {
  title: typograf('Как поступить'),
  items: [
    {
      title: typograf('Подать заявление'),
      text: typograf('Заявление подается на Госуслугах'),
      emphasis: typograf('с 20 июня до 5 августа.'),
      textAfterEmphasis: typograf('На платном обучении также действует минимальный проходной балл ЕГЭ: 70 баллов по русскому языку, 85 баллов по математике и информатике.'),
    },
    {
      title: typograf('Пройти собеседование'),
      text: typograf('После подачи заявления на платное обучение наши менеджеры свяжутся с вами и назначат собеседование. В собеседовании участвуют представители дирекции, преподаватели и студенты ВШПИ. На собеседовании комиссия оценит уровень ваших знаний и опыта, вы также сможете задать любые вопросы по обучению.'),
    },
    {
      title: typograf('Заключить договор'),
      text: typograf('В случае успешного прохождения собеседования вам нужно будет заключить договор об образовании с МФТИ'),
      emphasis: typograf('не позднее 17 августа.'),
      textAfterEmphasis: typograf('Договор может быть расторгнут до начала учебы, если вы передумали.'),
    },
    {
      title: typograf('Оплатить обучение'),
      text: typograf('Оплатить обучение необходимо до 1 сентября. Это можно сделать несколькими способами:'),
      details: [typograf('из собственных средств;'), typograf('из средств материнского капитала;'), typograf('с помощью образовательного кредита.')],
    },
  ],
  action: { label: typograf('Записаться на консультацию'), to: '#form' },
}

export const educationCredit: EducationCreditProps = {
  title: typograf('Образовательный кредит с господдержкой'),
  image: '/images/paid/education-credit.svg',
  explanationTitle: typograf('Образовательный кредит: как это работает?'),
  terms: [
    typograf('ставка 3%, кредит можно взять на оплату одного семестра, года или всего периода обучения'),
    typograf('образовательный кредит оформляется с 14 лет без справки о доходах'),
  ],
  introduction: [
    typograf('Стоимость обучения в ВШПИ 1 441 000 рублей в год.'),
    typograf('С образовательным кредитом в 3% ваш ежемесячный платеж составит*:'),
  ],
  payments: [
    { label: typograf('1 курс'), value: typograf('1 441 ₽'), description: typograf('в первый год учебы') },
    { label: typograf('2 курс'), value: typograf('4 323 ₽'), description: typograf('во второй год учебы') },
    { label: typograf('3-4 курсы'), value: typograf('до 15 000 ₽'), description: typograf('до конца обучения + 9 месяцев') },
    { value: typograf('до 41 000 ₽'), description: typograf('далее до конца срока договора кредита') },
  ],
  note: typograf('*предварительный расчет, кредит можно погасить досрочно без каких-либо дополнительных платежей и комиссий'),
}

export const video: VideoBlockProps = {
  title: typograf('Студенты о нас'),
  label: typograf('Смотреть видео о платном обучении'),
  src: '/videos/hsse.mp4',
  poster: '/images/paid/video-poster.png',
}
