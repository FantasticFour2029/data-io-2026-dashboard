import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../Landing.vue'
import Dashboard from '../Dashboard.vue'
import About from '../About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ],
})

export default router
