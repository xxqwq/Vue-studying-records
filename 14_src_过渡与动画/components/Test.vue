<template>
  <div>
    <button @click="isShow = !isShow" name="h1">显示/隐藏</button>
    <transition-group appear name="h1">
        <h1 v-show="isShow" key="1">你好啊</h1>
        <h1 v-show="isShow" key="2">尚硅谷</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style>
h1 {
  background-color: orange;
}
.h1-enter-active {
  animation: atguigu 1s linear;
}
.h1-leave-active {
  animation: atguigu 1s reverse;
}
@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>