<template>
  <div>
    <!-- 左 -->
    <!--
     :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
   -->
    <!-- 菜单 -->
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="3">
        <el-icon>
          <document />
        </el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting />
        </el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script setup>
// import { useStore } from 'vuex'
// import { reactive } from 'vue'
// const store = useStore()

// const muesList = reactive(
// return store.getters.menus
//    )
</script>
<style lang="scss" scoped>
</style>
