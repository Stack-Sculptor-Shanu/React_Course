import axios from "axios";
let baseURL = 'https://api.github.com'

export let userAPIInstance = axios.create({
    baseURL : baseURL
});