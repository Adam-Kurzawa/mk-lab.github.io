<script setup>
import { useTranslation } from "@/utils/hooks";
import Panel from "./Panel.vue";

const t = useTranslation();
</script>

<template>
  <Panel class="font-segoe container">
    <div class="left">
      <h1>Punkt poboru krwi</h1>
      <h2>mgr Majka Kurzawa</h2>
      <div class="left-description font-segoe">
        Zapraszamy do naszego punktu przy ulicy Kościuszki 61 w Lutyni.
        Oferujemy szeroki zakres badań diagnostycznych dopasowanych do Twoich
        potrzeb. Dzięki atrakcyjnym cenom dbanie o zdrowie staje się bardziej
        dostępne. Zachęcamy do wypróbowania pakietów badań.
      </div>
      <img class="left-map" src="@/assets/maps.jpg" />
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

.left-description {
  margin-bottom: 2rem;
}

.left-map {
  margin-bottom: 2rem;
  width: 100%;
  border-radius: 2rem;
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
    flex-direction: column;
  }
}
</style>
