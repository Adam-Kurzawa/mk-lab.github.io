<script setup>
import { computed } from 'vue'
import Panel from './Panel.vue'
import { useTranslation } from '@/utils/hooks';

const props = defineProps([ 'pricing' ])

const t = useTranslation()

const singleEntry = (key, value) => {
    return `
        <div style="
            display: grid;
            grid-template-columns: 75% 25%;
        ">
            <span>${key}</span>
            <span style="
                text-align: end;
                padding-right: 1rem;
            ">${value.toFixed(2)} ${t('pricing.currency')}</span>
        </div>
    `
}

const mapEntry = (entry) => {
    const key = entry[0]
    const value = entry[1]
    return singleEntry(key, value)
}

const entries = computed(() => {
    return Object.entries(props.pricing)
        .map(mapEntry)
})
</script>

<template>
    <Panel class="container font-segoe">
        <div v-if="entries" v-for="entry in entries" class="entry">
            <div v-html="entry" />
        </div>
    </Panel>
</template>

<style scoped>
.container {
    text-transform: uppercase;
    padding-top: 0 !important;
}

.entry {
    transition: background 0.6s ease;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.7em;
    padding-bottom: 0.7em;
    border-radius: 0.5rem;
}

.entry:hover {
    background-color: lightblue !important;
}

.container :nth-child(even).entry {
    background-color: aqua;
}
</style>