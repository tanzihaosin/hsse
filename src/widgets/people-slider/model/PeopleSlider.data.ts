import type { PeopleGroup } from './PeopleSlider.types'
import { typograf } from '~/shared/lib/typograf'

export const peopleGroups: PeopleGroup[] = [
    { id: 'team', label: typograf("команда ВШПИ"), people: [
      { name: typograf("Малеев Алексей Викторович"), description: typograf("Директор Высшей школы программной инженерии МФТИ"), photo: '/images/people-slider/maleev.png' },
      { name: typograf("Здорик Анастасия Сергеевна"), description: typograf("Заместитель директора по учебно-воспитательной работе"), photo: '/images/people-slider/zdorik.png' },
      { name: typograf("Дудкин Алексей Игоревич"), description: typograf("Ведущий специалист"), photo: '/images/people-slider/dudkin.png' },
      { name: typograf("Созыкин Андрей Владимирович"), description: typograf("Доцент"), photo: '/images/people-slider/sozykin.png' },
      { name: typograf("Толмачева Елена Васильевна"), description: typograf("Менеджер, организация учебного процесса"), photo: '/images/people-slider/tolmacheva.png' },
      { name: typograf("Тимохин Владимир Николаевич"), description: typograf("Профессор"), photo: '/images/people-slider/timokhin.png' },
      { name: typograf("Козлов Климентий Андреевич"), description: typograf("Менеджер, организация внеучебных мероприятий"), photo: '/images/people-slider/kozlov.png' },
    ] },
    { id: 'mentors', label: typograf("преподаватели и менторы"), people: [
      { name: typograf("Виктор Кантор"), description: typograf("Машинное обучение, 2 курс"), photo: '/images/people-slider/kantor.png' },
      { name: typograf("Павел Нефедов"), description: typograf("Исполнительный директор «Управления продуктовых решений Сбер»; Мобильная разработка, 3 курс"), photo: '/images/people-slider/nefedov.png' },
      { name: typograf("Сергей Бережной"), description: typograf("Директор по взаимодействию с разработчиками Яндекс; Фронтенд-разработка, 1-2 курс"), photo: '/images/people-slider/berezhnoy.png' },
      { name: typograf("Евгений Горбатов"), description: typograf("Ведущий разработчик; Программирование на Go, 2 курс"), photo: '/images/people-slider/gorbatov.png' },
      { name: typograf("Сурен Калайчьян"), description: typograf("Backend-разработчик; Программирование на языке Java, 1 курс"), photo: '/images/people-slider/kalaychyan.png' },
      { name: typograf("Сергей Кольцов"), description: typograf("Flutter TeamLead, Яндекс; Программирование на Flutter, 2 курс"), photo: '/images/people-slider/koltsov.png' },
      { name: typograf("Гагаринов Даниил"), description: typograf("Старший разработчик Яндекс, Программирование на языке С++, 1 курс"), photo: '/images/people-slider/gagarinov.png' },
      { name: typograf("Кулапин Артур"), description: typograf("Разработчик в команде ML-интеграции автономного транспорта Яндекс, Алгоритмы и структуры данных, 1 курс"), photo: '/images/people-slider/kulapin.png' },
      { name: typograf("Рухадзе Альбина"), description: typograf("Руководитель подгруппы разработки, Базы данных, 1 курс"), photo: '/images/people-slider/rukhadze.png' },
      { name: typograf("Овчинников Сергей"), description: typograf("Инфраструктура машинного обучения, 3 курс"), photo: '/images/people-slider/ovchinnikov.png' },
      { name: typograf("Алексей Усанов"), description: typograf("руководитель лаборатории реверс-инжиниринга Positive Labs, Positive Technologies"), photo: '/images/people-slider/usanov.png' },
      { name: typograf("Сергей Лебедев"), description: typograf("директор по продуктам, Positive Technologies"), photo: '/images/people-slider/lebedev.png' },
    ] },
]
