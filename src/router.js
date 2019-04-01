import Vue from 'vue'
import Router from 'vue-router'
import AuthService from './services/AuthService';


const Auth = () => import('./views/Auth.vue')
const Home = () => import('./views/Home.vue')


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
      path: '/home',
      component: Home,
      beforeEnter: AuthService.requireAuth,
    }
  ]
})
