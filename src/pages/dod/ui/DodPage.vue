<script setup lang="ts">
import { IntroHero } from '~/widgets/intro-hero'
import { EventDetails } from '~/widgets/event-details'
import { Partners } from '~/widgets/partners'
import { EventProgram } from '~/widgets/event-program'
import { ContactForm } from '~/widgets/contact-form'
import * as dodData from '../model/DodPage.data'

useSeoMeta({
  title: 'День открытых дверей — ВШПИ МФТИ',
  description: 'День открытых дверей Высшей школы программной инженерии МФТИ: знакомство с факультетом, общение со студентами, преподавателями и партнёрами, розыгрыш призов.',
})
</script>

<template>
  <IntroHero v-bind="dodData.hero" />
  <EventDetails v-bind="dodData.eventDetails" />
  <Partners v-bind="dodData.partners" />
  <EventProgram v-bind="dodData.eventProgram" />
  <ContactForm v-bind="dodData.registration" />
</template>
