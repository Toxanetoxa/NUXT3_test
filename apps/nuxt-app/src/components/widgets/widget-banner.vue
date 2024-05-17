<template>
  <section
      class="main-banner w-full h-[504px] relative overflow-hidden flex items-center flex-col justify-center"
  >

    <img
        class="main-banner__img object-cover !w-full !h-full font-bold absolute top-0 left-0"
        loading="lazy"
        :src="props.imgSrc"
        alt="UTOPIAN TOURS"
    />
    <div class="main-banner__content flex flex-col relative mx-auto text-white text-center container items-center z-[2]">
      <img
          class="main-banner__content-logo w-24 h-24 mx-auto mb-[20px] animate-component lg:hidden"
          alt="UTOPIAN TOURS Logo"
          src="/public-assets/LogoWhite.svg"
      />

      <div class="font-work text-32 lg:text-60 font-semibold lg:font-normal uppercase">
        Utopian tours
      </div>
      <img src="/public-assets/subText.svg" alt="unforgettable experiences"
           class="w-[294px] lg:ml-[30%]"
      />
<!--      <img src="/mainBannerSubtitle.svg" alt="unforgettable experiences" class="main-banner__content-subtitle w-[294px] mt-2">-->
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  imgSrc: {
    type: String,
    default: '/mainBanner.jpg'
  }
})
</script>

<style scoped lang="scss">

.main-banner {
  @media (min-width: 1024px) {
    height: calc(90vh - 100px);
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    content: '';
    background: linear-gradient(180deg, rgba(25, 12, 41, 0.00) 0%, rgba(25, 12, 41, 0.61) 49.85%, #190C29 100%);
  }
}
</style>
