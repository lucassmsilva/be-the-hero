import axios from 'axios';
import { AsyncStorage } from 'react-native';

const api = axios.create({
    baseURL: 'http://192.168.0.33:3334'
})

api.interceptors.request.use(async (config) => {
        const userToken = await AsyncStorage.getItem('userToken');
          config.headers.Authorization = `Bearer ${userToken}`;
  
          return config;
        }, (error) => {
          // I cand handle a request with errors here
          return Promise.reject(error);
        }
);

export default api;