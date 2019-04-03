import AuthService from '../../../services/AuthService'
import Router from '../../../router';



export async function signin ({commit}, payload) {
  try {
    await new Promise((resolve, reject) => {
      AuthService.login(payload)
        .then(response => {
          console.log(response);
          commit('LOGIN_SUCCESS', response.data)
          commit('SET_AUTH_USER', response.data.person)
          resolve(response);
        })
        .catch(error => {
          commit('SET_ERROR', true)
          setTimeout(() => {
            commit('SET_ERROR', false)
          }, 5000);
          reject(error)
        });
    })
    Router.push('/main')
  } catch (error) {
      console.log('signin: ' + error)
  }
}

export function signout ({commit}) {
    commit('LOGOUT')
}


export async function registration({commit, dispatch}, payload) {
  try {
    
    let data = {
      "login": payload.email,
      "pass": payload.password,
      "last_name": payload.secondName,
      "first_name": payload.firstName,
      "second_name": payload.thridName
    }
    await new Promise((resolve, reject) => {
      AuthService.registration(data)
        .then(response => {
          console.log(response);
          Router.push("/")
          resolve(response);
        })
        .catch(error => {
          reject(error)
        });
    })
  } catch (error) {
      console.log('registrationDoctor: ' + error)
  }
}