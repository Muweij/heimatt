import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "amfe-flexible";
import Vant from "vant";
import "vant/lib/index.css";
//优先级：写到vant样式下面，之后的样式好对vant进行覆盖
import "@/style/style.less";

Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
