// axios 封装

import axios from 'axios'
import store from '../store'

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // console.log('请求拦截器1', config)
  const token = store.getters.token
  // console.log('请求拦截器2', token)
  if (token) config.headers.token = token
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // console.log('响应拦截器', response)
  const data = response.data.data
  if (data) {
    return data
  }
  // 对响应数据做点什么
  // return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 统一传参
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return instance(options)
}

export default request
