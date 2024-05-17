<template>
  <section
      class="pt-10 pb-20 px-2 flex flex-col gap-6"
  >
    <h3 class="text-32 font-serif leading-110 lg:text-60">
      {{ texts.textBlock2Title }}
    </h3>
    <div class="booking-content flex flex-col gap-[14px]">

      <div class="booking-content__item flex flex-row gap-3 lg:gap-4 items-start" v-for="([image, text], index) in items" :key="index">
        <img :src="image" alt="icon" class="lg:w-8 flex-shrink-0" >
        <span class="text-grey-1 text-16 leading-137 lg:leading-110 lg:text-24 lg:font-light lg:pt-1">
          {{ text }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import texts from '~/texts/home.json'

const getIcon = (icon: string) => {
  return `/public-assets/icons/${icon}.svg`
}

const items = texts.textBlock2Elements.map(x => {
  return [
    getIcon(x.icons),
    x.text
  ]
})
</script>


<style scoped lang="scss">

</style>
