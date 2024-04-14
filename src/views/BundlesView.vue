<script setup>
import Banner from "@/components/Banner.vue";
import Welcome from "@/components/Welcome.vue";
</script>

<template>
  <main>
    <Banner class="banner" />
    <Welcome />
  </main>
</template>

<style scoped>
.banner {
  margin-bottom: 2rem;
}

@media screen and (max-width: 1024px) {
  .banner {
    margin-top: 2rem;
  }
}
</style>
