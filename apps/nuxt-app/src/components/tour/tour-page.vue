<template>
  <div class="">
    <div class="grid gap-6 lg:grid-cols-2 lg:gap-8">
      <div class="relative z-0 overflow-hidden pt-[100%]">
        <img
          :src="tour.mainImage"
          :alt="tour.title"
          class="travel-card__img absolute left-0 top-0 h-full w-full object-cover tracking-[-2.6px]"
        />
      </div>

      <div class="content g-container flex flex-col items-start lg:px-0">
        <div
          class="title mb-2 text-32 leading-[0.9] lg:mb-8 lg:pt-4 lg:text-[72px] 2xl:text-[130px]"
        >
          {{ tour.title }}
        </div>
        <div class="text-dark/50 lg:pl-2">
          {{ formattedTime }}
        </div>

        <ui-button class="mt-auto hidden min-w-[400px] lg:flex" size="medium">
          Book Now
        </ui-button>
      </div>
    </div>

    <div class="g-container">
      <text-block>
        <template #title>
          {{ tour.descriptionTitle }}
        </template>
        <template #default>
          {{ tour.description }}
        </template>
      </text-block>
    </div>

    <div class="gallery grid" :class="[`gallery--${gallery.length}`]">
      <div
        v-for="(image, index) in gallery"
        :key="index"
        class="gallery-image relative overflow-hidden"
      >
        <img
          :src="image.large"
          alt="gallery image"
          class="absolute left-0 top-0 z-10"
        />
        <img
          :src="image.thumbnail"
          alt="gallery image"
          class="absolute left-0 top-0 z-0"
        />
      </div>
    </div>

    <div class="g-container">
      <text-block separator>
        <template #title>
          {{ tour.includedTitle }}
        </template>
        <template #default>
          {{ tour.included }}
        </template>
      </text-block>

      <text-block>
        <template #title>
          {{ tour.timeTitle }}
        </template>
        <template #default>
          {{ tour.timeContent }}
        </template>
      </text-block>

      <text-block>
        <template #title>
          {{ tour.pricesTitle }}
        </template>
        <template #default>
          {{ tour.pricesContent }}
        </template>
      </text-block>
    </div>

    <div class="g-container">
      <div class="h-[1px] bg-grey-2"></div>
    </div>

    <div class="g-container-recessed grid lg:grid-cols-2">
      <div></div>
      <widget-booking />
    </div>
    <widgets-widget-needanyhelp />
  </div>
</template>

<script lang="ts" setup>
import { computed } from '#imports'

import type { TravelCard } from '~/@types/TravelCard'
import TextBlock from '~/components/tour/text-block.vue'
import WidgetBooking from '~/components/widgets/widget-booking.vue'
import texts from '~/texts/home.json'
import { formatTime } from '~/utils/time'

const props = defineProps<{
  tour: TravelCard
}>()

const formattedTime = computed(() => {
  return formatTime(props.tour.duration)
})

const gallery = computed(() => {
  return props.tour.gallery
    .slice(0, 5)
    .map((image) => {
      return {
        thumbnail: getUrl(image.thumbnail),
        large: getUrl(image.large),
      }
    })
    .filter((x) => x.large)
})

const getUrl = (image: string) => {
  return image ? (image.startsWith('http') ? image : `//${image}`) : ''
}
</script>

<style lang="scss" scoped>
.gallery {
  .gallery-image {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &--1 {
    grid-template-columns: repeat(1, 1fr);
    height: 600px;
    @media (max-width: 768px) {
      height: 400px;
    }
  }
  &--2 {
    gap: 0;
    grid-template-columns: repeat(2, 1fr);
    height: 600px;
    @media (max-width: 768px) {
      height: 400px;
    }
  }

  &--3 {
    gap: 16px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 400px);
    @media (max-width: 768px) {
      grid-template-rows: repeat(2, 200px);
    }
    .gallery-image {
      &:first-child {
        grid-row-start: 1;
        grid-row-end: 3;
      }
    }
  }

  &--4 {
    gap: 16px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 400px);

    @media (max-width: 768px) {
      grid-template-rows: repeat(2, 200px);
    }
  }

  &--5 {
    gap: 16px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 400px);

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 200px);
    }

    .gallery-image {
      &:first-child {
        grid-row-start: 1;
        grid-row-end: 3;
      }

      @media (max-width: 768px) {
        &:last-child {
          display: none;
        }
      }
    }
  }
}
</style>
