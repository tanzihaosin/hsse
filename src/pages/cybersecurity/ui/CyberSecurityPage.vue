<script setup lang="ts">
import { ProgramHero } from '~/widgets/program-hero'
import { AdvantagesBlock } from '~/widgets/advantages'
import { ProjectPractice } from '~/widgets/project-practice'
import { PromoBlock } from '~/widgets/promo-block'
import { EducationCareer } from '~/widgets/education-career'
import { ContactForm } from '~/widgets/contact-form'
import { PartnerIntro } from '~/widgets/cybersecurity/partner-intro'
import * as cyberSecurityData from '../model/CyberSecurityPage.data'

useSeoMeta({
  title: 'Разработка систем кибербезопасности и реинжиниринг киберфизических систем — бакалавриат | ВШПИ МФТИ',
  description: 'Программа ВШПИ МФТИ по кибербезопасности и реверс-инжинирингу совместно с Positive Technologies.',
})
</script>

<template>
  <div>
    <ProgramHero v-bind="cyberSecurityData.hero" />
    <PartnerIntro v-bind="cyberSecurityData.partnerDescription" />
  </div>
  <AdvantagesBlock v-bind="cyberSecurityData.advantages" />
  <section class="container" aria-label="Дисциплины программы">
    <ul class="flex flex-wrap justify-center gap-5 md:justify-start">
      <UiBadge v-for="subject in cyberSecurityData.subjects" :key="subject" as="li" variant="outline" class="bg-primary! px-4! text-base!">{{ subject }}</UiBadge>
    </ul>
  </section>
  <ProjectPractice v-bind="cyberSecurityData.projectPractice" />
  <PromoBlock v-bind="cyberSecurityData.flagshipProgram">
    <template #image>
      <div class="flex w-60 max-w-full shrink-0 flex-col items-center gap-8 self-center">
        <NuxtPicture src="/images/promo/graduation-cap.webp" alt="" class="w-46 max-w-full" :img-attrs="{ class: 'h-auto w-full' }" />
        <NuxtPicture src="/images/promo/mincifry.webp" alt="Минцифры России" class="w-full" :img-attrs="{ class: 'h-auto w-full' }" />
      </div>
    </template>
  </PromoBlock>
  <EducationCareer v-bind="cyberSecurityData.educationCareer" />
  <ContactForm />
</template>
