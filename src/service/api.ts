import axios, { AxiosRequestHeaders, HeadersDefaults } from 'axios'

export interface CommomHeaderProperties extends HeadersDefaults {
    authorization: string;
}

export interface CommonHeaderInteceptors extends AxiosRequestHeaders {
    authorization: string;
}

export const api = axios.create({
    baseURL: 'http://localhost:4444',
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')

    if (token) {
        config.headers = {authorization: `Bearer ${token}`} as CommonHeaderInteceptors

        return config
    }

}, (error) => {
    return Promise.reject(error)
})