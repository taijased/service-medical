
const TOKEN_KEY = 'token'

export const SET_AUTH_USER = (state, user) => {
    try {
        state.authUser = user
        localStorage.setItem('user', JSON.stringify(state.authUser))
    } catch (error) {
        console.log('SET_AUTH_USER: ' + error)
    }
}
export const LOGOUT = (state) => {
    state.token = ''
    state.isAuthorize = false
    state.authUser = ''
    state.player = ''
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem('isAuthorize')
}
export const LOGIN_SUCCESS = (state, data) => {
    state.token = data.token
    state.isAuthorize = true
    localStorage.setItem(TOKEN_KEY, data.token)
    localStorage.setItem('isAuthorize', true)
   
}

export const SET_ERROR = (state, error) => state.error = error

