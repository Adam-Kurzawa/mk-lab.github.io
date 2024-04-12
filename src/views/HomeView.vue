<script setup>
import Welcome from "@/components/Welcome.vue";
</script>

<template>
  <main>
    <div class="welcome-container">
      <Welcome/>
    </div>
  </main>
</template>

<style scoped>
.welcome-container {
  display: flex; 
  justify-content: center;
  margin-bottom: 2rem;
}
</style>