<template>
  <div
    class="default-layout flex min-h-screen flex-col overflow-hidden pt-[65px] lg:pt-[82px]"
    :class="layoutClass"
  >
    <default-header />
    <slot />
    <default-footer />
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from '#app'
import { computed } from 'vue'

import DefaultFooter from '~/components/layout/default-footer.vue'
import DefaultHeader from '~/components/layout/default-header.vue'

const router = useRouter()
const layoutClass = computed(() => {
  return router.currentRoute.value.name || ''
})
</script>

<style lang="scss" scoped>
.catalog-slug {
  margin-bottom: 88px;
}
</style>
