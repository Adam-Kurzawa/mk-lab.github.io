<script setup>
import { useTranslation } from "@/utils/hooks";
import Slider from "./Slider.vue";

const t = useTranslation();
</script>

<template>
  <div class="font-segoe container">
    <div class="left">
      <h1>{{ t('welcome.h1') }}</h1>
      <h2>{{ t('welcome.h2') }}</h2>
      <div class="info">
        <span class="hours">Pon.&nbsp;-&nbsp;Pt. 07:00&nbsp;-&nbsp;11:00</span>
        <span class="hours">Telefon 669&nbsp;516&nbsp;349</span>
      </div>
      <div class="left-description font-segoe">{{ t('welcome.desc') }}</div>
      <a class="left-button font-segoe" target="_blank" href="https://my.synevo.pl/">{{ t('welcome.button') }}</a>
      <img class="left-map" src="@/assets/maps.jpg" />
    </div>
    <Slider class="right" />
  </div>
</template>

<style scoped>
.hours {
  text-decoration: none;
  font-size: 1.15rem;
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
  grid-template-columns: 40% 60%;
  gap: 2rem;
  padding-right: 2rem;
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
  background-color: #5463a9;
  transition: background-color 0.25s ease-in-out;
}

.left-button:hover {
  background-color: #304291;
}

@media screen and (max-width: 1280px) {
  .container {
    display: flex;
    flex-direction: column-reverse;
    padding-right: 0;
  }
}

@media screen and (max-width: 1024px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
