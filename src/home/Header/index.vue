<template>
  <div class="header-div">
    <!-- 头 -->
    <div class="left">
      <div>
        <img class="left-img" src="../../icon/图标.png">
        <span>积云编程</span>
      </div>
      <div>
        <!-- <el-icon>
          <Expand />
        </el-icon> -->
        <el-icon>
          <Fold />
        </el-icon>
      </div>
      <div>
        <el-icon>
          <Refresh />
        </el-icon>
      </div>
    </div>
    <div class="right">
      <div>
        <el-icon>
          <FullScreen />
        </el-icon>
      </div>
      <div>
         <el-avatar> user </el-avatar>
      </div>
      <div>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            admin<el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="a">修改密码</el-dropdown-item>
              <el-dropdown-item command="">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script setup>
// import { reactive } from 'vue'
const handleCommand = () => {

}
</script>
<style lang="scss" scoped>
.header-div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 64px;
  background-color: #4338ca;

  .left {
    display: flex;
    color: #fff;

    >:nth-child(1) {
      width: 250px;
      text-align: center;

      .left-img {
        width: 25px;
        height: 25px;
        border-radius: 5px;
        vertical-align: sub; //跟字体对齐
      }

      span {
        font-size: 22px;
        font-weight: 100;
        padding-left: 7px;
      }
    }

    >:nth-child(2),
    >:nth-child(3) {
      width: 42px;
      text-align: center;

      .el-icon {
        font-size: 21px;
      }

      padding-top: 5px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    color: #fff;

    >:nth-child(1) {
      width: 42px;
      font-size: 18px;
    }

    >:nth-child(3) {
      margin: 0 8px;

      .el-dropdown {
        color: #fff;
      }

    }
  }
}
</style>
