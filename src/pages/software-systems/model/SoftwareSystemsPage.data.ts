import type { ProgramHeroProps } from '~/widgets/program-hero'
import type { AdvantagesBlockProps } from '~/widgets/advantages'
import type { PartnersProps } from '~/widgets/partners'
import type { ProjectPracticeProps } from '~/widgets/project-practice'
import type { EducationCareerProps } from '~/widgets/education-career'
import type { PromoBlockProps } from '~/widgets/promo-block'
import { typograf } from '~/shared/lib/typograf'

export const hero: ProgramHeroProps = {
  badge: typograf('Базовое высшее образование'),
  title: typograf('Разработка программно-информационных систем'),
  directions: [
    { title: 'Искусственный интеллект', description: 'Разработка комплексных программных систем на основе машинного обучения' },
    { title: 'Высоконагруженные системы', description: 'Бэкенд-разработка с акцентом на High Load' },
    { title: 'Фронтенд и мобильная разработка', description: 'Разработка пользовательского интерфейса в Web и мобильных приложениях' },
    { title: 'Системная разработка программного обеспечения', description: 'Внутреннее устройство ОС, сетей и распределённых систем для реализации бэкенда' },
  ].map(direction => ({ title: typograf(direction.title), description: typograf(direction.description) })),
  action: { label: typograf('Записаться на консультацию'), to: '#form' },
}

export const advantages: AdvantagesBlockProps = {
  items: [
    {
      title: 'Современная траектория обучения',
      description: 'Наша учебная программа основана на прочных фундаментальных знаниях, что обеспечивает будущим специалистам необходимую базу для успешной карьеры в условиях быстро меняющихся технологий, а использование современного стека технологий позволяет нашим студентам быть готовыми к вызовам индустрии уже сегодня.',
    },
    {
      title: 'Интеграция в профессиональную среду',
      description: 'Уникальные курсы от экспертов в офисах компаний-партнёров погружают в профессию с первых дней учёбы. Студенты занимаются проектной деятельностью под наставничеством менторов — практиков начиная с первого семестра обучения. Все проекты основаны на реальных задачах и продуктах из индустрии.',
    },
    {
      title: 'Фундамент будущей карьеры',
      description: 'Студенты получают приглашения на стажировки от индустриальных партнёров ВШПИ. Проектная работа на протяжении всего обучения и стажировки позволяют собрать будущему специалисту готовое портфолио, которое продемонстрирует работодателю знания, навыки и опыт в области программирования.',
    },
  ].map(item => ({ title: typograf(item.title), description: typograf(item.description) })),
}

export const partners: PartnersProps = {
  title: typograf('Партнёры специализации'),
  description: typograf('В разработке учебных программ и обучении студентов ВШПИ принимают участие ведущие специалисты ИТ-компаний.'),
  partners: [
    { name: 'Яндекс', logo: 'yandex', width: 121 },
    { name: 'MWS', logo: 'mws', width: 53 },
    { name: 'Сбер', logo: 'sber', width: 118 },
    { name: '1С', logo: '1c', width: 80 },
  ],
}

export const subjects = [
  'Программирование на C++ или Java (отбор)',
  'Алгоритмы и структуры данных',
  'Машинное обучение и искусственный интеллект',
  'Базы данных',
  'Инструменты разработчика',
  'Программирование на Python',
  'Программирование на Go',
  'Мобильная разработка',
  'DevOps',
  'Web-разработка',
].map(typograf)

export const projectPractice: ProjectPracticeProps = {
  title: typograf('Проектная работа с 1 семестра'),
  descriptions: [
    'Проектная практика в ВШПИ начинается с первого семестра и количество часов постоянно увеличивается, что позволяет студентам работать над реальными проектами от бизнеса.',
    'Такой подход обеспечивает не только высокую степень готовности к профессиональной деятельности, но и конкурентное преимущество на рынке труда.',
  ].map(typograf),
  steps: [
    { label: '90 часов', height: 9, bottomLabel: '1 курс' },
    { label: '135 часов', height: 32, bottomLabel: '2 курс' },
    { label: '315 часов', height: 55, bottomLabel: '3 курс' },
    { label: '765 часов', height: 100, bottomLabel: '4 курс' },
  ].map(step => ({ ...step, label: typograf(step.label), bottomLabel: typograf(step.bottomLabel), labelClass: 'text-xs md:text-xl' })),
  action: { label: typograf('Посмотреть учебный план'), to: '/files/programPI.pdf' },
}

export const flagshipProgram: PromoBlockProps = {
  title: typograf('Программа ВШПИ МФТИ входит в список флагманских программ Минцифры для подготовки специалистов ТОП-ИТ'),
  headingVariant: 'h2',
  headingClass: 'lg:text-2xl!',
  actions: [{ label: typograf('Подробнее'), to: 'https://digital.gov.ru/activity/it-obrazovanie/podgotovka-top-speczialistov-v-sfere-it' }],
}

export const educationCareer: EducationCareerProps = {
  title: typograf('Обучение'),
  stages: [
    {
      title: typograf('1–2 курс'),
      image: '/images/education/learn-1.png',
      introduction: typograf('После второго года обучения наши студенты проходят стажировки в компаниях-партнёрах и к окончанию университета имеют портфолио реализованных проектов. На младших курсах все студенты изучают бэкенд, фронтенд, машинное обучение и мобильную разработку, чтобы попробовать себя в каждой области.'),
    },
    {
      title: typograf('3–4 курс'),
      image: '/images/education/learn-2.png',
      imagePosition: 'left',
      introduction: typograf('Начиная с третьего курса студенты могут выбрать одну из специализаций:'),
      tracks: [{ items: ['Искусственный интеллект', 'Высоконагруженные системы', 'Фронтенд и мобильная разработка', 'Системная разработка программного обеспечения'].map(typograf) }],
    },
    {
      title: typograf('Карьера'),
      image: '/images/education/learn-3.png',
      imagePosition: 'left',
      introduction: typograf('Порядка 80% студентов 4 курса уже работают в индустрии, совмещая учёбу с работой. В первый год после окончания выпускники-айтишники попадают в топ-6 самых высокооплачиваемых сфер на рынке труда. Средняя зарплата выпускников МФТИ в ИТ за 5 лет после института составляет 350 тыс. рублей согласно'),
      introductionLink: { label: typograf('рейтингу SuperJob'), to: 'https://students.superjob.ru/reiting-vuzov/it/' },
    },
  ],
  action: { label: typograf('Записаться на консультацию о платном обучении'), to: '/paid' },
}

