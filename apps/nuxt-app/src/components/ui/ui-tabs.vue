<template>
  <section class="ui-tabs w-full">
    <div class="ui-tabs__header flex w-full py-4 lg:pb-10 px-2">
      <div class="ui-tabs__header-items grid-cols-3 grid max-w-[382px] mx-auto p-1 gap-2 justify-center items-center capitalize bg-light-grey rounded">
        <div
            v-for="key in slots"
            :key="key"
            class="ui-tabs__header-item flex-1 text-dark text-14 lg:text-16 font-[600] h-9 lg:h-11 flex align-mid justify-center px-3 text-center items-center pointer select-none text-sm font-sans leading-none rounded cursor-pointer border border-light-grey"
            @click.stop="setActiveSlot(key)"
            :class="{' border-grey-2 bg-white': key === selectedSlot || key === 'all' && selectedSlot === ''}"
        >
          {{ key }}
        </div>
      </div>
    </div>
<!--    <div class="ui-tabs__content flex flex-col items-center gap-10 pt-4 pb-10">-->
<!--      <slot name="itemsArray" :items="filterItems"/>-->
<!--      <div-->
<!--          v-if="count < sortingItems.length"-->
<!--          class="ui-tabs__content-more"-->
<!--          @click.stop="showMore"-->
<!--      >-->
<!--        Show more-->
<!--      </div>-->
<!--    </div>-->
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { TravelCard } from "~/@types/TravelCard"

const props = defineProps({
  slots: {
    type: Array as () => string[],
    default: () => []
  },
  activeSlot: {
    type: String,
    default: 'all'
  },
  items: {
    type: Array as () => TravelCard[],
    default: []
  },
  count: {
    type: Number,
    default: 2
  }
})

let selectedSlot = ref(props.activeSlot)
let count = ref(props.count)
const emit = defineEmits(['set-active-slot'])

function setActiveSlot(value: string) {
  selectedSlot.value = value
  emit('set-active-slot', value)
}
function showMore() {
  count.value += count.value
}

const sortingItems = computed(() => {
  if (!selectedSlot.value || selectedSlot.value === 'all') return props.items

  return props.items.filter(el => el.type === selectedSlot.value)
})

const filterItems = computed(() => {
  if (count.value > sortingItems.value.length) { return sortingItems.value}
  return [ ...sortingItems.value.slice(0, count.value)]
})

if (props.activeSlot === 'undefined') {
  setActiveSlot('all')
}

</script>

<style scoped lang="scss">

</style>
