import { createStore } from 'vuex'
import getters from './getters'
import login from './modules/login'
import menus from './modules/menus'

export default createStore({
  getters,
  modules: {
    login,
    menus
  }
})
