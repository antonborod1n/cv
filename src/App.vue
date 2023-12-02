<script>
import Aside from "@/components/Aside.vue";
import Education from "@/components/Education.vue";
import Experience from "@/components/Experience.vue";
import Project from "@/components/Project.vue";
import Tools from "@/components/Tools.vue";
import Certificates from "@/components/Certificates.vue";

export default {
  components: {
    Aside,
    Education,
    Experience,
    Project,
    Tools,
    Certificates,
  },

  data() {
    return {
      tools: [
        {
          logoUrl: "/img/javascript.svg",
          title: "Java Script",
          subtitle: "Programming",
        },
        {
          logoUrl: "/img/logo-html.png",
          title: "HTML 5",
          subtitle: "HyperText Markup Language",
        },
        {
          logoUrl: "/img/logo-css.png",
          title: "CSS 3",
          subtitle: "Cascading Style Sheets",
        },
        {
          logoUrl: "/img/logo-figma.png",
          title: "Figma",
          subtitle: "Service for interface development",
        },
        {
          logoUrl: "/img/sass.svg",
          title: "SCSS",
          subtitle: "Syntactically Awesome Style Sheets",
        },
        {
          logoUrl: "/img/github.svg",
          title: "Github",
          subtitle: "Web hosting service",
        },
        {
          logoUrl: "/img/webpack.svg",
          title: "Webpack",
          subtitle: "JavaScript module builder",
        },
        {
          logoUrl: "/img/vscode.svg",
          title: "VS Code",
          subtitle: "Code Editing",
        },
      ],
      projects: [
        {
          logoUrl: "/img/lock-logo.svg",
          iconUrl: "/img/link2.svg",
          title: "Zamokservis",
          descr: "Opening, replacement, repair, castles",
          url: "zamokservis.ru",
        },
        {
          logoUrl: "/img/maschineria-logo.svg",
          iconUrl: "/img/link2.svg",
          title: "Machinerea",
          descr: "Equipment sales",
          url: "https://mellow-alfajores-050327.netlify.app/",
        },
      ],
      experience: [
        {
          logoUrl: "/img/freelance.svg",
          company: "Freelance",
          subtitle: "Frontend developer",
          descr:
            "Work with design layouts, HTML and CSS, website layout and templates under CMS, work with Java Script scripts for visualization and animation and optimizes them, checking and testing functionality, fixing bugs, project automation.",
          date: "July 2022 - At the present time",
          location: "Online",
        },
        {
          logoUrl: "/img/linkor.svg",
          company: "Linkor company",
          subtitle: "Search engine optimizer",
          descr:
            "Conducting SEO-audit of the site. Analysis of competitors. Internal optimization of the site. Compilation of semantic kernel. External optimization of the site. Monitoring and analyzing the results",
          date: "January 2021 - July 2022",
          location: "Belarus, Minsk",
        },
        {
          logoUrl: "/img/webfocus.svg",
          company: "WebFocus company",
          subtitle: "Search engine optimizer",
          descr:
            "Semantic core compilation, technical optimization, accounting, link building.",
          date: "July 2019 - April 2020",
          location: "Belarus, Minsk",
        },
      ],
      education: [
        {
          name: "Private University of management and entrepreneurship",
          specialty:
            "Department of Economics and enterprise management by industry",
          time: "2009-2013",
        },
        {
          name: "Minsk state machine-building College",
          specialty: "Department of marketing",
          time: "2004-2008",
        },
      ],
      certificates: [
        {
          logoUrl: "/img/it-academy.svg",
          title: "IT-Academy",
          subtitle: "React for web application development",
          date: "Sep 2022 - Dec 2022",
        },
        {
          logoUrl: "/img/it-academy.svg",
          title: "IT-Academy",
          subtitle: "Development of web applications in JavaScript",
          date: "Mar 2022 - Jul 2022",
        },
        {
          logoUrl: "/img/it-academy.svg",
          title: "IT-Academy",
          subtitle: "Website development using HTML, CSS and JavaScript",
          date: "Sep 2021 - Dec 2021",
        },
        {
          logoUrl: "/img/lang-logo.png",
          title: "Minsk State Linguistic University",
          subtitle: "English (Elementary)",
          date: "Sep 2019 - May 2020",
        },
        {
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
        <div class="inner">
          <div class="content">
            <Education :education="education" />
            <Experience :experience="experience" />
            <Tools :tools="tools" />
            <Project :projects="projects" />
            <Certificates :certificates="certificates" />
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

.inner {
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

  @media (max-width: 1000px) {
    padding: 0;
    gap: 24px;
    border-left: none;
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
