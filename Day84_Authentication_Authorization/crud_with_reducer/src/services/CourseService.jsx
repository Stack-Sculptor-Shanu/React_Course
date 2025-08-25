// ---------------POST method----------------------
import AxiosInstances from './../axiosInstance/axiosInstance';
const courseServices = {
    createService: async(payload) => {
        await AxiosInstances.post('/courses', payload);
    },
    fetchService: async () => {
        let {data} = await AxiosInstances.get('/courses')
        return data
    },
    updateService: async (id, payload) => {
        await AxiosInstances.put(`/courses/${id}`,payload)
    },
    deleteService: async (id) => {
        AxiosInstances.delete(`/courses/${id}`)
    },
    fetchId: async (id) => {
        let {data} = await AxiosInstances.get(`/courses/${id}`)
        return data
    }
}
export default courseServices