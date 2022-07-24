<template>
  <div>
    <!-- 弹框 -->

    <el-drawer ref="drawerRef" v-model="dialog" title="I have a nested form inside!" :before-close="handleClose"
      direction="rtl" custom-class="demo-drawer">
      <div class="demo-drawer__content">
        <el-form :model="form">
          <!-- select -->
          <el-form-item label="Area" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="Please select activity area">
              <el-option label="Area1" value="shanghai" />
              <el-option label="Area2" value="beijing" />
            </el-select>
          </el-form-item>
          <!-- textarea -->
          <el-form-item label="商品描述">
            <el-input v-model="form.desc" type="textarea" />
          </el-form-item>
          <!-- input -->
          <el-form-item label="单位" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" />
          </el-form-item>
          <!--  -->
          <el-form-item label="总库存">
            <el-input v-model="input2" placeholder="Please input">
              <template #append>件</template>
            </el-input>
          </el-form-item>
          <!--  -->
          <el-form-item label="库存显示">
            <el-radio-group v-model="form.resource">
              <el-radio label="隐藏" />
              <el-radio label="显示" />
            </el-radio-group>
          </el-form-item>

        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="cancelForm">Cancel</el-button>
          <el-button type="primary" :loading="loading" @click="onClick">{{
              loading ? 'Submitting ...' : 'Submit'
          }}</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>
<script setup>
import { reactive, ref, defineProps } from 'vue'
import { ElDrawer, ElMessageBox } from 'element-plus'

const props = defineProps(
  {
    dialog: Boolean
  }
)
const formLabelWidth = '80px'
let timer

const dialog = ref(props.dialog)

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})

const drawerRef = ref()

const handleClose = (done) => {
  if (props.loading) {
    return
  }
  ElMessageBox.confirm('Do you want to submit?')
    .then(() => {
      // props.dialog = true
      timer = setTimeout(() => {
        done()
        // 动画关闭需要一定的时间
        setTimeout(() => {
          // props.dialog = false
        }, 400)
      }, 2000)
    })
    .catch(() => {
      // catch error
    })
}

const cancelForm = () => {
  // loading.value = false
  // dialog.value = false
  clearTimeout(timer)
}
</script>
<style lang="scss" scoped>
</style>
