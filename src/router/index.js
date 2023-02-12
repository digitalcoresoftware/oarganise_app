import { createRouter, createWebHistory } from "vue-router";

// Views
import splashScreen from "@/views/website/splashScreen.vue";
import home from "@/views/website/home.vue";

const routes = [
  {
    path: "/",
    component: splashScreen,
  },
  {
    path: "/home",
    name: "home",
    component: home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
