<template>
  <div class="app">
    <h1>你好啊,学生姓名是:{{studentName}}</h1>
    <hr>
    <!--通过父组件给子组件传递函数类型的props事件：子给父传递数据-->
    <School />
     <!--通过父组件给子组件绑定一个自定义事件实现：子给父亲、传递数据-->
    <Student />
    <!-- <Student ref="student"/> -->
  </div>
</template>

<script>
import Student from "./components/Student.vue"
import School from "./components/School.vue"
export default {
  name:"App",
  data(){
    return {
      msg:"欢迎学习vue",
      studentName:""
    }
  },
  methods:{
    m1(){
      console.log("m1被调用")
    }
  },
  components:{
    Student,School
  },
}
</script>
<style scoped>
.app{
  background-color:blue;
}
</style>