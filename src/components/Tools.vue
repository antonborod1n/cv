<script>
export default {
  data() {
    return {
      tools: [
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
      ],
    };
  },
};
</script>

<template>
  <section class="tools">
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
    <h2 class="title">Tools/Skills</h2>
    <div class="inner">
      <div class="item" v-for="item in tools" :key="item.i">
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
.tools {
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
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    @media (max-width: 400px) {
    }
  }

  .item:nth-child(1),
  .item:nth-child(2),
  .item:nth-child(3) {
    width: 245px;
    height: 120px;
    @media (max-width: 1200px) {
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