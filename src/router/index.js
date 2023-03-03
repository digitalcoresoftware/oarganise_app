import { createRouter, createWebHistory } from "vue-router";

// Views
import splashScreen from "@/views/website/splashScreen.vue";
import landing from "@/views/website/landing.vue";
import home from "@/views/app/dashboard/dashboard.vue";

const routes = [
  {
    path: "/",
    component: splashScreen,
  },
  {
    path: "/landing",
    name: "landing",
    component: landing,
  },
  {
    path: "/home",
    name: "home",
    component: home,
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: "home" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
