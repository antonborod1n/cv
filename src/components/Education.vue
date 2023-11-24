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
    justify-content: space-between;
    align-items: center;
    gap: 4px;
  }
  .item {
    border-radius: 4px 0px 0px 4px;
    background-color: $bg;
    padding: 8px 12px;
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
    font-size: 6px;
    line-height: 8px;
  }
  .specialty {
    @extend %dms-500;
    color: $darker;
    font-size: 7px;
    line-height: 9px;
  }
  .time {
    @extend %dms-400;
    color: $text;
    font-size: 5px;
    letter-spacing: 0.05px;
  }
}
</style>