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

export const homeBlockComponents: Record<string, Component> = {
  'home.hero': HeroBlock,
  video: VideoBlock,
  advantages: AdvantagesBlock,
  'home.project-practice': ProjectPractice,
  partners: Partners,
  'education-career': EducationCareer,
  'people-slider': PeopleSlider,
  'home.best-project': BestProject,
  'home.admission-paths': AdmissionPaths,
  'admission-overview': AdmissionOverview,
  facts: FactsBlock,
  'home.events': EventsHsse,
  'home.faq': FaqBlock,
  'contact-form': ContactForm,
  promo: PromoBlock,
}
