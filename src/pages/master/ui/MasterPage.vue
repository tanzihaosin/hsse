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
import * as masterData from '../model/MasterPage.data'
import * as programTeamData from '../model/ProgramTeam.data'

const applicationOpen = ref(false)

useSeoMeta({
  title: 'Магистратура «Распределённые системы и ИИ» | ВШПИ МФТИ',
  description: 'Магистерская программа ВШПИ МФТИ «Распределённые системы и ИИ» совместно со СберТех.',
})
</script>

<template>
  <ProgramHero v-bind="masterData.hero" @action="applicationOpen = true" />
  <FactsBlock v-bind="masterData.programFacts" />
  <TargetAudience v-bind="masterData.targetAudience" />
  <AboutProgram v-bind="masterData.aboutProgram" />
  <AdvantagesBlock v-bind="masterData.studyComponents" />
  <ProgramImplementation v-bind="masterData.programImplementation" />
  <SalaryRanking v-bind="masterData.salaryRanking" />
  <StudyDisciplines v-bind="masterData.studyDisciplines" />
  <FactsBlock v-bind="masterData.admissionFacts" />
  <PeopleSlider id="team" v-bind="programTeamData.programTeam" />
  <AdmissionSteps id="kakpostupit" v-bind="masterData.admissionSteps" @action="applicationOpen = true" />
  <UiModal v-model="applicationOpen" size="lg" title="Анкета для поступления">
    <MasterApplicationForm />
  </UiModal>
</template>
