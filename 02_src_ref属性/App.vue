<template>
  <div>
    <h1 v-test="msg" ref="title"></h1>
    <button @click="showDom">点我输出上方的Dom元素</button>
    <School ref="sch"/>
  </div>
</template>

<script>
import School from "./components/School.vue"
export default {
  name:"App",
  data(){
    return {
      msg:"欢迎学习vue"
    }
  },
  methods:{
    showDom(){
      console.log(this.$refs.title)
      console.log(this.$refs.sch)
    }
  },
  components:{
    School
  }
}
</script>
