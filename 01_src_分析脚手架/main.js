//入口文件
import Vue from 'vue'
import App from './App.vue'
//引入app组件，它是所有组件的父组件
//关闭生产提示
Vue.config.productionTip = false
//创建Vue实例对象
new Vue({
  //下面这行代码一会解释，完成了这个功能：将App组件放入容器中
  el: "#app",
  render: h => h(App),
})//.$mount('#app')绑定组件
