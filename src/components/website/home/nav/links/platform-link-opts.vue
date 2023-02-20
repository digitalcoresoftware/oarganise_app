<template>
  <div class="link__content__container">
    <div class="link__content__wrapper">
      <div class="link__content">
        <a href="#club-tools" class="link__holder">
          <link-content
            link-title="Club Management Tools"
            link-txt="A wide range of tools that allow you to handle everything in your club in the one place."
          />
        </a>

        <a href="#price-plans" class="link__holder">
          <link-content
            link-title="Price Plans"
            link-txt="Flexible price plans allow a plan that fits your club's needs and no credit card needed when signing up."
          />
        </a>

        <!-- TODO: Add link to demo page -->
        <router-link to="" class="link__holder">
          <link-content
            link-title="Try the Demo"
            link-txt=" Don't want to wait? Dive into our demo and use some of the bespoke features oarganise gives to your club."
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import LinkContent from "@/components/website/home/nav/links/link-content.vue";

export default {
  name: "platform-link-opts",
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
