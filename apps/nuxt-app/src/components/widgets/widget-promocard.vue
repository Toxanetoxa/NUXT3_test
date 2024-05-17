<template>
  <div
    class="promo-card relative flex h-[476px] w-full max-w-[400px] flex-col justify-between overflow-hidden rounded bg-dark px-6 py-12 text-white lg:h-auto lg:max-w-full lg:gap-[58px] lg:rounded-none lg:pt-[50%]"
  >
    <nuxt-link
      :to="card.url"
      class="absolute left-0 top-0 z-10 h-full w-full"
    ></nuxt-link>
    <img
      class="promo-card__img -z-1 absolute left-0 top-0 !h-full !w-full object-cover"
      :alt="props.card.title"
      :src="props.card.imgSrc"
    />
    <div
      class="promo-card__overlay absolute left-0 top-0 z-0 h-full w-full"
    ></div>

    <div
      class="absolute left-0 top-0 flex h-full w-full px-6 py-14 lg:px-20 lg:pb-[72px]"
    >
      <div
        class="flex w-full max-w-[586px] flex-col lg:mx-auto lg:mt-auto lg:gap-[58px]"
      >
        <div
          class="promo-card__content z-1 lg:mb-15 relative flex flex-col gap-3 lg:mt-auto lg:gap-6"
        >
          <h3 class="font-serif text-[48px] lg:text-60 lg:leading-[1.02]">
            {{ props.card.title }}
          </h3>
          <span
            class="text-16 leading-137 lg:max-w-[400px] lg:text-24 lg:font-light lg:leading-130"
          >
            {{ props.card.description }}
          </span>
        </div>
        <nuxt-link :to="card.url" class="">
          <ui-button
            type="white"
            size="medium"
            class="promo-card__action relative z-10 mt-auto flex w-fit flex-nowrap gap-[6px] whitespace-nowrap lg:mt-0 lg:w-full"
          >
            <span
              class="promo-card__action-text font-sans text-16 font-normal lg:font-semibold"
              >{{ props.card.buttonText }}</span
            >
            <span class="promo-card__action-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.1887 11.6965L12.376 7.88378L13.4366 6.82312L18.5298 11.9162L19.0601 12.4466L18.5298 12.9769L13.4366 18.07L12.376 17.0094L16.1888 13.1965H4V11.6965H16.1887Z"
                  fill="white"
                />
              </svg>
            </span>
          </ui-button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PromoCard } from '~/@types/PromoCard'

const props = defineProps<{
  card: PromoCard
}>()
</script>

<style scoped lang="scss">
.promo-card {
  &__overlay {
    background: linear-gradient(
      180deg,
      rgba(25, 12, 41, 0) 0%,
      rgba(25, 12, 41, 0.47) 79.17%,
      #190c29 100%
    );
  }

  &__action {
    &-icon,
    &-text {
      animation: arrowDance 3s infinite;
    }
  }
}
</style>
