<script setup>
import { computed } from 'vue'
import Panel from './Panel.vue'
import { useTranslation } from '@/utils/hooks';

const props = defineProps([ 'title', 'pricing', 'filter' ])

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
    if(props.filter && props.filter.length !== 0) {
        const phrase = props.filter.toUpperCase()
        return Object.entries(props.pricing)
            .filter(entry => entry[0].toUpperCase().includes(phrase))
            .map(mapEntry)
    } else
        return Object.entries(props.pricing)
            .map(mapEntry)
})
</script>

<template>
    <Panel v-if="entries && entries.length !== 0" class="pricing font-segoe">
        <h3>{{ props.title }}</h3>
        <div v-for="entry in entries" class="entry">
            <div v-html="entry" />
        </div>
    </Panel>
</template>

<style scoped>
.pricing {
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

.pricing :nth-child(even).entry {
    background-color: #f5f7ff;
}
</style>