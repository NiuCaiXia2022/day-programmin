<template>
  <!-- 表格 -->
  <!-- {{ props.goodsTableList }} -->
  <div class="goods-table">
    <el-table :data="props.goodsTableList" style="width: 100%;">
      <el-table-column type="selection" width="55" />

      <el-table-column label="商品" prop="category" min-heigh="140px" width="300">
        <template #default="scope">

          <!-- {{ scope.row }} -->
          <div class="goods-table-box">
            <img :src="scope.row.cover" class="goods-table-img" />
            <div>
              <p>{{ scope.row.desc }}</p>
              <p>
                <span class="table-color">￥ {{ scope.row.min_price }}</span> |
                <span>￥{{ scope.row.min_oprice }}</span>
              </p>
              <p>分类: {{ scope.row.name }}</p>
              <p>创建时间: {{ scope.row.create_time }}</p>
            </div>
          </div>
        </template>
      </el-table-column>
      <!-- stock_display -->
      <el-table-column prop="discount" label="实际销量" width="140" />
      <el-table-column prop="status" label="商品状态" width="140">
        <template #default="scope">
          <el-tag :type="scope.row.status === 0 ? 'danger' : 'success'" disable-transitions>
            {{ scope.row.status === 0 ? '仓库' : '上架' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="stock_display" label="审核状态" width="140">
        <template #default="scope">
          {{ scope.row.stock_display === 0 ? '拒绝' : '通过' }}
        </template>
      </el-table-column>
      <el-table-column prop="stock" label="总库存" width="140" />
      <el-table-column label="操作">
        <template #default>
          <div class="flex justify-space-between mb-4 flex-wrap gap-4">
            <el-button v-for="item in buttons" :key="item.text" :type="item.type" link
              @click="handleClickButton(item.text)">{{ item.text }}
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>

  <!-- 抽屉 -->
  <el-drawer ref="drawerRef" v-model="dialog" :title="dialogTitle" :before-close="handleClose" direction="rtl"
    custom-class="demo-drawer">
    <div class="demo-drawer__content">

      <el-form :model="goodsDialogForm" label-width="100px" :label-position="right">
        <!-- select -->
        <el-form-item label="商品分类" :label-width="formLabelWidth">
          <el-select v-model="goodsDialogForm.region" placeholder="Please select activity area">
            <el-option label="Area1" value="shanghai" />
            <el-option label="Area2" value="beijing" />
          </el-select>
        </el-form-item>
        <!-- textarea -->
        <el-form-item label="商品描述">
          <el-input v-model="goodsDialogForm.desc" type="textarea" />
        </el-form-item>
        <!-- input -->
        <el-form-item label="单位" :label-width="formLabelWidth">
          <el-input v-model="goodsDialogForm.name" autocomplete="off" />
        </el-form-item>
        <!--  -->
        <el-form-item label="总库存">
          <el-input v-model="goodsDialogForm.name" placeholder="Please input" style="width:230px;">
            <template #append>件</template>
          </el-input>
        </el-form-item>
        <el-form-item label="库存预警">
          <el-input v-model="goodsDialogForm.name" placeholder="Please input" style="width:230px;">
            <template #append>件</template>
          </el-input>
        </el-form-item>
        <el-form-item label="最低销售价">
          <el-input v-model="goodsDialogForm.name" placeholder="Please input" style="width:230px;">
            <template #append>件</template>
          </el-input>
        </el-form-item>
        <el-form-item label="最低原价">
          <el-input v-model="goodsDialogForm.name" placeholder="Please input" style="width:230px;">
            <template #append>件</template>
          </el-input>
        </el-form-item>
        <!--  -->
        <el-form-item label="库存显示">
          <el-radio-group v-model="goodsDialogForm.resource">
            <el-radio label="隐藏" />
            <el-radio label="显示" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否上架">
          <el-radio-group v-model="goodsDialogForm.resource">
            <el-radio label="放入仓库" />
            <el-radio label="立即上架" />
          </el-radio-group>
        </el-form-item>

      </el-form>
      <div class="demo-drawer__footer">
        <el-button @click="cancelForm" type="primary">提交</el-button>
        <el-button @click="cancelForm">取消</el-button>
        <!-- <el-button type="primary" @click="onClick">{{
            loading ? 'Submitting ...' : 'Submit'
        }}</el-button> -->
      </div>
    </div>
  </el-drawer>
  <FormDialog :dialog="dialog"></FormDialog>
</template>
<script setup>
import { defineProps, ref, reactive } from 'vue'
import FormDialog from './FormDialog.vue'
// goodsTableList
const dialog = ref(false)
const dialogTitle = ref('')
// 表格行内 按钮
const buttons = [
  { type: 'primary', text: '修改' },
  { type: 'primary', text: '商品规格' },
  { type: 'primary', text: '设置轮播图' },
  { type: 'primary', text: '商品详情' },
  { type: 'primary', text: '删除' }
]

const goodsDialogForm = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})

const props = defineProps({
  // 子组件接收父组件传递过来的值
  goodsTableList: {
    type: Array,
    default: () => []
  }
})

// 点击按钮
const handleClickButton = (text) => {
  console.log('点击按钮', text)
  dialog.value = true
  dialogTitle.value = text
}

// 点击按钮
const handleClose = () => {

}

</script>
<style lang="scss" scoped>
.goods-table-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 150px;
  padding: 8px 0;

  .goods-table-img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }

  .table-color {
    color: #f43f5e;
  }
}
</style>
