<script setup lang="ts">
import { ProgramHero } from '~/widgets/program-hero'
import { ContactForm } from '~/widgets/contact-form'
import { AdvantagesBlock } from '~/widgets/advantages'
import { Partners } from '~/widgets/partners'
import { ProjectPractice } from '~/widgets/project-practice'
import { EducationCareer } from '~/widgets/education-career'
import { PromoBlock } from '~/widgets/promo-block'
import { advantages, educationCareer, flagshipProgram, hero, partners, projectPractice, subjects } from '../model/SoftwareSystemsPage.data'

useSeoMeta({
  title: 'Разработка программно-информационных систем — бакалавриат | ВШПИ МФТИ',
  description: 'Бакалавриат ВШПИ МФТИ по специализации «Разработка программно-информационных систем»: искусственный интеллект, высоконагруженные системы, фронтенд и мобильная разработка, системная разработка ПО.',
})
</script>

<template>
  <ProgramHero v-bind="hero" />
  <AdvantagesBlock v-bind="advantages" />
  <Partners v-bind="partners" />
  <section class="container" aria-label="Дисциплины программы">
    <ul class="flex flex-wrap justify-center gap-5 md:justify-start">
      <UiBadge v-for="subject in subjects" :key="subject" as="li" variant="outline" class="bg-primary! px-4! text-base!">{{ subject }}</UiBadge>
    </ul>
  </section>
  <ProjectPractice v-bind="projectPractice" />
  <PromoBlock v-bind="flagshipProgram">
    <template #image>
      <div class="flex w-60 max-w-full shrink-0 flex-col items-center gap-8 self-center">
        <NuxtPicture src="/images/promo/graduation-cap.webp" alt="" class="w-46 max-w-full" :img-attrs="{ class: 'h-auto w-full' }" />
        <NuxtPicture src="/images/promo/mincifry.webp" alt="Минцифры России" class="w-full" :img-attrs="{ class: 'h-auto w-full' }" />
      </div>
    </template>
  </PromoBlock>
  <EducationCareer v-bind="educationCareer" />
  <ContactForm />
</template>
