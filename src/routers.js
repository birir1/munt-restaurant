import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./components/HomeView.vue";
import SignUp from "./components/SignUp.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
