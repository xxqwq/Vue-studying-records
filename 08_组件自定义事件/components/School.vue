<template>
  <div class="school">
    <h2>学校名称:{{name}}</h2>
    <h2>学校名称:{{address}}</h2>
    <button @click="sendSchoolName">把学校名给App</button>
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
  props:["getSchoolName"]
}
</script>

<style>
.school{
  background-color: gray;
}
</style>