import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Films from '../pages/Films.vue'
import Search from '../pages/Search.vue'
import Serials from '../pages/Serials.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/films', name: 'films', component: Films},
    {path: '/search', name: 'search', component: Search},
    {path: '/serials', name: 'serials', component: Serials},
  ]
})

export default router
