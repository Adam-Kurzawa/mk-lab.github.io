import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BundlesView from '../views/BundlesView.vue'
import DocsView from '../views/DocsView.vue'
import PricingView from '../views/PricingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:lang/cennik',
      name: 'cennik',
      component: PricingView
    },
    {
      path: '/:lang/pakiety',
      name: 'pakiety',
      component: BundlesView
    },
    {
      path: '/:lang/:doc',
      name: 'artykuły',
      component: DocsView
    }
  ]
})

export default router
