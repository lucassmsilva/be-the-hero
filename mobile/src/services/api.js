import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.32:3334'
})

export default api;