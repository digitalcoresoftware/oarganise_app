<template>
  <!-- TODO: Add link to about us page -->
  <router-link to="">
    <menu-content
      menu-title="About Us"
      menu-txt="Find out who we are & what we do."
    />
  </router-link>

  <a href="mailto:digitalcore.software.contact@gmail.com">
    <menu-content
      menu-title="Contact Us"
      menu-txt="Got a question? Email us here."
    />
  </a>
</template>

<script>
import MenuContent from "@/components/website/home/nav/links/menu-nav/menu-content.vue";

export default {
  name: "company-menu-opts",
  components: { MenuContent },
};
</script>

<style scoped></style>
