<script setup lang="ts">
import { theFooterData } from '../model/TheFooter.data'

const baseURL = useRuntimeConfig().app.baseURL
const currentYear = useState('footer-year', () => new Date().getFullYear())
onMounted(() => { currentYear.value = new Date().getFullYear() })

function legalHref(to: string, localFile?: boolean) {
  return localFile ? `${baseURL.replace(/\/$/, '')}${to}` : to
}
</script>

<template>
  <footer id="footer" class="container mt-16">
    <div class="grid gap-10 border-t border-stroke py-10 md:grid-cols-2 lg:grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,1fr))] lg:gap-10 lg:pt-16 lg:pb-11">
      <div class="flex items-start gap-8 sm:gap-10">
        <UiAction v-for="logo in theFooterData.logos" :key="logo.to" :to="logo.to" :aria-label="logo.label" variant="custom" size="custom" class="w-23 shrink-0 sm:w-27">
          <UiSvg :name="logo.icon" class="h-auto w-full" />
        </UiAction>
      </div>

      <nav aria-label="Навигация в подвале">
        <ul class="flex flex-col gap-5 text-xs lg:gap-7">
          <li v-for="link in theFooterData.navigation" :key="link.to">
            <UiAction :to="link.to" variant="link" size="custom">{{ link.label }}</UiAction>
          </li>
        </ul>
      </nav>

      <div class="flex flex-col items-start">
        <UiText variant="caption">Номер дирекции:</UiText>
        <UiAction :to="theFooterData.phone.to" target="_self" variant="link" size="custom" class="mt-2">{{ theFooterData.phone.label }}</UiAction>
        <UiText variant="caption" class="mt-1">{{ theFooterData.phone.hours }}</UiText>
        <UiAction :to="`mailto:${theFooterData.email}`" target="_self" variant="link" size="custom" class="mt-8">{{ theFooterData.email }}</UiAction>
        <UiText variant="caption" class="mt-8 max-w-52 leading-4">{{ theFooterData.address }}</UiText>
      </div>

      <div class="flex flex-col items-start">
        <UiText variant="caption">Мы в соцсетях:</UiText>
        <ul class="mt-3 flex flex-wrap gap-3">
          <li v-for="social in theFooterData.socialLinks" :key="social.to">
            <UiAction :to="social.to" :aria-label="social.label" variant="custom" size="custom" class="size-10 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground">
              <UiSvg :name="social.icon" :class="social.icon === 'social-max' ? 'size-10 rounded-full border border-foreground p-2.5' : 'size-10'" />
            </UiAction>
          </li>
        </ul>
        <ul class="mt-8 flex flex-col gap-2 text-xs">
          <li v-for="link in theFooterData.legalLinks" :key="link.to">
            <UiAction :to="legalHref(link.to, link.localFile)" external target="_blank" variant="link" size="custom" class="inline! text-left underline underline-offset-2">{{ link.label }}</UiAction>
          </li>
        </ul>
        <UiText variant="caption" class="mt-auto pt-10">Copyright © {{ currentYear }} МФТИ</UiText>
      </div>
    </div>
  </footer>
</template>
