//引入Vue
import Vue from "vue"
//引入App
import App from "./App.vue"
import{mixin} from "./mixin.js"
//关闭Vue的生产提示
Vue.config.productionTip=false
//创建vm
Vue.mixin(mixin)
new Vue({
  el:"#root",
  render:h=>h(App)
})