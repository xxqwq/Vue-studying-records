<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/><!--也可以用click-->
      <!-- <input type="checkbox" v-model="todo.done"/>也能实现功能，但是不太推荐，因为有点违反原则 -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  //声明接受todo对象
  props: ["todo"],
  methods:{
    //勾选
    handleCheck(id){
      //通知App组件将对应的todo对象的done值取反
      //数据在哪里，操作数据的方法就在那里
      this.$bus.$emit("emitcheckTodo",id)
    },
    handleDelete(id){
      if(confirm("确定删除吗?")){
        //通知APP删除对应id的选项
        this.$bus.$emit("deleteTodo",id)
      }
    }//删除
  },

};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
  background-color: gray;

}
li:hover button{
  display:block
}
</style>