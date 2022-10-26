<template>
      <div class="demo">
        <h2>
          欢迎学校Vue
        </h2>
        <h2>
          学校名称:{{name}}{{address}}<br>
        </h2>
      </div>
</template>

<script>
//export const school=....
export default {
      name:"School",//最好和文件名保持一致
      data() {
        return {
          name: "尚硅谷",
          address: "北京",
        }
      },
    }
    //export {school}
</script>

<style>
.demo{
  background-color: red;
}
</style>
