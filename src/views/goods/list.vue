<template>
  <div class="goods-box">
    <!-- 商品管理  getGoodsList-->
    <!-- 标签页 -->
    <div class="goods-header">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="全部" name="all">全部</el-tab-pane>
        <el-tab-pane label="审核中" name="checking">审核中</el-tab-pane>
        <el-tab-pane label="出售中" name="saling">出售中</el-tab-pane>
        <el-tab-pane label="已下架" name="off">已下架</el-tab-pane>
        <el-tab-pane label="库存预警" name="min_stock">库存预警</el-tab-pane>
        <el-tab-pane label="回收站" name="delete">回收站</el-tab-pane>
      </el-tabs>
    </div>
    <div class="goods-content">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="Approved by">
          <el-input v-model="formInline.user" placeholder="Approved by" />
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-select v-model="formInline.region" placeholder="Activity zone">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Query</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import Goods from '../../api/goods'
import { ref } from 'vue'

const activeName = ref('all')

const handleClick = () => {
  // console.log(tab, event)
}
const all = ref('all')
const getGoodsList = async (all) => {
  all = all.value
  console.log('all', all)
  await Goods.getGoodsList(all)
}
getGoodsList(all)
console.log('getGoodsList', getGoodsList)
</script>
<style lang="scss" scoped>
.goods-content {
  background-color: #fff;
  padding: 20px;
}
</style>
