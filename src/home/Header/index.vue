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
        <el-icon @click="handleStatusIcon">
          <span v-if="$store.getters.isCollapse">
            <Expand />
          </span>
          <span v-else>
            <Fold />
          </span>
          <!-- {{$store.getters.isCollapse ? '' :'<Expand />'}} <Fold /> -->
        </el-icon>
      </div>
      <div @clack="handleRefresh">
        <el-icon>
          <Refresh />
        </el-icon>
      </div>
    </div>
    <div class="right">
      <div>
        <!-- 全屏 -->
        <el-icon @click="toggle">
          <FullScreen />
        </el-icon>
        <!-- <el-icon><Aim /></el-icon> -->
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
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script setup>
// 信息提示
// import router from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
// 全屏
import screenfull from 'screenfull'
// import { reactive } from 'vue'
import { ref } from 'vue'
import { useStore } from 'vuex'
// import { useRouter } from 'vue-router'
// const router = useRouter()
const store = useStore()
const flag = ref(store.getters.isCollapse)
console.log('flag', flag)
const isFullscreen = ref(screenfull.isFullscreen)
const toggle = () => {
  screenfull.toggle()
  // 触发双向绑定
  isFullscreen.value = screenfull.isFullscreen
}

// 判断
const handleCommand = (command) => {
  if (command === 'logout') {
    logout()
  }
}
// 退出登录
const logout = () => {
  ElMessageBox.confirm(
    '是否要退出登录',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  )
    .then(async () => {
      await store.dispatch('login/outLogout')
      ElMessage({
        type: 'success',
        message: '退出用户成功'
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '退出用户失败'
      })
    })
}
// 折叠菜单
const handleStatusIcon = () => {
  store.dispatch('menus/SetStatusIsCollapse')
}
// 刷新
const handleRefresh = () => {
  // location.reload()
  // router.go(0)
  window.onload()
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
