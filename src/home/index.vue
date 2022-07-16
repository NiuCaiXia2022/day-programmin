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
        <el-aside width="200px">
          <Aside></Aside>
        </el-aside>
        <el-main>
          <Main></Main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import Header from './Header'
import Aside from './Aside'
import Main from './Main'
</script>
<style lang="scss" scoped>
.home-box {
  width: 100vw;
  height: 100vh;
  .el-header{
    padding: 0;
    height: 64px;
  }
}
</style>
