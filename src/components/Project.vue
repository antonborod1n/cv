<script>
export default {
  props: {
    logoUrl: {
      type: String,
      required: true,
    },
    iconUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    descr: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="item">
    <div class="top">
      <img class="img" :src="logoUrl" :alt="title" />
      <div class="box">
        <div class="caption">{{ title }}</div>
        <div class="text">{{ descr }}</div>
      </div>
    </div>

    <div class="bottom">
      <div class="cercle">
        <img class="img" :src="iconUrl" :alt="title" />
      </div>
      <div class="link">{{ url }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/styles/vars";
.project {
  .item:nth-child(1) {
    border-radius: 8px 0px 0px 8px;
  }
  .item:nth-child(2) {
    border-radius: 0px 8px 8px 0px;
  }
  .item {
    @extend %f-col;
    justify-content: space-between;
    padding: 24px;
    background: $bg;
    @media (max-width: 1000px) {
      padding: 12px;
    }
  }
  .top {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    @media (max-width: 1000px) {
      gap: 8px;
    }
  }
  .caption {
    @extend %dms-500;
    color: $darker;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 4px;
    @media (max-width: 1000px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
  .text {
    @extend %dms-400;
    color: $text;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.141px;
    @media (max-width: 1000px) {
      font-size: 10px;
      line-height: 14px;
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    gap: 16px;
    @media (max-width: 1000px) {
      gap: 8px;
    }
  }
  .cercle {
    @extend %f-cc;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #e1e7fe;
  }
  .link {
    @extend %outfit-600;
    color: #516cf7;
    font-size: 12px;
    line-height: 16px;
    text-decoration-line: underline;
    cursor: pointer;
  }
}
</style>