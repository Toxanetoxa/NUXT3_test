<template>
  <section class="banner-card w-full flex flex-col gap-4">
    <div class="w-full h-[460px] overflow-hidden">
      <img :src="card.mainImage" :alt="card.title" class="banner-card__img object-cover !w-full !h-full">
    </div>
    <div class="banner-card__info flex flex-col gap-2 px-6">
      <div class="banner-card__info-title flex flex-row justify-between gap-2">
        <h3
            class="text-black text-32 font-normal font-serif leading-110 not-italic"
        >{{ card.title }}</h3>
        <span
            v-if="showPrice"
            class="text-right text-16 not-italic text-dark text-base font-[600] font-sans leading-snug whitespace-nowrap"
        >
          {{ `${card.price} $` }}
        </span>
      </div>
      <span
          v-if="showDuration && formattedTime"
          class="banner-card__info-duration text-grey-1 text-16 text-base font-normal font-sans leading-110"
      >
        {{ formattedTime }}
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
import type {TravelCard} from '~/@types/TravelCard'
import {computed} from "vue";

const props = defineProps({
  card: {
    type: Object as () => TravelCard,
    default: () => {
    }
  },
  showPrice: {
    type: Boolean,
    default: false,
  },
  showDuration: {
    type: Boolean,
    default: false,
  }
})

const formattedTime = computed(() => {
  const days:number = Math.floor(props.card.duration / (24 * 60))
  const hours:number = Math.floor((props.card.duration % (24 * 60)) / 60)
  const minutes:number = props.card.duration % 60
  const result = `${days? days + ' days' : ''} ${hours? hours + ' hours' : ''} ${minutes? minutes + ' minutes' : ''}`
  return result.trim()
})
</script>

<style scoped lang="scss">

</style>