<template>
  <div class="demo">
    <h1>{{msg}}</h1>
    <h2 >学校名称:{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
export default {
  name:"Student",
  data(){
    return {
      msg:"我是一个尚硅谷的学生",
      name:"尚硅谷",
      address:"北京"
    }
  },
}
</script>
<style scoped>
.demo{
  background-color: gray;
}
</style>