<template>
  <div class="skus-box">
    <!-- 规格管理 -->
    <!-- 头部 -->
    <div class="skus-header">
      <div>
        <el-button type="primary" size="small">新增</el-button>
        <el-button type="danger" size="small">批量删除</el-button>
      </div>
      <div>
        <el-tooltip class="box-item" effect="dark" content="刷新数据" placement="top">
          <el-icon class="skus-header-icon">
            <Refresh />
          </el-icon>
        </el-tooltip>

      </div>

    </div>
    <!-- 表格 -->
    <div class="skus-table">
      <el-table ref="skusTableRef" :data="List.skusList" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" />
        <el-table-column property="name" label="规格名称" />
        <el-table-column property="default" label="规格值" show-overflow-tooltip />
        <el-table-column property="order" label="排序" show-overflow-tooltip />
        <el-table-column property="status" label="状态">
          <template #default="scope">
            <el-switch v-model="scope.row.status" />

          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script setup>
// 接口
import Skus from '../../api/skus'
import { ref, reactive } from 'vue'
// 页码
const size = ref('1')
// page
// const page = ref('10')
// 总条数
const total = ref(null)
// 列表
const List = reactive({
  skusList: []
})
console.log(List, total)
// 列表
const getSkusList = async (size) => {
  const res = await Skus.getSkusList(size)
  console.log('规格管理', res)
  List.skusList = res.list
  total.value = res.totalCount
}
// 默认请求
getSkusList(size.value)

// 表格 复选框
const handleSelectionChange = () => {

}

</script>
<style lang="scss" scoped>
.skus-box {
  background-color: #fff;
  padding: 20px;
}

.skus-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .skus-header-icon {
    font-size: 18px;
  }
}
</style>
