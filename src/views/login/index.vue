<template>
  <div class="login">

    <!--
    hidden-xs-only - 当视口在 xs 尺寸时隐藏
    hidden-sm-only - 当视口在 sm 尺寸时隐藏
    hidden-sm-and-down - 当视口在 sm 及以下尺寸时隐藏  sm》=768 (768-992)
    hidden-sm-and-up - 当视口在 sm 及以上尺寸时隐藏
    hidden-md-only - 当视口在 md 尺寸时隐藏
    hidden-md-and-down - 当视口在 md 及以下尺寸时隐藏  md》=992(992-1200)
    hidden-md-and-up - 当视口在 md 及以上尺寸时隐藏
    hidden-lg-only - 当视口在 lg 尺寸时隐藏
    hidden-lg-and-down - 当视口在 lg 及以下尺寸时隐藏  lg》=1200(1200-1920)
    hidden-lg-and-up - 当视口在 lg 及以上尺寸时隐藏
    hidden-xl-only - 当视口在 xl 尺寸时隐藏            xl》=1920
   -->
    <!-- 登录 -->
    <el-row :gutter="24">
      <!-- 大屏 -->
      <el-col :span="16" class="hidden-sm-and-down">
        <div class="grid-content ep-bg-purple grid-left">
          欢迎光临
        </div>
      </el-col>
      <el-col :span="8" class=" hidden-sm-and-down right">
        <el-row :gutter="24">
          <el-col :span="6">
            <div class="grid-content ep-bg-purple" />
          </el-col>
          <el-col :span="12">
            <div class="grid-content ep-bg-purple">
              <div>
                <h1>欢迎回来</h1>
                <p><span></span> 账号密码登录 <span></span></p>
                <!-- 表单 -->
                <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" class="demo-ruleForm" status-icon>
                  <el-form-item prop="username">
                    <el-input v-model.trim="loginForm.username" placeholder="请输入用户名" :prefix-icon="User" />
                  </el-form-item>
                  <el-form-item prop="password">
                    <el-input v-model.trim="loginForm.password" placeholder="请输入密码" :prefix-icon="Lock" show-password />
                  </el-form-item>
                  <el-form-item>
                    <el-button class="bottom" type="primary" @click="handleLoginSubmit('')" round>登录</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ep-bg-purple" />
          </el-col>
        </el-row>
      </el-col>
      <!-- 小屏 -->
      <el-col :span="24" class=" hidden-md-and-up md-mini-top">
        <div class="grid-content ep-bg-purple-dark md-mini left">
          欢迎光临
        </div>
      </el-col>
      <el-col :span="24" class=" hidden-md-and-up md-mini-bottom">
        <div class="grid-content ep-bg-purple-dark">
          <el-row :gutter="24">
            <el-col :span="6">
              <div class="grid-content ep-bg-purple" />
            </el-col>
            <el-col :span="12">
              <div class="grid-content ep-bg-purple">
                <div>
                  <h1>欢迎回来</h1>
                  <p><span></span> 账号密码登录 <span></span></p>
                  <!-- 表单 -->
                  <el-form ref="miniLoginFormRef" :model="loginForm" :rules="loginRules" class="demo-ruleForm"
                    status-icon>
                    <el-form-item prop="username">
                      <el-input v-model.trim="loginForm.username" placeholder="请输入用户名" :prefix-icon="User" />
                    </el-form-item>
                    <el-form-item prop="password">
                      <el-input v-model.trim="loginForm.password" placeholder="请输入密码" :prefix-icon="Lock"
                        show-password />
                    </el-form-item>
                    <el-form-item>
                      <el-button class="bottom" type="primary" @click="handleLoginSubmit('mini')" round>登录</el-button>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ep-bg-purple" />
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
// 信息提示
import { ElNotification } from 'element-plus'

const store = useStore()
const router = useRouter()
// 表单验证
const loginRules = reactive({
  username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
})
// 表单数据
const loginForm = reactive({
  username: 'admin',
  password: 'admin'
})
const loginFormRef = ref('')
const miniLoginFormRef = ref('')
// 点击 登录
const handleLoginSubmit = async (name) => {
  if (!loginFormRef.value || !miniLoginFormRef.value) return
  // console.log('点击登录', loginForm)
  if (name === 'mini') {
    await miniLoginFormRef.value.validate(async (valid) => {
      if (valid) {
        // const res = await store.dispatch('login/getLogin', loginForm)
        // console.log('点击登录', res)

        await store.dispatch('login/getLogin', loginForm)
        // await store.dispatch('login/getInfo')
        router.push('/')
        ElNotification({
          title: '提示',
          message: '登陆成功',
          type: 'success'
        })
      }
    })
  } else {
    await loginFormRef.value.validate(async (valid) => {
      if (valid) {
        const res = await store.dispatch('login/getLogin', loginForm)
        console.log('点击登录', res)
        // await store.dispatch('login/getInfo')
        router.push('/')
        ElNotification({
          title: '提示',
          message: '登陆成功',
          type: 'success'
        })
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: #6366f1;

  // display: flex;
  .grid-left {
    width: 100%;
    line-height: 100vh;
    text-align: center;
    font-size: 70px;
    color: #fff;
    font-weight: 700;
  }

  .right {
    background-color: #fff;
    height: 100vh;
    padding-top: 30vh;
  }

  .md-mini-top {
    height: 30vh;

    .left {
      line-height: 30vh;
      width: 100%;
      text-align: center;
      font-size: 70px;
      color: #fff;
      font-weight: 700;
    }
  }

  .md-mini-bottom {
    height: 70vh;
    background-color: #fff;

    h1 {
      margin-top: 10vh;
    }
  }

  h1 {
    font-size: 36px;
    color: #000;
    text-align: center;
    font-weight: 700;
  }

  p {
    font-size: 24px;
    color: #e5e7eb;
    margin: 35px auto;
    text-align: center;
    font-size: 20px;

    span {
      display: inline-block;
      width: 50px;
      height: 1px;
      background-color: #e5e7eb;
      margin-bottom: 5px;
    }
  }

  .el-form {
    text-align: center;
    width: 100%;

    .el-input {
      height: 40px;
    }

    .bottom {
      width: 100%;
    }
  }

}
</style>

<!-- <div class="login-left">欢迎光临</div>
    <div class="login-right">
      <div class="right">
        <h1>欢迎回来</h1>
        <p><span></span> 账号密码登录 <span></span></p>
        表单
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" class="demo-ruleForm" :size="formSize"
          status-icon>
          <el-form-item prop="username">
            <el-input v-model.trim="name" placeholder="请输入用户名" :prefix-icon="Search" />
          </el-form-item>
          <el-form-item prop="name">
            <el-input v-model.trim="name" placeholder="请输入密码" :prefix-icon="Search" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)" round>登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div> -->
