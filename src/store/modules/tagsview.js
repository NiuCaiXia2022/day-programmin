import storage from '../../utils/storage'

const obj = [{
  title: '主控台', path: '/index'
}]

export default {
  namespaced: true,
  state: {
    tags: storage.getItem('tags') || storage.setItem('tags', obj)
  },
  mutations: {
    // 添加
    setTag(state, tag) {
      const hasTag = state.tags.find(item => item.path === tag.path)
      if (!hasTag) {
        state.tags.push(tag)
      }
      storage.setItem('tags', state.tags)
    },
    // 删
    removeTag(state, index) {
      if (index === 0) {
        return false
      } else {
        state.tags.splice(index, 1)
        storage.setItem('tags', state.tags)
      }
    },
    // 删除全部
    removeAllTag(state) {
      state.tags = [{ title: '主控台', path: '/index' }]
      storage.setItem('tags', state.tags)
    },
    // 删除其他
    removeOtherTag(state, tags) {
      state.tags = tags
      storage.setItem('tags', state.tags)
    }
  },
  actions: {
    addTag({ commit }, tag) {
      commit('setTag', tag)
    },
    delTag({ commit }, index) {
      console.log(index)
      commit('removeTag', index)
    },
    removeAllTags({ commit }) {
      commit('removeAllTag')
    },
    delOtherTag({ commit }, tags) {
      commit('removeOtherTag', tags)
    }
  }
}

// import storage from '../../utils/storage'

// export default {
//   namespaced: true,
//   state: {
//     tags: storage.getItem('tags') || [{ title: '主控台', path: '/index' }]
//   },
//   mutations: {
//     addTag(state, tag) {
//       const hasTag = state.tags.find(item => item.path === tag.path)
//       if (!hasTag) {
//         state.tags.push(tag)
//         storage.setItem('tags', state.tags)
//       }
//     },
//     removeTag(state, index) {
//       state.tags.splice(index, 1)
//       storage.setItem('tags', state.tags)
//     },
//     removeAllTag(state) {
//       state.tags = [{ title: '主控台', path: '/index' }]
//       storage.setItem('tags', state.tags)
//     }
//   },
//   actions: {
//     addTags({ commit }, tag) {
//       commit('addTag', tag)
//     },
//     remoteTags({ commit }, index) {
//       commit('removeTag', index)
//     },
//     removeAllTags({ commit }) {
//       commit('removeAllTag')
//     }
//   }
// }

//   < template >
//   <div>
//     <!-- <el-tabs v-model="editableTabsValue" type="card" class="demo-tabs" closable @tab-remove="removeTab">
//     <el-tab-pane v-for="item in tags" :key="item.name" :label="item.title" :name="item.name">
//   </el-tab-pane>
//     </el - tabs > -->
//   123

//   </div >
// </template >
//   <script setup>

// // import { computed, watch, ref } from 'vue'
// // // import { useRoute, useRouter } from 'vue-router'
// // import { useRoute } from 'vue-router'
// // import { useStore } from 'vuex'

// // const store = useStore()
// // // const router = useRouter()
// // const route = useRoute()
// // watch(
// //   () => route.path,
// //   (nval) => { /}
// //     const obj = {
//       path: route.path,
//       title: route.meta.title
//     }
//     store.dispatch('tagsview/addTags', obj)
//   },
//   { immediate: true }
// )

// const tags = computed(() => {
//   return store.getters.tags
// })

// // function handleClose(tag, index) {
// //   const length = tags.value.length
// //   if (tag.name !== route.name) {
// //     store.commit('tagsview/addTags', tag)
// //     return
// //   }
// //   store.commit('tagsview/addTags', tag)
// //   if (index + 1 === length) {
// //     router.push({ name: tags.value[index - 1].name })
// //   } else {
// //     router.push({ name: tags.value[index].name })
// //   }
// // }

// // const changeTags = (item) => {
// //   router.push(item.path)
// // }
// // const handleDeleteTags = (i, path) => {
// //   store.commit('tagsview/deleteTags', {
// //     i,
// //     path
// //   })
// // }

// // const tabIndex = 2
// const editableTabsValue = ref('1')
// // const editableTabs = ref([
// //   {
// //     title: '主控台',
// //     name: '主控台'
// //   }
// // ])
// const removeTab = (targetName) => {
//   // console.log('targetName', targetName)
//   // const tabs = editableTabs.value
//   // let activeName = editableTabsValue.value
//   // if (activeName === targetName) {
//   //   tabs.forEach((tab, index) => {
//   //     if (tab.name === targetName) {
//   //       const nextTab = tabs[index + 1] || tabs[index - 1]
//   //       if (nextTab) {
//   //         activeName = nextTab.name
//   //       }
//   //     }
//   //   })
//   // }

//   // editableTabsValue.value = activeName
//   // editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
// }

// </script>
// <style lang="scss" scoped>
// </style>
