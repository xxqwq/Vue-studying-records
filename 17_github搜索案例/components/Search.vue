<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          v-model="keyWord"
        />&nbsp;
        <button @click="searchUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      //请求前更新List的数据
      this.$bus.$emit("updateListUsers", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          //请求后更新List的数据
          console.log("请求成功了", response.data.items);
          this.$bus.$emit("updateListUsers", {
            isLoading: false,
            errMsg: "",
            users: response.data.items,
          });
        },
        (error) => {
          //请求后更新List的数据
          console.log("请求失败了", error.message);
          this.$bus.$emit("updateListUsers", {
            isLoading: false,
            errMsg: error.message,
            users: [],
          });
        }
      );
    },
  },
  mounted() {
    this.$bus.$on("updateListUsers", (users) => {
      console.log("我是List组件，收到数据:", users);
    });
  },
};
</script>

<style>
</style>