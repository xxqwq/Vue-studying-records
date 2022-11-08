<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和放大十倍为：{{ bigSum }}</h1>
    <h2>我在{{ school }}学习{{ subject }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前为奇数才加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  computed: {
    //亲自写计算属性
    // sum(){
    //   return this.$store.state.sum
    // },

    // school(){
    //   return this.$store.state.school
    // },
    // subject(){
    //   return this.$store.state.subject
    // },

    //借助mapstate生成计算属性，从state中读取数据(对象写法)
    // ...mapState({he:"sum",xuexiao:"school",xueke:"subject"}),每一组key：value都放到computed里面
    //借助mapstate生成计算属性，从state中读取数据(数组写法)
    ...mapState(["sum", "school", "subject"]),
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
    //借助mapGetters生成计算属性，从getters中读取数据(对象写法)
    // ...mapGetters({bigSum:"bigSum"}),
    //借助mapGetters生成计算属性，从getters中读取数据(数组写法)
    ...mapGetters(["bigSum"])
  },
  methods: {
    increment() {
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },
  mounted() {
    const x = mapState({ he: "sum", xuexiao: "school", xueke: "subject" });
    console.log(x);
  },
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>