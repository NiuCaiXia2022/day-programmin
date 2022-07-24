<template>
  <div class="tagsview">
    <div class="box">
      <div class="ul">
        <p class="li" @click="$router.push(item.path)" :class="{ active: $route.path === item.path }"
          v-for="(item, index) in tags" :key="index">
          {{ item.title }}
          <span :class="{ active: $route.path === item.path }" v-if="index !== 0"
            @click="handleDeleteTags(index)">x</span>
        </p>
      </div>

    </div>
    <div class="position">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-icon class="el-icon--right">
            <ArrowDown />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :icon="Plus" @click="handleDelOtherTag">关闭其他</el-dropdown-item>
            <el-dropdown-item :icon="CirclePlus" @click="handleDelAllTag">全部关闭</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { computed, watch } from 'vue'
const store = useStore()
const router = useRouter()
const route = useRoute()
console.log('store', store.getters.tags)

// 计算属性  获取数据
const tags = computed(() => {
  return store.getters.tags
})

// 删除tag
const handleDeleteTags = (index) => {
  store.dispatch('tagsview/delTag', index)
}

// 删除其他tag
const handleDelOtherTag = () => {
  const tags = []
  const tag = store.getters.tags.find(item => item.path === route.path)
  tags.push(
    { title: '主控台', path: '/index' }, tag
  )
  console.log(tags)
  store.dispatch('tagsview/delOtherTag', tags)
  console.log(store.getters.tags)
}

// 删除所有
const handleDelAllTag = () => {
  store.dispatch('tagsview/removeAllTags')
}

watch(
  () => router.currentRoute.value,
  (to, from) => {
    const obj = {
      title: to.meta.title,
      path: to.path
    }
    console.log(obj)
    store.dispatch('tagsview/addTag', obj)
    // console.log(to, from)
  }
)

</script>
<style lang="scss" scoped>
.tagsview {
  width: 100%;
  background-color: #f3f4f6;
  position: relative;
}

.position {
  position: absolute;
  background-color: #fff;
  right: 10px;
  top: 1px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  padding: 7px 0 0 3px;
  border-radius: 5px;
  z-index: 999;
}

.ul {
  display: flex;
  overflow: hidden;

  .active {
    color: #409eff;
  }

  .li {
    width: 100px;
    height: 40px;
    border-radius: 5px;
    background-color: #fff;
    margin: 0 5px;
    cursor: pointer;
    position: relative;
    transition: width 1s; // 动画加宽
    text-align: center;

    &>span {
      display: none;
    }

  }

  .li:hover {
    width: 120px;
    text-align: center;
    color: #409eff;

    &>span {
      top: 5px;
      color: #409eff;
      width: 15px;
      display: inline-block;
      width: 15px;
      height: 15px;
      text-align: center;
      line-height: 12px;

      &:hover {
        background-color: #a8abb2;
        color: #fff;

        border-radius: 50%;
      }
    }

  }

}

.box {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
