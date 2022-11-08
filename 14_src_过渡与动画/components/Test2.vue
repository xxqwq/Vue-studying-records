<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition appear name="h2">
      <h1 v-show="isShow">尚硅谷</h1>
    </transition>
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
/*进入的起点 */
.h2-enter ,.h2-leave-to{
  transform: translateX(-100%);
}
/*进入的终点 */
.h2-enter-to ,.h2-leave{
  transform: translateX(0);
}
.h2-enter-active,.h2-leave-active{
  transition: 0.5s linear;
} 


</style>