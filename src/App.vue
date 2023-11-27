<script setup>
import Aside from "@/components/Aside.vue";
import Education from "@/components/Education.vue";
import Experience from "@/components/Experience.vue";
import Project from "@/components/Project.vue";
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
          <Project />
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
  grid-template-columns: 363px 1fr;
  grid-template-rows: auto;
  gap: 64px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
.content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 64px 48px 64px 32px;

  @media (max-width: 1000px) {
    padding: 0;
    gap: 24px;
  }

  &::before {
    position: absolute;
    top: 80px;
    left: 0;
    transform: translateX(-16px);
    content: "";
    width: 0.5px;
    height: 100%;
    background-color: #e2e6ee;

    @media (max-width: 1000px) {
      display: none;
    }
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
