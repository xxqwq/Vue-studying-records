<template>
  <!-- <transition name="todo" appear> -->
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @change="handleCheck(todo.id)"
        /><!--也可以用click-->
        <!-- <input type="checkbox" v-model="todo.done"/>也能实现功能，但是不太推荐，因为有点违反原则 -->
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input
          type="text"
          :value="todo.title"
          v-show="todo.isEdit"
          @blur="handleBlur(todo, $event)"
          ref="inputTitle"
        />
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">
        删除
      </button>
      <button
        class="btn btn-edit"
        @click="handleEdit(todo)"
        v-show="!todo.isEdit"
      >
        编辑
      </button>
    </li>
  <!-- </transition> -->
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Item",
  //声明接受todo对象
  props: ["todo"],
  methods: {
    //勾选
    handleCheck(id) {
      //通知App组件将对应的todo对象的done值取反
      //数据在哪里，操作数据的方法就在那里
      this.$bus.$emit("emitcheckTodo", id);
    },
    handleDelete(id) {
      if (confirm("确定删除吗?")) {
        //通知APP删除对应id的选项
        pubsub.publish("deleteTodo", id);
      }
    }, //删除
    handleEdit(todo) {
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    }, //编辑
    handleBlur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) return alert("输入不能为空");
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    }, //失去焦点回调（修改逻辑）
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

li:hover {
  background-color: gray;
}
li:hover button {
  display: block;
}
/* .todo-enter-active {
  animation: atguigu 1s linear;
}
.todo-leave-active {
  animation: atguigu 1s reverse;
}
@keyframes atguigu {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0px);
  }
} */
</style>