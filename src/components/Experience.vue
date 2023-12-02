<script>
export default {
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <section class="ex">
    <div class="decor">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
      >
        <path
          d="M10.3671 14.8751C8.04653 14.8751 6.16534 12.9939 6.16534 10.6734C6.16534 8.35283 8.04653 6.47165 10.3671 6.47165C12.6876 6.47165 14.5688 8.35283 14.5688 10.6734C14.5688 12.9939 12.6876 14.8751 10.3671 14.8751Z"
          fill="#5531A7"
        />
      </svg>
    </div>
    <h2 class="title">Achievements</h2>
    <div class="inner">
      <div class="item" v-for="item in experience" :key="item.i">
        <div class="cercle"></div>
        <div class="content">
          <div class="date">
            <span>{{ item.date }}</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  d="M6.52861 11.046C5.89176 10.5028 5.30146 9.90728 4.76388 9.26566C3.95714 8.30212 2.99915 6.86714 2.99915 5.49973C2.99843 4.07158 3.85844 2.78375 5.17787 2.2372C6.49729 1.69064 8.01606 1.99308 9.02545 3.00339C9.68922 3.66421 10.0611 4.56311 10.0581 5.49973C10.0581 6.86714 9.10007 8.30212 8.29334 9.26566C7.75576 9.90728 7.16546 10.5028 6.52861 11.046ZM6.52861 3.9871C5.9882 3.9871 5.48884 4.27541 5.21864 4.74342C4.94843 5.21142 4.94843 5.78803 5.21864 6.25604C5.48884 6.72405 5.9882 7.01236 6.52861 7.01236C7.36401 7.01236 8.04123 6.33513 8.04123 5.49973C8.04123 4.66433 7.36401 3.9871 6.52861 3.9871Z"
                  fill="#79819A"
                />
              </svg>
              <span>{{ item.location }}</span>
            </span>
          </div>
          <div class="top">
            <img class="img" :src="item.logoUrl" :alt="item.company" />
            <div class="box">
              <div class="subtitle">{{ item.subtitle }}</div>
              <div class="caption">{{ item.company }}</div>
            </div>
          </div>
        </div>
        <p class="text">{{ item.descr }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../assets/styles/vars";
.ex {
  position: relative;
  .title {
    @extend %outfit-500;
    color: $darker;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.242px;
    margin-bottom: 32px;
    @media (max-width: 1000px) {
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 24px;
    }
  }
  .decor {
    position: absolute;
    top: 0;
    left: -64px;
    content: "";
    @extend %f-cc;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04) inset,
      0px 6px 24px 0px rgba(0, 0, 0, 0.04), 0px 1px 4px 0px rgba(0, 0, 0, 0.05);
    @media (max-width: 1000px) {
      display: none;
    }
  }
  .inner {
    @extend %f-col;
    gap: 8px;
  }
  .item {
    display: flex;
    gap: 16px;
    padding: 3px 0 8px 0;
    @media (max-width: 1000px) {
      flex-wrap: wrap;
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
    width: 240px;
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
    max-width: 410px;
    color: $text;
    font-size: 12px;
    letter-spacing: 0.121px;
    @media (max-width: 1000px) {
      max-width: 100%;
    }
  }
}
</style>