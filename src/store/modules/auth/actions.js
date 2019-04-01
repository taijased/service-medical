import AuthService from '../../../services/AuthService'
import ApiAdmin from '../../../services/config/ApiAdmin'
import Router from '../../../router';

// export async function signin ({commit, dispatch}, payload) {
//   // console.log(payload)
//   const getTokenPromise = AuthService.login(payload)
//   const response = await Promise.resolve(getTokenPromise)

//   await commit('LOGIN_SUCCESS', response)
//   dispatch('setUser')
//   commit('SET_LOGIN', payload.email)
//   commit('SET_PASSWORD', payload.password)
// }



export async function signin ({commit, dispatch}, payload) {
  try {
    // await new Promise((resolve, reject) => {
    //   ApiAdmin.post('/auth/obtain-token', payload )
    //     .then(async response => {
          // await commit('LOGIN_SUCCESS', response)
          await commit('LOGIN_SUCCESS', {token: "zaebis-token"})
          dispatch('setUser')
          commit('SET_LOGIN', payload.email)
          commit('SET_PASSWORD', payload.password)
    //       resolve(response);
    //     })
    //     .catch(error => {
    //       commit('SET_ERROR', true)
    //       setTimeout(() => {
    //         commit('SET_ERROR', false)
    //       }, 5000);
    //       reject(error)
    //     });
    // })
    console.log(payload);
    Router.push('/main')
  } catch (error) {
      console.log('signin: ' + error)
  }
}

export function signout ({commit}) {
    commit('LOGOUT')
}

export function setUser ({commit}) {
    // return new Promise(async (resolve, reject) => {
    //   if (AuthService.getToken()) {
    //     await AuthService.getAuthUser()
    //       .then(
    //         (response) => {
    //           commit('SET_AUTH_USER', response)
    //           resolve(response)
    //         }
    //       ).catch(error => {
    //         commit('SET_ERROR', true)
    //         reject(error)
    //       })
    //     this.$router.push('/main')
    //   }
    // })
    commit('SET_AUTH_USER', {name: "ivan", age: "14"})
}

export function setLogin ({commit}, payload) {
  commit('SET_LOGIN', payload)
}
export function setPassword ({commit}, payload) {
  commit('SET_PASSWORD', payload)
}


