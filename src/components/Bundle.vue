<script setup>
import { computed, ref } from 'vue'

const props = defineProps(["name"])

const image = ref()
const bundle = ref()

const activeDates = computed(() => {
    const b = bundle.value

    if(b.active.allYear) {
        return `Ważny przez cały rok`
    } else {
        const activeFrom = b.active.from
        const activeTo = b.active.to
  
        return `Ważny w dniach ${activeFrom} - ${activeTo}`
    }
})

const saving = computed(() => {
    const b = bundle.value
    const save = b.saving
    const wait = b.waitingTime

    if(save)
        return `Korzystając z pakietu oszczędzasz ${save} zł`
    else if(wait)
        return `Wyniki w ciągu ${wait}`
    else 
        return ""
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
        <div class="active font-josefin"> {{ activeDates }}</div>
        <div class="name font-josefin">{{ bundle.name }}</div>
        <div class="desc font-segoe">{{ bundle.description }}</div>
        <ul class="listing font-segoe">
            <li v-for="el in bundle.listing">{{ el }}</li>
        </ul>
        <div class="saving font-josefin">{{ saving }}</div>
        <div class="price font-josefin">{{ bundle.price }} zł</div>
    </div>
  </div>
</template>

<style scoped>
.bundle {
    padding-left: 0;
    background-color: #f5f7ff;
    margin-bottom: 1rem;
    transition: background ease 0.5s;
    border-radius: 1rem;
    border: 1px solid #5463a9;
    display: grid;
    grid-template-columns: 40% 60%;
}

.zoom {
    align-self: center;
    height: 100%;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    padding: 0;
    margin-left: 0;
    margin-right: 0;
    overflow: hidden;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.img {
    transition: transform .5s ease;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    color: #5463a9;
}

.desc {
    transition: color ease 0.5s;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: justify;
}

.listing {
    transition: color ease 0.5s;
}

.price {
    transition: color ease 0.5s;
    font-size: 1.65rem;
    font-weight: bold;
    color: #5463a9;
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
