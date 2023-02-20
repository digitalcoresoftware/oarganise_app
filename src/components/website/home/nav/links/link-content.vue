<template>
  <div class="link__option">
    <p class="link__opt__header">{{ linkTitle }}</p>
    <p class="link__opt__txt">{{ linkTxt }}</p>
  </div>
</template>

<script>
export default {
  name: "link-content",
  props: {
    linkTitle: String,
    linkTxt: String,
  },
};
</script>

<style scoped>
.link__option {
  margin-block: 5px;
  text-align: left;
  border-radius: 10px;
}

.link__option:hover {
  cursor: pointer;
  opacity: 0.7;
}

.link__opt__header {
  color: var(--font-col);
  padding-block: 5px 2px;
  padding-inline: 10px;
}

.link__opt__txt {
  color: var(--sub-font-col);
  padding-block: 0 5px;
  padding-inline: 10px;
}
</style>
