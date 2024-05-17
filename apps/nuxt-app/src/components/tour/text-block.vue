<template>
  <div class="g-container-recessed grid gap-8 lg:grid-cols-2">
    <div></div>
    <section
      class="text-block animate-component mx-auto flex w-full flex-col gap-4 pb-10 pt-14"
    >
      <div class="h-[1px] bg-grey-2"></div>

      <h3 class="font-serif text-32 leading-110 lg:text-60">
        <slot name="title"></slot>
      </h3>
      <p
        class="line-clamp-6 overflow-hidden text-ellipsis leading-137 text-grey-1 lg:text-24 lg:font-light lg:leading-110"
      >
        <slot />
      </p>
    </section>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  separator?: Boolean
}>()
</script>

<style lang="scss"></style>
