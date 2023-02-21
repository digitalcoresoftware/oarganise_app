<template>
  <div class="header__cta__wrapper">
    <div class="header__cta__btn" id="download-btn">
      <div class="cta__wrapper">
        <span>Download</span>
      </div>
    </div>

    <div class="header__cta__btn" id="open-app-btn">
      <div class="cta__wrapper">
        <span>Open App</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-cta",
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
  padding-inline: 15px;
}

/* Download Btn */
#download-btn {
  border: 1px solid var(--second-col);
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
</style>
