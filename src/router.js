import Vue from 'vue'
import Router from 'vue-router'
import AuthService from './services/AuthService';


const Auth = () => import('./views/Auth.vue')
const Main = () => import('./views/Main.vue')
const Registration = () => import('./views/Registration.vue')
const AddSick = () => import('./views/AddSick.vue')
const ShowSick = () => import('./views/ShowSick.vue')

const FIO = () => import('./views/steps/FIO.vue');
const Diagnosis = () => import('./views/steps/Diagnosis.vue');
const SimulatorMode = () => import('./views/steps/SimulatorMode.vue');


const Charts = () => import('./views/Charts.vue');


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
      beforeEnter: AuthService.requireAuth
    },
    {
      path: '/addSick',
      component: AddSick,
      beforeEnter: AuthService.requireAuth,
      children: [
        {
          path: '/',
          component: FIO,
        },
        {
          path: '/addSick/diagnosis',
          component: Diagnosis,
        },
        {
          path: '/addSick/simulatormode',
          component: SimulatorMode,
        },
      ]
    },
    {
      path: '/sick',
      component: ShowSick,
      beforeEnter: AuthService.requireAuth
    },
    {
      path: '/charts',
      component: Charts,
      beforeEnter: AuthService.requireAuth
    },
    {
      path: '/registration',
      component: Registration,
    }
  ]
})
