<script setup lang="ts">
import { ProgramHero } from '~/widgets/program-hero'
import { FactsBlock } from '~/widgets/facts-block'
import { TargetAudience } from '~/widgets/master/target-audience'
import { AboutProgram } from '~/widgets/master/about-program'
import { AdvantagesBlock } from '~/widgets/advantages'
import { ProgramImplementation } from '~/widgets/master/program-implementation'
import { SalaryRanking } from '~/widgets/master/salary-ranking'
import { StudyDisciplines } from '~/widgets/master/study-disciplines'
import { PeopleSlider } from '~/widgets/people-slider'
import { AdmissionSteps } from '~/widgets/master/admission-steps'
import { MasterApplicationForm } from '~/widgets/master/application-form'
import { hero, programFacts, targetAudience, aboutProgram, studyComponents, programImplementation, salaryRanking, studyDisciplines, admissionFacts, admissionSteps } from '../model/MasterPage.data'
import { programTeam } from '../model/ProgramTeam.data'

const applicationOpen = ref(false)

useSeoMeta({
  title: 'Магистратура «Распределённые системы и ИИ» | ВШПИ МФТИ',
  description: 'Магистерская программа ВШПИ МФТИ «Распределённые системы и ИИ» совместно со СберТех.',
})
</script>

<template>
  <ProgramHero v-bind="hero" @action="applicationOpen = true" />
  <FactsBlock v-bind="programFacts" />
  <TargetAudience v-bind="targetAudience" />
  <AboutProgram v-bind="aboutProgram" />
  <AdvantagesBlock v-bind="studyComponents" />
  <ProgramImplementation v-bind="programImplementation" />
  <SalaryRanking v-bind="salaryRanking" />
  <StudyDisciplines v-bind="studyDisciplines" />
  <FactsBlock v-bind="admissionFacts" />
  <PeopleSlider id="team" v-bind="programTeam" />
  <AdmissionSteps id="kakpostupit" v-bind="admissionSteps" @action="applicationOpen = true" />
  <UiModal v-model="applicationOpen" size="lg" title="Анкета для поступления">
    <MasterApplicationForm />
  </UiModal>
</template>
