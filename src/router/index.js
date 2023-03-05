import { createRouter, createWebHistory } from "vue-router";

// Views
import splashScreen from "@/views/website/splashScreen.vue";
import landing from "@/views/website/landing.vue";
import home from "@/views/app/dashboard/dashboard.vue";
import auth from "@/views/app/auth/auth.vue";

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
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem("user");
      if (isAuthenticated) {
        next();
      } else {
        next({ name: "auth" });
      }
    },
  },
  {
    path: "/auth",
    name: "auth",
    component: auth,
  },
  // {
  //   path: "/privacy-policy",
  //   name: "Privacy Policy",
  //   component: privacyPolicy,
  // },
  // {
  //   path: "/terms-of-service",
  //   name: "Terms of service",
  //   component: termsOfService,
  // },
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
