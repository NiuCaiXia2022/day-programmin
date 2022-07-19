// const getters = () => {
//   token: state => state.login.token
// }
// export default getters
export default {
  token: state => state.login.token,
  username: state => state.login.username,
  menus: state => state.login.menus,
  ruleNames: state => state.login.ruleNames,
  isCollapse: state => state.menus.isCollapse
}
