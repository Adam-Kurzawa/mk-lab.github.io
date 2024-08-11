<script setup>
import { useTranslation } from "@/utils/hooks";
import Panel from "./Panel.vue";

const t = useTranslation();
</script>

<template>
  <Panel class="font-segoe container">
    <div class="left">
      <h1>{{ t('welcome.h1') }}</h1>
      <h2>{{ t('welcome.h2') }}</h2>
      <div class="info">
        <span class="hours">Pon. - Pt. 07:00 - 11:00</span>
        <span class="hours">Telefon 669 516 349</span>
      </div>
      <div class="left-description font-segoe">{{ t('welcome.desc') }}</div>
      <a class="left-button font-segoe" target="_blank" href="https://my.synevo.pl/">{{ t('welcome.button') }}</a>
      <img class="left-map" src="@/assets/maps.jpg" />
    </div>
    <img class="right" src="@/assets/blood.png" />
  </Panel>
</template>

<style scoped>
.hours {
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 1rem;
  border: 1px solid #5463a9;
  color: #5463a9;
}

.container {
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 2rem;
}

.info {
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1rem;
  padding-right: 2rem;
}

.left {
  text-align: left;
}

.right {
  width: 100%;
}

.left-description {
  margin-top: 2.5rem;
  margin-bottom: 2rem;
}

.left-map {
  width: 100%;
  border-radius: 2rem;
  margin-top: 2rem;
}

.left-button {
  text-decoration: none;
  outline: none;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 1rem;
  border: none;
  background-color: #ff4e4e;
}

@media screen and (max-width: 1024px) {
  .container {
    display: flex;
    flex-direction: column;
  }
}
</style>
