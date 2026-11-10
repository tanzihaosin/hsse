import type { Component } from 'vue'
import { ContactForm } from '~/widgets/contact-form'
import { PromoBlock } from '~/widgets/promo-block'
import { AdvantagesBlock } from '~/widgets/advantages'
import { HeroBlock } from '~/widgets/home/hero'
import { VideoBlock } from '~/widgets/video-block'
import { ProjectPractice } from '~/widgets/home/project-practice'
import { Partners } from '~/widgets/partners'
import { EducationCareer } from '~/widgets/education-career'
import { PeopleSlider } from '~/widgets/people-slider'
import { BestProject } from '~/widgets/home/best-project'
import { AdmissionPaths } from '~/widgets/home/admission-paths'
import { AdmissionOverview } from '~/widgets/admission-overview'
import { FactsBlock } from '~/widgets/facts-block'
import { EventsHsse } from '~/widgets/home/events-hsse'
import { FaqBlock } from '~/widgets/home/faq-block'

interface BlockDefinition {
  type: string
  title: string
  category: 'hero' | 'content' | 'media' | 'people' | 'cards' | 'faq' | 'cta' | 'partners' | 'contacts'
  schemaVersion: number
  component: Component
}

export const homeBlockDefinitions: BlockDefinition[] = [
  { type: 'home.hero', title: 'Главный экран', category: 'hero', schemaVersion: 1, component: HeroBlock },
  { type: 'video', title: 'Видео', category: 'media', schemaVersion: 1, component: VideoBlock },
  { type: 'advantages', title: 'Преимущества', category: 'cards', schemaVersion: 1, component: AdvantagesBlock },
  { type: 'home.project-practice', title: 'Проектная практика', category: 'content', schemaVersion: 1, component: ProjectPractice },
  { type: 'partners', title: 'Партнёры', category: 'partners', schemaVersion: 1, component: Partners },
  { type: 'education-career', title: 'Обучение и карьера', category: 'content', schemaVersion: 1, component: EducationCareer },
  { type: 'people-slider', title: 'Команда и менторы', category: 'people', schemaVersion: 1, component: PeopleSlider },
  { type: 'home.best-project', title: 'Студенческие проекты', category: 'cards', schemaVersion: 1, component: BestProject },
  { type: 'home.admission-paths', title: 'Способы поступления', category: 'content', schemaVersion: 1, component: AdmissionPaths },
  { type: 'admission-overview', title: 'Кратко о приёме', category: 'cards', schemaVersion: 1, component: AdmissionOverview },
  { type: 'facts', title: 'Факты и показатели', category: 'cards', schemaVersion: 1, component: FactsBlock },
  { type: 'home.events', title: 'Мероприятия ВШПИ', category: 'cards', schemaVersion: 1, component: EventsHsse },
  { type: 'home.faq', title: 'Частые вопросы', category: 'faq', schemaVersion: 1, component: FaqBlock },
  { type: 'contact-form', title: 'Форма вопроса', category: 'contacts', schemaVersion: 1, component: ContactForm },
  { type: 'promo', title: 'Промоблок', category: 'cta', schemaVersion: 1, component: PromoBlock },
]

export const homeBlockComponents: Record<string, Component> = Object.fromEntries(
  homeBlockDefinitions.map(({ type, component }) => [type, component]),
)
