import axios, { AxiosInstance } from 'axios';
import API_URl from '../config';

 function createApiClient(){
    const api:AxiosInstance = axios.create({
    baseURL: API_URl,
    headers: {
        'Content-Type': 'application/json',
    },
    });
    return api;
}

  function createApiAuthClient(){
    const authAxios = axios.create({
    baseURL: API_URl,
    });

    authAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
    });
      return authAxios;
}

export { createApiAuthClient,createApiClient}