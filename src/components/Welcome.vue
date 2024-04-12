<script setup>
import { useTranslation } from "@/utils/hooks";
import Panel from "./Panel.vue";

const  t = useTranslation()
</script>

<template>
  <Panel rounded="true" class="font-segoe welcome">
    Strona w budowie - Site under construction
    {{ t("welcome.text") }}
  </Panel>
</template>

<style scoped>
.welcome {
  text-align: center;
  font-size: 1.25rem;
  line-height: 2rem;
}

.buycoffee {
  text-wrap: nowrap;
  background-color: lightblue;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: black;
  text-decoration: none;
}

@media screen and (max-width: 1024px) {
  .welcome {
    margin-top: 1rem;
  }
}
</style>
