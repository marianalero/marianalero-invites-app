import axios, { AxiosInstance } from 'axios';

export default function createApiClient(){
    const api:AxiosInstance = axios.create({
    baseURL: 'https://localhost:7281',
    headers: {
        'Content-Type': 'application/json',
    },
    });
    return api;
}