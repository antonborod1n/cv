<script>
export default {
  props: {
    projects: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <section class="project">
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
    <h2 class="title">Latest projects</h2>
    <div class="inner">
      <div class="item" v-for="item in projects" :key="item.i">
        <div class="top">
          <img class="img" :src="item.logoUrl" :alt="item.name" />
          <div class="box">
            <div class="caption">{{ item.title }}</div>
            <div class="text">{{ item.descr }}</div>
          </div>
        </div>

        <div class="bottom">
          <div class="cercle">
            <img class="img" :src="item.iconUrl" :alt="item.title" />
          </div>
          <div class="link">{{ item.url }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../assets/styles/vars";
.project {
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
    }
  }
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