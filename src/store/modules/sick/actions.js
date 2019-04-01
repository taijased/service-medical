
export function fetchListSick ({commit}) {
  let data = [
    {
      name: "Imashev Sasha",
      age: 23
    },
    {
      name: "Petrov Oleg",
      age: 22
    },
    {
      name: "Petrov Oleg",
      age: 22
    },
    {
      name: "Ivan Ivanov",
      age: 35
    },
    {
      name: "Akulov Demon",
      age: 15
    },
    {
      name: "Imashev Sasha",
      age: 23
    },
    {
      name: "Petrov Oleg",
      age: 22
    }
  ]
  commit('UPDATE_LIST_SICK', data)
}

export function fetchSick ({commit}, payload) {
  let sick = {
    name: "Ебибиева Ольга",
    age: 13
  }
  commit('UPDATE_SICK', sick)
}

export function updateSick ({commit}, payload) {
  commit('UPDATE_SICK', sick)
}

export function deleteSick ({commit}, payload) {

}

export function createSick ({commit}, payload) {

}


