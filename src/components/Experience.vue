<script>
export default {
  data() {
    return {
      experience: [
        {
          logoUrl: "/src/assets/img/logo-github.png",
          company: "Github",
          subtitle: "Hacktoberfest Contributor",
          descr:
            "Contributed 8 PR’s in various open source projects. Great experience and learning alot about working with Github and open-source. Connecting with developers",
          date: "Jan 2021 - March 2021",
        },
        {
          logoUrl: "/src/assets/img/logo-woc.png",
          company: "Winter of Code",
          subtitle: "Contributor",
          descr:
            "Overwhelming to be a part of DSC NSEC project - DSC NSEC Algorithms for Winter of Code 2020. First introduction to Git and Github. How github is used by most of the programmers in order to manage the projects.",
          date: "Jan 2021 - March 2021",
        },
        {
          logoUrl: "/src/assets/img/logo-google.png",
          company: "Google",
          subtitle: "30Days of Google Cloud",
          descr:
            "Contributed 8 PR’s in various open source projects. Great experience and learning alot about working with Github and open-source. Connecting with developers",
          date: "Jan 2021 - March 2021",
        },
      ],
    };
  },
};
</script>

<template>
  <section class="ex">
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
    <h2 class="title">Achievements</h2>
    <div class="inner">
      <div class="item" v-for="item in experience" :key="item.i">
        <div class="cercle"></div>
        <div class="content">
          <div class="date">
            <span>{{ item.date }}</span>
            <span>
              <svg
                width="6"
                height="7"
                viewBox="0 0 6 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5.56666C2.68423 5.29732 2.39155 5.00204 2.125 4.68391C1.725 4.20616 1.25 3.49466 1.25 2.81666C1.24965 2.10855 1.67606 1.47001 2.33027 1.19901C2.98447 0.928014 3.73752 1.07797 4.238 1.57891C4.56712 1.90656 4.75148 2.35226 4.75001 2.81666C4.75001 3.49466 4.275 4.20616 3.875 4.68391C3.60845 5.00204 3.31577 5.29732 3 5.56666ZM3 2.06666C2.73205 2.06666 2.48446 2.20961 2.35048 2.44166C2.21651 2.67371 2.21651 2.95961 2.35048 3.19166C2.48446 3.42371 2.73205 3.56666 3 3.56666C3.41421 3.56666 3.75 3.23088 3.75 2.81666C3.75 2.40245 3.41421 2.06666 3 2.06666Z"
                  fill="#79819A"
                />
              </svg>
              <span>Online</span>
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
    gap: 8px;
  }
  .item {
    display: flex;
    gap: 8px;
    padding: 3px 0 8px 0;
  }
  .cercle {
    position: relative;
    min-width: 3px;
    height: 3px;
    margin: 4px;
    border-radius: 50%;
    background-color: $darker;
    &::before {
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      content: "";
      width: 0.5px;
      height: 34.75px;
      background-color: $bg;
    }
  }
  .content {
    width: 120px;
  }
  .date {
    display: flex;
    align-items: center;
    gap: 2px;
    span {
      @extend %dms-400;
      font-size: 5px;
      letter-spacing: 0.05px;
      margin-bottom: 4px;
    }
    span:nth-child(1) {
      color: $dark;
    }
    span:nth-child(2) {
      display: flex;
      align-items: center;
      gap: 2px;
      color: $text;
    }
  }
  .top {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .img {
    min-width: 25px;
    height: 25px;
  }
  .box {
    @extend %f-col;
    gap: 2px;
  }
  .caption {
    @extend %dms-500;
    color: $darker;
    font-size: 7px;
    line-height: 9px;
  }
  .subtitle {
    @extend %dms-400;
    color: $text;
    font-size: 6px;
    line-height: 8px;
    letter-spacing: 0.06px;
  }
  .text {
    @extend %dms-400;
    max-width: 202px;
    color: $text;
    font-size: 5px;
    letter-spacing: 0.05px;
  }
}
</style>