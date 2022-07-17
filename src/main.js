import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 初始化样式
import './style/index.scss'
// ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 栅格布局样式
import 'element-plus/theme-chalk/display.css'
// icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//  页面鉴权
import './permission'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus).use(store).use(router).mount('#app')
