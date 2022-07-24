<template>
  <div class="coupon-box">
    <!-- 优惠劵管理 -->
    <!-- 头部 -->
    <div class="coupon-header">
      <el-button type="primary" size="small">新增</el-button>
      <div>
        <el-tooltip class="box-item" effect="dark" content="刷新数据" placement="top">
          <el-icon>
            <Refresh />
          </el-icon>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>
<script setup>
// 请求
import Coupon from '../../api/coupon'
import { reactive, ref } from 'vue'

const couponId = ref('1')
const List = reactive({
  couponList: []
})

const getCouponList = async () => {
  console.log('优惠劵管理1', couponId.value)
  const response = await Coupon.getCouponList(couponId.value)
  console.log('优惠劵管理2', getCouponList)
  List.couponList = response
}
getCouponList()
</script>
<style lang="scss" scoped>
.coupon-box {
  background-color: #fff;
  padding: 20px;

  .coupon-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
