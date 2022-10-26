<template>
  <div >
    <h1>{{msg}}</h1>
    <h2 @click="showName">学生姓名:{{name}}</h2>
    <h2>性别:{{sex}}</h2>
  </div>
</template>

<script>
import {mixin} from "../mixin.js"
export default {
  name:"Student",
  data(){
    return {
      msg:"我是一个尚硅谷的学生",
      name:"张三",
      sex:"男"
    }
  },
  mixins:[mixin]

}
</script>
