<script setup>
import Aside from "@/components/Aside.vue";
import Education from "@/components/Education.vue";
import Experience from "@/components/Experience.vue";
import Latest from "@/components/Latest.vue";
import Tools from "@/components/Tools.vue";
import Certificates from "@/components/Certificates.vue";
</script>

<template>
  <header></header>

  <main class="main">
    <div class="container">
      <div class="wrapper">
        <Aside />
        <div class="content">
          <Education />
          <Experience />
          <Tools />
          <Latest />
          <Certificates />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import "./assets/styles/vars";
.wrapper {
  display: grid;
  grid-template-columns: 180px 1fr;
  grid-template-rows: auto;
  gap: 32px;
}
.content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 36px 24px 36px 16px;

  &::before {
    position: absolute;
    top: 40px;
    left: 0;
    transform: translateX(-8px);
    content: "";
    width: 0.5px;
    height: 100%;
    background-color: #e2e6ee;
  }
}

.title {
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04) inset,
      0px 6px 24px 0px rgba(0, 0, 0, 0.04), 0px 1px 4px 0px rgba(0, 0, 0, 0.05);
  }
}
</style>
