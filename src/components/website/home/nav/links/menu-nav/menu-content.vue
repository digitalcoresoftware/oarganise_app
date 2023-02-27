<template>
  <div class="link__option">
    <p class="link__opt__header">{{ menuTitle }}</p>
    <p class="link__opt__txt">{{ menuTxt }}</p>
  </div>
</template>

<script>
export default {
  name: "menu-content",
  props: {
    menuTitle: String,
    menuTxt: String,
  },
};
</script>

<style scoped>
.link__option {
  margin-inline: 10px;
  margin-block: 5px 10px;
}

.link__opt__header {
  color: var(--font-col);
}

.link__opt__txt {
  color: var(--sub-font-col);
  font-size: var(--details-txt);
}
</style>
