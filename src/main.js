import Vue from "vue";
import { Datetime } from "vue-datetime";
import 'vue-datetime/dist/vue-datetime.css';
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(Datetime);

new Vue({
  Datetime,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
