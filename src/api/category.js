// 分类管理

import http from '../utils/request'

// 商品 分类列表
const getCategory = () => {
  return http({
    url: '/category',
    method: 'GET'
  })
}

export default {
  getCategory
}
