import Vue from "vue"

export default{
  install(){
    console.log("@@ install")
    //定义混入
    Vue.mixin({
        methods:{
          showName(){
            alert(this.name)
          }
      }
    })
    //给vue原型上添加一个方法
    Vue.prototype.hello=()=>(alert("你好啊"))
    //定义全局指令
    Vue.directive("fbind",{
      bind(element,binding){
        element.value=binding.value
      },
      inserted(element,binding)
      {
        element.focus()
      },
      update(element,binding){
        element.value=binding.value
      }
    })
  }
}