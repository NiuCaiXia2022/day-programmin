// 页面鉴权

// import Login from './api/login'
import router, { addRoutes } from './router'
// import router from './router'
import store from './store'
// utils/router.js 的方法过滤 路由
// import { filterRoutes } from './utils/router'

const whiteList = ['/404', '/login']

router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  // console.log('token', token)
  // const menus = store.getters.menus
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      // console.log('b')
      let hasNewRoutes = false
      // 判断 vuex 的菜单数据 是否存在 菜单
      if (!store.state.login.menus) {
        const { menus } = await store.dispatch('login/getInfo') // 用户信息  写在鉴权里
        // console.log('res', menus)
        if (menus && menus.length > 0) {
          // console.log('123')
          hasNewRoutes = addRoutes(menus)
          console.log(router.getRoutes())
        }
      }
      //  fullPath能缓存路由跳转后面携带的参数 刷新后依旧存在
      hasNewRoutes ? next(to.fullPath) : next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
