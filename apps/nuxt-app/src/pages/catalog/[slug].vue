<template>
  <tour-page :tour="data" />
</template>

<script lang="ts" setup>
import { computed, showError, useRoute } from '#imports'

import type { TravelCard } from '~/@types/TravelCard'
import tours from '~/texts/tours.json'

const route = useRoute()

const tour = tours.find(
  (x) => x.id === Number(String(route.params.slug).split(':')[0])
)

if (!tour) {
  showError({
    statusCode: 404,
  })
}

const data = computed<TravelCard>(() => {
  return {
    mainImage:
      tour?.attributes.coverImage?.data?.attributes?.formats?.large?.url ??
      tour?.attributes.coverImage?.data?.attributes?.formats?.medium?.url,
    description: tour?.attributes.Description,
    title: tour?.attributes.Title,
    slug: `${tour?.id}:${tour?.attributes.slug}`,
    duration: tour?.attributes.Duration,
    price: 120,
    type: tour?.attributes.Type ?? 'tour',
    descriptionTitle: tour?.attributes.DescriptionTitle ?? '',
    includedTitle: tour?.attributes?.IncludedTitle ?? '',
    included: tour?.attributes?.Included ?? '',
    timeTitle: tour?.attributes?.TimeTitle ?? '',
    timeContent: tour?.attributes?.TimeContent ?? '',
    pricesTitle: tour?.attributes?.PricesTitle ?? '',
    pricesContent: tour?.attributes?.PricesContent ?? '',
    gallery:
      tour?.attributes?.images.data?.map((x) => ({
        thumbnail: x.attributes?.formats?.thumbnail?.url,
        medium: x.attributes?.formats?.medium?.url,
        large:
          x.attributes?.formats?.large?.url ??
          x.attributes?.formats?.medium?.url,
      })) ?? [],
  } as unknown as TravelCard
})
</script>

<style lang="scss" scoped></style>
