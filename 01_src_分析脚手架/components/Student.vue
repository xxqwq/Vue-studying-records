<template>
      <div >
        <h2>
          欢迎学生！
        </h2>
        <h2>
          学生名称:{{name}} 年龄：{{age}}<br>
        </h2>
      </div>
</template>

<script>
//export const school=....
export default {
      name:"Student",//最好和文件名保持一致
      data() {
        return {
          name: "李翔",
          age:18
        }
      },
    }
    //export {school}
</script>


