<template>
  <div class="app">
    <h1>你好啊,学生姓名是:{{studentName}}</h1>
    <hr>
    <!--通过父组件给子组件传递函数类型的props事件：子给父传递数据-->
    <School :getSchoolName="getSchoolName"/>
     <!--通过父组件给子组件绑定一个自定义事件实现：子给父亲、传递数据-->
    <Student v-on:atguigu="getStudentName" @demo="m1"/>
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
    getSchoolName(name){
      console.log("app收到了学校名:",name)
    },
    getStudentName(name){
      console.log("demo被调用了:",name)
      this.studentName=name
    },
    m1(){
      console.log("m1被调用")
    }
  },
  components:{
    Student,School
  },
  // mounted(){
  //   //this.$refs.student.$on("atguigu",this.getStudentName)
  //   this.$refs.student.$on("atguigu",this.getStudentName)
  // }
}
</script>
<style scoped>
.app{
  background-color:blue;
}
</style>