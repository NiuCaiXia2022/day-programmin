<template>
  <!-- <div :width="$store.getters.isCollapse ? '65px' : '200px'"> -->
  <div>

    <!-- 左 -->
    <!--
     :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
   -->
    <!-- 菜单 -->
    <!-- {{muesList[0]}} -->
    <el-menu default-active="2" class="el-menu-vertical-demo" unique-opened router
      :style="{ width: $store.getters.isCollapse ? '65px' : '250px' }" :collapse="$store.getters.isCollapse">

      <template v-for="(item, index) in muesList" :key="index">
        <el-sub-menu :index="(index + 1).toString()" class="sub-menu">
          <template #title>
            <!-- 可以识别  element-plus 的icon图标 -->
            <el-icon>
              <!-- <location /> -->
              <component :is="iconPath(item.icon)"></component>
            </el-icon>
            <span>{{ item.name }}</span>
            <!-- <span>{{ $store.getters.isCollapse }}</span> -->
          </template>
          <el-menu-item v-for="(ele, i) in item.children" :key="i" :index="ele.frontpath">
            <el-icon>
              <component :is="iconPath(ele.icon)"></component>
            </el-icon>
            <template #title>{{ ele.name }}</template>
          </el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
    <!-- {{ muesList }} -->
  </div>
</template>
<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { filterRoutes, iconPath } from '../../utils/router'
// import { filterRoutes } from '../../utils/router'

const store = useStore()
// const isCollapse = computed(store.getters.isCollapse)
const muesList = computed(() => {
  return store.getters.menus && store.getters.menus.length > 0 ? filterRoutes(store.getters.menus) : []
})
</script>
<style lang="scss" scoped>
</style>
