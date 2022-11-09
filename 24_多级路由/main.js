//引入Vue
import Vue from "vue"
//引入App
import App from "./App.vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import router from "./router/index"
//关闭Vue的生产提示
Vue.config.productionTip = false
//创建vm
new Vue({
  el: "#root",
  render: h => h(App),
  router:router,
  beforeCreate(){
    Vue.prototype.$bus=this
  },
})