<template>
  <section
      class="default-gallery fixed top-0 left-0 z-[1000] max-h-screen h-full w-full overflow-hidden flex flex-col bg-white"
  >
    <div class="default-gallery__header w-full h-[74px] px-6 py-[15px] flex flex-row items-center bg-dark select-none">
      <div class="slider-navigation flex flex-row gap-[49px] shrink w-full h-full items-center pl-11">
        <span class="button-prev relative flex shrink w-full h-full items-center justify-end cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
            <path d="M8.13355 14.1335L2 8L8.11457 1.88543" stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                  stroke-linecap="square" stroke-linejoin="round"/>
          </svg>
        </span>
        <span class="button-next flex relative shrink w-full h-full items-center justify-start cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
            <path d="M3.86645 1.86649L10 8L3.88543 14.1146" stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                  stroke-linecap="square" stroke-linejoin="round"/>
          </svg>
        </span>
      </div>
      <span @click.stop="close" class="cursor-pointer w-11 h-11">
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12.5316 30.409L12.0013 30.9393L13.0619 32L13.5922 31.4697L22.0008 23.0611L30.409 31.4693L30.9393 31.9996L32 30.939L31.4697 30.4086L23.0615 22.0004L31.4697 13.5922L32 13.0619L30.9393 12.0013L30.409 12.5316L22.0008 20.9398L13.5922 12.5312L13.0619 12.0009L12.0013 13.0615L12.5316 13.5919L20.9402 22.0004L12.5316 30.409Z"
                fill="white"/>
        </svg>
      </span>
    </div>
    <div class="default-gallery__body h-full flex justify-center items-center bg-dark/80">
      <swiper
          :pagination="swiperConfig.pagination"
          :navigation="swiperConfig.navigation"
          :space-between="swiperConfig.spaceBetween"
          :loop="swiperConfig.loop"
          :modules="modules"
          class="swiper max-w-[600px] w-full overflow-hidden"
      >
        <swiper-slide
            v-for="(item, index) in props.items"
            :key="index"
            class="flex items-center justify-center"
        >
          <img
              :src="item"
              alt="tours gallery"
              loading="lazy"
              class="object-cover select-none max-w-[600px] w-full max-h-[560px] cursor-grab"
          />
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/scss'

const modules = ref([Pagination, Navigation])

const props = defineProps({
  items: {
    type: Array as () => string[],
    default: () => []
  }
})

const emit = defineEmits(['close-gallery'])
const close = () => {
  emit('close-gallery')
}

const swiperConfig = ref({
  pagination: {
    type: 'fraction',
    clickable: false,
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  spaceBetween: 50,
  loop: true
})
</script>

<style scoped lang="scss">
.swiper-pagination-fraction {
  display: flex;
  width: 33px;
  position: absolute;
  top: 29px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  justify-content: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 114.286%;
}
</style>