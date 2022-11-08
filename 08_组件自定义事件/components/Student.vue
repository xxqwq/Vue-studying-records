<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <h2>学生姓名:{{ name }}</h2>
    <h2>性别:{{ sex }}</h2>
    <h2>年龄:{{ age }}</h2>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑atguigu的事件</button>
    <button @click="death">销毁当前Student的实例</button>
  </div>
</template>

<script>
export default {
  name:"Student",
  data(){
    return {
      msg:"我是一个尚硅谷的学生",
      name:"张三",
      sex:"女性",
      age:18
    }
  },
  methods:{
    sendStudentName(){
      this.$emit("atguigu",this.name)//触发Student实例身上的atguigu事件
      this.$emit("demo")
    },
    unbind(){
      //解绑一个
        // this.$off(["atguigu","demo"])  
        this.$off()
    },
    death(){
      this.$destroy()
    }
  }
}
</script>
<style scoped>
.test {
  background-color: pink;
}
</style>