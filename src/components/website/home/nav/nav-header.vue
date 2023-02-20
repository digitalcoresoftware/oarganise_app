<template>
  <div class="header__section">
    <div class="wrapper">
      <div class="header__sections">
        <router-link :to="{ name: 'home' }" class="section" id="logo-section">
          <oarganise-logo class="header__logo" />
        </router-link>

        <div class="section" id="links-section">
          <nav-links />
        </div>

        <div class="section" id="cta-section">3</div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import OarganiseLogo from "@/assets/svgs/logo/oarganise-logo.vue";
import NavLinks from "@/components/website/home/nav/nav-links.vue";

export default {
  name: "nav-header",
  components: { NavLinks, OarganiseLogo },
  mounted() {
    // Fade in header
    $(".header__section").fadeIn();
  },
};
</script>

<style scoped>
.header__section {
  /* Vars */
  --logo-col: #345ea8;

  /* Design */
  display: none;
}

.header__sections {
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr 1fr;
  grid-gap: 40px;
  gap: 40px;
  margin-block-start: 20px;
}

.header__logo {
  height: 20px;
  fill: var(--logo-col);
}

@media (prefers-color-scheme: dark) {
  .header__section {
    --logo-col: #f9faff;
  }
}
</style>
