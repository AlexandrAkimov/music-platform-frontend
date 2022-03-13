import axios, { AxiosRequestConfig } from 'axios'

const $api_uri = 'http://localhost:5000/'

const $host = axios.create({
  baseURL: $api_uri + 'auth/'
})

const $authHost = axios.create({
  baseURL: $api_uri
})

const authInterceptorRequest = (config: any): AxiosRequestConfig => {

  config.headers.authorization = `Bearer ${localStorage.token}`
  return config
}

$authHost.interceptors.request.use(authInterceptorRequest)

export {
  $host, $authHost, $api_uri
}