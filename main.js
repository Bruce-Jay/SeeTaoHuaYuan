// #ifndef VUE3
import Vue from 'vue'
import App from './App'

// 1. 导入 store 的实例对象
import store from '@/store/store.js'

Vue.config.productionTip = false

App.mpType = 'app'

// 封装弹窗的方法
uni.$showMsg = function(title = '数据请求失败！', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none'
  })
}

const app = new Vue({
  ...App,
  // 将 store 挂载到 Vue 实例上
  store
})
app.$mount()
// #endif

// #ifdef VUE3
import {
  createSSRApp
} from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
