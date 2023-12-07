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
    date: {
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
    <div class="date">{{ date }}</div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/styles/vars";
.certificates {
  .item {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 16px 24px;
    border-radius: 4px 4px 0px 0px;
    background: $bg;

    @media (max-width: 1000px) {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: repeat(2, auto);
      gap: 5px 20px;
      padding: 12px;
    }
  }
  .img {
    width: 25px;
    @media (max-width: 1000px) {
      grid-area: 1 / 1 / 3 / 2;
    }
  }
  .box {
    flex-grow: 1;
    @media (max-width: 1000px) {
      grid-area: 2 / 2 / 3 / 3;
    }
  }
  .caption {
    @extend %dms-400;
    color: $text;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.136px;
  }
  .subtitle {
    @extend %dms-500;
    max-width: 500px;
    color: $darker;
    font-size: 16px;
    line-height: 20px;

    @media (max-width: 1000px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
  .date {
    @extend %dms-400;
    align-self: flex-start;
    color: $dark;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.117px;
    white-space: nowrap;
    @media (max-width: 1000px) {
      grid-area: 1 / 2 / 2 / 3;
      font-size: 10px;
      line-height: 14px;
    }
  }
}
</style>