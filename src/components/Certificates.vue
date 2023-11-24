<script>
export default {
  data() {
    return {
      certificates: [
        {
          logoUrl: "/src/assets/img/logo-udemy.png",
          title: "Coursera",
          subtitle: "Kotlin For Java Developers",
          date: "Dec 2021 - Feb 2022",
        },
        {
          logoUrl: "/src/assets/img/logo-udemy.png",
          title: "Data Strcture & Algorithms",
          subtitle: "Google",
          date: "Mar 2021 - Jun 2021",
        },
        {
          logoUrl: "/src/assets/img/logo-udemy.png",
          title: "Udemy",
          subtitle: "Cloud Computing",
          date: "Jun 2020 - Sept 2020",
        },
      ],
    };
  },
};
</script>

<template>
  <section class="certificates">
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
    @extend %f-col;
    gap: 4px;
  }
  .item {
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;
    padding: 7.709px 11.564px;
    border-radius: 3.855px 3.855px 0px 0px;
    background: $bg;
  }
  .box {
    flex-grow: 1;
  }
  .caption {
    @extend %dms-400;
    color: $text;
    font-size: 6.745px;
    line-height: 8.673px;
    letter-spacing: 0.067px;
  }
  .subtitle {
    @extend %dms-500;
    color: $darker;
    font-size: 7.709px;
    line-height: 9.636px;
  }
  .date {
    @extend %dms-400;
    align-self: flex-start;
    color: $dark;
    font-size: 5.782px;
    line-height: 7.709px;
    letter-spacing: 0.058px;
  }
}
</style>