<template>
  <div class="link__content__container">
    <div class="link__content__wrapper">
      <div class="link__content">
        <!-- TODO: Add link to blog  -->
        <router-link to="" class="link__holder">
          <link-content
            link-title="Our Blog"
            link-txt="Stay up-to-date with all the new and exciting things coming to oarganise and the events we'll be attending."
          />
        </router-link>

        <a href="#client-reviews" class="link__holder">
          <link-content
            link-title="Client Reviews"
            link-txt="Our platform will transform your club, don't believe us? Take it from our clients."
          />
        </a>

        <!-- TODO: Add link to help  -->
        <router-link to="" class="link__holder">
          <link-content
            link-title="Help & FAQs"
            link-txt="Don't get stranded! Our FAQs page is here to help and you can always contact us by email if that doesn't help."
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import LinkContent from "@/components/website/home/nav/links/link-content.vue";

export default {
  name: "resource-link-opts",
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
