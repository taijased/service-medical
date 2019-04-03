
import ApiAdmin from './config/ApiAdmin'


const TOKEN_KEY = 'token'

const AuthService = {
  requireAuth (to, from, next) {
    const isAuthorize = localStorage.getItem('isAuthorize')
    if (isAuthorize) {
      next()
    } else {
      next({
        path: '/'
      })
    }
  },
  isAuthorize () {
    const isAuthorize = localStorage.getItem('isAuthorize')
    if (isAuthorize) { 
      return true
    } else {
      window.location.reload();
    }
  },
  registration(data) {
    return ApiAdmin.post('register', data)
  },
  login(data) {
    return ApiAdmin.post('authorize', data)
  },
}

export default AuthService
