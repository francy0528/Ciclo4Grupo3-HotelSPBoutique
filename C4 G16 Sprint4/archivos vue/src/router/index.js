import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
// import Eventos from '../views/Eventos'
import Pagina from "../views/Pagina"
import Login from "../views/Login"
import isAutenticado from './auth'
import usuariologin from "../views/usuariologin"
import Reserva from "../views/Reserva"

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
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
    path: '/',
    name: 'Reserva',
    component: Reserva,
    beforeEnter:[isAutenticado]
  },
  {
    path: '/pagina',
    name:'Pagina',
    component:Pagina
  },

  {
    path: '/login',
    name:'Login',
    component:Login
  },
  {
    path: '/usuariologin',
    name:'usuariologin',
    // component: () => import(/* webpackChunkName: "about" */ '../views/usuariologin.vue')
    component:usuariologin
  }
  // {
  
  //   path: '/Reserva',
  //   name:'Reserva',
    // component: () => import(/* webpackChunkName: "about" */ '../views/usuariologin.vue')
    // component:Reserva,
    // beforeEnter:[isAutenticado]
  // }



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
