<template>
  <button
    class="button flex cursor-pointer items-center justify-center rounded font-semibold uppercase leading-4"
    :class="classesButton"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'

export type Size = 'small' | 'medium'
export type Type = 'dark' | 'white' | 'border'

const props = defineProps({
  size: {
    type: String as PropType<'small' | 'medium'>,
    default: 'medium',
    validator: (prop: Size) => ['medium', 'small'].includes(prop),
  },
  type: {
    type: String as PropType<'dark' | 'white' | 'border'>,
    default: 'dark',
    validator: (prop: Type) => ['white', 'dark', 'border'].includes(prop),
  },
})

const classesButton = computed(() => {
  return {
    'pl-6 pr-4 h-14 min-w-[124px] tracking-[1.6px] text-16':
      props.size === 'medium',
    'px-4 h-11 min-w-[44px] tracking-[1.12px] text-14': props.size === 'small',
    'bg-dark text-white': props.type === 'dark',
    'bg-transparent text-dark border-[1px] border-dark':
      props.type === 'border',
    'bg-transparent text-white border-[1px] border-white hover:bg-white hover:text-dark':
      props.type === 'white',
  }
})
</script>
<style scoped lang="scss"></style>
