<script setup lang="ts">
import { telegramPromo, admissionOverview, admissionPaths, advantages, bestProjects, educationCareer, eventsHsse, factsBlocks, faq, hero, partners, peopleSlider, projectPractice, video } from '../model/HomePage.data'
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

useSeoMeta({
  description: 'Высшая школа программной инженерии МФТИ: образовательные программы, проектная практика, команда и условия поступления.',
})
</script>

<template>
  <HeroBlock v-bind="hero" />
  <VideoBlock id="about" v-bind="video" />
  <AdvantagesBlock id="learn" v-bind="advantages" />
  <ProjectPractice v-bind="projectPractice" />
  <Partners v-bind="partners" />
  <EducationCareer v-bind="educationCareer" />
  <PeopleSlider id="team" v-bind="peopleSlider" />
  <BestProject v-bind="bestProjects" />
  <AdmissionPaths id="kakpostupit" v-bind="admissionPaths" />
  <AdmissionOverview v-bind="admissionOverview" />
  <FactsBlock v-for="block in factsBlocks" :key="block.title" v-bind="block" />
  <EventsHsse v-bind="eventsHsse" />
  <FaqBlock v-bind="faq" />
  <ContactForm />
  <PromoBlock v-bind="telegramPromo" />
</template>
