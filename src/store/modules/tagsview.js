
export default {
  namespaced: true,
  state: {
    tags: []
  },
  mutations: {
    addTags(state, tags) {
      // const flag = state.tage.find(item => item.path === tags.path)
      // if (!flag) {
      //   state.tage.push = tags
      // }
      state.tags.push = tags
    },
    remoteTags(state, tags) {
      if (tags.path === '/') return
      state.tags.splice(tags.i, 1)
    }

  },
  actions: {
    addTags({ commit }, tags) {
      commit('addTags', tags)
    },
    remoteTags({ commit }, tags) {
      commit('remoteTags', tags)
    }
  }
}
