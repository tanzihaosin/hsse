import { z } from 'zod/v4'
import type { AdvantagesBlockProps } from '~/widgets/advantages'
import type { HeroBlockProps } from '~/widgets/home/hero'
import type { VideoBlockProps } from '~/widgets/video-block'
import type { ProjectPracticeProps } from '~/widgets/home/project-practice'
import type { EducationCareerProps } from '~/widgets/education-career'
import type { PeopleSliderProps } from '~/widgets/people-slider'
import type { BestProjectProps } from '~/widgets/home/best-project'
import type { AdmissionPathsProps } from '~/widgets/home/admission-paths'
import type { AdmissionOverviewProps } from '~/widgets/admission-overview'
import type { FactsBlockProps } from '~/widgets/facts-block'
import type { EventsHsseProps } from '~/widgets/home/events-hsse'
import type { FaqBlockProps } from '~/widgets/home/faq-block'
import type { ContactFormProps } from '~/widgets/contact-form'
import type { PromoBlockProps } from '~/widgets/promo-block'

const text = (title: string) => z.string().meta({ title })
const richText = (title: string) => z.string().meta({ title, 'x-field': 'richtext' })
const image = (title: string) => z.string().meta({ title, 'x-field': 'image' })
const link = (title: string) => z.string().meta({ title, 'x-field': 'link' })
const itemId = () => z.string().optional()
const action = z.object({ label: text('Текст ссылки'), to: link('Адрес ссылки') })

const hero = z.object({
  title: text('Заголовок'), description: text('Описание').optional(),
  image: image('Изображение').optional(), imageDecor: image('Декоративное изображение').optional(),
  programs: z.array(z.object({ id: itemId(), badge: text('Тип программы'), title: text('Название'), link: z.object({ to: link('Адрес'), text: text('Текст ссылки').optional() }) })).meta({ title: 'Программы' }),
}) satisfies z.ZodType<HeroBlockProps>

const video = z.object({
  src: link('Адрес видео'), poster: image('Обложка'), mobilePoster: image('Мобильная обложка').optional(),
  label: text('Название кнопки воспроизведения'), title: text('Заголовок').optional(),
}) satisfies z.ZodType<VideoBlockProps>

const advantages = z.object({
  title: text('Заголовок').optional(),
  items: z.array(z.object({ id: itemId(), title: text('Заголовок'), description: text('Описание') })).meta({ title: 'Преимущества' }),
}) satisfies z.ZodType<AdvantagesBlockProps>

const projectPractice = z.object({
  steps: z.array(z.object({ id: itemId(), label: text('Подпись'), labelClass: text('Класс подписи').optional(), height: z.number().meta({ title: 'Высота, %' }), bottomLabel: text('Нижняя подпись').optional(), bottomLabelClass: text('Класс нижней подписи').optional(), content: text('Содержимое').optional() })).meta({ title: 'Этапы' }),
  descriptions: z.array(text('Текст')).meta({ title: 'Описание' }),
}) satisfies z.ZodType<ProjectPracticeProps>

const educationCareer = z.object({
  title: text('Заголовок'), logo: image('Логотип').optional(), logoAlt: text('Описание логотипа').optional(),
  stages: z.array(z.object({
    id: itemId(), title: text('Название этапа'), image: image('Изображение'), introduction: text('Вступление'),
    introductionLink: action.optional(), links: z.array(action).optional(), description: text('Описание').optional(),
    tracks: z.array(z.object({ id: itemId(), title: text('Название').optional(), items: z.array(text('Направление')) })).optional(),
    imagePosition: z.enum(['left', 'right']).optional().meta({ title: 'Положение изображения' }),
  })).meta({ title: 'Этапы' }), action: action.optional(),
}) satisfies z.ZodType<EducationCareerProps>

const people = z.object({
  title: text('Заголовок'),
  groups: z.array(z.object({
    id: text('Идентификатор группы'), label: text('Название группы'),
    people: z.array(z.object({ id: itemId(), name: text('Имя'), description: text('Описание'), photo: image('Фотография').optional() })).meta({ title: 'Люди' }),
  })).optional().meta({ title: 'Группы' }),
}) satisfies z.ZodType<PeopleSliderProps>

const bestProject = z.object({
  title: text('Заголовок'),
  projects: z.array(z.object({ id: itemId(), title: text('Название'), description: text('Описание'), descriptionLink: action.optional(), note: text('Подпись'), image: image('Изображение'), video: link('Адрес видео') })).meta({ title: 'Проекты' }),
}) satisfies z.ZodType<BestProjectProps>

const admissionPaths = z.object({
  title: text('Заголовок'),
  items: z.array(z.object({ id: itemId(), title: text('Название'), preview: text('Краткое описание'), details: text('Подробности'), additional: z.array(text('Пункт')).optional(), conclusion: text('Заключение').optional(), link: action.optional() })).meta({ title: 'Способы поступления' }),
  action: action.optional(),
}) satisfies z.ZodType<AdmissionPathsProps>

const admissionOverview = z.object({
  title: text('Заголовок'),
  items: z.array(z.object({ id: itemId(), label: text('Текст'), wide: z.boolean().optional().meta({ title: 'Широкая карточка' }) })).meta({ title: 'Пункты' }),
}) satisfies z.ZodType<AdmissionOverviewProps>

const facts = z.object({
  title: text('Заголовок').optional(),
  items: z.array(z.object({ id: itemId(), value: text('Значение'), description: text('Описание'), unit: text('Единица').optional(), note: text('Примечание').optional(), compact: z.boolean().optional(), variant: z.enum(['number', 'text']).optional() })).meta({ title: 'Показатели' }),
  note: text('Примечание').optional(),
}) satisfies z.ZodType<FactsBlockProps>

const events = z.object({
  title: text('Заголовок'),
  events: z.array(z.object({ id: itemId(), date: text('Дата для отображения'), datetime: text('Дата в формате ГГГГ-ММ-ДД'), title: text('Название'), paragraphs: z.array(text('Абзац')), image: image('Изображение'), link: link('Адрес'), buttonLabel: text('Текст кнопки').optional() })).meta({ title: 'Мероприятия' }),
}) satisfies z.ZodType<EventsHsseProps>

const faq = z.object({
  title: text('Заголовок'),
  groups: z.array(z.object({ id: itemId(), title: text('Название группы'), questions: z.array(z.object({ id: itemId(), question: text('Вопрос'), answers: z.array(richText('Ответ')) })).meta({ title: 'Вопросы' }) })).meta({ title: 'Группы вопросов' }),
}) satisfies z.ZodType<FaqBlockProps>

const contactForm = z.object({
  title: text('Заголовок').optional(), image: image('Изображение').optional(), privacyUrl: link('Политика обработки данных').optional(),
  registrationClosed: z.boolean().optional().meta({ title: 'Приём вопросов закрыт' }),
}) satisfies z.ZodType<ContactFormProps>

const promo = z.object({
  title: text('Заголовок'), headingAs: z.enum(['h2', 'h3']).optional(), headingVariant: z.enum(['h1', 'h2', 'h3']).optional(), headingClass: text('Класс заголовка').optional(), uppercase: z.boolean().optional(),
  image: image('Изображение').optional(), imageAlt: text('Описание изображения').optional(), text: text('Текст').optional(),
  description: z.array(text('Пункт')).optional(), actions: z.array(action).meta({ title: 'Ссылки' }),
}) satisfies z.ZodType<PromoBlockProps>

// У партнёров два варианта логотипа; форма CMS не поддерживает этот union без дискриминатора.
export const homeBlockSchemas: Record<string, z.ZodType> = {
  'home.hero': hero, video, advantages, 'home.project-practice': projectPractice,
  'education-career': educationCareer, 'people-slider': people, 'home.best-project': bestProject,
  'home.admission-paths': admissionPaths, 'admission-overview': admissionOverview, facts,
  'home.events': events, 'home.faq': faq, 'contact-form': contactForm, promo,
}
