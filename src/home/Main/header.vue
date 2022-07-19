<template>
  <div class="main-header">
    <div class="main-box">
      <span>
        <el-icon>
          <ArrowLeft />
        </el-icon>
      </span>

      <!-- <div style="margin-bottom: 20px">
        <el-button size="small" @click="addTab(editableTabsValue)">
          add tab
        </el-button>
      </div> -->
      <el-tabs v-model="editableTabsValue" type="card" class="demo-tabs" closable @tab-remove="removeTab">
        <el-tab-pane v-for="item in tags" :key="item.name" :label="item.title" :name="item.name">
        </el-tab-pane>
      </el-tabs>
      <span>
        <el-icon>
          <ArrowRight />
        </el-icon>
      </span>
    </div>
  </div>
</template>
<script setup>
import { computed, watch, ref } from 'vue'
// import { useRoute, useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
// const router = useRouter()
const route = useRoute()
watch(
  () => route.path,
  (nval) => {
    const obj = {
      path: route.path,
      title: route.meta.title
    }
    store.dispatch('tagsview/addTags', obj)
  },
  { immediate: true }
)
const tags = computed(() => {
  return store.getters.tags
})
// const changeTags = (item) => {
//   router.push(item.path)
// }
// const handleDeleteTags = (i, path) => {
//   store.commit('tagsview/deleteTags', {
//     i,
//     path
//   })
// }

// const tabIndex = 2
const editableTabsValue = ref('1')
const editableTabs = ref([
  {
    title: '主控台',
    name: '主控台'
  }
])

// const addTab = () => {
//   const newTabName = `${++tabIndex}`
//   // 添加
//   editableTabs.value.push({
//     title: 'New Tab',
//     name: newTabName
//   })
//   editableTabsValue.value = newTabName
// }
const removeTab = (targetName) => {
  console.log('targetName', targetName)
  const tabs = editableTabs.value
  let activeName = editableTabsValue.value
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.name
        }
      }
    })
  }

  editableTabsValue.value = activeName
  editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
}
</script>
<style lang="scss" scoped>
.main-header {
  height: 40px;
  line-height: 40px;
  padding: 0 8px;
  background-color: #f3f4f6;
}

.main-box {
  display: flex;
  height: 40px;
  padding: 0 20px;
  line-height: 40px;
  font-size: 14px;
  margin-top: 1px;
  background-color: #fff;
  position: relative;

  .el-tabs {
    margin-left: 10px;

    +.el-tabs {
      margin-left: 10px;
    }
  }

  >span {
    position: absolute;
    top: 0;
    width: 20px;
    height: 100%;
    text-align: center;
    display: none;
  }

  >span:nth-child(1) {
    left: 0;
  }

  >span:nth-child(3) {
    right: 0;
  }

  .el-icon {
    margin-top: 10px;
    color: #d7dadf;
    top: 0;
  }

}
</style>
  <!-- <el-icon>
        <ArrowLeft />
      </el-icon>
      <ul class="main-ul">
        <li>主控台<span class="active">x</span></li>
        <li>主控台<span class="active">x</span></li>
        <li>主控台<span class="active">x</span></li>
        <li>主控台</li>
        <li>主控台</li>
      </ul>
      <el-icon>
        <ArrowRight />
      </el-icon> -->
