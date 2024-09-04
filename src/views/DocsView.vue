<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useAsset, useTranslation } from '@/utils/hooks'

const route = useRoute()
const doc = useAsset(import(`@/assets/docs/${route.params.doc}.json`))

const paragraphToHtml = (p) => {
  if(p.type === 'span')
    return `<div class="font-segoe doc-text">${p.text}</div>`
  else if(p.type === 'p')
    return `<div class="font-segoe">${p.text}</div>`
  else
    return `<${p.type} style="margin-bottom: 0.5rem !important; margin-top: 3rem !important;">${p.text}</${p.type}>`
}
</script>

<template>
  <main class="doc-content">
    <div v-for="p in doc" v-html="paragraphToHtml(p)" />
  </main>
</template>

<style scoped>
.doc-content {
  padding-left: 4rem;
  padding-right: 4rem;
}

@media screen and (max-width: 1024px) {
  .doc-content {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
</style>
