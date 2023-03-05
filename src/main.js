import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import gAuthPlugin from "vue3-google-oauth2";

createApp(App)
  .use(router)
  .use(gAuthPlugin, {
    clientId: process.env.VUE_APP_GOOGLE_OAUTH_CLIENT_ID,
    scope: "email",
    prompt: "consent",
  })
  .mount("#app");
