import { createStore } from 'vuex'
import getters from './getters'
import login from './modules/login'

export default createStore({
  getters,
  modules: {
    login
  }
})
