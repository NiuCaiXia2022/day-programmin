// 规格管理
import http from '../utils/request'

// 规格管理 列表
const getSkusList = (id) => {
  return http({
    url: `/skus/${id}`,
    method: 'GET'
  })
}

export default {
  getSkusList
}
