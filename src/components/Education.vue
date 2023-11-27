<script>
export default {
  data() {
    return {
      education: [
        {
          logoUrl: "/src/assets/img/e1.png",
          name: "Chandigarh University",
          specialty: "Bachelor in Computer Science Engineering",
          time: "2020 - 2024",
        },
        {
          logoUrl: "/src/assets/img/e2.png",
          name: "Chandigarh University",
          specialty: "Bachelor in Computer Science Engineering",
          time: "2020 - 2024",
        },
        {
          logoUrl: "/src/assets/img/e3.png",
          name: "Chandigarh University",
          specialty: "Bachelor in Computer Science Engineering",
          time: "2020 - 2024",
        },
      ],
    };
  },
};
</script>

<template>
  <section class="edu">
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
    <h2 class="title">Education</h2>
    <div class="inner">
      <div class="item" v-for="item in education" :key="item.i">
        <div class="top">
          <img :src="item.logoUrl" :alt="item.name" />
          <div class="caption">{{ item.name }}</div>
        </div>
        <div class="specialty">{{ item.specialty }}</div>
        <div class="time">{{ item.time }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../assets/styles/vars";
.edu {
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
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    @media (max-width: 1000px) {
      flex-wrap: wrap;
    }
  }
  .item {
    border-radius: 8px 0px 0px 8px;
    background-color: $bg;
    padding: 16px 24px;
    @media (max-width: 1000px) {
      width: 100%;
    }
  }
  .top {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
  }
  .caption {
    @extend %dms-500;
    color: $darker;
    font-size: 12px;
    line-height: 16px;
  }
  .specialty {
    @extend %dms-500;
    color: $darker;
    font-size: 14px;
    line-height: 18px;
  }
  .time {
    @extend %dms-400;
    color: $text;
    font-size: 10px;
    letter-spacing: 0.101px;
  }
}
</style>