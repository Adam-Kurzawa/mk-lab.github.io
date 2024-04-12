import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      component: HomeView
    },
    {
      path: '/:lang/pakiety',
      name: 'pakiety',
      component: HomeView
    }
  ]
})

export default router
