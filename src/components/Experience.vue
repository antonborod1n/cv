<script>
export default {
  props: {
    logoUrl: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    descr: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="item">
    <div class="cercle"></div>
    <div class="content">
      <div class="date">
        <span>{{ date }}</span>
        <span>
          <img src="/img//location.svg" alt="location" />
          <span>{{ location }}</span>
        </span>
      </div>
      <div class="top">
        <img class="img" :src="logoUrl" :alt="company" />
        <div class="box">
          <div class="subtitle">{{ subtitle }}</div>
          <div class="caption">{{ company }}</div>
        </div>
      </div>
    </div>
    <p class="text">{{ descr }}</p>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/styles/vars";
.ex {
  .item {
    display: flex;
    gap: 16px;
    padding: 3px 0 8px 0;
    @media (max-width: 1000px) {
      flex-direction: column;
      gap: 5px;
    }
  }
  .cercle {
    position: relative;
    min-width: 6px;
    height: 6px;
    margin: 4px;
    border-radius: 50%;
    background-color: $darker;
    @media (max-width: 1000px) {
      display: none;
    }
    &::before {
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      content: "";
      width: 0.5px;
      height: 34px;
      background-color: $bg;
    }
  }
  .content {
    min-width: 240px;
  }
  .date {
    display: flex;
    align-items: center;
    gap: 4px;
    span {
      @extend %dms-400;
      font-size: 10px;
      letter-spacing: 0.05px;
    }
    span:nth-child(1) {
      color: $dark;
    }
    span:nth-child(2) {
      display: flex;
      align-items: center;
      gap: 4px;
      color: $text;
    }
  }
  .top {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .img {
    width: 50px;
    height: 50px;
  }
  .box {
    @extend %f-col;
    gap: 4px;
  }
  .caption {
    @extend %dms-500;
    color: $darker;
    font-size: 14px;
    line-height: 18px;
  }
  .subtitle {
    @extend %dms-400;
    color: $text;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.121px;
  }
  .text {
    @extend %dms-400;
    color: $text;
    font-size: 12px;
    letter-spacing: 0.121px;
    @media (max-width: 1000px) {
      max-width: 100%;
    }
  }
}
</style>