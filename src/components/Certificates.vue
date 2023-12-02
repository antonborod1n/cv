<script>
export default {
  props: {
    certificates: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <section class="certificates">
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
    <h2 class="title">Certificates & Awards</h2>
    <div class="inner">
      <div class="item" v-for="item in certificates" :key="item.i">
        <img class="img" :src="item.logoUrl" :alt="item.title" />
        <div class="box">
          <div class="caption">{{ item.title }}</div>
          <div class="subtitle">{{ item.subtitle }}</div>
        </div>
        <div class="date">{{ item.date }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../assets/styles/vars";

.certificates {
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
  .img {
    width: 25px;
  }
  .inner {
    @extend %f-col;
    gap: 8px;
  }
  .item {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 16px 24px;
    border-radius: 4px 4px 0px 0px;
    background: $bg;

    @media (max-width: 1000px) {
      padding: 12px;
    }
  }
  .box {
    flex-grow: 1;
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
    @media (max-width: 1000px) {
      font-size: 10px;
      line-height: 14px;
    }
  }
}
</style>