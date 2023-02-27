<template>
  <a href="#club-tools">
    <menu-content
      menu-title="Club Management Tools"
      menu-txt="Comprehensive tools all in one place."
    />
  </a>

  <a href="#price-plans">
    <menu-content
      menu-title="Price Plans"
      menu-txt="Flexible pricing, no credit card required."
    />
  </a>

  <a href="">
    <menu-content
      menu-title="Try the Demo"
      menu-txt="Explore our bespoke features."
    />
  </a>
</template>

<script>
import MenuContent from "@/components/website/home/nav/links/menu-nav/menu-content.vue";

export default {
  name: "platform-menu-opts",
  components: { MenuContent },
};
</script>

<style scoped></style>
