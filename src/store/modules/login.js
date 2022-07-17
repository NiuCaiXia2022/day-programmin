import Login from '../../api/login'
import Storage from '../../utils/storage'

export default {
  namespaced: true,
  state: {
    token: Storage.getItem('token') || '',
    username: Storage.getItem('username') || '',
    menus: Storage.getItem('menus') || '',
    ruleNames: ''
  },
  mutations: {
    // 登录
    login(state, token) {
      state.token = token
      Storage.setItem('token', token)
    },
    // 用户名
    username(state, username) {
      state.username = username
      Storage.setItem('username', username)
    },
    // 菜单
    menus(state, menus) {
      state.menus = menus
      Storage.setItem('menus', menus)
    },
    // 接口信息权限
    ruleNames(state, ruleNames) {
      state.ruleNames = ruleNames
    }
  },
  actions: {
    // 登录
    async getLogin({ commit }, loginForm) {
      const res = await Login.getLogin(loginForm)
      commit('login', res.token)
      return res
    },
    // 用户信息
    async getInfo({ commit }) {
      //  menus 接口   ruleNames  接口信息权限
      // role 登录用户信息
      // avatar 头像  id  super：1   username 用户名
      // const { menus, role, ruleNames, username, super, id, avatar } = await Login.getInfo()
      const { menus, username, ruleNames } = await Login.getInfo()
      commit('username', username) // 用户名
      commit('menus', menus) // 菜单
      commit('ruleNames', ruleNames) // 接口信息权限
      return { menus, username, ruleNames }
    }
  }

}
