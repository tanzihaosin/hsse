import type { TheHeaderProps } from "./TheHeader.types";

export const TheHeaderData: TheHeaderProps = {
  logos: [
    {
      link: '/',
      image: 'hsse-logo',
      ariaLabel: 'На главную'
    },
    {
      link: 'https://mipt.ru',
      image: 'mipt-logo',
      ariaLabel: 'Сайт МФТИ'
    }
  ],
  nav: [
    {
      link: '#',
      text: 'Программы',
      isDropdown: true,
      dropdownMenu: [
        {
          overTitle: 'Базовое высшее образование',
          link: '/bachelor/software-systems',
          text: 'Программа «Разработка программно-информационных систем»',
        },
        {
          overTitle: 'Базовое высшее образование',
          link: '/bachelor/cybersecurity',
          text: 'Программа «Разработка систем кибербезопасности и реинжиниринг киберфизических систем»',
        },
        {
          overTitle: 'Специализированное высшее образование',
          link: '/master',
          text: 'Программа «Распределённые системы и искусственный интеллект»',
        },
      ],
    },
    {
      link: '/#about',
      text: 'О ВШПИ'
    },
    {
      link: '/#learn',
      text: 'Программа обучения'
    },
    {
      link: '/#team',
      text: 'Команда и менторы'
    },
    {
      link: '/#kakpostupit',
      text: 'Как поступить'
    },
    {
      link: '/#footer',
      text: 'Контакты'
    }
  ],
  cta: {
    link: '/#form',
    text: 'Задать вопрос',
  }
}
