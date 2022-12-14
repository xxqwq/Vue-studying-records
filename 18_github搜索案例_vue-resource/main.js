//引入Vue
import Vue from "vue"
//引入App
import App from "./App.vue"
//关闭Vue的生产提示
import VueResource from "vue-resource"
//引入插件
Vue.use(VueResource)
//使用插件
Vue.config.productionTip = false
//创建vm
new Vue({
  el: "#root",
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
  }
})