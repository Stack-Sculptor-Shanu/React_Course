import axios from "axios";
const apiUrl = 'https://api.escuelajs.co/api/v1/'
export const authInstance = axios.create({
    baseURL:apiUrl,
})