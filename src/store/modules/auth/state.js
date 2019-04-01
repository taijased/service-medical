export default {
  isAuthorize: localStorage.getItem('isAuthorize') || false,
  token: localStorage.getItem('token') || '',
  authUser: JSON.parse(localStorage.getItem('user')) || '',
  login: localStorage.getItem('isLogin'),
  password: localStorage.getItem('isPassword'),
  error: false
}
