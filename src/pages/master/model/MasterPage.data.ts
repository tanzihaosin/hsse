import type { ProgramHeroProps } from '~/widgets/program-hero'
import type { FactsBlockProps } from '~/widgets/facts-block'
import type { TargetAudienceProps } from '~/widgets/master/target-audience'
import type { AboutProgramProps } from '~/widgets/master/about-program'
import type { AdvantagesBlockProps } from '~/widgets/advantages'
import type { ProgramImplementationProps } from '~/widgets/master/program-implementation'
import type { SalaryRankingProps } from '~/widgets/master/salary-ranking'
import type { StudyDisciplinesProps } from '~/widgets/master/study-disciplines'
import type { AdmissionStepsProps } from '~/widgets/master/admission-steps'
import { typograf } from '~/shared/lib/typograf'

export const hero: ProgramHeroProps = {
  badge: typograf('Специализированное высшее образование'),
  title: typograf('«Распределённые\nсистемы и ИИ»'),
  description: typograf('Наша программа для всех, кто хочет получить глубокий практический опыт решения задач в области ИИ и усилить навыки разработки высоконагруженных масштабируемых распределённых систем'),
  partner: { label: typograf('Индустриальный партнёр'), name: 'СберТех', logo: '/images/sbertech.webp' },
  action: { label: typograf('Анкета в магистратуру') },
}

export const programFacts: FactsBlockProps = {
  items: [
    { value: typograf('Квалификация,\nприсваиваемая\nвыпускникам:'), description: typograf('магистр'), variant: 'text' },
    { value: typograf('Форма\nобучения:'), description: typograf('очная'), variant: 'text' },
    { value: typograf('Период\nобучения:'), description: typograf('2 года'), variant: 'text' },
  ],
}

export const targetAudience: TargetAudienceProps = {
  title: typograf('Для кого подходит программа'),
  items: [
    { title: typograf('Выпускникам бакалавриата'), description: typograf('с глубокими знаниями в математике и в любом языке ООП (объектно-ориентированного программирования)') },
    { title: typograf('Действующим ИТ-специалистам'), description: typograf('для повышения уровня своего профессионализма (второе высшее образование)') },
  ],
}

export const aboutProgram: AboutProgramProps = {
  title: typograf('Магистратура ВШПИ «Распределённые системы и ИИ» —'),
  paragraphs: [
    typograf('это образовательная программа, нацеленная на подготовку высококвалифицированных кадров в областях программной инженерии и компьютерных наук (направление подготовки 09.04.01 «Информатика и вычислительная техника»).'),
    typograf('В формировании программы в качестве преподавателей и научных руководителей участвуют лучшие специалисты компаний СберТех, Сбербанк, других компаний группы Сбер и эксперты из ведущих технологических и финансовых компаний. Все преподаватели программы — практикующие ИТ-эксперты.'),
    typograf('Обязательной частью обучения являются индивидуальные и групповые проекты, в том числе стартапы и исследовательские работы. Программа ориентирована на развитие навыков, востребованных работодателями в сфере цифровых технологий и искусственного интеллекта.'),
  ],
  image: '/images/master/program-overview.webp',
  tracksTitle: typograf('Образовательная программа включает два параллельных трека:'),
  tracks: [typograf('Высоконагруженные распределённые системы'), typograf('Машинное обучение и анализ данных')],
  note: typograf('Распределение на соответствующий трек производится по желанию (заявлению) студента.'),
}

export const studyComponents: AdvantagesBlockProps = {
  title: typograf('Обучение состоит из 3 частей'),
  items: [
    { title: typograf('Практическая'), description: typograf('Слушателей знакомят с рабочим инструментарием: языки программирования, шаблоны и принципы программного дизайна, современные технологии, включая работу с данными') },
    { title: typograf('Фундаментальная'), description: typograf('Изучаются фундаментальные законы и математические основы компьютерных наук (сложности вычислений, проблемы координации и работы с общими объектами, математические основы машинного и глубокого обучения), а также финансов') },
    { title: typograf('Исследовательская'), description: typograf('Последовательная подготовка научно-исследовательской работы (НИР) и выпускной диссертации магистра (ВКР)') },
  ],
}

export const programImplementation: ProgramImplementationProps = {
  title: typograf('Сведения о реализации образовательной программы'),
  description: typograf('Образовательный процесс осуществляется на базе Высшей школы программной инженерии МФТИ (ВШПИ, Алексей Викторович Малеев) и дочерней компании Сбербанка — «Сбербанк-Технологии» (Максим Анатольевич Тятюшев, Дмитрий Андреевич Ковалёв).'),
  note: typograf('Все магистранты трудоустраиваются в компанию «Сбербанк-Технологии» и другие компании группы Сбер с момента поступления в магистратуру.'),
  background: '/images/master/team-background.webp',
  people: [
    { name: typograf('Тятюшев Максим Анатольевич'), description: typograf('Генеральный директор АО «СберТех»'), photo: '/images/master/tyatyushev.webp' },
    { name: typograf('Ковалёв Дмитрий Андреевич'), description: typograf('Руководитель направления, Дивизион фундаментальных моделей'), photo: '/images/master/kovalev.webp' },
    { name: typograf('Малеев Алексей Викторович'), description: typograf('Директор Высшей школы программной инженерии МФТИ'), photo: '/images/people-slider/maleev.png' },
  ],
}

export const salaryRanking: SalaryRankingProps = {
  titleBeforeLink: typograf('МФТИ возглавил рейтинг'),
  titleAfterLink: typograf('по уровню зарплат выпускников технических вузов в сфере ИТ'),
  descriptionBeforeLink: typograf('Средняя зарплата выпускников МФТИ в области ИТ в течение 5 лет после окончания института составляет 350 тыс. руб., согласно рейтингу'),
  linkLabel: 'SuperJob',
  link: 'https://students.superjob.ru/reiting-vuzov/it/',
  image: '/images/master/students.webp',
  imageAlt: typograf('Студенты МФТИ'),
}

export const studyDisciplines: StudyDisciplinesProps = {
  title: typograf('Дисциплины учебного плана'),
  paragraphs: [
    typograf('Учебный план основной образовательной программы наряду с практическими дисциплинами включает фундаментальные, а также позволяет выбрать курсы, связанные с банковской и финансовой деятельностью.'),
    typograf('Большое количество курсов программы — курсы по выбору, таким образом студенту даётся возможность управлять своим обучением.'),
  ],
  groups: [
    {
      title: typograf('Практические дисциплины'),
      items: [
        typograf('Проектирование и разработка ИИ-ассистентов и агентов'),
        typograf('Языки программирования Java, Python'),
        typograf('Дизайн программ'),
        typograf('Оптимизация производительности программ'),
        typograf('Процессы разработки ПО'),
        typograf('Инфраструктура машинного обучения'),
        typograf('Промышленное применение машинного обучения'),
      ],
    },
    {
      title: typograf('Фундаментальные дисциплины'),
      items: [
        typograf('Многопроцессорное программирование'),
        typograf('Распределённые системы'),
        typograf('Математические основы машинного обучения'),
        typograf('и др.'),
      ],
    },
  ],
  action: { label: typograf('Скачать учебный план'), to: '/files/УчПлан-Магистратура-СберТех.pdf' },
  image: '/images/master/disciplines.webp',
}

export const admissionFacts: FactsBlockProps = {
  title: typograf('Приём на программу 2026–2028'),
  items: [
    { value: '15', description: typograf('бюджетных мест') },
    { value: '12', description: typograf('контрактных мест') },
    { value: typograf('1 099 000'), description: typograf('стоимость за год обучения по контракту') },
    { value: '20.06', description: typograf('дата начала приёма документов на программу') },
    { value: '31.07', description: typograf('последний день приёма документов на бюджет') },
    { value: '15.08', description: typograf('последний день приёма документов на контракт') },
  ],
}

export const admissionSteps: AdmissionStepsProps = {
  title: typograf('Как поступить в магистратуру'),
  items: [
    {
      title: typograf('Заполнить анкету'),
      action: { label: typograf('Анкета в магистратуру'), externalIcon: true },
    },
    {
      title: typograf('Пройти собеседование'),
      text: typograf('Пройди предварительный отбор на программу — собеседование с участием преподавателей программы — экспертов СБТ и ВШПИ'),
    },
    {
      title: typograf('Подать заявление на Госуслугах'),
      text: typograf('Подай документы через Госуслуги, направление подготовки:'),
      emphasis: typograf('09.04.01 Информатика и вычислительная техника'),
      textAfterEmphasis: typograf(', конкурсная группа: Распределенные системы и искусственный интеллект'),
    },
    {
      title: typograf('Принять участие во внутренних вступительных испытаниях'),
      text: typograf('Приглашение к участию во вступительных испытаниях придет на почту, указанную при регистрации, вместе с инструкцией по формату проведения испытаний и необходимым действиям'),
      details: [
        typograf('06.07 / 20.07 — внутренние вступительные испытания (письменная часть)'),
        typograf('08.07 / 22.07 — внутренние вступительные испытания (устная часть)'),
        typograf('12.08 — резервный день для поступающих на бюджет'),
        typograf('20.08 — резервный день для поступающих на контракт'),
      ],
      action: { label: typograf('Программа вступительного испытания'), to: '/files/РАСПРЕДЕЛИТЕЛЬНЫЕ СИСТЕМЫ И ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ.pdf' },
    },
  ],
}
