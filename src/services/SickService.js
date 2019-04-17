

import ApiAdmin from './config/ApiAdmin';

const SickService = {
    fetchListSicks() {
        return ApiAdmin.get('/patient', {
            headers: {
                auth_token: localStorage.getItem('token')
            }
        })
    },
    updateSick(id, data) {
        const headers = {
            headers: {
                auth_token: localStorage.getItem('token')
            }
        }
        return ApiAdmin.put('/patient/' + id, data, headers)
    },
    createSick(data) {
        const headers = {
            headers: {
                auth_token: localStorage.getItem('token')
            }
        }
        return ApiAdmin.post('/patient', data, headers)
    },
    deleteSick(id) {
        const headers = {
            headers: {
                auth_token: localStorage.getItem('token')
            }
        }
        return ApiAdmin.delete('/patient/' + id, headers)
    },
    fetchGraph(id) {
        const headers = {
            headers: {
                auth_token: localStorage.getItem('token')
            }
        }
        return ApiAdmin.get('/patient/' + id, headers)
    },
}
  
export default SickService
  