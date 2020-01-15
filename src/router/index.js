import Vue from "vue";
import VueRouter from "vue-router";
import APOD from "../views/APOD.vue";
import MonthPics from "../views/MonthPics.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "APOD",
    component: APOD
  },
  {
    path: "/month_pics",
    name: "MonthPics",
    component: MonthPics
  }
];

const router = new VueRouter({
  routes
});

export default router;
