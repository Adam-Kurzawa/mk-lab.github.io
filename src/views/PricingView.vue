<script setup>
import { computed, ref } from 'vue'
import Pricing from '@/components/Pricing.vue'
import { useAsset, useTranslation } from '@/utils/hooks'

const t = useTranslation()
const pricing = useAsset(import(`@/assets/pricing.json`))
const pricingKeyValues = computed(() => Object.entries(pricing.value))
const searchPhrase = ref()

const subLevelEntry = (entry) => Object.entries(entry)

const clearSearchbox = () => {
  searchPhrase.value = ''
}
</script>

<template>
  <main class="container">
    <div class="font-segoe simple-text">Badanie na cito płatne dodatkowo 2 zł.</div>
    <div class="font-segoe simple-text">Usługa szczepień osób dorosłych płatna 20 zł.</div>
    <div class="font-segoe simple-text">Iniekcje domięśniowe osób dorosłych płatne 20 zł.</div>
    <div class="input-container">
      <input type="text" v-model="searchPhrase" placeholder="Wyszukaj badanie..."/>
      <button class="input-clean-btn" @click="clearSearchbox">x</button>
    </div>
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

.input-container {
  padding-left: 1rem;
  padding-right: 4rem;
  margin-top: 1rem;
  display: flex;
  width: -webkit-fill-available;
}

.input-clean-btn {
  width: 3rem;
  background-color: transparent;
  border-left: none;
  color: #5463a9;
  font-size: 1.5rem;
  font-weight: lighter;
  border-right: 1px solid #5463a9;
  border-top: 1px solid #5463a9;
  border-bottom: 1px solid #5463a9;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  transition: all 0.5s ease;
}

.input-clean-btn:hover {
  color: white;
  background-color: #5463a9;
}

input {
  border: 1px solid #5463a9;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 100%;
  outline: none;
  font-size: 1.25rem;
}

.simple-text {
  margin-right: 1rem;
  margin-left: 1rem;
  margin-top: 0.5rem;
  font-size: 1.15rem;
  font-weight: 400;
}

h1, h2 {
  width: -webkit-fill-available;
  margin-right: 1rem;
  margin-left: 1rem;
}

@media screen and (max-width: 1600px) {
  .input-container {
    padding-right: 2rem;
  }
}

@media screen and (max-width: 1280px) {
  .input-container {
    padding-right: 1rem;
  }
}

@media screen and (max-width: 1024px) {
  .container {
    margin-top: 4rem;
  }
}
</style>