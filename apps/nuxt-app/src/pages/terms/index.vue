<template>
  <main class="terms pt-[56px] flex flex-col items-center">
    <section class="max-w-[600px] w-full px-6 flex flex-col gap-6">
      <h1
          class="terms-title text-slate-900 text-32 font-normal font-serif leading-9"
      >
        Legal Terms
      </h1>
      <div class="terms-list flex flex-col gap-2">
        <nuxt-link class="py-[10px] text-dark text-20 font-sans font-medium cursor-pointer" to="/terms/terms-of-service">Terms of Service</nuxt-link>
        <nuxt-link class="py-[10px] text-dark text-20 font-sans font-medium cursor-pointer" to="/terms">Payment Terms</nuxt-link>
        <nuxt-link class="py-[10px] text-dark text-20 font-sans font-medium cursor-pointer" to="/terms">Privacy Policy</nuxt-link>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.default-layout {
  margin-bottom: 0;
}
</style>
