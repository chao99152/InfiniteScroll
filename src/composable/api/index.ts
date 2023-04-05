import axios from 'axios'

const baseURL = `//reqres.in/api`
// const baseURL = `//tfd.blob.core.windows.net/blobfs/data`

export default (option: Object) => {
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
