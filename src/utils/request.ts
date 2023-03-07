import axios from 'axios'

export const instance = axios.create({
    timeout: 1000 * 9,
})

instance.interceptors.request.use(req => {
    return req
})

instance.interceptors.response.use(res => {
    return res
})
