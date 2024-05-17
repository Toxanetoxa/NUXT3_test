<template>
  <main class="catalog g-container lg:py-8">
    <ui-tabs
      :slots="slots"
      :active-slot="queryType"
      :items="travelCards"
      :count="5"
      @set-active-slot="refreshActiveSlot"
    >
    </ui-tabs>

    <div class="grid w-full gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      <widget-travelcard
        v-for="item in filteredCards"
        :key="item.slug"
        :card="item"
      />
    </div>

    <widget-booking />
  </main>

  <widget-needanyhelp />
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from '#imports'
import { computed, onBeforeMount, ref } from 'vue'

import type { TravelCardShort } from '~/@types/TravelCard'
import UiTabs from '~/components/ui/ui-tabs.vue'
import WidgetBooking from '~/components/widgets/widget-booking.vue'
import WidgetNeedanyhelp from '~/components/widgets/widget-needanyhelp.vue'
import WidgetTravelcard from '~/components/widgets/widget-travelcard.vue'
import tours from '~/texts/tours.json'

const slots: string[] = ['all', 'tours', 'expeditions']
const route = useRoute()
const router = useRouter()

const queryType = computed(() => {
  return String(route.query.type ?? 'all')
})
const type = computed(() => {
  return String(queryType.value).replace('s', '')
})

const filteredCards = computed(() => {
  return travelCards.filter((card) => {
    if (type.value === 'all' || !type.value) {
      return true
    }
    return card.type === type.value
  })
})

const travelCards: TravelCardShort[] = tours.map((tour) => {
  return {
    mainImage:
      tour.attributes.coverImage?.data?.attributes?.formats.large?.url ??
      tour.attributes.coverImage?.data?.attributes?.formats.medium?.url,
    title: tour.attributes.Title,
    slug: `${tour.id}:${tour.attributes.slug}`,
    duration: tour.attributes.Duration,
    price: tour.attributes.price ?? '100',
    type: tour.attributes.Type ?? 'tour',
  }
})

const refreshActiveSlot = (value: 'all' | 'tour' | 'expedition') => {
  router.replace({
    query: {
      ...route.query,
      type: value === 'all' ? undefined : value,
    },
  })
}
</script>

<style lang="scss"></style>
