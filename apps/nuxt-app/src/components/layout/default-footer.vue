<template>
  <footer class="footer mt-auto">
    <div
      class="g-container-recessed flex justify-between py-6 lg:pb-10 lg:pt-[100px]"
    >
      <div class="logo">
        <nuxt-link
          to="/"
          class="header-logo flex items-center gap-2 lg:gap-2.5"
        >
          <img
            src="/public-assets/logo.svg"
            alt="Utopian Logo"
            class="w-10 lg:w-[68px]"
          />
          <div
            class="w-[50px] font-work text-12 font-semibold uppercase tracking-[0.72px] lg:w-auto lg:text-[36px]"
          >
            Utopian tours
          </div>
        </nuxt-link>
      </div>

      <div class="grid items-end gap-3">
        <a
          :href="phoneLink"
          class="mb-1 flex h-11 items-center justify-center gap-1 rounded border border-dark pl-3 pr-4 text-14 tracking-[1.12px] lg:text-16"
          target="_blank"
        >
          <img src="/public-assets/icons/phone.svg" class="w-[30px]" />
          {{ phone }}
        </a>
        <a
          :href="phoneLink"
          class="text-right leading-137 lg:text-24 lg:leading-110"
          target="_blank"
          >WhatsApp</a
        >
        <a href="" class="text-right leading-137 lg:text-24 lg:leading-110"
          >Telegram</a
        >
      </div>
    </div>

    <div class="g-container-recessed">
      <ui-separator />
    </div>

    <div
      class="g-container-recessed flex items-center justify-between py-6 text-12 leading-130 text-grey-1 lg:py-10"
    >
      <div>© {{ year }} All Rights Reserved</div>

      <a href="/terms">Legal terms</a>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { usePhone, usePhoneLink } from '~/composables/phone'

const year = new Date().getFullYear()
const phone = usePhone()
const phoneLink = usePhoneLink()
</script>

<style lang="scss"></style>
