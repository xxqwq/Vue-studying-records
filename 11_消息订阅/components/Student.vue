<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <h2>学生姓名:{{ name }}</h2>
    <h2>性别:{{ sex }}</h2>
    <h2>年龄:{{ age }}</h2>
    <button @click="sendStudentName">把学生名给School</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js"
export default {
  name: "Student",
  data() {
    return {
      msg: "我是一个尚硅谷的学生",
      name: "张三",
      sex: "女性",
      age: 18,
    };
  },
  methods: {
    sendStudentName() {
      pubsub.publish("hello",666)
    },
  },
};
</script>
<style scoped>
.test {
  background-color: pink;
}
</style>