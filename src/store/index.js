import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import sick from './modules/sick'
import charts from './modules/charts'



Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    auth,
    sick,
    charts
  }
})