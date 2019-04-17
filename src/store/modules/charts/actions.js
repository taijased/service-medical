
import Router from '../../../router';
import AuthService from '../../../services/AuthService';
import SickService from '../../../services/SickService';

export function fetchGraph ({commit}, payload) {
  try {
    if (AuthService.isAuthorize()) {
      new Promise((resolve, reject) => {
        SickService.fetchGraph(payload)
          .then(response => {
            commit('UPDATE_CHARTS', response.data)
            resolve(response)
          })
          .catch(error => {
            Router.go(-1)
            reject(error)
          })
      })
    }
  } catch (error) {
    console.log('createSick: ' + error)
  }
}