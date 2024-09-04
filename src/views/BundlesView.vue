<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import Bundle from "@/components/Bundle.vue"

const route = useRoute()

const bundles = ref(
  new Set(
    Object.keys(import.meta.glob('@/assets/bundles/*.json'))
      .map(s => s.substring(20).slice(0, -5))
  )
)

const bundleRefs = ref([]);
const timer = ref()

onMounted(() => {
  timer.value = setTimeout(() => {
    if(route.hash) {
      const hash = route.hash.substring(1)
      bundleRefs.value.find(e => e.id === hash).scrollIntoView({ behavior: 'smooth' }) 
    }
  }, 100)
})

onBeforeUnmount(() => {
  clearTimeout(timer.value)
})
</script>

<template>
  <main v-if="bundles" class="bundles-container">
    <div v-for="bundle in bundles" :id="bundle" ref="bundleRefs">
      <Bundle :name="bundle" />
    </div>
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
