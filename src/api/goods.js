// 商品管理

import http from '../utils/request'

// /admin/goods/1?tab=all
// 商品列表
const getGoodsList = (tab) => {
  return http({
    url: `/goods/1?tab=${tab}`,
    method: 'GET'
  })
}

// 搜索 列表
const getSearchGoodsTitle = (search, tab) => {
  return http({
    url: `/goods/1?title=${search}&tab=${tab}`,
    method: 'GET'
  })
}

// 搜索 商品分类
const getSearchGoodsId = (tab, id) => {
  return http({
    url: `/goods/1?tab=${tab}&category_id=${id}`,
    method: 'GET'
  })
}

// 搜索 商品分类++列表
const getSearchGoodsAll = (tab, data) => {
  return http({
    url: `/goods/1?title=${data.title}&tab=${tab}&category_id=${data.category_id}`,
    method: 'GET'
  })
}

export default {
  getGoodsList,
  getSearchGoodsTitle,
  getSearchGoodsId,
  getSearchGoodsAll
}
