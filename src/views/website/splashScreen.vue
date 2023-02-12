<template>
  <div class="splash__wrapper">
    <div class="splash__content center__screen">
      <div class="water__container">
        <div :class="{ fill: showWave }" class="wave" />

        <splash-logo class="splash__logo" />
      </div>
    </div>
  </div>
</template>

<script>
// Packages
import vhCheck from "vh-check";
import { useRouter } from "vue-router";
import $ from "jquery";

// Components
import SplashLogo from "@/assets/svgs/splashScreen/splashLogo.vue";

export default {
  name: "splashScreen",
  components: {
    SplashLogo,
  },
  data() {
    return {
      showWave: false,
    };
  },
  methods: {
    fillLogo() {
      this.showWave = true;
    },
  },
  mounted() {
    vhCheck();

    // Show wave animation
    this.fillLogo();

    // Fade out splash logo
    $(".splash__content").delay(3000).fadeOut(200);

    // Go Home
    const router = useRouter();
    setTimeout(() => {
      router.push("/home");
    }, 4000);
  },
};
</script>

<style scoped>
/* Vars */
.splash__content {
  --wave-w: 400px;
  --wave-col: #345ea8;
}

@media (prefers-color-scheme: dark) {
  .splash__content {
    --wave-w: 400px;
    --wave-col: #d6d7d9;
  }
}

.splash__wrapper {
  height: 100vh;
  height: calc(100vh - var(--vh-offset, 0px));
  position: relative;
}

.water__container {
  position: relative;
  width: 350px;
  background-color: var(--second-col);
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  cursor: pointer;
}

.wave {
  background-color: var(--wave-col);
  position: absolute;
  z-index: 0;
  top: 200%;
  height: calc(var(--wave-w) * 2);
  width: calc(var(--wave-w) * 2);
  border-radius: 38%;
  left: -50%;
  transform: rotate(360deg);
  transition: all 5s ease;
  animation: wave 30s linear infinite;
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(3600deg);
  }
}

.wave.fill {
  top: -100px;
}

.splash__logo {
  position: relative;
  z-index: 1;
}
</style>
