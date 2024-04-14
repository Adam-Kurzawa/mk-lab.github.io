import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BundlesView from '../views/BundlesView.vue'
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
    }
  ]
})

export default router
