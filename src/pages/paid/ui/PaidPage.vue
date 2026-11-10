<script setup lang="ts">
import { IntroHero } from '~/widgets/intro-hero'
import { FactsBlock } from '~/widgets/facts-block'
import { PaidAdmissionSteps } from '~/widgets/paid/admission-steps'
import { EducationCredit } from '~/widgets/paid/education-credit'
import { VideoBlock } from '~/widgets/video-block'
import { ContactForm } from '~/widgets/contact-form'
import * as paidData from '../model/PaidPage.data'

useSeoMeta({
  title: 'Платное обучение — ВШПИ МФТИ',
  description: 'Платное обучение в Высшей школе программной инженерии МФТИ: стоимость, порядок поступления и образовательный кредит с господдержкой.',
})
</script>

<template>
  <IntroHero v-bind="paidData.hero" />
  <FactsBlock v-bind="paidData.admissionFacts" />
  <PaidAdmissionSteps v-bind="paidData.admissionSteps" />
  <EducationCredit v-bind="paidData.educationCredit" />
  <VideoBlock v-bind="paidData.video" />
  <ContactForm title="Оставить заявку на платное обучение" />
</template>
