<template>
  <div class="school">
    <h2>学校名称:{{name}}</h2>
    <h2>学校名称:{{address}}</h2>
  </div>
</template>

<script>
export default {
  name:"School",
  data(){
    return {
      name:"尚硅谷",
      address:"北京"
    }
  },
    mounted(){
      this.x.$on("hello",(data)=>{
        console.log("我是School组件,收到了数据:",data)
      })
    },
    beforeDestroy(){
      this.x.$off("hello")
    }
}
</script>

<style>
.school{
  background-color: gray;
}
</style>