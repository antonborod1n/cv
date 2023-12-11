<script>
export default {
  props: {
    logoUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="item">
    <img class="img" :src="logoUrl" :alt="title" />
    <div class="box">
      <div class="caption">{{ title }}</div>
      <div class="subtitle">{{ subtitle }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/styles/vars";
.tools {
  .item:nth-child(1),
  .item:nth-child(2),
  .item:nth-child(3) {
    width: 245px;
    height: 120px;
    @media (max-width: 1300px) {
      width: 144px;
      height: 120px;
    }
    @media (max-width: 500px) {
      width: 100%;
    }
  }
  .item {
    @extend %f-cc;
    flex-direction: column;
    text-align: center;
    width: 144px;
    height: 120px;
    padding: 16px;
    background-color: $bg;
    @media (max-width: 500px) {
      width: 100%;
      padding: 8px;
    }
  }
  .img {
    margin-bottom: 8px;
  }
  .caption {
    @extend %dms-500;
    color: $darker;
    font-size: 14px;
    line-height: 18px;
  }
  .subtitle {
    @extend %dms-500;
    color: $text;
    font-size: 10px;
    letter-spacing: 0.101px;
  }
}
</style>