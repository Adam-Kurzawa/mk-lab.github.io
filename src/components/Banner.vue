<script setup>
import { useTranslation } from "@/utils/hooks";

const props = defineProps([ 'msg', 'color' ])

const t = useTranslation()
</script>

<template>
  <div class="font-segoe container" :class="[ props.color ?? 'red' ]">
    {{ t(props.msg) }}
  </div>
</template>

<style scoped>
.container {
  border-radius: 1rem;
  text-align: center;
  font-size: 1.15rem;
  font-weight: bold;
  color: white;
  transition: padding 0.5s ease;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.red {
  background-color: #ff4e4e;
}

.blue {
  background-color: #5463a9;
}

@media screen and (max-width: 1600px) {
  .container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media screen and (max-width: 1280px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media screen and (max-width: 1024px) {
  .container {
    border-radius: 0 !important;
  }
}
</style>