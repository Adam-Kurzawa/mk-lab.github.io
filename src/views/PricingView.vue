<script setup>
import { computed, ref } from 'vue'
import Pricing from '@/components/Pricing.vue'
import { useAsset, useTranslation } from '@/utils/hooks'
import Banner from '@/components/Banner.vue';

const t = useTranslation()
const pricing = useAsset(import(`@/assets/pricing.json`))
const pricingKeyValues = computed(() => Object.entries(pricing.value))
const searchPhrase = ref()

const subLevelEntry = (entry) => Object.entries(entry)
</script>

<template>
  <main class="container">
    <input type="text" v-model="searchPhrase" placeholder="Wyszukaj badanie..."/>
    <h1>{{ t('pricing.h1') }}</h1>
    <div class="font-josefin simple-text">Badanie na cito płatne dodatkowo 2 zł.</div>
    <div class="font-josefin simple-text">Usługa szczepień osób dorosłych płatna 20 zł.</div>
    <span v-if="pricing" v-for="values in pricingKeyValues">
      <h2>{{ values[0] }}</h2>
      <Pricing v-for="subValues in subLevelEntry(values[1])" :title="subValues[0]" :pricing="subValues[1]" :filter="searchPhrase" />
    </span>
  </main>
</template>

<style scoped>
.container {
  width: -webkit-fill-available;
}

input {
  border: 1px solid #5463a9;
  border-radius: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  outline: none;
  font-size: 1.25rem;
  color: #5463a9;
}

.simple-text {
  margin-right: 1rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
  font-size: 1.15rem;
}

input, h1, h2 {
  width: -webkit-fill-available;
  margin-right: 1rem;
  margin-left: 1rem;
}

@media screen and (max-width: 1024px) {
  .container {
    margin-top: 4rem;
  }
}
</style>