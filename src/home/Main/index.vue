<template>
  <div class="main-box">
    <Header></Header>
    <div class="main-content">
      <el-card class="box-card">
        页面区域
      </el-card>
    </div>
  </div>
</template>
<script setup>
import Header from './header.vue'
</script>
<style lang="scss" scoped>
.main-content{
  margin: 20px;
}
</style>
