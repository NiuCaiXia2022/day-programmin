export default {
  namespaced: true,
  state: {
    isCollapse: false// 折叠 状态
  },
  mutations: {
    //  折叠 状态
    isCollapse(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
    // 折叠 状态
    SetStatusIsCollapse({ commit }) {
      commit('isCollapse')
    }
  }

}
