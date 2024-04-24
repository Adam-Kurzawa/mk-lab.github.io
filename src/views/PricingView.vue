<script setup>
import { computed } from 'vue'
import Pricing from '@/components/Pricing.vue'
import { useAsset, useTranslation } from '@/utils/hooks'

const t = useTranslation()
const pricing = useAsset(import(`@/assets/pricing.json`))
const pricingKeyValues = computed(() => Object.entries(pricing.value))

const subLevelEntry = (entry) => Object.entries(entry)
</script>

<template>
  <main class="container">
    <h1>{{ t('pricing.h1') }}</h1>
    <span v-if="pricing" v-for="values in pricingKeyValues">
      <h2>{{ values[0] }}</h2>
      <span v-for="subValues in subLevelEntry(values[1])">
        <h3>{{ subValues[0] }}</h3>
        <Pricing :pricing="subValues[1]" />
      </span>
    </span>
  </main>
</template>

<style scoped>
.container {
  width: -webkit-fill-available;
}
</style>