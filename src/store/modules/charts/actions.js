export function setDiagnosis ({commit}, payload) {
  console.log(payload);
  commit('UPDATE_DIAGNOSIS', payload)
}