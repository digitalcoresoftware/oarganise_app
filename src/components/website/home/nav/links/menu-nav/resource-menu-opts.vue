<template>
  <!-- TODO: Add link to blog  -->
  <a href="">
    <menu-content
      menu-title="Our Blog"
      menu-txt="Stay up-to-date with all the exciting stuff coming to our platform."
    />
  </a>

  <a href="#client-reviews">
    <menu-content
      menu-title="Client Reviews"
      menu-txt="See what our existing clients have to say about out platform."
    />
  </a>

  <!-- TODO: Add link to help  -->
  <router-link to="">
    <menu-content
      menu-title="Help & FAQs"
      menu-txt="Don't get stranded! Our FAQs page is here to help."
    />
  </router-link>
</template>

<script>
import MenuContent from "@/components/website/home/nav/links/menu-nav/menu-content.vue";

export default {
  name: "resource-menu-opts",
  components: { MenuContent },
};
</script>

<style scoped></style>
