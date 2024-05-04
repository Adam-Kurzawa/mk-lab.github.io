<script setup>
import Banner from "@/components/Banner.vue";
</script>

<template>
  <main class="container">
    <Banner class="banner" msg="bundles" />
  </main>
</template>

<style scoped>
.container {
  width: -webkit-fill-available;
}

.banner {
  margin-bottom: 2rem;
}

@media screen and (max-width: 1024px) {
  .banner {
    margin-top: 2rem;
  }
}
</style>
