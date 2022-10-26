<template>
  <div class="demo">
    <h1>{{msg}}</h1>
    <h2 class="qwe">学生姓名:{{name}}</h2>
    <h2>性别:{{sex}}</h2>
  </div>
</template>

<script>
export default {
  name:"Student",
  data(){
    return {
      msg:"我是一个尚硅谷的学生",
      name:"张三",
      sex:"男"
    }
  },

}
</script>
<style lang="less" scoped>
.demo{
  background-color: orange;
  .qwe{
    font-size: 40px;
  }
}
</style>
