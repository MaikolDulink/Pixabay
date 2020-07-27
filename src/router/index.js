import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ImageView from "@/views/ImageView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/image/:id",
    name: "ImageView",
    component: ImageView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
