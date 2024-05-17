<template>
  <header
    class="header fixed left-0 top-0 z-[99] flex w-full flex-row border-b-[1px] border-grey-2 bg-white"
  >
    <div
      class="g-container flex w-full items-center justify-between py-3 lg:h-[82px]"
    >
      <nuxt-link to="/" class="header-logo flex items-center gap-2 lg:gap-2.5">
        <img
          src="/public-assets/logo.svg"
          alt="Utopian Logo"
          class="w-10 lg:w-[50px]"
        />
        <div
          class="w-[50px] font-work text-12 font-semibold uppercase tracking-[0.48px] lg:w-auto lg:text-24"
        >
          Utopian tours
        </div>
      </nuxt-link>
      <div
        class="header-menu flex items-center gap-6 text-12 font-[600] uppercase leading-137 tracking-[0.96px] text-dark lg:gap-8 lg:font-work lg:text-16 lg:font-normal lg:tracking-[0.32px]"
      >
        <nuxt-link to="/catalog" class="text-right">experiences</nuxt-link>
        <a
          :href="phoneLink"
          class="flex items-center gap-1 text-right"
          target="_blank"
        >
          <img
            src="/public-assets/whatsapp.svg"
            alt="WhatsApp"
            class="WhatsApp"
          />
          Contact
        </a>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { usePhoneLink } from '~/composables/phone'

const phoneLink = usePhoneLink()
</script>

<style lang="scss"></style>
