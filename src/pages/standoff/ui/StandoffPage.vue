<script setup lang="ts">
import { IntroHero } from '~/widgets/intro-hero'
import { EventProgram } from '~/widgets/event-program'
import { ContactForm } from '~/widgets/contact-form'
import { Partners } from '~/widgets/partners'
import { hero, stages, partners, competitionLink, competitionLinkLabel, introduction, stagesTitle, competitionStages, rules, rulesLink, rulesLabel, eventProgram, registration, contacts } from '../model/StandoffPage.data'

useSeoMeta({
  title: 'Standoff Young — ВШПИ МФТИ',
  description: 'Соревнование для студентов, поступивших в 2026 году, на программы подготовки топ-специалистов в сфере ИТ уровней «ТОП ИТ „Старт“» и «ТОП ИТ „ПРО“»',
})
</script>

<template>
  <IntroHero v-bind="hero" />

  <section class="container" aria-label="Информация о мероприятии">
    <ul class="grid gap-5 md:grid-cols-3">
      <li v-for="stage in stages" :key="stage" class="relative flex min-h-24 items-center border-l border-stroke py-3 pl-8 before:absolute before:top-0 before:left-0 before:size-1.5 before:-translate-x-1/2 before:rounded-full before:bg-foreground after:absolute after:bottom-0 after:left-0 after:size-1.5 after:-translate-x-1/2 after:rounded-full after:bg-foreground md:min-h-28">
        <UiText variant="custom" class="font-dewi-extended text-base leading-[1.1] font-bold whitespace-pre-line sm:text-xl">{{ stage }}</UiText>
      </li>
    </ul>
  </section>

  <Partners v-bind="partners" />

  <section class="container flex flex-col items-center" aria-label="О соревновании">
    <div class="max-w-240 text-center text-base sm:text-xl sm:leading-normal">
      <UiText variant="custom"><UiAction :to="competitionLink" variant="link" size="custom" class="inline! underline">{{ competitionLinkLabel }}</UiAction> {{ introduction }}</UiText>
      <UiText variant="custom" class="mt-6">{{ stagesTitle }}</UiText>
      <ol class="mt-3 list-decimal space-y-2 pl-6 text-left">
        <li v-for="stage in competitionStages" :key="stage"><UiText variant="custom">{{ stage }}</UiText></li>
      </ol>
      <UiText variant="custom" class="mt-6">{{ rules }}</UiText>
    </div>
    <UiAction :to="rulesLink" target="_blank" post-icon="arrow-up" class="mt-10">{{ rulesLabel }}</UiAction>
  </section>

  <EventProgram v-bind="eventProgram" />
  <ContactForm v-bind="registration" />

  <section class="container" aria-label="Контакты организаторов">
    <div class="space-y-4">
      <UiText v-for="contact in contacts" :key="contact.email">
        {{ contact.text }} <UiAction :to="`mailto:${contact.email}`" variant="link" size="custom" class="inline! underline">{{ contact.email }}</UiAction>).
      </UiText>
    </div>
  </section>
</template>
