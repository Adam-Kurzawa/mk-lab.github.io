<script setup>
import { computed, ref } from 'vue'

const props = defineProps(["name"])

const image = ref()
const bundle = ref()

const activeDates = computed(() => {
    const b = bundle.value
    const activeFrom = b.active.from
    const activeTo = b.active.to
    return `${activeFrom} - ${activeTo}`
})

import(`@/assets/bundles/${props.name}.jpg`)
    .then(module => image.value = module.default)

import(`@/assets/bundles/${props.name}.json`)
    .then(module => bundle.value = module.default)
</script>

<template>
  <div class="bundle">
    <div class="zoom">
        <img v-if="image" :src="image" class="img" />
    </div>
    <div v-if="bundle" class="texts">
        <div class="active font-josefin">Ważny w dniach {{ activeDates }}</div>
        <div class="name font-josefin">{{ bundle.name }}</div>
        <div class="desc font-josefin">{{ bundle.description }}</div>
        <ul class="listing font-josefin">
            <li v-for="el in bundle.listing">{{ el }}</li>
        </ul>
        <div class="saving font-josefin">Korzystając z pakietu oszczędzasz {{ bundle.saving }} zł</div>
        <div class="price font-josefin">{{ bundle.price }} zł</div>
    </div>
  </div>
</template>

<style scoped>
.bundle {
    padding-left: 1rem;
    transition: background ease 0.5s;
    border-radius: 2rem;
    display: grid;
    grid-template-columns: 40% 60%;
}

.zoom {
    align-self: center;
    border-radius: 2rem;
    padding: 0;
    margin: 0;
    overflow: hidden;
}

.img {
    transition: transform .5s ease;
    border-radius: 2rem;
    width: 100%;
}

.texts {
    padding: 1.5rem;
}

.active {
    transition: color ease 0.5s;
    font-size: 1.25rem;
    margin-bottom: 1rem;
}

.name {
    transition: color ease 0.5s;
    font-size: 2rem;
    font-weight: bold;
}

.desc {
    transition: color ease 0.5s;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: slategrey;
    text-align: justify;
}

.listing {
    transition: color ease 0.5s;
    color: slategrey;
}

.price {
    transition: color ease 0.5s;
    font-size: 1.65rem;
}

.saving {
    transition: color ease 0.5s;
    font-size: 1rem;
}

.bundle:hover {
    background-color: #5463a9;
}

.bundle:hover .name {
    color: white;
}

.bundle:hover .desc {
    color: white;
}

.bundle:hover .listing {
    color: white;
}

.bundle:hover .price {
    color: white;
}

.bundle:hover .saving {
    color: white;
}

.bundle:hover .active {
    color: white;
}

.bundle:hover .img {
    transform: scale(1.15);
}

@media screen and (max-width: 1024px) {
    .bundle {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding-top: 1rem;
        padding-left: 0;
    }

    .bundle:hover .img {
        transform: none;
    }
}
</style>
