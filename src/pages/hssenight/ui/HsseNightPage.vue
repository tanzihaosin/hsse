<script setup lang="ts">
import { IntroHero } from '~/widgets/intro-hero'
import { EventDetails } from '~/widgets/event-details'
import { Partners } from '~/widgets/partners'
import { EventProgram } from '~/widgets/event-program'
import { ContactForm } from '~/widgets/contact-form'
import * as hsseNightData from '../model/HsseNightPage.data'

useSeoMeta({
  title: 'Ночь открытых дверей — ВШПИ МФТИ',
  description: 'Ночь открытых дверей Высшей школы программной инженерии МФТИ: встреча с руководством факультета и студентами.',
})
</script>

<template>
  <IntroHero v-bind="hsseNightData.hero" />
  <EventDetails v-bind="hsseNightData.eventDetails" />
  <Partners v-bind="hsseNightData.partners" />
  <EventProgram v-bind="hsseNightData.eventProgram" />
  <ContactForm v-bind="hsseNightData.registration" />
</template>
