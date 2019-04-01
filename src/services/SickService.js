import ApiAdmin from './config/ApiAdmin';

const SickService = {
    fetchListSicks() {
        return ApiAdmin.get('/sicks')
    },
    fetchSick(id) {
        return ApiAdmin.get('/sicks/' + id)
    },

}
  
export default SickService
  