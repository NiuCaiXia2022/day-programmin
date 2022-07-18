// 路由 筛选

const isNull = (data) => {
  // if (data.frontpath === '' && data.frontpath === 'null') {
  //   delete data.frontpath
  // }
  if (data.frontpath === '' || data.frontpath === null) {
    delete data.frontpath
  }
  return data
  // console.log('菜单数据1', data)
  // if (data.frontpath === null) return true
  // console.log('data', data)
  // console.log('1', data.frontpath === '')
  // console.log('2', data.frontpath === null)
  // return false
  // console.log('菜单数据1', data)
  // console.log('菜单数据1', typeof (data.frontpath) === 'null')
  // if(typeof data.frontpath === 'null'){

  // }
  // data.frontpath
}

// const isEmpty = (data) => {
//   // console.log('ele', data)
//   if (!data) return true
//   // 删除没有 data.child
//   if (JSON.stringify(data.child) === '[]') {
//     delete data.child
//   }
//   // console.log('ele', data)
// }
// console.log(isEmpty)

// 一级数据
export const filterRoutes = (menus) => {
  // console.log('菜单数据', menus) // console.log(123)
  // 存一级数据
  const routes = []
  // 将菜单数据 转成路由数据
  menus.forEach(item => {
    // console.log('路由22', isNull(item))
    isNull(item)
    routes.push({
      icon: item.icon,
      name: item.name,
      desc: item.desc,
      order: item.order,
      children: []
    })
  })

  // 二级数据
  routes.forEach((e, index) => {
    // console.log('e', e)
    // console.log('menus.child', menus[index].child)
    // 解构 child
    e.children.push(...menus[index].child)
  })
  // console.log('路由22', routes)

  // routes.forEach(item => {
  //   console.log('item', item)
  //   let royte={
  //     meta:{
  //     }
  //   }
  // })

  return routes
}
// export const filterRoutes = (menus) => {
//   menus.forEach(item => {
//     // console.log('item', item)
//     if (item.child && item.child.length > 0) {
//       item.child.forEach(ele => {
//         // console.log('ele', ele)
//         menusChildren(ele)
//         // const route = menusChildren(ele)
//         // console.log('route', route)
//       })
//     }
//   })
// }

// const menusChildren = (item) => {
//   console.log('zi', item)
//   const route = {
//     path: item.fontpath,
//     name: '',
//     meta: {
//       title: item.name,
//       icon: iconPath(item.icon)
//     },
//     compontent: () => import('../views' + item.frontpath)
//   }
//   return route
// }

export const iconPath = (icon) => {
  // console.log('icon', icon)
  if (icon.indexOf('-') === -1) {
    // console.log('icon111', icon[0].toUpperCase() + icon.substr(1))
    return icon[0].toUpperCase() + icon.substr(1)
  }

  // if (icon.indexOf('-') === icon.lastIndexOf('-')) {
  if (icon.indexOf('-') === icon.lastIndexOf('-')) {
    // console.log('icon222', icon[0].toUpperCase() + icon.substring(1, [icon.indexOf('-')]) + icon[icon.indexOf('-') + 1].toUpperCase() + icon.substring([icon.indexOf('-') + 2]))
    return icon[0].toUpperCase() + icon.substring(1, [icon.indexOf('-')]) + icon[icon.indexOf('-') + 1].toUpperCase() + icon.substring([icon.indexOf('-') + 2])
  } else {
    // console.log(icon)
    const str1 = icon[0].toUpperCase() + icon.substring(1, [icon.indexOf('-')]) + icon[icon.indexOf('-') + 1].toUpperCase() + icon.substring([icon.indexOf('-') + 2])

    // console.log('str1', str1)
    if (str1.indexOf('-') === str1.lastIndexOf('-')) {
      // console.log('str2', str1[0].toUpperCase() + str1.substring(1, [str1.indexOf('-')]) + str1[str1.indexOf('-') + 1].toUpperCase() + str1.substring([str1.indexOf('-') + 2]))
      return str1[0].toUpperCase() + str1.substring(1, [str1.indexOf('-')]) + str1[str1.indexOf('-') + 1].toUpperCase() + str1.substring([str1.indexOf('-') + 2])
    }
  }
}
