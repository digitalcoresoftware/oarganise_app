<template>
  <div class="header__cta__wrapper">
    <div class="header__cta__btn" id="download-btn">
      <div class="cta__wrapper">
        <span class="cta__txt">Download</span>
      </div>
    </div>

    <a :href="appURL" class="header__cta__btn" id="open-app-btn">
      <div class="cta__wrapper">
        <span class="cta__txt">Open App</span>
      </div>
    </a>

    <button class="header__cta__btn" id="menu-btn" @click="toggleMenu()">
      <div class="cta__wrapper">
        <div class="menu__bar__wrapper" v-if="!isMenuOpen">
          <div class="menu__bar" />
          <div class="menu__bar" />
          <div class="menu__bar" />
        </div>

        <div class="menu__bar__wrapper" v-if="isMenuOpen">
          <close-icon class="close__icon" />
        </div>
      </div>
    </button>

    <div class="menu__content">
      <div
        class="accordion__bar"
        id="platform-accordion"
        @click="toggleAccordion('platform')"
      >
        <div class="accordion__title">
          <p>Platform</p>

          <close-icon class="accordion__icon" id="platform-icon" />
        </div>

        <div class="accordion__links" id="platform-links">
          <platform-menu-opts />
        </div>
      </div>

      <div
        class="accordion__bar"
        id="company-accordion"
        @click="toggleAccordion('company')"
      >
        <div class="accordion__title">
          <p>Company</p>

          <close-icon class="accordion__icon" id="company-icon" />
        </div>

        <div class="accordion__links" id="company-links">
          <company-menu-opts />
        </div>
      </div>

      <div
        class="accordion__bar"
        id="resources-accordion"
        @click="toggleAccordion('resources')"
      >
        <div class="accordion__title">
          <p>Resources</p>

          <close-icon class="accordion__icon" id="resources-icon" />
        </div>

        <div class="accordion__links" id="resources-links">
          <resource-menu-opts />
        </div>
      </div>

      <div class="menu__cta__container">
        <button class="menu__cta__btn" id="menu-download-cta">
          <span class="menu__btn__txt">Download</span>
        </button>

        <a :href="appURL" class="menu__cta__btn" id="menu-open-cta">
          <p class="menu__btn__txt">Open App</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import CloseIcon from "@/assets/svgs/close-icon.vue";
import PlatformMenuOpts from "@/components/website/home/nav/links/menu-nav/platform-menu-opts.vue";
import CompanyMenuOpts from "@/components/website/home/nav/links/menu-nav/company-menu-opts.vue";
import ResourceMenuOpts from "@/components/website/home/nav/links/menu-nav/resource-menu-opts.vue";

export default {
  name: "nav-cta",
  components: {
    ResourceMenuOpts,
    CompanyMenuOpts,
    PlatformMenuOpts,
    CloseIcon,
  },
  data() {
    return {
      isMenuOpen: false,
      platformOptsOpen: false,
      companyOptsOpen: false,
      resourcesOptsOpen: false,
    };
  },
  methods: {
    toggleMenu: function () {
      if (!this.isMenuOpen) {
        this.isMenuOpen = true;
        $(".menu__content").fadeIn();
      } else {
        this.isMenuOpen = false;
        $(".menu__content").fadeOut();
      }
    },
    toggleAccordion: function (id) {
      switch (id) {
        case "platform":
          this.platformOptsOpen = !this.platformOptsOpen;
          this.companyOptsOpen = false;
          this.resourcesOptsOpen = false;
          break;
        case "company":
          this.companyOptsOpen = !this.companyOptsOpen;
          this.platformOptsOpen = false;
          this.resourcesOptsOpen = false;
          break;
        case "resources":
          this.resourcesOptsOpen = !this.resourcesOptsOpen;
          this.platformOptsOpen = false;
          this.companyOptsOpen = false;
          break;
      }

      this.handleAccordion(id);
    },
    handleAccordion: function (selector) {
      let primarySelector;
      let secondarySelector;
      let tertiarySelector;

      switch (selector) {
        case "platform":
          primarySelector = "platform";
          secondarySelector = "company";
          tertiarySelector = "resources";
          break;
        case "company":
          primarySelector = "company";
          secondarySelector = "platform";
          tertiarySelector = "resources";
          break;
        case "resources":
          primarySelector = "resources";
          secondarySelector = "platform";
          tertiarySelector = "company";
          break;
      }

      // show link on accordion selected
      $("#" + primarySelector + "-links").slideDown();
      $("#" + primarySelector + "-icon").css("transform", "rotate(90deg)");

      // hide other links
      $("#" + secondarySelector + "-links").slideUp();
      $("#" + secondarySelector + "-icon").css("transform", "rotate(45deg)");

      $("#" + tertiarySelector + "-links").slideUp();
      $("#" + tertiarySelector + "-icon").css("transform", "rotate(45deg)");
    },
    hideMenu: function () {
      let windowSize = $(window).width();

      if (windowSize > 740) {
        this.isMenuOpen = false;
        $(".menu__content").hide();
      }
    },
  },
  mounted() {
    // hide menu if screen is small then large
    window.addEventListener("resize", this.hideMenu);
  },
  computed: {
    appURL() {
      return "http://app.localhost:8080/dashboard";
    },
  },
};
</script>

<style scoped>
.header__cta__wrapper {
  width: fit-content;
  margin-inline-start: auto;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-gap: 10px;
  gap: 10px;
}

.header__cta__btn {
  height: 35px;
  display: flex;
  align-items: center;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.cta__wrapper {
  color: var(--sub-font-col);
}

.cta__txt {
  padding-inline: 15px;
}

/* Download Btn */
#download-btn {
  border: 1px solid var(--sub-font-col);
  border-radius: 25px;
}

#download-btn:hover {
  border: 1px solid var(--font-col);
}

#download-btn:hover > .cta__wrapper {
  color: var(--font-col);
}

/* Open App Btn */
#open-app-btn {
  background: var(--second-col);
  border-radius: 25px;
}

#open-app-btn > .cta__wrapper {
  color: var(--font-col);
}

/* Menu Btn & Design */
#menu-btn {
  display: none;
}

.menu__content {
  display: none;
}

.menu__cta__container {
  display: none;
}

@media screen and (max-width: 740px) {
  .header__cta__wrapper {
    grid-template-columns: repeat(3, max-content);
  }

  #menu-btn {
    display: flex;
    background: var(--second-col);
    border-radius: 50%;
  }

  .menu__bar {
    width: 4px;
    height: 4px;
    background: var(--font-col);
    margin-block: 3px;
    border-radius: 50%;
    margin-inline: 15px;
  }

  .close__icon {
    height: 20px;
    margin-inline: 7px;
    stroke: var(--font-col);
  }

  .menu__content {
    display: none;
    width: 300px;
    background: var(--second-col);
    border-radius: 15px;
    position: absolute;
    top: 65px;
    right: var(--inline-spacing);
  }

  .accordion__bar {
    margin-inline: 10px;
    margin-block: 10px;
    border-radius: 5px;
    background: var(--tertiary-col);
  }

  .accordion__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 10px;
    margin-inline: 10px;
  }

  .accordion__icon {
    height: 15px;
    stroke: var(--font-col);
    transform: rotate(45deg);
    transition: transform 0.2s ease-in-out;
  }

  .accordion__links {
    display: none;
    padding-block: 0 1px;
  }
}

@media screen and (max-width: 500px) {
  #download-btn {
    display: none;
  }

  #open-app-btn {
    display: none;
  }

  .header__cta__wrapper {
    display: grid;
    grid-template-columns: repeat(1, max-content);
    grid-gap: 0;
    gap: 0;
  }

  .menu__cta__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
    gap: 5px;
    margin-inline: 10px;
    margin-block: 10px 15px;
  }

  .menu__cta__btn {
    height: 35px;
    display: grid;
    place-items: center;
    border-radius: 20px;
    border: 1px solid var(--tertiary-col);
    color: var(--sub-font-col);
  }

  .menu__cta__btn:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  #menu-open-cta {
    background: var(--tertiary-col);
    color: var(--font-col);
  }

  .menu__btn__txt {
    padding-inline: 20px;
  }
}

@media screen and (max-width: 400px) {
  .menu__content {
    top: 55px;
    width: unset;
    left: var(--inline-spacing);
  }
}
</style>
