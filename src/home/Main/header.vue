<template>
  <div class="main-header">
    <div class="main-box">
      <div class="main-tags">
        <TagsView></TagsView>
      </div>
    </div>
    <div class="main-header-left">
      <el-icon>
        <ArrowLeft />
      </el-icon>
    </div>
    <div class="main-header-right">
      <el-icon>
        <ArrowRight />
      </el-icon>
    </div>

  </div>
</template>
<script setup>
import TagsView from '../../components/TagsView.vue'

</script>
<style lang="scss" scoped>
.main-header {
  width: calc(100vw - 250px);
  height: 40px;
  padding: 0 8px;
  line-height: 40px;
  overflow: hidden;
  position: relative;
}

.main-tags {
  width: 100%;
}

.main-box {
  width: 100%;
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  margin-top: 1px;
  background-color: #fff;
  position: relative;
  overflow-y: auto;

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

.main-header-left,
.main-header-right {
  position: absolute;
  top: 1px;
  width: 18px;
  height: 30px;
  line-height: 30px;
  z-index: 99;

  .el-icon {
    color: #949596;
  }
}

.main-header-left {
  left: 1px;
}

.main-header-right {
  right: 50px;
}
</style>
