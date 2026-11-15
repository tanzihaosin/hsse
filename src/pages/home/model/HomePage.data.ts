import type { PromoBlockProps } from '~/widgets/promo-block'
import type { AdvantagesBlockProps } from '~/widgets/advantages'
import type { HeroBlockProps } from '~/widgets/home/hero'
import type { VideoBlockProps } from '~/widgets/video-block'
import type { ProjectPracticeProps } from '~/widgets/home/project-practice'
import type { PartnersProps } from '~/widgets/partners'
import type { EducationCareerProps } from '~/widgets/education-career'
import type { PeopleSliderProps } from '~/widgets/people-slider'
import type { BestProjectProps } from '~/widgets/home/best-project'
import type { AdmissionPathsProps } from '~/widgets/home/admission-paths'
import type { AdmissionOverviewProps } from '~/widgets/admission-overview'
import type { FactsBlockProps } from '~/widgets/facts-block'
import type { EventsHsseProps } from '~/widgets/home/events-hsse'
import type { FaqBlockProps } from '~/widgets/home/faq-block'
import { typograf } from '~/shared/lib/typograf'
import type { ContentPage } from '~/shared/lib/content-page'


export const hero: HeroBlockProps = {
  title: typograf('Высшая школа программной инженерии'),
  description: typograf('Готовим квалифицированных инженеров-разработчиков (middle) с учётом физтеховских традиций'),
  image: '/images/hero-orbit.webp',
  imageDecor: '/images/home/hero-orbit-line.webp',
  programs: [
    {
      badge: typograf('Базовое высшее образование'),
      title: typograf('Программа «Разработка программно-информационных систем»'),
      link: {
        to: '/bachelor/software-systems',
      }
    },
    {
      badge: typograf('Базовое высшее образование'),
      title: typograf('Программа «Разработка систем кибербезопасности и реинжиниринг киберфизических систем»'),
      link: {
        to: '/bachelor/cybersecurity',
      }
    },
    {
      badge: typograf('Специализированное высшее образование'),
      title: typograf('Программа «Распределённые системы и искусственный интеллект»'),
      link: {
        to: '/master',
      }
    }
  ]
}

export const video: VideoBlockProps = {
  src: '/videos/hsse.mp4',
  poster: '/images/home/video-poster.webp',
  mobilePoster: '/images/home/video-poster-mobile.webp',
  label: typograf('Смотреть видео о Высшей школе программной инженерии'),
}

export const advantages: AdvantagesBlockProps = {
  items: [
    {
      title: typograf('Современная траектория обучения'),
      description: typograf('Наша учебная программа основана на прочных фундаментальных знаниях, что обеспечивает будущим специалистам необходимую базу для успешной карьеры в условиях быстро меняющихся технологий, а использование современного стека технологий позволяет нашим студентам быть готовыми к вызовам индустрии уже сегодня.'),
    },
    {
      title: typograf('Интеграция в профессиональную среду'),
      description: typograf('Уникальные курсы от экспертов в офисах компаний-партнёров погружают в профессию с первых дней учёбы. Студенты занимаются проектной деятельностью под наставничеством менторов — практиков начиная с первого семестра обучения. Все проекты основаны на реальных задачах и продуктах из индустрии.'),
    },
    {
      title: typograf('Фундамент будущей карьеры'),
      description: typograf('Студенты получают приглашения на стажировки от индустриальных партнёров ВШПИ. Проектная работа на протяжении всего обучения и стажировки позволяют собрать будущему специалисту готовое портфолио, которое продемонстрирует работодателю знания, навыки и опыт в области программирования.'),
    },
  ],
}

export const projectPractice: ProjectPracticeProps = {
  steps: [
    { label: typograf('1 семестр'), height: 12.5 },
    { label: typograf('2 семестр'), height: 43.75 },
    { label: typograf('3 семестр'), height: 75 },
    { label: typograf('4 семестр'), height: 100, content: typograf('Проектная работа') },
  ],
  descriptions: [
    typograf('Проектная практика в ВШПИ начинается с первого семестра и количество часов постоянно увеличивается, что позволяет студентам работать над реальными проектами от бизнеса.'),
    typograf('Такой подход обеспечивает не только высокую степень готовности к профессиональной деятельности, но и конкурентное преимущество на рынке труда.'),
  ],
}

export const partners: PartnersProps = {
  title: typograf('Партнёры'),
  description: typograf('В разработке учебных программ и обучении студентов ВШПИ принимают участие ведущие специалисты ИТ-компаний.'),
  partners: [
    { name: 'Яндекс', logo: 'yandex', width: 121 },
    { name: 'Сбер', logo: 'sber', width: 118 },
    { name: '1С', logo: '1c', width: 80 },
    { name: 'Positive Technologies', logo: 'positive-technologies', width: 290, wide: true, href: 'https://ptsecurity.com' },
    { name: 'MWS', logo: 'mws', width: 53 },
  ],
}

export const educationCareer: EducationCareerProps = {
  title: typograf('Обучение и карьера'),
  logo: '/images/hsse-wordmark.webp',
  logoAlt: 'ВШПИ',
  stages: [
    {
      title: typograf('1–2 курс'),
      image: '/images/education/learn-1.png',
      introduction: typograf('Уже с первого курса студенты распределяются по двум специализациям:'),
      links: [
        { label: typograf('«Разработка программно-информационных систем»'), to: '/bachelor/software-systems' },
        { label: typograf('«Разработка систем кибербезопасности и реинжиниринг киберфизических систем»'), to: '/bachelor/cybersecurity' },
      ],
      description: typograf('Каждый семестр, начиная с первого курса, студенты реализуют реальные проекты от индустрии — это помогает сразу применять полученные знания на практике. После второго года обучения студенты проходят стажировки в компаниях-партнёрах и к окончанию университета имеют полноценное портфолио реализованных проектов.'),
    },
    {
      title: typograf('3–4 курс'),
      image: '/images/education/learn-2.png',
      imagePosition: 'left',
      introduction: typograf('Начиная с третьего курса студенты могут выбрать один из треков вашей специализации:'),
      tracks: [
        { title: typograf('Разработка программно-информационных систем'), items: ['Искусственный интеллект', 'Высоконагруженные системы', 'Фронтенд и мобильная разработка', 'Системная разработка программного обеспечения'].map(typograf) },
        { title: typograf('Разработка систем кибербезопасности и реинжиниринг киберфизических систем'), items: ['Аппаратный реверс-инжиниринг', 'Программный реверс-инжиниринг и противодействие угрозам'].map(typograf) },
      ],
    },
    {
      title: typograf('Карьера'),
      image: '/images/education/learn-3.png',
      imagePosition: 'left',
      introduction: typograf('В первый год после окончания вуза ИТ-выпускники уже входят в топ-6 высокооплачиваемых сфер на рынке труда. Средняя зарплата выпускников МФТИ в области ИТ в течение 5 лет после окончания института составляет 350 тыс. руб.'),
      introductionLink: { label: typograf('по рейтингу SuperJob'), to: 'https://students.superjob.ru/reiting-vuzov/it/' },
    },
  ],
}

export const peopleSlider: PeopleSliderProps = {
  title: typograf('Команда и менторы ВШПИ'),
}

export const bestProjects: BestProjectProps = {
  title: typograf('Топ лучших студенческих проектов'),
  projects: [
    {
      title: typograf('SberFit'),
      description: typograf('SberFit — партнёрский проект СБЕР и коллектива разработчиков 2 и 3 курса ВШПИ. SberFit — персонализированное мобильное приложение для контроля питания и здоровья. Комплексное решение объединяет мобильное приложение, серверную часть на Go, ML-компоненты и умный чат-бот на базе GigaChat, интегрируется с Apple Health, распознаёт блюда по фото и даёт советы через чат-бот с учётом личных данных пользователя.'),
      note: typograf('Топ проектов осеннего семестра 2024/25 уч. года'),
      image: '/images/home/orbit-2.png',
      video: 'https://kinescope.io/x18u2MWXGV1qXMAww9cB3R',
    },
    {
      title: typograf('Teach assistant'),
      description: typograf('Teach assistant — это партнёрский проект студентов 1 курса ВШПИ с компанией МТС. Разработка объединяет Telegram-бот и web-приложение для решения проблем взаимодействия учителей, учеников и родителей в ходе учебного процесса. Решение автоматизирует рутинные операции: управление расписанием, контроль выполнения домашних заданий и обмен информацией, позволяет получать уведомления и обмениваться учебными материалами.'),
      note: typograf('Топ проектов осеннего семестра 2024/25 уч. года'),
      image: '/images/home/orbit-4.png',
      video: 'https://kinescope.io/6iSrGxo4gNKqv4GKPpA1QS',
    },
    {
      title: typograf('userver от Яндекс'),
      descriptionLink: { label: 'Userver', to: 'https://userver.tech/' },
      description: typograf(' — фреймворк от Яндекс с открытыми исходными кодами для разработки высоконагруженных приложений на C++. В проекте реализованы задачи оптимизации сетевого взаимодействия Userver. Разработанный код принят в основную сборку userver и используется сервисами Яндекса в продуктивной работе.'),
      note: typograf('Топ проектов осеннего семестра 2023/24 уч. года'),
      image: '/images/home/orbit-2.png',
      video: 'https://kinescope.io/vDDPvhbfHNaLSpDYNT8Ghj',
    },
    {
      title: typograf('Агрегатор такси'),
      description: typograf('Проект привязан к курсу «Программирование на Go»: нужно разработать клиентскую часть приложения заказа такси. В проекте использованы язык Go, базы данных MongoDB и PostgreSQL, система обмена сообщениями Kafka. Сервисы развёрнуты в Docker, мониторинг организовали с помощью Prometheus, Jaeger, OpenTelemetry и Grafana.'),
      note: typograf('Топ проектов осеннего семестра 2023/24 уч. года'),
      image: '/images/home/orbit-1.png',
      video: 'https://kinescope.io/aVfmVxPaYTRbC6a2wEra3W',
    },
    {
      title: typograf('ABC Reader'),
      description: typograf('Студенческий проект по созданию сервиса для изучения иностранного языка, который генерирует карточки и упражнения на основе любого текста.'),
      note: typograf('Топ проектов осеннего семестра 2023/24 уч. года'),
      image: '/images/home/orbit-5.png',
      video: 'https://kinescope.io/9JjQ1SZFrapv2yZVDFR7vx',
    },
    {
      title: typograf('R.Olympiads'),
      description: typograf('R.Olympiads — инициативный проект студента 2 курса. Идея проекта — создать систему агрегации информации и оповещения пользователей об олимпиадах школьников, а также сформировать каталог бесплатных материалов для подготовки к каждой из олимпиад.'),
      note: typograf('Топ проектов весеннего семестра 2022/23 уч. года'),
      image: '/images/home/orbit-4.png',
      video: 'https://kinescope.io/2TCp7Kp2fM2ihoRfM4Sizz',
    },
    {
      title: typograf('ADA'),
      description: typograf('ADA — приложение-анализатор тональности постов в соцсетях. Приложение выявляет позитивные новостные сообщения в СМИ и соцсетях с использованием методов тонального анализа.'),
      note: typograf('Топ проектов весеннего семестра 2022/23 уч. года'),
      image: '/images/home/orbit-3.png',
      video: 'https://kinescope.io/sz6tSYpHWkR786iLR9d6oK',
    },
  ],
}

export const admissionPaths: AdmissionPathsProps = {
  title: typograf('Как поступить на программы базового высшего образования'),
  items: [
    {
      title: typograf('По результатам ЕГЭ'),
      preview: typograf('В качестве вступительных испытаний засчитываются результаты ЕГЭ. Минимальное количество баллов для поступления по русскому языку — 70 баллов, математика и информатика — 85 баллов. Баллы являются минимальными как для подачи заявления на бюджетные места, так и на платные места.'),
      details: typograf('Рейтинг абитуриента определяется суммой баллов ЕГЭ по трём предметам, а также дополнительными баллами за индивидуальные достижения.'),
    },
    {
      title: typograf('По результатам олимпиад по математике и информатике'),
      preview: typograf('Олимпиады позволят поступить без вступительных испытаний. Диплом победителя или призёра ВсОШ гарантирует поступление без подтверждения диплома результатами ЕГЭ.'),
      details: typograf('Победа в олимпиадах из списка РсОШ позволяет поступить без вступительных испытаний или получить 100 баллов по дисциплине при подтверждении олимпиады баллами ЕГЭ по профильному предмету.'),
      link: { label: typograf('Перечень олимпиад, предоставляющих особое право поступления БВИ в ВШПИ'), to: 'https://pk.mipt.ru/bachelor/2027_olympiads' },
    },
    {
      title: typograf('На платное обучение'),
      preview: typograf('Абитуриенты, набравшие минимальные баллы ЕГЭ и не прошедшие по конкурсу на бюджетные места, могут участвовать в конкурсе на платное обучение. Стоимость обучения фиксируется на весь период обучения.'),
      details: typograf('Студент, закончивший семестр на «хорошо» и «отлично», может подать заявление на перевод на бюджетную форму обучения. Стоимость обучения на программу 09.03.04 «Программная инженерия» составляет 1 441 000 рублей, НДС не облагается. Оплата может производиться отдельно за каждый семестр. Оплатить обучение можно несколькими способами:'),
      additional: [
        typograf('Из собственных средств'),
        typograf('Из средств материнского капитала'),
        typograf('С помощью образовательного кредита'),
      ],
      conclusion: typograf('Кредит оформляется с 14 лет на льготных условиях без справки о доходах на любой период обучения. Мы готовы проконсультировать вас по вопросам поступления. Пожалуйста, заполните форму на сайте, и мы ответим на ваши вопросы.'),
    },
  ],
  action: { label: typograf('О платном обучении'), to: 'https://hsse.mipt.ru/paid' },
}

export const admissionOverview: AdmissionOverviewProps = {
  title: typograf('Приём на 2027'),
  items: [
    { label: typograf('4 года, очная форма обучения') },
    { label: typograf('85 бюджетных мест') },
    { label: typograf('41 платное место') },
    { label: typograf('общежитие') },
    { label: typograf('отсрочка от армии') },
    { label: typograf('государственная аккредитация') },
    { label: typograf('обучение на кампусе МФТИ и в офисах компаний-партнёров'), wide: true },
  ],
}

export const factsBlocks: [FactsBlockProps, FactsBlockProps, FactsBlockProps] = [
  {
    title: typograf('План набора *'),
    items: [
      { value: '4', unit: typograf('года'), description: typograf('очная форма обучения') },
      { value: '85', description: typograf('бюджетных мест') },
      { value: '41', description: typograf('контрактных мест') },
    ],
    note: typograf('* Количество мест и условия набора определяются в соответствии с правилами приёма МФТИ.\nИнформация будет обновлена после утверждения контрольных цифр набора на 2027 год.'),
  },
  {
    title: typograf('Минимальные баллы'),
    items: [
      { value: '70', unit: typograf('баллов'), description: typograf('Русский язык') },
      { value: '85', unit: typograf('баллов'), description: typograf('Математика') },
      { value: '85', unit: typograf('баллов'), description: typograf('Информатика') },
    ],
  },
  {
    title: typograf('Статистика приёма на 2026 год'),
    items: [
      { value: '2100', description: typograf('поданных заявлений на бюджет и 590 на платное обучение') },
      { value: '103', description: typograf('поступивших\n\n79 бюджетных мест\n24 контрактных места') },
      { value: '31', description: typograf('конкурс, человек на бюджетное место') },
    ],
  },
]

export const eventsHsse: EventsHsseProps = {
  title: typograf('Архив мероприятий ВШПИ за 2026 год'),
  events: [
    {
      date: typograf("10 июля 2026"),
      datetime: '2026-07-10',
      title: typograf("НОЧЬ ОТКРЫТЫХ ДВЕРЕЙ"),
      paragraphs: [
        typograf("В программе:"),
        typograf("— расскажем всё про обучение и поступление"),
        typograf("— можно пообщаться с руководством и студентами"),
        typograf("— познакомиться с индустриальными партнёрами"),
        typograf("— пройти квест по ночному кампусу"),
        typograf("— и выиграть фирменный мерч"),
        typograf("В течение всей Ночи будут проходить консультации: можно задать любые вопросы про поступление, обучение и образовательный кредит"),
      ],
      image: '/images/home/events/night-open-doors.jpeg',
      link: "https://forms.yandex.ru/u/6a3398a25056903124e25d9d",
    },
    {
      date: typograf("8 июля 2026"),
      datetime: '2026-07-08',
      title: typograf("ВЕБИНАР О ПОСТУПЛЕНИИ В ВШПИ МФТИ"),
      paragraphs: [
        typograf("На вебинаре директор ВШПИ Алексей Малеев и представители Приёмной комиссии расскажут о поступлении в ВШПИ: этапах отбора, собеседовании, вступительных испытаниях и документах. Участники получат практические рекомендации по подготовке, узнают, на что обратить внимание абитуриенту, и смогут задать свои вопросы напрямую."),
      ],
      image: '/images/home/events/admission-webinar.png',
      link: "https://my.mts-link.ru/j/HSSE/21973860918",
    },
    {
      date: typograf("6 июля 2026"),
      datetime: '2026-07-06',
      title: typograf("ВЕБИНАР. О СПЕЦИАЛИЗАЦИИ «РАЗРАБОТКА СИСТЕМ КИБЕРБЕЗОПАСНОСТИ И РЕИНЖИНИРИНГ КИБЕРФИЗИЧЕСКИХ СИСТЕМ» ОТ POSITIVE TECHNOLOGIES"),
      paragraphs: [
      ],
      image: '/images/home/events/cybersecurity-webinar.png',
      link: "https://my.mts-link.ru/j/HSSE/19958926143",
    },
    {
      date: typograf("26 июня 2026"),
      datetime: '2026-06-26',
      title: typograf("Вебинар о специализациях ВШПИ от представителей ИТ-индустрии"),
      paragraphs: [],
      image: '/images/home/events/industry-webinar.png',
      link: "https://my.mts-link.ru/j/HSSE/19958926143",
    },
    {
      date: typograf("20 июня 2026"),
      datetime: '2026-06-20',
      title: typograf("День открытых дверей ВШПИ! Онлайн-встреча с директором"),
      paragraphs: [
        typograf("Платное обучение в ВШПИ — это реальный шанс учиться в вузе мечты. Это способ выбрать желаемую специальность и университет, даже если не удалось пройти жёсткий конкурс на бюджет. Студенты расскажут, отличается ли учёба и студенческая жизнь от бюджета, как работает образовательный кредит с господдержкой и почему потеря года ради бюджета часто дороже, чем платное место"),
      ],
      image: '/images/home/events/open-day.png',
      link: "https://my.mts-link.ru/j/HSSE/19957777678",
    },
    {
      date: typograf("11 июня 2026"),
      datetime: '2026-06-11',
      title: typograf("Вебинар. Платное обучение: мифы и реальность"),
      paragraphs: [
        typograf("В день старта приёмной кампании декан ВШПИ Алексей Малеев расскажет о направлениях подготовки одного из самых современных IT-факультетов В МФТИ, о том, как формируется учебный план и почему компании-партнёры играют в этом ключевую роль. Готовьте ваши вопросы — мы ответим на них в прямом эфире"),
      ],
      image: '/images/home/events/paid-education-webinar.png',
      link: "https://my.mts-link.ru/j/HSSE/19956218255",
    },
    {
      date: typograf("5 июня 2026"),
      datetime: '2026-06-05',
      title: typograf("Вебинар. Как студенты ВШПИ работают над проектами топ-компаний с первого курса"),
      paragraphs: [
        typograf("Знания устаревают быстро, но не в ВШПИ. На вебинаре представители ведущих ИТ—компаний расскажут абитуриентам, чему учатся студенты ВШПИ на своих специализациях и почему они работают в реальных проектах индустрии. А ещё вы узнаете, как компании напрямую участвуют в формировании учебного плана ВШПИ и обеспечивают обучение на современном технологическом стеке"),
      ],
      image: '/images/home/events/projects-webinar.png',
      link: "https://my.mts-link.ru/j/HSSE/19954207240",
    },
    {
      date: typograf("28 мая 2026"),
      datetime: '2026-05-28',
      title: typograf("Вебинар. Поступление в ВШПИ: ЕГЭшник, БВИ и платник"),
      paragraphs: [
        typograf("Разбираем три пути поступления — по баллам ЕГЭ, БВИ (по результатам олимпиад) и на платной основе. Студенты, прошедшие каждый из этих треков, поделятся личным опытом, расскажут о реальном конкурсе и проходных баллах в МФТИ. На вебинаре вы узнаете, чем поступление БВИ отличается от поступления по баллам ЕГЭ, и почему на платке тоже есть конкурс"),
      ],
      image: '/images/home/events/admission-paths-webinar.png',
      link: "https://my.mts-link.ru/j/HSSE/19950408983",
    },
  ],
}

export const faq: FaqBlockProps = {
  title: 'FAQ',
  groups: [
    {
      title: typograf('Поступление в ВШПИ'),
      questions: [
        {
          question: typograf('Сколько мест для приёма в 2027 году?'),
          answers: [typograf('В 2027 году ВШПИ примет') + ' <strong>85</strong> ' + typograf('студентов на бюджетные места и') + ' <strong>' + typograf('до 41') + '</strong> ' + typograf('студента на платные.') + '<br>' + typograf('Информация о количестве мест будет обновлена после утверждения контрольных цифр набора на 2027 год')],
        },
        {
          question: typograf('Какая стоимость обучения в 2027 году?'),
          answers: [typograf('Стоимость обучения по программам базового высшего образования составляет 1 441 000 рублей в год.')],
        },
        {
          question: typograf('Есть ли на ВШПИ дополнительные вступительные испытания для поступления?'),
          answers: [typograf('Дополнительных вступительных испытаний для поступления на ВШПИ нет.')],
        },
        {
          question: typograf('Какие ЕГЭ учитываются при поступлении?'),
          answers: [
            typograf('Засчитываем результаты ЕГЭ по') + ' <strong>' + typograf('математике, информатике и русскому языку.') + '</strong>',
            typograf('Минимальный балл для подачи документов: 70 — по русскому языку, 85 — по математике и информатике. Эти баллы распространяются как на бюджет, так и на платное обучение.'),
          ],
        },
        {
          question: typograf('Возможно ли перевестись с платного обучения на бюджет?'),
          answers: [typograf('Да, это возможно сделать при наличии вакантных мест для перевода. Для этого необходимо пройти промежуточную аттестацию (сдать зачёты и экзамены) за один семестр на оценки «отлично», «отлично» и «хорошо» или «хорошо».')],
        },
        {
          question: typograf('Какое количество баллов за индивидуальные достижения можно зачесть?'),
          answers: [typograf('Общая сумма баллов за индивидуальные достижения не может превышать 10 баллов. Баллы, начисленные за индивидуальные достижения, включаются в сумму конкурсных баллов. То есть баллы за ЕГЭ и баллы за ИД суммируются. По учёту ИД подробно') + ' <a href="https://pk.mipt.ru/bachelor/2026_ID/" class="underline">' + typograf('на сайте приёмной комиссии МФТИ.') + '</a>'],
        },
        {
          question: typograf('Каким будет проходной балл в этом году?'),
          answers: [typograf('Проходной балл зависит от абитуриентов, подавших заявление.')],
        },
        {
          question: typograf('Что такое собеседования?'),
          answers: [typograf('Это традиционный для Физтеха способ пообщаться с абитуриентами. Собеседование не даёт дополнительных баллов при поступлении, но это возможность познакомиться с дирекцией, преподавателями и экспертами из ИТ-индустрии (Яндекс, МТС, Сбер, 1С и Позитив Текнолоджиз), задать свои вопросы об обучении и шансах на поступление.')],
        },
      ],
    },
    {
      title: typograf('Проживание в ВШПИ'),
      questions: [
        {
          question: typograf('Есть ли общежитие? Кто может заселиться в него?'),
          answers: [typograf('Всем студентам ВШПИ, в том числе жителям Москвы и Долгопрудного, выделяются места в общежитиях. На текущий момент младшие курсы проживают в 4 общежитии коридорного типа, старшие курсы — в 10 общежитии квартирного типа.')],
        },
        {
          question: typograf('Сколько человек проживает в одной комнате?'),
          answers: [typograf('Заселение происходит таким образом, чтобы в одной комнате проживало не более 3 студентов.')],
        },
        {
          question: typograf('Далеко ли студенческий городок от учебных корпусов?'),
          answers: [typograf('Всё в шаговой доступности, не более 12 минут в спокойном темпе до самого дальнего корпуса.')],
        },
      ],
    },
    {
      title: typograf('Учебный процесс'),
      questions: [
        {
          question: typograf('Много ли пар в неделю у студентов ВШПИ?'),
          answers: [typograf('Мы стремимся к тому, чтобы количество пар не превышало 20.')],
        },
        {
          question: typograf('Где проходят учебные занятия у студентов ВШПИ?'),
          answers: [typograf('Большая часть учебных дисциплин проходит в корпусах кампуса МФТИ, а также в офисах компаний-партнёров.')],
        },
        {
          question: typograf('Где можно посмотреть учебный план?'),
          answers: [typograf('Актуальный учебный план по каждой образовательной программе размещён на странице программы.')],
        },
        {
          question: typograf('Есть ли отсрочка на ВШПИ? А военная кафедра?'),
          answers: [typograf('Да, есть и то, и другое. На военную кафедру МФТИ можно поступить после третьего курса, срок обучения — 2 года.')],
        },
      ],
    },
  ],
}

export const telegramPromo: PromoBlockProps = {
  title: typograf('Подписывайся на ТГ-канал Абитуриенты ВШПИ МФТИ и сможешь:'),
  uppercase: true,
  image: '/images/promo/telegram.svg',
  imageAlt: '',
  description: [
    'первым узнать, как поступить в одну из самых современных физтех-школ МФТИ;',
    'напрямую пообщаться с представителями ВШПИ и студенческого сообщества;',
    'узнать больше о жизни кампуса и особенностях учебы на Физтехе',
  ].map(typograf),
  actions: [
    { label: typograf('Перейти в канал Telegram'), to: 'https://t.me/hsse_mipt' },
    { label: typograf('Перейти в чат Telegram'), to: 'https://t.me/hsse_entering' },
  ],
}

export const homePageData: ContentPage = {
  slug: '/',
  version: 1,
  meta: {
    description: 'Высшая школа программной инженерии МФТИ: образовательные программы, проектная практика, команда и условия поступления.',
  },
  blocks: [
    { id: 'hero', type: 'home.hero', order: 10, enabled: true, data: hero },
    { id: 'video', type: 'video', order: 20, enabled: true, anchor: 'about', data: video },
    { id: 'advantages', type: 'advantages', order: 30, enabled: true, anchor: 'learn', data: advantages },
    { id: 'project-practice', type: 'home.project-practice', order: 40, enabled: true, data: projectPractice },
    { id: 'partners', type: 'partners', order: 50, enabled: true, data: partners },
    { id: 'education-career', type: 'education-career', order: 60, enabled: true, data: educationCareer },
    { id: 'people', type: 'people-slider', order: 70, enabled: true, anchor: 'team', data: peopleSlider },
    { id: 'best-projects', type: 'home.best-project', order: 80, enabled: true, data: bestProjects },
    { id: 'admission-paths', type: 'home.admission-paths', order: 90, enabled: true, anchor: 'kakpostupit', data: admissionPaths },
    { id: 'admission-overview', type: 'admission-overview', order: 100, enabled: true, data: admissionOverview },
    { id: 'admission-places', type: 'facts', order: 110, enabled: true, data: factsBlocks[0] },
    { id: 'admission-scores', type: 'facts', order: 120, enabled: true, data: factsBlocks[1] },
    { id: 'admission-statistics', type: 'facts', order: 130, enabled: true, data: factsBlocks[2] },
    { id: 'events', type: 'home.events', order: 140, enabled: true, data: eventsHsse },
    { id: 'faq', type: 'home.faq', order: 150, enabled: true, data: faq },
    { id: 'contact-form', type: 'contact-form', order: 160, enabled: true, data: {} },
    { id: 'telegram-promo', type: 'promo', order: 170, enabled: true, data: telegramPromo },
  ],
}
