<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

import { useTranslation } from "@/utils/hooks";
import { Loopinator } from "@/utils/Loopinator";

const t = useTranslation();

const elementTemplate = (image, title, text) => {
    return {
        image: image,
        title: title,
        text: text
    }
}

let loopinator = null
let timer = null

const element = ref()

Promise.all([
    import(`@/assets/bundles/kobieta_40_plus.jpg`),
    import(`@/assets/bundles/kobieta_60_plus.jpg`),
    import(`@/assets/bundles/kobieta_w_ciazy.jpg`)
])
    .then(modules => {
        const elements = modules.map(m => elementTemplate(m.default, "Title", "Text"))
        loopinator = new Loopinator(elements)
        element.value = loopinator.next()
    })

onMounted(() => {
        timer = setInterval(() => {
            element.value = loopinator.next()
        }, 5_000)
    }
)

onBeforeUnmount(() => {
    clearInterval(timer)
})
</script>

<template>
    <div class="element-title">
        <img class="element-img" v-if="element" :src="element.image" />
    </div>
</template>

<style scoped>
.element-title {
    border-radius: 1rem;
}

.element-img {
    height: 100%;
    max-height: 100%;
    width: 100%;
    max-width: 100%;
    object-fit: cover;
}
</style>