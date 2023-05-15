
import { createRouter, createWebHistory } from 'vue-router'
import loginRouters from './login'
import HomeView from '../views/HomeView.vue'
import MusicListDetail from '../views/MusicListDetail.vue'
import Search from '../views/Search.vue'
import Profile from '../views/Profile.vue'

const routes = [
  ...loginRouters,
  {
    meta: { requiresAudio: true, requiresFooterMenu: true },
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    meta: { requiresAudio: true, requiresFooterMenu: false },
    path: '/music-list-detail',
    name: 'music-list-detail',
    component: MusicListDetail,
  },
  {
    meta: { requiresAudio: true, requiresFooterMenu: false },
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    // meta: { requiresAudio: true, requiresFooterMenu: false },
    path: '/profile',
    name: 'profile',
    component: Profile,
  },

]

console.log('router', routes)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
