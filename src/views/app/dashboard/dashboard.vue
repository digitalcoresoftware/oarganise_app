<template>
  <div>This is the dashboard</div>
</template>

<script>
import { onMounted } from "vue";
import router from "@/router";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "dashboard",
  setup() {
    const checkAuthentication = () => {
      fetch("http://localhost:8000/api/users/me")
        .then((response) => {
          // Handle 401 Unauthorized response
          if (response.status !== 200) {
            console.log("Status was " + response.status);
            router.push({ name: "auth" });
          }
          return response.json();
        })
        .then((data) => {
          // Store response in session storage if it is successful
          if (data) {
            sessionStorage.setItem("user", JSON.stringify(data.result));
          }
        })
        .catch((error) => {
          // Handle error
          console.log(error);
        });
    };

    onMounted(() => {
      checkAuthentication();
    });
  },
};
</script>

<style scoped></style>
