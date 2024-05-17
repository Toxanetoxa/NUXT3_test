<template>
  <main class="min-h-screen flex flex-col mt-[65px]">
    <default-header />
    <section class="g-container py-[96px] flex flex-col align-mid justify-center text-center animate-component">
      <h2 class="text-center text-dark text-[132px] font-normal font-serif leading-[157.08px]">
        {{ error.statusCode }}
      </h2>
      <span class="w-[250px] mx-auto text-center text-dark text-base font-normal font-sans leading-snug">Sorry, we can’t find the page you’re looking for</span>
      <nuxt-link to="/" class="mt-12 py-5 rounded bg-dark w-full text-white h-14 items-center justify-center font-[600] uppercase tracking-[1.6px]">
        Go to main page
        </nuxt-link>
    </section>
    <default-footer/>
  </main>
</template>

<script lang="ts" setup>
import DefaultHeader from "~/components/layout/default-header.vue";
import DefaultFooter from "~/components/layout/default-footer.vue";

const props = defineProps<{
  error: {
    url: string
    statusCode: number
    statusMessage: string
    message: string
    description: string
    data: any
  }
}>()
</script>

<style lang="scss"></style>
