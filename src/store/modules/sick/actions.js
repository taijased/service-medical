import Router from '../../../router';
import AuthService from '../../../services/AuthService';
import SickService from '../../../services/SickService';
import moment from 'moment'

export function fetchListSick ({commit}) {
  try {
    if (AuthService.isAuthorize()) {
      new Promise((resolve, reject) => {
        SickService.fetchListSicks()
          .then(response => {
            commit('UPDATE_LIST_SICK', response.data)
            resolve(response)
          })
          .catch(error => {
            Router.push("/")
          })
      })
    }
  } catch (error) {
    console.log('fetchListSick: ' + error)
  }
  
}

export function fetchSick ({commit}, payload) {
  let sick = {
    name: "Ебибиева Ольга",
    age: 13
  }
  commit('UPDATE_SICK', sick)
}

export function updateSick ({commit, state}, payload) {
  try {
    if (AuthService.isAuthorize()) {
      const data = {
        "last_name": payload.secondName,
        "first_name": payload.firstName,
        "second_name": payload.thridName,
        "birth_date": moment(payload.dateBorn).format('YYYY-MM-DD'),
        "gender": payload.gender,
        "diagnosis": payload.diagnosis,
        "comments": payload.comments
      }

      new Promise((resolve, reject) => {
        SickService.updateSick(state.sick.id, data)
          .then(response => {
            console.log(response);
            Router.push("/main")
            resolve(response)
          })
          .catch(error => {
            Router.push("/main")
            console.log(error);
          })
      })
    }
  } catch (error) {
    console.log('updateSick: ' + error)
  }
}

export function deleteSick ({commit}, payload) {
  // console.log('delete-' + payload.firstName);
  Router.push("/main")

}

export function createSick ({commit, dispatch}, payload) {
  try {
    if (AuthService.isAuthorize()) {
      const data = {
        "last_name": payload.secondName,
        "first_name": payload.firstName,
        "second_name": payload.thridName,
        "birth_date": moment(payload.dateBorn).format('YYYY-MM-DD'),
        "gender": payload.gender,
        "diagnosis": payload.diagnosis,
        "comments": payload.comments
      }

      new Promise((resolve, reject) => {
        SickService.createSick(data)
          .then(response => {
            console.log(response);
            setTimeout(() => {
              dispatch('setSickStatus', false)
              Router.push("/main")
            }, 1000);
            resolve(response)
          })
          .catch(error => {
            Router.push("/main")
            reject(error)
          })
      })
    }
  } catch (error) {
    console.log('createSick: ' + error)
  }
}

export function setSickStatus ({commit}, payload) {
  commit('UPDATE_STATUS_ADD_SICK', payload)
}
export function setSick ({commit}, payload) {
  commit('UPDATE_SICK', payload)
}


