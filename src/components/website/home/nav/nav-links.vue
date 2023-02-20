<template>
  <div class="header__link__wrapper">
    <div class="header__link__btn" id="service__btn">
      <div class="link__wrapper">
        <span>Platform</span>
      </div>

      <platform-link-opts />
    </div>

    <div class="header__link__btn" id="company__btn">
      <div class="link__wrapper">
        <span>Company</span>
      </div>

      <company-link-opts />
    </div>

    <div class="header__link__btn" id="resources__btn">
      <div class="link__wrapper">
        <span>Resources</span>
      </div>

      <resource-link-opts />
    </div>
  </div>
</template>

<script>
import PlatformLinkOpts from "@/components/website/home/nav/links/platform-link-opts.vue";
import CompanyLinkOpts from "@/components/website/home/nav/links/company-link-opts.vue";
import ResourceLinkOpts from "@/components/website/home/nav/links/resource-link-opts.vue";

export default {
  name: "nav-links",
  components: { ResourceLinkOpts, CompanyLinkOpts, PlatformLinkOpts },
};
</script>

<style scoped>
.header__link__wrapper {
  display: grid;
  grid-template-columns: repeat(3, min-content);
  grid-gap: 5px;
  gap: 5px;
}

.header__link__btn {
  height: 35px;
  display: flex;
  align-items: center;
  text-align: center;
  position: relative;
}

/* Service Nav Btn */
#service__btn:hover {
  background: var(--second-col);
  border-radius: 25px;
}

#service__btn:hover > .link__wrapper {
  color: var(--font-col);
}

#service__btn:hover > .link__content__container {
  display: block;
}

/* Company Nav Btn */
#company__btn:hover {
  background: var(--second-col);
  border-radius: 25px;
}

#company__btn:hover > .link__wrapper {
  color: var(--font-col);
}

#company__btn:hover > .link__content__container {
  display: block;
}

/* Resource Nav Btn */
#resources__btn:hover {
  background: var(--second-col);
  border-radius: 25px;
}

#resources__btn:hover > .link__wrapper {
  color: var(--font-col);
}

#resources__btn:hover > .link__content__container {
  display: block;
}

.link__wrapper {
  cursor: pointer;
  color: var(--sub-font-col);
  padding-inline: 15px;
}

.link__wrapper:hover {
  color: var(--font-col);
}

.link__wrapper {
  width: 100%;
  text-align: center;
}
</style>
