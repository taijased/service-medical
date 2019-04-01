import AuthService from '../../../services/AuthService'

export const SET_AUTH_USER = (state, user) => {
    try {
        state.authUser = user
        localStorage.setItem('user', JSON.stringify(state.authUser))
        // console.log(user)
    } catch (error) {
        console.log('SET_AUTH_USER: ' + error)
    }
}
export const LOGOUT = (state) => {
    try {
        state.token = ''
        state.isAuthorize = false
        state.authUser = ''
        state.player = ''
        AuthService.clearToken()
        localStorage.removeItem('isAuthorize')
    } catch (error) {
        console.log('LOGOUT: ' + error)
    }
}
export const LOGIN_SUCCESS = (state, data) => {
    try {
        state.token = data.token
        state.isAuthorize = true
        AuthService.setToken(data.token)
        // console.log(data.token)
        localStorage.setItem('isAuthorize', true)
    } catch (error) {
        console.log('SET_AUTH_USER: ' + error)
    }
}

export const SET_ERROR = (state, error) => state.error = error

