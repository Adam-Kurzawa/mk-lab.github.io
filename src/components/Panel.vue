<template>
  <div class="panel">
    <slot></slot>
  </div>
</template>

<style scoped>
.panel {
  transition: padding 0.5s ease;
  padding-left: 4rem;
  padding-right: 4rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

@media screen and (max-width: 1600px) {
  .panel {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media screen and (max-width: 1280px) {
  .panel {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media screen and (max-width: 1024px) {
  .panel {
    border-radius: 0 !important;
  }
}
</style>