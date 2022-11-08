<template>
  <div class="container">
    <Category title="游戏">
      <template scope="atguigu">
        <ul>
          <li v-for="(item, index) in atguigu.games" :key="index">
            {{ item }}
          </li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="{games}">
        <ol>
          <li style="color:red" v-for="(item, index) in games" :key="index">
            {{ item }}
          </li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="{games}">
          <h4 v-for="(item, index) in games" :key="index">
            {{ item }}
          </h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  components: { Category },
  name: "App",
};
</script>

<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
h4 {
  text-align: center;
}
</style>