<script setup>
import { useTranslation } from "@/utils/hooks";
import Panel from "./Panel.vue";

const  t = useTranslation()
</script>

<template>
  <Panel class="font-segoe container">
    <div class="left">
      <div class="left-h1 font-josefin">Punkt poboru krwi</div>
      <div class="left-h2 font-josefin">mgr Majka Kurzawa</div>
      <div class="left-description font-segoe">Blah blah blah</div>
      <div class="left-map">Mapka</div>
      <button class="left-button font-segoe">Sprawdź wyniki on-line</button>
    </div>
    <img class="right" src="@/assets/blood.png" />
  </Panel>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 2rem;
}

.left {
  text-align: left;
}

.right {
  width: 100%;
}

.left-h1 {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.5rem;
  color: #5463a9;
  margin-bottom: 1rem;
}

.left-h2 {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  color: black;
  margin-bottom: 2rem;
}

.left-description {
  margin-bottom: 2rem;
}

.left-map {
  margin-bottom: 2rem;
  background-color: black;
  color: white;
  padding: 2rem;
}

.left-button {
  outline: none;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 2rem;
  border: none;
  background-color: #ff4e4e;
}

@media screen and (max-width: 1024px) {
  .container {
    display: flex;
  }
}
</style>
