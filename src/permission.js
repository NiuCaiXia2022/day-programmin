// 页面鉴权

import router from './router'
import store from './store'
// utils/router.js 的方法过滤 路由
import { filterRoutes } from './utils/router'

const whiteList = ['404']

router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  const menus = store.getters.menus
  // console.log('token', token)
  // console.log('menus', menus)
  next()
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      // next()
      if (!menus) {
        // 1. 拿菜单数据  用方法筛选出来
        const { menus } = await store.dispatch('login/getInfo')
        // console.log('res', menus)
        //  2. 用utils/router.js 的方法过滤 筛选出数据
        const routers = filterRoutes(menus)
        console.log('permission--routers', routers)
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }

  // const username = store.getters.username
  // const menus = store.getters.menus
  // if (token) {
  //   if (to.path === '/login') {
  //     next(from.path)
  //   } else {
  //     // if (!menus) {
  //     //   const res = await store.dispatch('login/getInfo')
  //     //   console.log(res)
  //     // }
  //     next()
  //   }
  // } else {
  //   if (whiteList.includes(to.path)) {
  //     next()
  //   } else {
  //     next('/login')
  //   }
  // }
})
