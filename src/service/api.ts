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

export const privateApi = axios.create({
    baseURL: 'http://localhost:4444'
})

privateApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')

    if (token) {
        config.headers = {authorization: token} as CommonHeaderInteceptors

        return config
    }

}, (error) => {
    return Promise.reject(error)
})