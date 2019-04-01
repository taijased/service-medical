import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import sick from './modules/sick'



Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    auth,
    sick
  }
})