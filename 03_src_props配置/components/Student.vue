<template>
  <div >
    <h1>{{msg}}</h1>
    <h2>学生姓名:{{name}}</h2>
    <h2>性别:{{sex}}</h2>
    <h2>年龄:{{myAge}}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name:"Student",
  data(){
    return {
      msg:"我是一个尚硅谷的学生",
      myAge:this.age
    }
  },
  methods:{
    updateAge(){
      this.myAge++  
    }
  },
  //props:["name","age","sex"]简单声明接受
  /* props:{
  //   name:String,
  //   age:Number,
  //   sex:String}
  */ //限制类型
    props:{
      name:{
        type:String,//name的类型是String类型
        required:true//名字是必须要传的
      },
      age:{
        type:Number,
        required:false,
        default:99
      },
      sex:{
        type:String,
        required:true,
      }
    }//接受的同时对数据进行类型限制＋默认值的指定+必要性的限制

}
</script>
