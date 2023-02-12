<template>
  <div class="section">
    <div class="splash__wrapper">
      <div class="splash__content center__screen">
        <div class="logo__mask">
          <div class="water__container">
            <div :class="{ fill: showWave }" class="wave" />
          </div>
        </div>
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

export default {
  name: "splashScreen",
  components: {},
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
    }, 3500);
  },
};
</script>

<style scoped>
/* Vars */
.section {
  --mask-w: 300px;
  --wave-size: 400px;
  --wave-col: #345ea8;
}

.splash__content {
  width: var(--mask-w);
  height: 45px;
}

.splash__wrapper {
  height: 100vh;
  height: calc(100vh - var(--vh-offset, 0px));
  position: relative;
}

.water__container {
  position: relative;
  width: var(--mask-w);
  height: 45px;
  background-color: var(--second-col);
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  cursor: pointer;
}

.logo__mask {
  -webkit-mask-image: url("~@/assets/svgs/logo/oarganise-logo.svg");
  mask-image: url("~@/assets/svgs/logo/oarganise-logo.svg");
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.wave {
  background-color: var(--wave-col);
  position: absolute;
  z-index: 0;
  top: 200%;
  height: calc(var(--wave-size) * 2);
  width: calc(var(--wave-size) * 2);
  border-radius: 38%;
  left: -50%;
  transform: rotate(360deg);
  transition: all 5s ease;
  animation: wave 25s linear infinite;
}

.wave.fill {
  top: -200px;
}

/* Animations */
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(3600deg);
  }
}

/* Media Queries */
@media (prefers-color-scheme: dark) {
  .splash__content {
    --wave-w: 400px;
    --wave-col: #d6d7d9;
  }
}

@media screen and (max-width: 500px) {
  .section {
    --mask-w: 200px;
  }
}
</style>
