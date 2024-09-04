<script setup>
import { ref, watch } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import Submenu from './Submenu.vue';
import Logo from './Logo.vue';
import { computed } from 'vue';
import { useLocale, useTranslation } from '@/utils/hooks';

const route = useRoute()
const router = useRouter()
const t = useTranslation()
const locale = useLocale()

const otherLanguage = ref(locale.value === 'pl' ? 'ENG' : 'PL')
const otherLanguageFlag = ref()

watch(otherLanguage, async (newLanguage, oldLanguage) => {
  import(`@/assets/${newLanguage}.png`)
    .then(module => otherLanguageFlag.value = module.default)
})

import(`@/assets/${otherLanguage.value}.png`)
    .then(module => otherLanguageFlag.value = module.default)

const changeLanguage = () => {
  if(locale.value === 'pl') {
    otherLanguage.value = 'PL'
    locale.value = 'en'
  } else {
    otherLanguage.value = 'ENG'
    locale.value = 'pl'
  }

  if(route.name !== 'home') {
    if(route.query)
      router.push({ name: route.name, params: { ...route.params, lang: locale.value }, query: { ...route.query } })
    else
      router.push({ name: route.name, params: { ...route.params, lang: locale.value } })
  }
}

const localizedLink = (view) => computed(() => {
  return { name: view, params: { lang: locale.value } }
})
</script>

<template>
  <nav class="navbar">
    <span class="navbar-full">
      <Logo />
      <span class="navbar-section">
        <RouterLink :to="localizedLink('cennik')" class="navlink">{{ t("navbar.cennik") }}</RouterLink>
        <RouterLink :to="localizedLink('pakiety')" class="navlink">{{ t("navbar.pakiety") }}</RouterLink>
      </span>
    </span>
    <span class="navbar-medium">
      <Logo />
      <span class="navbar-section">
        <RouterLink :to="localizedLink('cennik')" class="navlink">{{ t("navbar.cennik") }}</RouterLink>
        <RouterLink :to="localizedLink('pakiety')" class="navlink">{{ t("navbar.pakiety") }}</RouterLink>
      </span>
    </span>
    <span class="navbar-minimal">
      <Logo />
      <span class="navbar-section">
        <Submenu id="menu-overflow-minimal">
          <li class="collapsed-link"><RouterLink :to="localizedLink('cennik')" class="navlink">{{ t("navbar.cennik") }}</RouterLink></li>
          <li class="collapsed-link"><RouterLink :to="localizedLink('pakiety')" class="navlink">{{ t("navbar.pakiety") }}</RouterLink></li>
        </Submenu>
      </span>
    </span>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  z-index: 100;
}

.navbar-section {
  transition: gap 1s ease;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin-bottom: 0.35rem;
}

.collapsed-link {
  margin-top: 1rem;
}

.language-changer {
  color: #5463a9;
  text-decoration: none;
  font-family: "Josefin Sans", sans-serif;
  font-weight: bold;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 1rem;
  padding-left: 1rem;
  display: flex;
  margin-top: 0.35rem;
  gap: 0.5rem;
}

.language-changer > span {
  margin-top: 0.25rem;
}

.language-flag {
  max-width: 2rem;
}

/* Sizing */
/* Full size */
.navbar-full {
  display: grid;
  grid-template-columns: 50% 50%;
  padding-left: 15%;
  padding-right: 15%;
}

.navbar-full > .navbar-section {
  justify-content: right;
}

.navbar-medium {
  display: none;
}

.navbar-minimal {
  display: none;
}

/* Medium size */
@media screen and (max-width: 1440px) {
  .navbar-full {
    display: none;
  }

  .navbar-medium {
    display: grid;
    grid-template-columns: 25% 75%;
    align-items: end;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .navbar-minimal {
    display: none;
  }

  .navbar-section {
    justify-content: right;
    margin-bottom: 0;
  }
}

/* Minimal size */
@media screen and (max-width: 1024px) {
  .navbar-full {
    display: none;
  }

  .navbar-medium {
    display: none;
  }

  .navbar-minimal {
    display: grid;
    grid-template-columns: 60% 40%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .navbar-section {
    justify-content: right;
    margin-bottom: 0;
  }
}

@media screen and (max-width: 500px) {
  .navbar-section {
    gap: 1rem;
  }

  .language-flag {
    display: none;
  }
}
</style>