<template>
  <section class="gallery flex flex-col gap-3 w-full">
    <div class="gallery-photos-wrapper relative w-full pb-[61%] overflow-hidden">
      <div
          class="gallery-photos absolute top-o left-0 w-full h-full min-h-[150px] flex flex-row gap-2"
      >
        <div
            class="gallery-photos__primary overflow-hidden"
            :class="{'gallery-photos__primary_full': !isSecondaryImg}"
        >
          <img
              class="gallery-photos__primary-img object-cover !w-full !h-full"
              :src="gallery[0]"
              alt="tours gallery"
          >
        </div>
        <div
            v-if="isSecondaryImg"
            class="gallery-photos__secondary overflow-hidden flex flex-col gap-[9px]"
        >
          <img
              v-if="gallery[1]"
              class="gallery-photos__secondary-img object-cover !w-full !h-full"
              :src="gallery[1]"
              alt="tours gallery"
          >
          <img
              v-if="gallery[2]"
              class="gallery-photos__secondary-img object-cover !w-full !h-full"
              :src="gallery[2]"
              alt="tours gallery"
          >
        </div>
      </div>
    </div>
    <ui-button
        class="w-full cursor-pointer"
        type="border"
        size="medium"
        @click="showAll"
    >
      <span class="">See all photos</span>
    </ui-button>
  </section>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
  gallery: {
    type: Array as () => string[],
    default: () => []
  }
})

const emit = defineEmits(['show-all'])
const showAll = () => {
  emit('show-all')
}

const isSecondaryImg = computed(() => {
  return props.gallery.length > 1
})
</script>

<style scoped lang="scss">
.gallery-photos {
  &__primary {
    flex-basis: calc((100% - 4px) / 1.44);
    height: 100%;

    &_full {
      flex-basis: 100%;
    }
  }

  &__secondary {
    flex-basis: calc((100% - 4px) / 3.375);

    &-img {
      max-height: calc(50% - 5px);
      height: 100%;
    }
  }
}
</style>