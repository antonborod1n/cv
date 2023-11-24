<script>
export default {
  data() {
    return {
      projects: [
        {
          logoUrl: "/src/assets/img/logo-figma.png",
          iconUrl: "/src/assets/img/link1.svg",
          title: "Marvel Studios Landing Page",
          descr:
            "Figma UI Kit usage showcasing demo of Marvel Studios Landing Page.",
          url: "https//figma.com",
        },
        {
          logoUrl: "/src/assets/img/1.png",
          iconUrl: "/src/assets/img/link2.svg",
          title: "Marvel Studios Landing Page",
          descr: "Personal Portfolio webpage with resume and blog",
          url: "https://anuragyadav365.github.io",
        },
      ],
    };
  },
};
</script>

<template>
  <section class="project">
    <div class="decor">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
      >
        <path
          d="M4.99999 7.08332C3.8494 7.08332 2.91666 6.15058 2.91666 4.99999C2.91666 3.8494 3.8494 2.91666 4.99999 2.91666C6.15058 2.91666 7.08332 3.8494 7.08332 4.99999C7.08332 6.15058 6.15058 7.08332 4.99999 7.08332Z"
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
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.12px;
    margin-bottom: 16px;
  }
  .decor {
    position: absolute;
    top: 0;
    left: -32px;
    content: "";
    @extend %f-cc;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04) inset,
      0px 6px 24px 0px rgba(0, 0, 0, 0.04), 0px 1px 4px 0px rgba(0, 0, 0, 0.05);
  }
  .inner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;
  }
  .item {
    @extend %f-col;
    justify-content: space-between;
    padding: 12px;
    border-radius: 4px 0px 0px 4px;
    background: $bg;
  }
  .top {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }
  .caption {
    @extend %dms-500;
    color: $darker;
    font-size: 8px;
    line-height: 10px;
    margin-bottom: 2px;
  }
  .text {
    @extend %dms-400;
    color: $text;
    font-size: 7px;
    line-height: 9px;
    letter-spacing: 0.07px;
  }
  .bottom {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .cercle {
    @extend %f-cc;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #e1e7fe;
  }
  .link {
    @extend %outfit-600;
    color: #516cf7;
    font-size: 8px;
    line-height: 10px;
    text-decoration-line: underline;
    cursor: pointer;
  }
}
</style>