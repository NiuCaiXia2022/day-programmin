import { createRouter, createWebHashHistory } from 'vue-router'

import Admin from '../home/index.vue'
import Index from '../views/index'
import Login from '../views/login'
import NotFound from '../views/404'
import GoodList from '../views/goods/list.vue'
import CategoryList from '../views/category/list.vue'
import UserList from '../views/user/list.vue'
import OrderList from '../views/order/index.vue'
import CommentList from '../views/comment/list.vue'
import ImageList from '../views/image/list.vue'
import NoticeList from '../views/notice/list.vue'
import SettingBase from '../views/setting/base.vue'
import CouponList from '../views/coupon/list.vue'
import ManagerList from '../views/manager/list.vue'
import AccessList from '../views/access/list.vue'
import RoleList from '../views/role/list.vue'
import SkusList from '../views/skus/list.vue'
import LevelList from '../views/level/list.vue'

const routes = [
  {
    path: '/',
    name: 'admin',
    component: Admin
  },
  {
    path: '/login',
    component: Login,
    meta: {
      title: '登录页'
    }
  }, {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

// 动态路由，用于匹配菜单动态添加路由
const asyncRoutes = [{
  path: '/',
  name: '/',
  // redirect: '/index',
  component: Index,
  meta: {
    title: '后台首页'
  }
},
{
  path: '/goods/list',
  name: '/goods/list',
  component: GoodList,
  meta: {
    title: '商品管理'
  }
},
{
  path: '/category/list',
  name: '/category/list',
  component: CategoryList,
  meta: {
    title: '分类列表'
  }
},
{
  path: '/user/list',
  name: '/user/list',
  component: UserList,
  meta: {
    title: '用户列表'
  }
},
{
  path: '/order/list',
  name: '/order/list',
  component: OrderList,
  meta: {
    title: '订单列表'
  }
},
{
  path: '/comment/list',
  name: '/comment/list',
  component: CommentList,
  meta: {
    title: '评价列表'
  }
},
{
  path: '/image/list',
  name: '/image/list',
  component: ImageList,
  meta: {
    title: '图库列表'
  }
},
{
  path: '/notice/list',
  name: '/notice/list',
  component: NoticeList,
  meta: {
    title: '公告列表'
  }
},
{
  path: '/setting/base',
  name: '/setting/base',
  component: SettingBase,
  meta: {
    title: '配置'
  }
},
{
  path: '/coupon/list',
  name: '/coupon/list',
  component: CouponList,
  meta: {
    title: '优惠券列表'
  }
},
{
  path: '/manager/list',
  name: '/manager/list',
  component: ManagerList,
  meta: {
    title: '管理员管理'
  }
},
{
  path: '/access/list',
  name: '/access/list',
  component: AccessList,
  meta: {
    title: '菜单权限管理'
  }
},
{
  path: '/role/list',
  name: '/role/list',
  component: RoleList,
  meta: {
    title: '角色管理'
  }
},
{
  path: '/skus/list',
  name: '/skus/list',
  component: SkusList,
  meta: {
    title: '规格管理'
  }
},
{
  path: '/level/list',
  name: '/level/list',
  component: LevelList,
  meta: {
    title: '会员等级'
  }
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export function addRoutes(menus) {
  // 是否有新的路由
  let hasNewRoutes = false
  const findAndAddRoutesByMenus = (arr) => {
    // console.log('arr', arr) // 获取的是菜单数据
    arr.forEach(e => {
      // 动态路由 跟 传递的路由  path 一样的话保存
      const item = asyncRoutes.find(o => o.path === e.frontpath)
      // hasRoute 用于判断路由是否存在。hasRoute接收一个name字符串，返回一个boolen值。
      if (item && !router.hasRoute(item.path)) { // item 存在 并且 item的path不存在
        // 路由添加
        router.addRoute('admin', item)
        hasNewRoutes = true
      }
      if (e.child && e.child.length > 0) {
        findAndAddRoutesByMenus(e.child) // 递归
      }
    })
  }
  findAndAddRoutesByMenus(menus) // 调用
  return hasNewRoutes
}

export default router
