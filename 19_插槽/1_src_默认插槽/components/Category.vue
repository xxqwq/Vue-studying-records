<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <ul>
      <!-- <li v-for="item,index in listData" :key="index">{{ item }}</li> -->
      <!-- <img v-show="title=='美食'" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"> -->
      <slot>默认值1</slot>
      <slot>默认值2</slot>
      <!-- 定义一个插槽（挖个坑，等着组建的使用者进行填充） -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: [ "title"],
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>