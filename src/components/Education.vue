<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    specialty: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="item">
    <div class="top">
      <div class="caption">{{ name }}</div>
    </div>
    <div class="specialty">{{ specialty }}</div>
    <div class="time">{{ time }}</div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/styles/vars";
.edu {
  .item:nth-child(1) {
    border-radius: 8px 0px 0px 8px;
  }
  .item:nth-child(2) {
    border-radius: 0px 8px 8px 0px;
  }
  .item {
    width: 50%;
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