<template>
  <div class="container">
    <Category title="美食">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" />
    </Category>
    <Category title="游戏">
      <li v-for="(item, index) in games" :key="index">
        {{ item }}
      </li>
    </Category>
    <Category title="电影">
      <video
        controllers
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  components: { Category },
  name: "App",
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红警", "穿越火线", "LOL", "马里奥"],
      films: ["教父", "信条", "拆弹专家", "尚硅谷"],
    };
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>