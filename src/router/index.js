import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import User from "../views/User.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/User",
      name: "user",
      component: User,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
