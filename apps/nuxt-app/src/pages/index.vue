<template>
  <widget-banner />

  <main class="relative flex flex-col items-center">
    <div class="g-container-recessed grid lg:grid-cols-2">
      <div></div>
      <section
        class="text-block animate-component mx-auto mb-10 flex w-full max-w-[600px] flex-col items-center gap-4 px-6 pt-14 lg:mb-[100px]"
      >
        <h3 class="font-serif text-32 leading-110 lg:indent-[20%] lg:text-60">
          {{ texts.firstBlock.title }}
        </h3>
        <p
          class="line-clamp-6 overflow-hidden text-ellipsis leading-137 text-grey-1 lg:text-24 lg:font-light lg:leading-110"
        >
          {{ texts.firstBlock.content }}
        </p>
      </section>
    </div>

    <div
      class="my-10 w-full max-w-screen-lg px-4 lg:mx-auto lg:mb-[100px] lg:w-full lg:max-w-screen-2xl lg:px-0"
    >
      <section
        class="promo-tours flex w-full flex-col items-center gap-4 lg:flex-row lg:gap-0"
      >
        <widget-promocard v-for="item in cardsData" :card="item" />
      </section>
    </div>

    <div class="g-container-recessed grid lg:my-[100px] lg:grid-cols-2">
      <div></div>
      <widget-booking />
    </div>
  </main>
  <widget-needanyhelp />
</template>

<script lang="ts" setup>
import type { PromoCard } from '~/@types/PromoCard'
import WidgetBanner from '~/components/widgets/widget-banner.vue'
import WidgetBooking from '~/components/widgets/widget-booking.vue'
import WidgetNeedanyhelp from '~/components/widgets/widget-needanyhelp.vue'
import WidgetPromocard from '~/components/widgets/widget-promocard.vue'
import texts from '~/texts/home.json'

const cardsData: PromoCard[] = [
  {
    imgSrc: '/promoTours.png',
    title: texts.leftPanel.title,
    description: texts.leftPanel.description,
    url: texts.leftPanel.url,
    buttonText: texts.leftPanel.cta,
    isScrim: true,
  },
  {
    imgSrc: '/promoExpedition.png',
    title: texts.rightPanel.title,
    description: texts.rightPanel.description,
    url: texts.rightPanel.url,
    buttonText: texts.rightPanel.cta,
    isScrim: true,
  },
]
</script>

<style lang="scss"></style>
