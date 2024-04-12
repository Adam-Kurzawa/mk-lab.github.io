<template>
  <RouterLink to="/" class="logo">
    <img class="logo-img" src="@/assets/mk-lab.png" />
    <div class="logo-text">MK-LAB</div>
  </RouterLink>
</template>

<style scoped>
.logo {
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
}

.logo-text {
  margin-top: 0.55rem;
  text-decoration: none;
  font-family: "Josefin Sans", sans-serif !important;
  font-weight: bold !important;
  font-style: normal !important;
  font-size: 2.25rem;
}

.logo-img {
  width: 3rem;
  height: 3rem;
}
</style>
