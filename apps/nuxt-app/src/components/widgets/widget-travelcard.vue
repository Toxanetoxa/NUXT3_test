<template>
  <div class="travel-card relative flex flex-col gap-4 overflow-hidden">
    <nuxt-link
      :to="`/catalog/${card.slug}`"
      class="absolute left-0 top-0 z-10 h-full w-full cursor-pointer"
    >
    </nuxt-link>

    <div class="relative z-0 w-full overflow-hidden rounded pt-[100%]">
      <img
        :src="card.mainImage"
        :alt="card.title"
        class="travel-card__img absolute left-0 top-0 h-full w-full object-cover"
      />
    </div>

    <div class="travel-card__info z-10 flex flex-col gap-2">
      <div class="travel-card__info-title flex flex-row justify-between gap-2">
        <h3 class="font-serif text-24 font-medium text-dark lg:font-normal">
          {{ card.title }}
        </h3>
        <span
          v-if="showPrice"
          class="whitespace-nowrap text-right font-sans text-base font-[600] leading-snug text-dark"
        >
          {{ `${card.price} rub` }}
        </span>
      </div>
      <span
        v-if="showDuration && formattedTime"
        class="travel-card__info-duration font-sans text-16 text-base font-normal leading-110 text-grey-1 lg:opacity-50"
      >
        {{ formattedTime }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatTime } from '#imports'
import { computed } from 'vue'

import type { TravelCard } from '~/@types/TravelCard'

const props = defineProps({
  card: {
    type: Object as () => TravelCard,
    default: () => {},
  },
  showPrice: {
    type: Boolean,
    default: true,
  },
  showDuration: {
    type: Boolean,
    default: true,
  },
})

const formattedTime = computed(() => {
  formatTime(props.card.duration)
})
</script>

<style scoped lang="scss"></style>
