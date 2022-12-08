import Vue from "vue";
import Vuex from "vuex";
import { getItem, setItem } from "@/utils/storage";
Vue.use(Vuex);

export default new Vuex.Store({
  //state容器内的值不是长期保存的
  //刷新页面，state内的值，回回到初始状态
  state: {
    token: getItem("token"),
  },
  mutations: {
    setToken(state, tok) {
      //这里只是存到了state的容器内部
      state.token = tok;
      setItem("token", tok);
    },
  },
});
