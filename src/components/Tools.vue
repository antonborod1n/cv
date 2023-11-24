<script>
export default {
  data() {
    return {
      skills: [
        {
          logoUrl: "/src/assets/img/logo-figma.png",
          title: "Figma",
          subtitle: "UI Design, prototyping",
        },
        {
          logoUrl: "/src/assets/img/logo-html.png",
          title: "HTML 5",
          subtitle: "Structural Design",
        },
        {
          logoUrl: "/src/assets/img/logo-css.png",
          title: "CSS 3",
          subtitle: "Style Design",
        },
        {
          logoUrl: "/src/assets/img/logo-figma.png",
          title: "Figma",
          subtitle: "UI Design, prototyping",
        },
        {
          logoUrl: "/src/assets/img/logo-html.png",
          title: "HTML 5",
          subtitle: "Structural Design",
        },
        {
          logoUrl: "/src/assets/img/logo-css.png",
          title: "CSS 3",
          subtitle: "Style Design",
        },
        {
          logoUrl: "/src/assets/img/logo-figma.png",
          title: "Figma",
          subtitle: "UI Design, prototyping",
        },
        {
          logoUrl: "/src/assets/img/logo-html.png",
          title: "HTML 5",
          subtitle: "Structural Design",
        },
        {
          logoUrl: "/src/assets/img/logo-html.png",
          title: "HTML 5",
          subtitle: "Structural Design",
        },
      ],
    };
  },
};
</script>

<template>
  <section class="skills">
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
    <h2 class="title">Tools/Skills</h2>
    <div class="inner">
      <div class="item" v-for="item in skills" :key="item.i">
        <img class="img" :src="item.logoUrl" :alt="item.title" />
        <div class="box">
          <div class="caption">{{ item.title }}</div>
          <div class="subtitle">{{ item.subtitle }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../assets/styles/vars";
.skills {
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
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
  .item {
    @extend %f-cc;
    flex-direction: column;
    text-align: center;
    width: 65px;
    height: 55px;
    padding: 0 8px;
    background-color: $bg;
  }

  .item:nth-child(-1n + 4):nth-child(-n + 8) {
    width: 82px;
    height: 64px;
    padding: 8px;
  }
  .img {
    margin-bottom: 4px;
  }
  .caption {
    @extend %dms-500;
    color: $darker;
    font-size: 7px;
    line-height: 9px;
  }
  .subtitle {
    @extend %dms-500;
    color: $text;
    font-size: 5px;
    letter-spacing: 0.05px;
  }
}
</style>