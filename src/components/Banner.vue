<script setup>
import { useTranslation } from "@/utils/hooks";
import Panel from "./Panel.vue";

const props = defineProps([ 'msg', 'color' ])

const t = useTranslation()
</script>

<template>
  <Panel class="font-segoe container" :class="[ props.color ?? 'red' ]">
    {{ t(props.msg) }}
  </Panel>
</template>

<style scoped>
.container {
  border-radius: 2rem;
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
}

.red {
  background-color: #ff4e4e;
}

.blue {
  background-color: #5463a9;
}
</style>
