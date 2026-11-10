<script setup lang="ts">
import * as homeData from '../model/HomePage.data'
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
  <HeroBlock v-bind="homeData.hero" />
  <VideoBlock id="about" v-bind="homeData.video" />
  <AdvantagesBlock id="learn" v-bind="homeData.advantages" />
  <ProjectPractice v-bind="homeData.projectPractice" />
  <Partners v-bind="homeData.partners" />
  <EducationCareer v-bind="homeData.educationCareer" />
  <PeopleSlider id="team" v-bind="homeData.peopleSlider" />
  <BestProject v-bind="homeData.bestProjects" />
  <AdmissionPaths id="kakpostupit" v-bind="homeData.admissionPaths" />
  <AdmissionOverview v-bind="homeData.admissionOverview" />
  <FactsBlock v-for="block in homeData.factsBlocks" :key="block.title" v-bind="block" />
  <EventsHsse v-bind="homeData.eventsHsse" />
  <FaqBlock v-bind="homeData.faq" />
  <ContactForm />
  <PromoBlock v-bind="homeData.telegramPromo" />
</template>
