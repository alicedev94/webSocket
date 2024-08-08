import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ClientView from '@/views/ClientView.vue'
import ClientViewDos from '@/views/ClientViewDos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/client',
      name: 'client',
      component: ClientView
    },
    {
      path: '/client2',
      name: 'client2',
      component: ClientViewDos
    }
  ]
})

export default router
