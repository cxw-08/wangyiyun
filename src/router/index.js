import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MusicListDetail from '../views/MusicListDetail.vue'

const routes = [
  {
    meta: { requiresAudio: true, requiresFooterMenu: true },
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    meta: { requiresAudio: true, requiresFooterMenu: false },
    path: '/music-list-detail',
    name: 'music-list-detail',
    component: MusicListDetail
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
