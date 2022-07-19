// 商品管理

import http from '../utils/request'

// /admin/goods/1?tab=all
// 商品列表
const getGoodsList = (data) => {
  return http({
    url: `/goods/1?tab=${data}`,
    method: 'GET'
  })
}

// /category
// 商品 分类列表
const getCategory = () => {
  return http({
    url: '/category',
    method: 'GET'
  })
}

export default {
  getGoodsList,
  getCategory
}
