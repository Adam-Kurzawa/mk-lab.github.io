<script setup>
import { computed } from 'vue'
import Pricing from "@/components/Pricing.vue";
import { useAsset } from '@/utils/hooks';

const pricing = useAsset(import(`@/assets/pricing.json`))
const genericPricing = computed(() => pricing.value['badania-ogólne'])
const specificPricing = computed(() => pricing.value['badania-specjalistyczne'])
</script>

<template>
  <main class="container">
    <h1>Cennik</h1>
    <h2>Badania ogólne</h2>
    <Pricing v-if="pricing" :pricing="genericPricing" />
    <h2>Badania specjalistyczne</h2>
    <Pricing v-if="pricing" :pricing="specificPricing" />
  </main>
</template>

<style scoped>
.container {
  width: -webkit-fill-available;
}
</style>