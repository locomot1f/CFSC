import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Draggable } from "@shopify/draggable";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  Draggable,
  render: h => h(App)
}).$mount("#app");
