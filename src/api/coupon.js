// 优惠券列表

import http from '../utils/request'

// coupon/1 列表
const getCouponList = (id) => {
  return http({
    url: `coupon/${id}`,
    method: 'GET'
  })
}

export default {
  getCouponList
}
