import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/', // 首页
    component: () => import('../home')
  },
  {
    path: '/login', // 登录
    name: 'login',
    component: () => import('../views/login')
  }
]
// { /* <el-icon><Help /></el-icon> */ }

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
