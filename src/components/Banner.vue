<script setup>
import { useTranslation } from "@/utils/hooks";
import Panel from "./Panel.vue";

const  t = useTranslation()
</script>

<template>
  <Panel class="font-segoe container">
    Już wkrótce otwarcie!
  </Panel>
</template>

<style scoped>
.container {
  border-radius: 2rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: white;
  background-color: #ff4e4e;
}
</style>
