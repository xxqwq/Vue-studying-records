<template>
  <div class="school">
    <h2>学校名称:{{name}}</h2>
    <h2>学校名称:{{address}}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js"
export default {
  name:"School",
  data(){
    return {
      name:"尚硅谷",
      address:"北京"
    }
  },
  methods:{
    demo(msgName,data){
      console.log("hello消息收到了",data,this)
    }
  },
    mounted(){
      this.pubId=pubsub.subscribe("hello",this.demo)
    },
    beforeDestroy(){
      pubsub.unsubscribe(this.pubId)
    }
}
</script>

<style>
.school{
  background-color: gray;
}
</style>