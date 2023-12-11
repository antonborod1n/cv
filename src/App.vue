<script>
import Aside from "@/components/Aside.vue";
import Education from "@/components/Education.vue";
import Experience from "@/components/Experience.vue";
import Project from "@/components/Project.vue";
import Tool from "@/components/Tool.vue";
import Certificate from "@/components/Certificate.vue";

export default {
  components: {
    Aside,
    Education,
    Experience,
    Project,
    Tool,
    Certificate,
  },

  data() {
    return {
      education: [
        {
          id: 1,
          name: "Private University of management and entrepreneurship",
          specialty:
            "Department of Economics and enterprise management by industry",
          time: "2009-2013",
        },
        {
          id: 2,
          name: "Minsk state machine-building College",
          specialty: "Department of marketing",
          time: "2004-2008",
        },
      ],
      experience: [
        {
          id: 1,
          logoUrl: "/img/freelance.svg",
          company: "Freelance",
          subtitle: "Frontend developer",
          descr:
            "Work with design layouts, HTML and CSS, website layout and templates under CMS, work with Java Script scripts for visualization and animation and optimizes them, checking and testing functionality, fixing bugs, project automation.",
          date: "July 2022 - At the present time",
          location: "Online",
        },
        {
          id: 2,
          logoUrl: "/img/linkor.svg",
          company: "Linkor company",
          subtitle: "Search engine optimizer",
          descr:
            "Conducting SEO-audit of the site. Analysis of competitors. Internal optimization of the site. Compilation of semantic kernel. External optimization of the site. Monitoring and analyzing the results",
          date: "January 2021 - July 2022",
          location: "Belarus, Minsk",
        },
        {
          id: 3,
          logoUrl: "/img/webfocus.svg",
          company: "WebFocus company",
          subtitle: "Search engine optimizer",
          descr:
            "Semantic core compilation, technical optimization, accounting, link building.",
          date: "July 2019 - April 2020",
          location: "Belarus, Minsk",
        },
      ],
      tools: [
        {
          id: 1,
          logoUrl: "/img/javascript.svg",
          title: "Java Script",
          subtitle: "Programming",
        },
        {
          id: 2,
          logoUrl: "/img/logo-html.png",
          title: "HTML 5",
          subtitle: "HyperText Markup Language",
        },
        {
          id: 3,
          logoUrl: "/img/logo-css.png",
          title: "CSS 3",
          subtitle: "Cascading Style Sheets",
        },
        {
          id: 4,
          logoUrl: "/img/logo-figma.png",
          title: "Figma",
          subtitle: "Service for interface development",
        },
        {
          id: 5,
          logoUrl: "/img/sass.svg",
          title: "SCSS",
          subtitle: "Syntactically Awesome Style Sheets",
        },
        {
          id: 6,
          logoUrl: "/img/github.svg",
          title: "Github",
          subtitle: "Web hosting service",
        },
        {
          id: 7,
          logoUrl: "/img/webpack.svg",
          title: "Webpack",
          subtitle: "JavaScript module builder",
        },
        {
          id: 8,
          logoUrl: "/img/vscode.svg",
          title: "VS Code",
          subtitle: "Code Editing",
        },
      ],
      projects: [
        {
          id: 1,
          logoUrl: "/img/lock-logo.svg",
          iconUrl: "/img/link2.svg",
          title: "Zamokservis",
          descr: "Opening, replacement, repair, castles",
          url: "zamokservis.ru",
        },
        {
          id: 2,
          logoUrl: "/img/maschineria-logo.svg",
          iconUrl: "/img/link2.svg",
          title: "Machinerea",
          descr: "Equipment sales",
          url: "https://mellow-alfajores-050327.netlify.app/",
        },
      ],
      certificates: [
        {
          id: 1,
          logoUrl: "/img/it-academy.svg",
          title: "IT-Academy",
          subtitle: "React for web application development",
          date: "Sep 2022 - Dec 2022",
        },
        {
          id: 2,
          logoUrl: "/img/it-academy.svg",
          title: "IT-Academy",
          subtitle: "Development of web applications in JavaScript",
          date: "Mar 2022 - Jul 2022",
        },
        {
          id: 3,
          logoUrl: "/img/it-academy.svg",
          title: "IT-Academy",
          subtitle: "Website development using HTML, CSS and JavaScript",
          date: "Sep 2021 - Dec 2021",
        },
        {
          id: 4,
          logoUrl: "/img/lang-logo.png",
          title: "Minsk State Linguistic University",
          subtitle: "English (Elementary)",
          date: "Sep 2019 - May 2020",
        },
        {
          id: 5,
          logoUrl: "/img/it-academy.svg",
          title: "IT-Academy",
          subtitle: "Search Engine Optimization and Website Promotion (SEO)",
          date: "Dec 2019 - Feb 2019",
        },
      ],
    };
  },
};
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="wrapper">
        <Aside />
        <div class="wrap">
          <div class="content">
            <section class="edu">
              <div class="decor">
                <span></span>
              </div>
              <h2 class="title">Education</h2>
              <div class="inner">
                <Education
                  v-for="item in education"
                  :key="item.id"
                  :name="item.name"
                  :specialty="item.specialty"
                  :time="item.time"
                />
              </div>
            </section>

            <section class="ex">
              <div class="decor">
                <span></span>
              </div>
              <h2 class="title">Achievements</h2>
              <div class="inner">
                <Experience
                  v-for="item in experience"
                  :key="item.id"
                  :logo-url="item.logoUrl"
                  :company="item.company"
                  :subtitle="item.subtitle"
                  :descr="item.descr"
                  :date="item.date"
                  :location="item.location"
                />
              </div>
            </section>

            <section class="tools">
              <div class="decor">
                <span></span>
              </div>
              <h2 class="title">Tools/Skills</h2>
              <div class="inner">
                <Tool
                  v-for="item in tools"
                  :key="item.id"
                  :logo-url="item.logoUrl"
                  :title="item.title"
                  :subtitle="item.subtitle"
                />
              </div>
            </section>

            <section class="project">
              <div class="decor">
                <span></span>
              </div>
              <h2 class="title">Latest projects</h2>
              <div class="inner">
                <Project
                  v-for="item in projects"
                  :key="item.id"
                  :logo-url="item.logoUrl"
                  :icon-url="item.iconUrl"
                  :title="item.title"
                  :descr="item.descr"
                  :url="item.url"
                />
              </div>
            </section>

            <section class="certificates">
              <div class="decor">
                <span></span>
              </div>
              <h2 class="title">Certificates & Awards</h2>
              <div class="inner">
                <Certificate
                  v-for="item in certificates"
                  :key="item.id"
                  :logo-url="item.logoUrl"
                  :title="item.title"
                  :subtitle="item.subtitle"
                  :date="item.date"
                />
              </div>
            </section>
          </div>
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
  gap: 44px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
.wrap {
  padding: 64px 0 0;
  @media (max-width: 1000px) {
    padding: 0;
  }
}
.content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 0 48px 64px;
  border-left: 0.5px solid #e2e6ee;
  @media (max-width: 1300px) {
    padding: 0 0 64px 48px;
  }
  @media (max-width: 1000px) {
    padding: 0;
    gap: 24px;
    border-left: none;
  }
}
.title {
  position: relative;
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

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #5531a7;
  }
}
.edu {
  position: relative;
  .inner {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    @media (max-width: 1000px) {
      flex-wrap: wrap;
    }
  }
}
.ex {
  position: relative;
  .inner {
    @extend %f-col;
    gap: 8px;
    @media (max-width: 1000px) {
      gap: 20px;
    }
  }
}
.tools {
  position: relative;
  .inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
  }
}
.project {
  position: relative;
  .inner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
    }
  }
}
.certificates {
  position: relative;
  .inner {
    @extend %f-col;
    gap: 8px;
  }
}
</style>
