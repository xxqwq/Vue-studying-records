//该文件用于创建Vuex最为核心的store
import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)
//准备actions --用于响应组件中的动作
const actions = {
  // jia(context, value) {
  //   context.commit("JIA", value)
  // },
  jiaOdd(context, value) {
    if (context.state.sum%2==1) {
      context.commit("JIA", value)
    }
  },
  jiaWait(context, value) {
    setTimeout(() => {
      context.commit("JIA", value)
    }, 1000);
  },
  // jian(context, value) {
  //   context.commit("JIAN", value)
  // }
}
//准备mutations --用于操作数据state
const mutations = {
  JIA(state, value) {
    state.sum += value
  },
  JIAN(state, value) {
    state.sum -= value
  },

}
//准备state ,用于存储数据
const state = {
  sum: 0,//当前的和
  school:"尚硅谷",
  subject:"前端"
}
//准备getters--用于将state中的数据进行加工
const getters={
  bigSum(state){
    return state.sum*10
  }
}
//创建并暴露store
export default new Vuex.Store({
  //actions:actions,
  actions,
  //mutations:mutations,
  mutations,
  //state:state,
  state,
  getters,
})
//暴露(导出)store