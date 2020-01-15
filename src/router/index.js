import Vue from "vue";
import VueRouter from "vue-router";
import APOD from "../views/APOD.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: APOD
  },
  {
    path: "/about",
    name: "about",
    component: About
  }
];

const router = new VueRouter({
  routes
});

export default router;
