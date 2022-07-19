<template>
  <div class="home-box">
    <!-- 首页 -->
    <el-container>
      <el-header>
        <!-- 头 -->
        <Header></Header>
      </el-header>
      <!-- 下 -->
      <el-container>
        <el-aside width="auto">
          <Aside></Aside>
        </el-aside>
        <el-main>
          <Main></Main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import Header from './Header'
import Aside from './Aside'
import Main from './Main'
// import { ref } from 'vue'
// const flag=ref()
</script>
<style lang="scss" scoped>
.home-box {
  width: 100vw;
  height: 100vh;

  .el-header {
    padding: 0;
    height: 64px;
  }

  .el-aside {
    height: calc(100vh - 64px);

    :deep .el-menu {
      border-right: 0;
    }
  }

  .el-main {
    background-color: #f3f4f6;
    height: calc(100vh - 64px);
    padding: 0;
  }
}
</style>
