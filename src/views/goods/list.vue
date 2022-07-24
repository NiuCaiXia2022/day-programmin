<template>
  <div class="goods-box">
    <!-- {{ goods.goodsTableList }} -->
    <!-- 商品管理  getGoodsList-->
    <!-- 标签页 -->

    <div class="goods-header">
      <!-- @tab-click="handleClick" -->
      <el-tabs v-model="activeName" class="demo-tabs" @tab-change="handleTagchange">
        <!-- 全部 -->
        <el-tab-pane label="全部" name="all">
          <div class="form-table-bgc">
            <!-- 搜索的表单  表格 -->
            <GoodsFrom :categoryList="goods.categoryList" @SearchCategoryList="SearchCategoryList"></GoodsFrom>

            <TableItem :goodsTableList="goods.goodsTableList"></TableItem>
          </div>
        </el-tab-pane>

        <!-- 审核中 -->
        <el-tab-pane label="审核中" name="checking">
          <div class="form-table-bgc">
            <!-- 搜索的表单  表格 -->
            <GoodsFrom></GoodsFrom>
            <TableItem :goodsTableList="goods.goodsTableList"></TableItem>
          </div>
        </el-tab-pane>

        <!-- 出售中 -->
        <el-tab-pane label="出售中" name="saling">
          <div class="form-table-bgc">
            <!-- 搜索的表单  表格 -->
            <GoodsFrom></GoodsFrom>
            <TableItem :goodsTableList="goods.goodsTableList"></TableItem>
          </div>
        </el-tab-pane>

        <!-- 已下架 -->
        <el-tab-pane label="已下架" name="off">
          <div class="form-table-bgc">
            <!-- 搜索的表单  表格 -->
            <GoodsFrom></GoodsFrom>
            <TableItem :goodsTableList="goods.goodsTableList"></TableItem>
          </div>
        </el-tab-pane>

        <!-- 库存预警 -->
        <el-tab-pane label="库存预警" name="min_stock">
          <div class="form-table-bgc">
            <!-- 搜索的表单  表格 -->
            <GoodsFrom></GoodsFrom>
            <TableItem :goodsTableList="goods.goodsTableList"></TableItem>
          </div>
        </el-tab-pane>

        <!-- 回收站 -->
        <el-tab-pane label="回收站" name="delete">
          <div class="form-table-bgc">
            <!-- 搜索的表单  表格 -->
            <GoodsFrom></GoodsFrom>
            <TableItem :goodsTableList="goods.goodsTableList"></TableItem>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- <div class="goods-content">
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
    </div> -->
  </div>
</template>
<script setup>
import TableItem from './modules/TableItem.vue'
import GoodsFrom from './modules/GoodsFrom.vue'
import Goods from '../../api/goods'
import Category from '../../api/category'
import { reactive } from 'vue'

const goods = reactive({
  goodsTableList: [], // table 列表
  categoryList: []// 分类列表 options 列表
})

let activeName = reactive('all')

// name  切换事件
const handleTagchange = async (name) => {
  // console.log('切换事件1-name', name)
  activeName = name
  // console.log('切换事件2-activeName', activeName)
  requestInterface(name)
}

// 请求事件 分类列表 options 列表
const categoryList = async () => {
  const res = await Category.getCategory()
  goods.categoryList = res
}

// 请求事件 table 列表
const requestInterface = async (name) => {
  // console.log('name', name)
  // table 列表
  const response = await Goods.getGoodsList(name)
  // 分类列表 options 列表
  goods.goodsTableList = response.list
}

//  搜素事件
const SearchCategoryList = async (data) => {
  console.log('搜素事件1', data)
  // 有title
  if (data.title !== '' && data.category_id === null) {
    const res = await Goods.getSearchGoodsTitle(data.title, activeName)
    // console.log('1', res)
    goods.goodsTableList = res.list
    //  有 id
  } else if (data.title === '' && data.category_id !== null) {
    const res = await Goods.getSearchGoodsId(activeName, data.category_id)
    // console.log('2', res)
    goods.goodsTableList = res.list
    // 都有
  } else {
    const res = await Goods.getSearchGoodsAll(activeName, data)
    console.log('3', res)
    goods.goodsTableList = res.list
  }
}

// 默认调用  table 列表
handleTagchange(activeName)
// 默认调用 分类列表 options
categoryList()

</script>
<style lang="scss" scoped>
.goods-content {
  background-color: #fff;
  padding: 20px;
}

.form-table-bgc {
  background-color: #fff;
  padding: 20px;
}
</style>
