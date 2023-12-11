<script>
export default {
  data() {
    return {
      user: {
        contact: [
          {
            id: 1,
            icon: "/img/contacts/mail.svg",
            name: "Email",
            subtitle: "antonborodin86@gmail.com",
          },
          {
            id: 2,
            icon: "/img/contacts/phone.svg",
            name: "Phone",
            subtitle: "+375296054096",
          },
          {
            id: 3,
            icon: "/img/contacts/location.svg",
            name: "Address",
            subtitle: "Belarus, 220046, Minsk, Soltisa str.",
          },
        ],
        social: [
          {
            id: 1,
            icon: "/img/social/inst.svg",
            name: "Instagram",
            link: "https://www.instagram.com/antonborod1n/",
            subtitle: "@antonborod1n",
          },
          {
            id: 2,
            icon: "/img/social/github.svg",
            name: "Github",
            link: "https://github.com/antonborod1n",
            subtitle: "@antonborod1n",
          },
          {
            id: 3,
            icon: "/img/social/linkedin.svg",
            name: "Linkedin",
            link: "https://www.linkedin.com/in/anton-borodin-437a60196/",
            subtitle: "anton-borodin",
          },
          {
            id: 4,
            icon: "/img/social/telegram.svg",
            name: "Telegram",
            link: "https://t.me/antonborod1n",
            subtitle: "@antonborod1n",
          },
        ],
        languages: [
          {
            id: 1,
            icon: "/img/languages/russia.svg",
            title: "Russia",
            level: "Native",
          },
          {
            id: 2,
            icon: "/img/languages/uk.svg",
            title: "English",
            level: "Elementary",
          },
          {
            id: 3,
            icon: "/img/languages/belarus.svg",
            title: "Belarus",
            level: "Native",
          },
        ],
        hobbies: [
          {
            id: 1,
            icon: "/img/hobbies/play.svg",
            title: "Gaming",
          },
          {
            id: 2,
            icon: "/img/hobbies/earth.svg",
            title: "Travelling",
          },
          {
            id: 3,
            icon: "/img/hobbies/brush.svg",
            title: "Sport",
          },
        ],
        details: [
          {
            id: 1,
            subtitle: "Mothers Name:",
            descr: "Pramila Devi",
          },
          {
            id: 2,
            subtitle: "Fathes Name:",
            descr: "Girish Chandra",
          },
          {
            id: 3,
            subtitle: "D.O.B. :",
            descr: "10 - 04 - 2004",
          },
        ],
      },
    };
  },
};
</script>

<template>
  <aside class="aside">
    <div class="info">
      <img class="avatar" src="/img/ab.jpg" alt="Anton Baradzin" />
      <h1 class="name">Anton Borodin</h1>
      <div class="text">
        I’m a nice fun and friendly person, I’m honest and punctual, I work well
        in a team but also on my own as I like to set myself goals which I will
        achieve, I have good listening and communication skills. I have a
        creative mind and am always up for new challenges. I am well organized
        and always plan ahead to make sure I manage my time well.
      </div>
    </div>

    <div class="contact">
      <div class="item" v-for="item in user.contact" :key="item.id">
        <div class="icon">
          <img :src="item.icon" :alt="item.name" class="img" />
        </div>
        <div class="box">
          <div class="title">{{ item.name }}</div>
          <a href="mailto:antonborodin86@gmail.com" class="link">{{
            item.subtitle
          }}</a>
        </div>
      </div>
    </div>

    <div class="socials">
      <div class="title">Socials</div>

      <div class="item" v-for="item in user.social" :key="item.id">
        <div class="icon">
          <img :src="item.icon" :alt="item.name" />
        </div>
        <div class="box">
          <div class="title">{{ item.name }}</div>
          <a :href="item.link" class="link" target="_blank">{{
            item.subtitle
          }}</a>
        </div>
      </div>
    </div>

    <div class="languages">
      <div class="title">Languages</div>

      <div class="item" v-for="item in user.languages" :key="item.id">
        <div class="icon">
          <img class="img" :src="item.icon" :alt="item.title" />
        </div>
        <div class="box">
          <div class="name">{{ item.title }}</div>
          <div class="level">{{ item.level }}</div>
        </div>
      </div>
    </div>

    <div class="hobbies">
      <div class="title">Hobbies & Interests</div>

      <div class="item" v-for="item in user.hobbies" :key="item.id">
        <div class="icon">
          <img class="img" :src="item.icon" :alt="item.title" />
        </div>
        <div class="name">{{ item.title }}</div>
      </div>
    </div>
  </aside>
</template>

<style scoped lang="scss">
@import "../assets/styles/vars";

.aside {
  @extend %f-col;
  gap: 32px;
  padding: 48px;
  background-color: $bg;
  @media (max-width: 1000px) {
    padding: 24px;
    gap: 16px;
  }
  .title {
    color: $text;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.121px;
  }
  .item {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .box {
    @extend %f-col;
    gap: 4px;
    max-width: 230px;
  }
}
.info {
  @media (max-width: 1000px) {
  }
  .avatar {
    border-radius: 50%;
    width: 97px;
    height: 97px;
    object-fit: cover;
    margin-bottom: 16px;
  }
  .name {
    @extend %outfit-500;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.645px;
    color: $darker;
    margin-bottom: 32px;
    @media (max-width: 1000px) {
      font-size: 24px;
      line-height: 30px;
      margin-bottom: 16px;
    }
  }
  .text {
    @extend %outfit-500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.363px;
    border-bottom: 1px solid #e2e6ee;
    padding-bottom: 10px;
    @media (max-width: 1000px) {
      font-size: 14px;
      line-height: 20px;
      border-bottom: none;
      padding-bottom: 5px;
    }
  }
}
.contact {
  @extend %f-col;
  gap: 24px;
  padding-bottom: 32px;
  border-bottom: 1px solid #e2e6ee;

  @media (max-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }
  .icon {
    @extend %f-cc;
    min-width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #e2e6ee;
  }
  .link {
    @extend %dms-500;
    color: $dark;
    font-size: 14px;
    line-height: 18px;
    word-wrap: break-word;
  }
}
.socials {
  @extend %f-col;
  gap: 20px;
  padding-bottom: 32px;
  border-bottom: 1px solid #e2e6ee;
  @media (max-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }
  .title {
    @media (max-width: 1000px) {
      display: none;
    }
  }

  .item .title {
    @media (max-width: 1000px) {
      display: block;
    }
  }
  .icon {
    @extend %f-cc;
    min-width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #ffffff;
  }
  .link {
    @extend %dms-500;
    color: $dark;
    font-size: 14px;
    line-height: 18px;
    text-decoration-line: underline;
  }
}
.languages {
  @extend %f-col;
  gap: 20px;
  @media (max-width: 1000px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }
  .icon {
    @extend %f-cc;
    min-width: 32px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
    @media (max-width: 1000px) {
      display: none;
    }
  }
  .icon svg {
    border-radius: 2px;
  }
  .level {
    @extend %dms-500;
    color: $text;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.121px;
    @media (max-width: 1000px) {
      display: none;
    }
  }
  .name {
    @extend %dms-500;
    color: $dark;
    font-size: 14px;
    line-height: 18px;
  }
}
.hobbies {
  @extend %f-col;
  gap: 16px;
  @media (max-width: 1000px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
  }
  .icon {
    @extend %f-cc;
    width: 34px;
    height: 34px;
    @media (max-width: 1000px) {
      display: none;
    }
  }
  .name {
    @extend %dms-500;
    color: $dark;
    font-size: 14px;
    line-height: 18px;
  }
}
</style>
