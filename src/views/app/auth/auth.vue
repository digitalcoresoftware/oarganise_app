<template>
  <div class="auth__wrapper">
    <div class="center__screen">
      <oarganise-logo class="auth__logo" />

      <div class="auth__txt">
        <p class="main__txt">Create Account or Sign In</p>
        <p class="sub__txt">Hi, welcome to Oarganise!</p>
      </div>

      <div class="auth__form">
        <div class="gAuth__test">
          <p></p>
        </div>

        <a :href="getGoogleUrl(from)" class="form__bar" id="google-sign-in">
          <google-icon class="form__icon" />
          <span class="form__txt">Continue with Google</span>
        </a>

        <div class="or__divider"></div>

        <form>
          <div class="form__bar">
            <input
              class="form__input"
              id="email-input"
              name="email"
              type="email"
              placeholder="Email"
            />
          </div>

          <button type="submit" class="form__btn">Continue</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import vhCheck from "vh-check";
import oarganiseLogo from "@/assets/svgs/logo/oarganise-logo.vue";
import GoogleIcon from "@/assets/svgs/auth/google-icon.vue";
import { getGoogleUrl } from "@/utils/getGoogleUrl";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "auth",
  methods: { getGoogleUrl },
  components: {
    GoogleIcon,
    oarganiseLogo,
  },
  data() {
    return {
      from: "/",
    };
  },
  mounted() {
    vhCheck();
  },
};
</script>

<style scoped>
.auth__wrapper {
  width: 100%;
  height: 100vh;
  position: relative;
}

.center__screen {
  width: 100%;
  max-width: var(--max-width);
  margin-inline: auto;
  padding-inline: var(--inline-spacing);
}

.auth__logo {
  height: 25px;
  fill: var(--logo-col);
  margin-inline: auto;
  margin-block: 0 25px;
}

.auth__txt {
  --main-txt-col: #345ea8;

  margin-block: 0 30px;
}

.main__txt {
  color: var(--main-txt-col);
  font-size: var(--heading-txt);
  font-family: var(--logo-font);
  margin-block: 0 5px;
}

.sub__txt {
  color: var(--sub-font-col);
  letter-spacing: 1px;
}

.auth__form {
  max-width: 400px;
  margin-inline: auto;
}

.gAuth__test {
  margin-block: 30px;
}

.form__bar {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: var(--second-col);
  font-family: var(--para-font);
}

form > .form__bar {
  margin-block: 0 10px;
}

#google-sign-in {
  color: var(--font-col);
}

#google-sign-in:hover {
  cursor: pointer;
  opacity: 0.7;
}

.form__icon {
  height: 20px;
  margin-inline: 10px;
}

.or__divider {
  height: 1px;
  background: var(--second-col);
  border-radius: 5px;
  margin-inline: 10px;
  margin-block: 25px;
}

.form__input {
  width: 95%;
  text-align: center;
  border: none;
  background: none;
  color: var(--font-col);
  font-family: var(--para-font);
  letter-spacing: 1px;
}

.form__btn {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid var(--tertiary-col);
  background: var(--second-col);
  font-family: var(--para-font);
  color: var(--font-col);
  cursor: pointer;
}

@media (prefers-color-scheme: dark) {
  .auth__txt {
    --main-txt-col: #f9faff;
  }
}

@media screen and (max-width: 390px) {
  .main__txt {
    font-size: var(--page-txt);
  }

  .sub__txt {
    font-size: var(--details-txt);
  }
}
</style>
