//该文件用于创建Vuex最为核心的store
import Vuex from "vuex"
import Vue from "vue"
import countOptions from "./count"
import personOptions from "./person"
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    countAbout: countOptions,
    personAbout: personOptions,
  }
})