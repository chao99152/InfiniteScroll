import axios, { AxiosRequestConfig } from 'axios'

const baseURL = `//reqres.in/api`

export default (option: AxiosRequestConfig) => {
    return axios({
        ...option,
        // withCredentials: true,
        baseURL: baseURL,
        headers: {
            ...option.headers || {},
            // Authorization: ''
        }
    })
}
