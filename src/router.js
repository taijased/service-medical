import Vue from 'vue'
import Router from 'vue-router'
import AuthService from './services/AuthService';


const Auth = () => import('./views/Auth.vue')
const Main = () => import('./views/Main.vue')
const Registration = () => import('./views/Registration.vue')
const AddSick = () => import('./views/AddSick.vue')


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Auth
    },
    {
      path: '/main',
      component: Main,
      // beforeEnter: AuthService.requireAuth
    },
    {
      path: '/registration',
      component: Registration,
    },
    {
      path: '/addSick',
      component: AddSick,
      // beforeEnter: AuthService.requireAuth
    }
  ]
})
