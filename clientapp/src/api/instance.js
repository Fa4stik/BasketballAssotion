import axios from "axios";

const $api = axios.create({
    withCredentials: false,
    baseURL: 'http://176.124.192.232/api'
})

export default $api;