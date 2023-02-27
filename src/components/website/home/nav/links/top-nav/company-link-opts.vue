<template>
  <div class="link__content__container">
    <div class="link__content__wrapper">
      <div class="link__content">
        <!-- TODO: Add link to about us page -->
        <router-link to="" class="link__holder">
          <link-content
            link-title="About Us"
            link-txt="Find out who we are and that we aim to do."
          />
        </router-link>

        <a
          href="mailto:digitalcore.software.contact@gmail.com"
          class="link__holder"
        >
          <link-content
            link-title="Contact Us"
            link-txt="Got a query that isn't covered in our FAQs? You can contact us through email by simply clicking here!"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import LinkContent from "@/components/website/home/nav/links/top-nav/link-content.vue";

export default {
  name: "company-link-opts",
  components: { LinkContent },
};
</script>

<style scoped>
.link__content__container {
  position: absolute;
  top: 35px;
  left: 50%;
  display: none;
  width: 325px;
  border-radius: 10px;
  transform: translate(-50%, 0);
}

.link__content__wrapper {
  background: var(--second-col);
  border-radius: 10px;
  width: 100%;
  height: calc(100% - 10px);
  margin-block-start: 10px;
}

.link__content {
  width: 100%;
  height: 100%;
  padding: 2px;
}
</style>
