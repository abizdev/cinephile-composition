import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Films from '../pages/Films.vue'
import Search from '../pages/Search.vue'
import Serials from '../pages/Serials.vue'
import Movie from '../pages/Movie.vue'
import Tv from '../pages/Tv.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/films', name: 'films', component: Films},
    {path: '/search', name: 'search', component: Search},
    {path: '/serials', name: 'serials', component: Serials},
    {path: '/films/:id', name: 'movie', component: Movie},
    {path: '/serials/:id', name: 'tv', component: Tv},
  ]
})

export default router
