import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import RegisterForm from "@/components/sections/RegisterForm.vue";
import Privacy from "@/views/Privacy.vue";
import Shop from "@/views/Shop.vue";
import DataRequest from "@/views/DataRequest.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/#register-form",
    name: "RegisterForm",
    component: RegisterForm,
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: Privacy,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/data-request",
    name: "DataRequest",
    component: DataRequest,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (to != null && to.hash == "#register-form") {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return savedPosition || { x: 0, y: 0, behavior: "smooth" };
  },
});

export default router;
