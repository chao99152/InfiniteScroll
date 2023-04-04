import axios from 'axios'

const baseURL = `//reqres.in/api`

export default (option: Object) => {
    return axios({
        ...option,
        withCredentials: true,
        baseURL: baseURL,
    })
}
