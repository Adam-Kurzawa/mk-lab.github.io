<script setup>
import { ref } from 'vue'
import Bundle from "@/components/Bundle.vue"

const bundles = ref(
  new Set(
    Object.keys(import.meta.glob('@/assets/bundles/*.json'))
      .map(s => s.substring(20).slice(0, -5))
  )
)
</script>

<template>
  <main v-if="bundles" class="bundles-container">
    <Bundle v-for="bundle in bundles" :name="bundle" />
  </main>
</template>

<style scoped>
.bundles-container {
  width: -webkit-fill-available;
}

@media screen and (max-width: 1024px) {
  .bundles-container {
    margin-top: 2rem;
  }
}
</style>
