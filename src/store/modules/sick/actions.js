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

export function updateSickFIO({state}, payload) {
  try {
    if (AuthService.isAuthorize()) {
      const data = {
        "last_name": payload.secondName,
        "first_name": payload.firstName,
        "second_name": payload.thridName,
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
    console.log(error);
    console.log('updateSickFIO: ' + error)
  }
}

export function updateSickDiagnosis({state}, payload) {
  try {
    if (AuthService.isAuthorize()) {
      const data = {
        "birth_date": moment(payload.dateBorn).format('YYYY-MM-DD'),
        "gender": payload.gender,
        "diagnosis": payload.diagnosis,
        "comments": payload.message,
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
    console.log('updateSickDiagnosis: ' + error)
  }
}

export function updateSickSimulatorMode({state}, payload) {
  try {
    if (AuthService.isAuthorize()) {
      const data = {
        "hand": {
          "mode": payload.modeHand,
          "angle": payload.handCorner,
          "speed": payload.handSpeed,
          "repeat": payload.handCount
        },
        "finger": {
          "mode": payload.modeFingers,
          "kgr": payload.fingersKGR,
          "press": payload.fingersPressure,
          "angle": payload.fingersCorner,
          "speed": payload.fingersSpeed,
          "repeat": payload.fingersCount
        }
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
    console.log('updateSickSimulatorMode: ' + error)
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
          "mode": payload.modeHand,
          "angle": payload.handCorner,
          "speed": payload.handSpeed,
          "repeat": payload.handCount
        },
        "finger": {
          "mode": payload.modeFingers,
          "kgr": payload.fingersKGR,
          "press": payload.fingersPressure,
          "angle": payload.fingersCorner,
          "speed": payload.fingersSpeed,
          "repeat": payload.fingersCount
        }
      }

      dispatch('setSickStatus', false)


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