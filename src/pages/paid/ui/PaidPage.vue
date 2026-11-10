<script setup lang="ts">
import { IntroHero } from '~/widgets/intro-hero'
import { FactsBlock } from '~/widgets/facts-block'
import { PaidAdmissionSteps } from '~/widgets/paid/admission-steps'
import { EducationCredit } from '~/widgets/paid/education-credit'
import { VideoBlock } from '~/widgets/video-block'
import { ContactForm } from '~/widgets/contact-form'
import { hero, admissionFacts, admissionSteps, educationCredit, video } from '../model/PaidPage.data'

useSeoMeta({
  title: 'Платное обучение — ВШПИ МФТИ',
  description: 'Платное обучение в Высшей школе программной инженерии МФТИ: стоимость, порядок поступления и образовательный кредит с господдержкой.',
})
</script>

<template>
  <IntroHero v-bind="hero" />
  <FactsBlock v-bind="admissionFacts" />
  <PaidAdmissionSteps v-bind="admissionSteps" />
  <EducationCredit v-bind="educationCredit" />
  <VideoBlock v-bind="video" />
  <ContactForm title="Оставить заявку на платное обучение" />
</template>
