import store from '../store'
import router from '../router'
// export function resetRouter() {
//   if (
//     store.getters.token &&
//     store.getters.username &&
//     store.getters.menus
//   ) {
//     const menus = store.getters.menus
//     console.log('menus', menus)
//     console.log(menus)
//     if (menus && menus.length > 0) {
//       menus.forEach((item) => {
//         console.log('item', item)
//         // console.log('del', router.removeRoute(menus))
//         router.removeRoute(item.name)
//       })
//     }
//   }
// }

export const resetRouter = () => {
  if (
    store.getters.token && store.getters.username && store.getters.menus
  ) {
    const menus = store.getters.menus
    if (menus && menus.length > 0) {
      menus.forEach((item) => {
        item.child.forEach(ele => {
          // console.log('ele', ele)
          router.removeRoute(ele.frontpath)
        })
        // console.log('item', item)
      })
    }
  }
}
