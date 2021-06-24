import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/#location',
    name: 'Location',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/Menu.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/orderonline',
    name: 'OrderOnline',
    component: () => import('../views/OrderOnline.vue')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // eslint-disable-next-line no-unused-vars
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {el: to.hash,
              top: 60,}
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes

})

export default router
