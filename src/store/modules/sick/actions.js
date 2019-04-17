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





export function updateSick ({state}, payload) {
  try {
    if (AuthService.isAuthorize()) {
      const data = {
        "last_name": payload.secondName,
        "first_name": payload.firstName,
        "second_name": payload.thridName,
        "birth_date": moment(payload.dateBorn).format('YYYY-MM-DD'),
        "gender": payload.gender,
        "diagnosis": payload.diagnosis,
        "comments": payload.message
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

export function updateSickFIO({state}, payload) {
  try {
    if (AuthService.isAuthorize()) {
      const data = {
        "last_name": payload.secondName,
        "first_name": payload.firstName,
        "second_name": payload.thridName,
        "birth_date": moment(state.sick.birth_date).format('YYYY-MM-DD'),
        "gender": state.sick.gender,
        "diagnosis": state.sick.diagnosis,
        "comments": state.sick.comments
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

export function updateSickDiagnosis({state}, payload) {
  try {
    if (AuthService.isAuthorize()) {
      const data = {
        "last_name": state.sick.last_name,
        "first_name": state.sick.first_name,
        "second_name": state.sick.second_name,
        "birth_date": moment(payload.dateBorn).format('YYYY-MM-DD'),
        "gender": payload.gender,
        "diagnosis": payload.diagnosis,
        "comments": payload.message
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

export function deleteSick ({state}) {
  try {
    if (AuthService.isAuthorize()) {
      new Promise((resolve, reject) => {
        SickService.deleteSick(state.sick.id)
          .then(response => {
            console.log(response);
            Router.push("/main")
            resolve(response)
          })
          .catch(reject)
      })
    }
  } catch (error) {
    console.log('updateSick: ' + error)
    Router.push("/main")
  }
}

export function createSick ({dispatch, state}, payload) {
  try {
    if (AuthService.isAuthorize()) {
      const data = {
        "last_name": state.fio.secondName,
        "first_name": state.fio.firstName,
        "second_name": state.fio.thridName,
        "birth_date": moment(state.fio.dateBorn).format('YYYY-MM-DD'),
        "gender": state.fio.gender,
        "diagnosis": state.diagnosis.diagnosis,
        "comments": state.diagnosis.message,
        "hand": {
          "speed": payload.handSpeed,
          "corner": payload.handCorner,
          "count": payload.handCorner
        },
        "fingers": {
          "kgr": payload.fingersKGR,
          "pressure": payload.fingersPressure,
          "speed": payload.fingersSpeed,
          "corner": payload.fingersCorner,
          "count": payload.fingersCorner
        }
      }

      console.log(data);

      dispatch('setSickStatus', false)


      // new Promise((resolve, reject) => {
      //   SickService.createSick(data)
      //     .then(response => {
      //       console.log(response);
      //       setTimeout(() => {
      //         dispatch('setSickStatus', false)
      //         Router.push("/main")
      //       }, 1000);
      //       resolve(response)
      //     })
      //     .catch(error => {
      //       Router.push("/main")
      //       reject(error)
      //     })
      // })
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



export function setSteps ({commit}, payload) {
  commit('UPDATE_STEPS', payload)
}


export function setFIO ({commit}, payload) {
  console.log(payload);
  commit('UPDATE_FIO', payload)
}

export function setDiagnosis ({commit}, payload) {
  console.log(payload);
  commit('UPDATE_DIAGNOSIS', payload)
}