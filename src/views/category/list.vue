<template>
  <div>
    <!-- 分类管理 -->
    <div class="category-box">
      <!-- 头部 -->
      <div class="category-header">
        <el-button type="primary" size="small">新增</el-button>
        <div>
          <el-tooltip class="box-item" effect="dark" content="刷新数据" placement="top">
            <el-icon>
              <Refresh />
            </el-icon>
          </el-tooltip>
        </div>
      </div>
      <!-- 表格 -->
      <div>
        <el-table :data="List.categoryList" style="width: 100%">
          <el-table-column prop="name" />

          <el-table-column prop="status">
            <template #default="scope">
              <el-switch v-model="scope.row.status" class="mb-2" inactive-text="推荐商品" />
            </template>
          </el-table-column>
          <el-table-column prop="address">
            <template #default="scope">
              <el-button link type="primary" size="small">修改</el-button>
              <el-button link type="primary" size="small" @click="handleTableDelete(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

  </div>
</template>
<script setup>
import Category from '../../api/category'
import { reactive } from 'vue'

const List = reactive({
  categoryList: []
})

const categoryList = async () => {
  const res = await Category.getCategory()
  console.log('res', res)
  List.categoryList = res
}
categoryList()

</script>
<style lang="scss" scoped>
.category-box {
  background-color: #fff;
  padding: 20px;

  .category-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
