<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { Loopinator } from "@/utils/loopinator"

const router = useRouter()

const elementTemplate = (image, title, text, url) => {
    return {
        image: image,
        title: title,
        text: text.substring(0, 400) + "...",
        navigateTo: url
    }
}

let loopinator = null
let timer = null

const element = ref()
const elementIndex = ref()
const length = ref()

const navigateToBundle = (url) => () => {
    router.push({ name: 'pakiety', params: { lang: 'pl' }, hash: `#${url}` })
}

const navigateToDocs = (url) => () => {
    router.push({ name: 'artykuły', params: { lang: 'pl', doc: url } })
}

const loadBundle = (bundle) => {
    return import(`@/assets/bundles/${bundle}.jpg`)
        .then(image => {
            return import(`@/assets/bundles/${bundle}.json`)
                .then(content => elementTemplate(image.default, content.default.name, content.default.description, navigateToBundle(bundle)))
        })
}

const loadDocs = (docs) => {
    return import(`@/assets/docs/${docs}.jpg`)
        .then(image => {
            return import(`@/assets/docs/${docs}.json`)
                .then(content => elementTemplate(image.default, content.default[0].text, content.default[1].text, navigateToDocs(docs)))
        })
}

Promise.all([
    loadDocs('przygotowanie_dziecka'),
    loadDocs('przygotowanie_dorosłego'),
    loadBundle('kleszcze')
])
    .then(modules => {
        loopinator = new Loopinator(modules)
        length.value = loopinator.getLength()
        elementIndex.value = loopinator.getCurrentIndex()
        element.value = loopinator.next()
    })

onMounted(() => {
        timer = setInterval(() => {
            elementIndex.value = loopinator.getCurrentIndex()
            element.value = loopinator.next()
        }, 5_000)
    }
)

onBeforeUnmount(() => {
    clearInterval(timer)
})
</script>

<template>
    <Transition appear name="slide" mode="out-in"> 
        <div class="slider" :key="element.title" v-if="element" @click="element.navigateTo()">
            <div class="slider-dots">
                <div v-for="index in length" class="slider-dot" :class="{ 'slider-dot-selected': elementIndex == (index - 1) }" />
            </div>
            <img class="slider-img" :src="element.image" />
            <div class="slider-overlay">
                <div class="slider-title">{{ element.title }}</div>
                <div class="slider-content">{{ element.text }}</div>
            </div>
        </div>
    </Transition> 
</template>

<style scoped>
.slider {
    border-radius: 1rem;
    padding: 0;
    margin: 0;
    z-index: 1;
    position: relative;
    cursor: pointer;
    border: 1px solid transparent;
    transition: border-color 0.25s ease-in-out;
}

.slider:hover {
    border-color: #304291;
}

.slider:hover .slider-overlay {
    background-color: #304291a8;
}

.slider-dot-selected {
    border: 1px solid #304291 !important;
}

.slider-dot {
    padding: 0.5rem;
    background-color: white;
    border: 1px solid rgb(206, 206, 206);
}

.slider-dots {
    display: flex;
    flex-wrap: nowrap;
    gap: 0.5rem;
    position: absolute;
    top: 1rem;
    width: 100%;
    justify-content: center;
}

.slider-overlay {
    padding: 2rem;
    color: white;
    position: absolute;
    height: 12rem;
    background-color: #5464a96e;
    backdrop-filter: blur(10px);
    bottom: 0px;
    right: 0px;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    z-index: 3;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 2rem;
    width: calc(100% - 4rem);
    transition: background-color 0.25s ease-in-out;
}

.slider-title {
    font-weight: bold;
    font-size: 2rem;
}

.slider-content {
    text-overflow: ellipsis;
    overflow: hidden;
    max-lines: 5;
    line-clamp: 5;
    font-size: 1rem;
}

.slider-img {
    border-radius: 1rem;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-width: 100%;
    object-fit: cover;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease-out;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

@media screen and (max-width: 1024px) {
    .slider:hover {
        border-color: transparent;
    }

    .slider-img {
        height: 30rem;
        max-height: 30rem;
    }

    .slider-overlay {
        height: 8rem;
    }

    .slider-content {
        display: none;
    }
}
</style>