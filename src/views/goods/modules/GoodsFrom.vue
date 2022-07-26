<template>
  <div class="goods-From">
    <div class="goods-header">
      <!-- 表单 -->
      <div class="goods-header-top">
        <div>
          <el-form :inline="true" :model="GoodHeaderForm" class="demo-form-inline" ref="fromRef">
            <el-form-item label="关键词" prop="title" label-width="80">
              <el-input v-model="GoodHeaderForm.title" placeholder="商品名称" />
            </el-form-item>
            <el-form-item label="商品分类 " prop="category_id" v-show="isStatus">
              <el-select v-model="GoodHeaderForm.category_id" placeholder="请选择商品分类">
                <el-option v-for="item in props.categoryList" :key="item.id" :label="item.name" :value="item.id" />
              </el-select>
            </el-form-item>
            <div class="goods-header-top-right">
              <el-form-item>
                <el-button type="primary" @click="handleGoodsSearch">搜素</el-button>
                <el-button @click="handleReset">重置</el-button>
                <el-button @click="isStatus = !isStatus">
                  {{ isStatus ? '收起' : '展开' }}
                  <template v-if="isStatus">
                    <el-icon class="el-icon--right">
                      <ArrowUp />
                    </el-icon>
                  </template>
                  <template v-else>
                    <el-icon class="el-icon--right">
                      <ArrowDown />
                    </el-icon>
                  </template>
                </el-button>
              </el-form-item>
            </div>
          </el-form>
        </div>
      </div>
      <div class="goods-header-bottom">
        <div>
          <el-button type="primary">新增</el-button>
          <el-button type="danger">批量删除</el-button>
          <el-button>上架</el-button>
          <el-button>下架</el-button>
        </div>

        <div>
          <el-tooltip class="box-item" effect="dark" content="刷新数据" placement="top">
            <el-icon class="goods-header-icon">
              <Refresh />
            </el-icon>
          </el-tooltip>
        </div>
        <!-- {{ props.categoryList }} -->
      </div>

    </div>

  </div>
</template>
<script setup>
import { reactive, ref, defineProps, defineEmits } from 'vue'
// 接收父组件传递的值
const props = defineProps({
  // 不用log  直接渲染  (不知为啥  没有值)
  // console.log('子组件 123', props.categoryList)
  categoryList: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['SearchCategoryList'])

// 表单
const GoodHeaderForm = reactive({
  title: '',
  category_id: null
})
const isStatus = ref(false)
const fromRef = ref()

// 搜索 子传父
const handleGoodsSearch = () => {
  // // 有title
  // if (GoodHeaderForm.category_id === null && GoodHeaderForm.title !== '') {
  //   // console.log('111', GoodHeaderForm.title)
  //   emit('SearchCategoryList', GoodHeaderForm.title)
  //   // 有 id
  // } else if (GoodHeaderForm.category_id !== null && GoodHeaderForm.title === '') {
  //   console.log('222', GoodHeaderForm.category_id)
  //   emit('SearchCategoryList', GoodHeaderForm.category_id)
  //   // 都有
  // } else {
  //   console.log('GoodHeaderForm', GoodHeaderForm)
  //   emit('SearchCategoryList', GoodHeaderForm)
  // }
  emit('SearchCategoryList', GoodHeaderForm)
}

// 重置
const handleReset = () => {
  fromRef.value.resetFields()
}

</script>
<style lang="scss" scoped>
.goods-header {
  position: relative;
  width: 100%;

  .goods-header-top {
    height: 50px;

    .goods-header-top-right {
      float: right;
      z-index: 999;
    }
  }

  .goods-header-icon {
    font-size: 18px;
  }

  .goods-header-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;

    &:nth-child(2) {
      .el-icon {
        font-size: 22px;
        color: #686a6e;
      }
    }
  }
}
</style>
