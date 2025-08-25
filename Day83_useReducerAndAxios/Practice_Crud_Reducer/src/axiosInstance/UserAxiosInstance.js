import axios from "axios";
let BaseURL = 'https://api.escuelajs.co/api/v1/'

export let userAPI_Instance = axios.create({
    baseURL: BaseURL
})
