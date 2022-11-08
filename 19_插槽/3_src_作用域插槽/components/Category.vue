<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot :games="games">我是默认内容</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["红警", "穿越火线", "LOL", "马里奥"],
    };
  },
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