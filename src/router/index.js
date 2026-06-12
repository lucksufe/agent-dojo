import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GettingStarted from '../views/GettingStarted.vue'
import Showcase from '../views/Showcase.vue'
import Tips from '../views/Tips.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/getting-started', name: 'GettingStarted', component: GettingStarted },
  { path: '/showcase', name: 'Showcase', component: Showcase },
  { path: '/tips', name: 'Tips', component: Tips }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
