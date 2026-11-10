<script setup lang="ts">
import { IntroHero } from '~/widgets/intro-hero'
import { EventDetails } from '~/widgets/event-details'
import { Partners } from '~/widgets/partners'
import { EventProgram } from '~/widgets/event-program'
import { ContactForm } from '~/widgets/contact-form'
import { hero, eventDetails, partners, eventProgram, registration } from '../model/DodPage.data'

useSeoMeta({
  title: 'День открытых дверей — ВШПИ МФТИ',
  description: 'День открытых дверей Высшей школы программной инженерии МФТИ: знакомство с факультетом, общение со студентами, преподавателями и партнёрами, розыгрыш призов.',
})
</script>

<template>
  <IntroHero v-bind="hero" />
  <EventDetails v-bind="eventDetails" />
  <Partners v-bind="partners" />
  <EventProgram v-bind="eventProgram" />
  <ContactForm v-bind="registration" />
</template>
