// 登录

import http from '../utils/request'

// 登录
const getLogin = (data) => {
  return http({
    url: '/login',
    method: 'POST',
    data
  })
}

// 用户信息
const getInfo = () => {
  return http({
    url: '/getinfo',
    method: 'POST'
  })
}

// /statistics1
const getStatistics1 = () => {
  return http({
    url: '/statistics1',
    method: 'GET'
  })
}

// /statistics2
const getStatistics2 = () => {
  return http({
    url: '/statistics2',
    method: 'GET'
  })
}

// /statistics3?type=week
const getStatistics3 = (data) => {
  return http({
    url: `/statistics3?type=${data.type}`,
    method: 'GET'
  })
}

// 退出 /logout
const outLogout = () => {
  return http({
    url: '/logout',
    method: 'POST'
  })
}
export default {
  getLogin,
  getInfo,
  getStatistics1,
  getStatistics2,
  getStatistics3,
  outLogout
}
