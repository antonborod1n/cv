<script>
export default {
  data() {
    return {
      user: {
        contact: [
          {
            email: "antonborodin86@gmail.com",
            website: "https://github.com/antonborod1n",
            phone: "+375296054096",
            address: "Belarus, Minsk, Soltisa str. 82-45",
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
      <img class="avatar" src="../assets/img/ab.jpg" alt="Anton Baradzin" />
      <h1 class="name">Anton Baradzin</h1>
      <div class="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        voluptates repudiandae cumque vel consequatur eveniet, qui placeat quo
        earum incidunt omnis sapiente perferendis mollitia asperiores vero
        voluptatibus tempore odio quaerat.
      </div>
    </div>

    <div class="contact">
      <div class="item" v-for="item in user.contact" :key="item.i">
        <div class="icon">
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.33331 7.33334H1.66665C1.20641 7.33334 0.833313 6.96024 0.833313 6.5V1.46376C0.852733 1.01773 1.2202 0.66625 1.66665 0.666672H8.33331C8.79355 0.666672 9.16665 1.03977 9.16665 1.50001V6.5C9.16665 6.96024 8.79355 7.33334 8.33331 7.33334ZM1.66665 2.27834V6.50001H8.33331V2.27834L4.99998 4.50001L1.66665 2.27834ZM1.99998 1.50001L4.99998 3.50001L7.99998 1.50001H1.99998Z"
              fill="#79819A"
            />
          </svg>
        </div>
        <div class="box">
          <div class="title">Email</div>
          <a href="mailto:antonborodin86@gmail.com" class="link email">{{
            item.email
          }}</a>
        </div>
      </div>

      <div class="item">
        <div class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
          >
            <path
              d="M3.52709 9.05626C2.68452 9.05626 1.92492 8.54872 1.60243 7.77031C1.27994 6.9919 1.45806 6.09588 2.05376 5.5L2.93793 4.61583L3.52709 5.205L2.64334 6.08875C2.32753 6.40456 2.2042 6.86486 2.31979 7.29626C2.43538 7.72766 2.77235 8.06463 3.20375 8.18022C3.63515 8.29581 4.09545 8.17248 4.41126 7.85667L5.29501 6.97292L5.88418 7.5625L5.00043 8.44625C4.61046 8.83814 4.07995 9.05778 3.52709 9.05626ZM3.82168 7.2675L3.23251 6.67833L6.17876 3.73208L6.76793 4.32125L3.82209 7.26708L3.82168 7.2675ZM7.06293 6.38375L6.47334 5.79458L7.35709 4.91083C7.6772 4.59597 7.80384 4.13361 7.68886 3.69958C7.57388 3.26554 7.23494 2.92652 6.80093 2.81144C6.36692 2.69635 5.90453 2.82288 5.58959 3.14292L4.70543 4.02667L4.11626 3.4375L5.00043 2.55333C5.81504 1.74582 7.12917 1.7487 7.94024 2.55977C8.75131 3.37085 8.75419 4.68497 7.94668 5.49958L7.06293 6.38333V6.38375Z"
              fill="#79819A"
            />
          </svg>
        </div>
        <div class="box">
          <div class="title">Website</div>
          <a href="https://github.com/antonborod1n" class="link website"
            >https://github.com/antonborod1n</a
          >
        </div>
      </div>

      <div class="item">
        <div class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
          >
            <path
              d="M7.91564 8.33332C4.3608 8.33837 1.66289 5.60812 1.66669 2.08438C1.66669 1.85426 1.85324 1.66666 2.08336 1.66666H3.18309C3.38958 1.66666 3.56499 1.81838 3.59531 2.02263C3.66798 2.51216 3.81051 2.98873 4.01856 3.43779L4.06137 3.53021C4.12091 3.65871 4.08055 3.81139 3.9653 3.89369C3.62473 4.13691 3.49457 4.62648 3.75989 5.00848C4.09284 5.48785 4.51254 5.90746 4.9918 6.24025C5.37378 6.5055 5.86327 6.37536 6.10648 6.03485C6.18884 5.91954 6.34161 5.87916 6.47019 5.93872L6.56218 5.98134C7.01126 6.18937 7.48787 6.3319 7.97745 6.40456C8.18171 6.43487 8.33335 6.61028 8.33335 6.81677V7.91666C8.33335 8.14677 8.14635 8.33332 7.91623 8.33332L7.91564 8.33332Z"
              fill="#79819A"
            />
          </svg>
        </div>
        <div class="box">
          <div class="title">Phone</div>
          <a href="tel:+375296054096" class="link phone">+375(29) 605-40-96</a>
        </div>
      </div>

      <div class="item">
        <div class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
          >
            <path
              d="M4.99998 8.75C4.4737 8.3011 3.98589 7.80897 3.54165 7.27875C2.87498 6.4825 2.08331 5.29667 2.08331 4.16667C2.08272 2.98648 2.79342 1.92225 3.88376 1.47058C4.9741 1.01892 6.22917 1.26885 7.06331 2.10375C7.61184 2.64984 7.91911 3.39266 7.91666 4.16667C7.91666 5.29667 7.12498 6.4825 6.45831 7.27875C6.01407 7.80897 5.52626 8.3011 4.99998 8.75ZM4.99998 2.91667C4.5534 2.91667 4.14074 3.15492 3.91745 3.54167C3.69416 3.92842 3.69416 4.40492 3.91745 4.79167C4.14074 5.17842 4.5534 5.41667 4.99998 5.41667C5.69034 5.41667 6.24998 4.85702 6.24998 4.16667C6.24998 3.47631 5.69034 2.91667 4.99998 2.91667Z"
              fill="#79819A"
            />
          </svg>
        </div>
        <div class="box">
          <div class="title">Address</div>
          <a href="mailto:antonborodin86@gmail.com" class="link address"
            >Belarus, Minsk, Soltisa str. 82-45</a
          >
        </div>
      </div>
    </div>

    <div class="socials">
      <div class="title">Socials</div>

      <div class="item">
        <div class="icon">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="0.5"
              width="16"
              height="16"
              rx="8"
              fill="url(#paint0_radial_1_77)"
            />
            <rect
              y="0.5"
              width="16"
              height="16"
              rx="8"
              fill="url(#paint1_radial_1_77)"
              fill-opacity="0.2"
            />
            <path
              d="M6.33373 8.5002C6.33373 7.57972 7.07972 6.83333 8.0002 6.83333C8.92068 6.83333 9.66707 7.57972 9.66707 8.5002C9.66707 9.42068 8.92068 10.1671 8.0002 10.1671C7.07972 10.1671 6.33373 9.42068 6.33373 8.5002ZM5.43266 8.5002C5.43266 9.91826 6.58214 11.0677 8.0002 11.0677C9.41826 11.0677 10.5677 9.91826 10.5677 8.5002C10.5677 7.08214 9.41826 5.93266 8.0002 5.93266C6.58214 5.93266 5.4327 7.08206 5.4327 8.5002H5.43266ZM10.0694 5.83085C10.0694 5.94953 10.1045 6.06555 10.1704 6.16425C10.2363 6.26295 10.33 6.33989 10.4396 6.38535C10.5492 6.43081 10.6698 6.44274 10.7863 6.41964C10.9027 6.39653 11.0096 6.33943 11.0935 6.25554C11.1775 6.17166 11.2347 6.06477 11.2579 5.94839C11.2811 5.832 11.2692 5.71135 11.2239 5.6017C11.1785 5.49204 11.1016 5.3983 11.003 5.33233C10.9043 5.26635 10.7883 5.23112 10.6697 5.23107H10.6694C10.5104 5.23114 10.3578 5.29435 10.2453 5.40681C10.1328 5.51927 10.0695 5.67178 10.0694 5.83085ZM5.98012 12.5703C5.49262 12.5481 5.22765 12.4669 5.05156 12.3983C4.81811 12.3074 4.65155 12.1992 4.47642 12.0243C4.30129 11.8494 4.19289 11.683 4.1024 11.4495C4.03376 11.2735 3.95256 11.0085 3.9304 10.521C3.90616 9.9939 3.90132 9.83557 3.90132 8.50028C3.90132 7.16499 3.90656 7.0071 3.9304 6.4796C3.9526 5.9921 4.0344 5.72757 4.1024 5.55104C4.19329 5.31759 4.30153 5.15103 4.47642 4.9759C4.65131 4.80077 4.81771 4.69237 5.05156 4.60188C5.22757 4.53324 5.49262 4.45204 5.98012 4.42988C6.50718 4.40564 6.66551 4.4008 8.0002 4.4008C9.33489 4.4008 9.49338 4.40596 10.0209 4.42996C10.5084 4.45216 10.7729 4.53396 10.9494 4.60196C11.1829 4.69245 11.3495 4.80109 11.5246 4.97598C11.6997 5.15087 11.8077 5.31767 11.8986 5.55112C11.9672 5.72713 12.0484 5.99218 12.0706 6.47968C12.0948 7.00718 12.0997 7.16507 12.0997 8.50036C12.0997 9.83565 12.0948 9.99354 12.0706 10.521C12.0484 11.0085 11.9668 11.2735 11.8986 11.4496C11.8077 11.683 11.6995 11.8496 11.5246 12.0243C11.3497 12.1991 11.1829 12.3075 10.9494 12.3984C10.7734 12.467 10.5084 12.5482 10.0209 12.5704C9.49382 12.5946 9.33549 12.5994 8.0002 12.5994C6.66491 12.5994 6.50702 12.5946 5.98012 12.5704V12.5703ZM5.93872 3.53028C5.40642 3.55452 5.04268 3.63893 4.72503 3.76253C4.39626 3.89018 4.11756 4.06142 3.83927 4.33927C3.56098 4.61713 3.39018 4.89586 3.26253 5.22503C3.13893 5.54288 3.05452 5.90642 3.03028 6.43872C3.00564 6.97186 3 7.14231 3 8.5002C3 9.8581 3.00564 10.0285 3.03028 10.5617C3.05452 11.094 3.13893 11.4575 3.26253 11.7754C3.39018 12.1041 3.56102 12.3834 3.83927 12.6611C4.11752 12.9389 4.39586 13.1099 4.72503 13.2379C5.04328 13.3615 5.40642 13.4459 5.93872 13.4701C6.47214 13.4944 6.64231 13.5004 8.0002 13.5004C9.35809 13.5004 9.52854 13.4948 10.0617 13.4701C10.594 13.4459 10.9575 13.3615 11.2754 13.2379C11.6041 13.1099 11.8828 12.939 12.1611 12.6611C12.4394 12.3833 12.6099 12.1041 12.7379 11.7754C12.8615 11.4575 12.9463 11.094 12.9701 10.5617C12.9944 10.0281 13 9.8581 13 8.5002C13 7.14231 12.9944 6.97186 12.9701 6.43872C12.9459 5.90638 12.8615 5.54268 12.7379 5.22503C12.6099 4.89626 12.439 4.61757 12.1611 4.33927C11.8833 4.06098 11.6041 3.89018 11.2758 3.76253C10.9575 3.63893 10.594 3.55412 10.0621 3.53028C9.52886 3.50592 9.3585 3.5 8.0008 3.5C6.64311 3.5 6.47234 3.50564 5.93892 3.53028"
              fill="white"
            />
            <defs>
              <radialGradient
                id="paint0_radial_1_77"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(1.0355 16.1495) scale(20.3141)"
              >
                <stop offset="0.09" stop-color="#FA8F21" />
                <stop offset="0.78" stop-color="#D82D7E" />
              </radialGradient>
              <radialGradient
                id="paint1_radial_1_77"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(8 16) scale(12.5)"
              >
                <stop offset="0.713542" stop-color="#8C3AAA" stop-opacity="0" />
                <stop offset="1" stop-color="#8C3AAA" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div class="box">
          <div class="title">Instagram</div>
          <a href="#" class="link instagram" target="_blank"> @antonborod1n </a>
        </div>
      </div>

      <div class="item">
        <div class="icon">
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.29918 0C2.37315 0 0 2.37271 0 5.29918C0 7.64054 1.51822 9.62685 3.6242 10.3277C3.88872 10.3767 3.97439 10.2124 3.97439 10.0729V9.08633C2.50033 9.40693 2.19342 8.46103 2.19342 8.46103C1.95231 7.84853 1.60477 7.68558 1.60477 7.68558C1.12387 7.35659 1.64142 7.36365 1.64142 7.36365C2.17355 7.40075 2.45352 7.90991 2.45352 7.90991C2.92603 8.7198 3.69309 8.48576 3.99558 8.35019C4.04283 8.00795 4.18017 7.7739 4.33208 7.64186C3.15522 7.50717 1.91786 7.05277 1.91786 5.02274C1.91786 4.44381 2.12497 3.97129 2.46368 3.60035C2.40892 3.46655 2.22742 2.92736 2.51535 2.19784C2.51535 2.19784 2.96048 2.05564 3.97306 2.741C4.39567 2.62354 4.84875 2.5648 5.29918 2.5626C5.74961 2.5648 6.20313 2.62354 6.62663 2.741C7.63833 2.05564 8.08258 2.19784 8.08258 2.19784C8.37094 2.9278 8.18944 3.46699 8.13469 3.60035C8.47472 3.97129 8.68006 4.44425 8.68006 5.02274C8.68006 7.05807 7.44049 7.50629 6.26054 7.63744C6.45043 7.80172 6.62398 8.12409 6.62398 8.61868V10.0729C6.62398 10.2137 6.70876 10.3793 6.9777 10.3272C9.08191 9.62552 10.5984 7.63965 10.5984 5.29918C10.5984 2.37271 8.22566 0 5.29918 0Z"
              fill="#24292E"
            />
          </svg>
        </div>
        <div class="box">
          <div class="title">Github</div>
          <a
            href="https://github.com/antonborod1n"
            class="link github"
            target="_blank"
            >@antonborod1n</a
          >
        </div>
      </div>

      <div class="item">
        <div class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="16px"
            height="16px"
            viewBox="0 0 11 11"
            version="1.1"
          >
            <g id="surface1">
              <path
                style="
                  stroke: none;
                  fill-rule: nonzero;
                  fill: rgb(1.568627%, 40.784314%, 60.784314%);
                  fill-opacity: 1;
                "
                d="M 10.621094 5.5 C 10.621094 8.328125 8.328125 10.621094 5.5 10.621094 C 2.671875 10.621094 0.378906 8.328125 0.378906 5.5 C 0.378906 2.671875 2.671875 0.378906 5.5 0.378906 C 8.328125 0.378906 10.621094 2.671875 10.621094 5.5 Z M 10.621094 5.5 "
              />
              <path
                style="
                  stroke: none;
                  fill-rule: nonzero;
                  fill: rgb(100%, 100%, 100%);
                  fill-opacity: 1;
                "
                d="M 4.382812 7.328125 L 3.609375 7.328125 L 3.609375 4.84375 L 4.382812 4.84375 Z M 3.976562 4.53125 L 3.96875 4.53125 C 3.6875 4.53125 3.507812 4.34375 3.507812 4.101562 C 3.507812 3.855469 3.695312 3.667969 3.980469 3.667969 C 4.265625 3.667969 4.441406 3.855469 4.449219 4.097656 C 4.449219 4.34375 4.269531 4.53125 3.976562 4.53125 Z M 7.492188 7.328125 L 6.613281 7.328125 L 6.613281 6.042969 C 6.613281 5.707031 6.472656 5.476562 6.171875 5.476562 C 5.941406 5.476562 5.8125 5.632812 5.753906 5.78125 C 5.730469 5.835938 5.734375 5.910156 5.734375 5.984375 L 5.734375 7.332031 L 4.859375 7.332031 C 4.859375 7.332031 4.871094 5.054688 4.859375 4.847656 L 5.730469 4.847656 L 5.730469 5.234375 C 5.785156 5.066406 6.0625 4.820312 6.507812 4.820312 C 7.058594 4.820312 7.492188 5.179688 7.492188 5.949219 Z M 7.492188 7.328125 "
              />
            </g>
          </svg>
        </div>
        <div class="box">
          <div class="title">Linkedin</div>
          <a
            href="https://www.linkedin.com/in/anton-borodin-437a60196/"
            class="link linkedin"
            target="_blank"
            >anton-borodin</a
          >
        </div>
      </div>

      <div class="item">
        <div class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="16px"
            height="16px"
            viewBox="0 0 11 11"
            version="1.1"
          >
            <defs>
              <linearGradient
                id="linear0"
                gradientUnits="userSpaceOnUse"
                x1="18.0028"
                y1="2.0016"
                x2="6.0028"
                y2="30"
                gradientTransform="matrix(0.229167,0,0,0.229167,0,0)"
              >
                <stop
                  offset="0"
                  style="
                    stop-color: rgb(21.568627%, 68.235294%, 88.627451%);
                    stop-opacity: 1;
                  "
                />
                <stop
                  offset="1"
                  style="
                    stop-color: rgb(11.764706%, 58.823529%, 78.431373%);
                    stop-opacity: 1;
                  "
                />
              </linearGradient>
            </defs>
            <g id="surface1">
              <path
                style="stroke: none; fill-rule: nonzero; fill: url(#linear0)"
                d="M 5.5 11 C 8.539062 11 11 8.539062 11 5.5 C 11 2.460938 8.539062 0 5.5 0 C 2.460938 0 0 2.460938 0 5.5 C 0 8.539062 2.460938 11 5.5 11 Z M 5.5 11 "
              />
              <path
                style="
                  stroke: none;
                  fill-rule: nonzero;
                  fill: rgb(100%, 100%, 100%);
                  fill-opacity: 1;
                "
                d="M 2.046875 5.769531 C 2.691406 5.414062 3.410156 5.121094 4.078125 4.820312 C 5.234375 4.335938 6.390625 3.859375 7.5625 3.414062 C 7.789062 3.335938 8.199219 3.261719 8.238281 3.597656 C 8.214844 4.078125 8.125 4.550781 8.0625 5.027344 C 7.90625 6.070312 7.726562 7.109375 7.546875 8.152344 C 7.488281 8.496094 7.050781 8.675781 6.773438 8.457031 C 6.105469 8.003906 5.433594 7.558594 4.773438 7.097656 C 4.558594 6.878906 4.757812 6.5625 4.953125 6.40625 C 5.503906 5.863281 6.085938 5.402344 6.605469 4.832031 C 6.746094 4.492188 6.332031 4.78125 6.195312 4.867188 C 5.441406 5.386719 4.707031 5.9375 3.914062 6.390625 C 3.507812 6.617188 3.035156 6.425781 2.628906 6.300781 C 2.265625 6.148438 1.734375 6 2.046875 5.769531 Z M 2.046875 5.769531 "
              />
            </g>
          </svg>
        </div>
        <div class="box">
          <div class="title">Linkedin</div>
          <a
            href="https://t.me/antonborod1n"
            class="link linkedin"
            target="_blank"
            >@antonborod1n</a
          >
        </div>
      </div>
    </div>

    <div class="languages">
      <div class="title">Languages</div>

      <div class="item">
        <div class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
          >
            <g clip-path="url(#clip0_1_129)">
              <mask
                id="mask0_1_129"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="-2"
                y="-1"
                width="20"
                height="14"
              >
                <path
                  d="M15.5556 -1H0.444465C-0.537375 -1 -1.33331 -0.164265 -1.33331 0.866667V11.1333C-1.33331 12.1643 -0.537375 13 0.444465 13H15.5556C16.5374 13 17.3334 12.1643 17.3334 11.1333V0.866667C17.3334 -0.164265 16.5374 -1 15.5556 -1Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_1_129)">
                <path
                  d="M15.5556 -1H0.444465C-0.537375 -1 -1.33331 -0.164265 -1.33331 0.866667V11.1333C-1.33331 12.1643 -0.537375 13 0.444465 13H15.5556C16.5374 13 17.3334 12.1643 17.3334 11.1333V0.866667C17.3334 -0.164265 16.5374 -1 15.5556 -1Z"
                  fill="#22438B"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.33336 -0.0666656L-0.467529 -0.042399L-0.444418 1.8L14.6507 12.0928L16.4614 12.0583L16.4276 10.2271L1.33336 -0.0666656Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.444492 -0.0666656L-0.444397 0.866668L15.5556 12.0667L16.4445 11.1333L0.444492 -0.0666656Z"
                  fill="#C7152A"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.6667 -0.0666656H16.4444V1.8C16.4444 1.8 5.99999 8.70294 1.34932 12.0928C1.29332 12.1339 -0.426675 12.0956 -0.426675 12.0956L-0.564453 10.3213L14.6667 -0.0666656Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.5938 -0.092804L16.4445 0.866663L0.444492 12.0667L-0.444397 11.1333L15.5938 -0.092804Z"
                  fill="#C7152A"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.77783 -0.0666656H10.2223V3.66667H16.4445V8.33333H10.2223V12.0667H5.77783V8.33333H-0.444397V3.66667H5.77783V-0.0666656Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.66671 -0.0666656H9.33338V4.6H16.4445V7.4H9.33338V12.0667H6.66671V7.4H-0.444397V4.6H6.66671V-0.0666656Z"
                  fill="#C7152A"
                />
                <path
                  d="M15.5556 -0.53334H0.444479C-0.291901 -0.53334 -0.888855 0.0934609 -0.888855 0.86666V11.1333C-0.888855 11.9065 -0.291901 12.5333 0.444479 12.5333H15.5556C16.292 12.5333 16.8889 11.9065 16.8889 11.1333V0.86666C16.8889 0.0934609 16.292 -0.53334 15.5556 -0.53334Z"
                  stroke="black"
                  stroke-opacity="0.1"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_1_129">
                <rect
                  width="18.6667"
                  height="14"
                  fill="white"
                  transform="translate(-1.33331 -1)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="box">
          <div class="title">Hindi</div>
          <div class="level">Native</div>
        </div>
      </div>

      <div class="item">
        <div class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
          >
            <g clip-path="url(#clip0_1_129)">
              <mask
                id="mask0_1_129"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="-2"
                y="-1"
                width="20"
                height="14"
              >
                <path
                  d="M15.5556 -1H0.444465C-0.537375 -1 -1.33331 -0.164265 -1.33331 0.866667V11.1333C-1.33331 12.1643 -0.537375 13 0.444465 13H15.5556C16.5374 13 17.3334 12.1643 17.3334 11.1333V0.866667C17.3334 -0.164265 16.5374 -1 15.5556 -1Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_1_129)">
                <path
                  d="M15.5556 -1H0.444465C-0.537375 -1 -1.33331 -0.164265 -1.33331 0.866667V11.1333C-1.33331 12.1643 -0.537375 13 0.444465 13H15.5556C16.5374 13 17.3334 12.1643 17.3334 11.1333V0.866667C17.3334 -0.164265 16.5374 -1 15.5556 -1Z"
                  fill="#22438B"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.33336 -0.0666656L-0.467529 -0.042399L-0.444418 1.8L14.6507 12.0928L16.4614 12.0583L16.4276 10.2271L1.33336 -0.0666656Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.444492 -0.0666656L-0.444397 0.866668L15.5556 12.0667L16.4445 11.1333L0.444492 -0.0666656Z"
                  fill="#C7152A"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.6667 -0.0666656H16.4444V1.8C16.4444 1.8 5.99999 8.70294 1.34932 12.0928C1.29332 12.1339 -0.426675 12.0956 -0.426675 12.0956L-0.564453 10.3213L14.6667 -0.0666656Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.5938 -0.092804L16.4445 0.866663L0.444492 12.0667L-0.444397 11.1333L15.5938 -0.092804Z"
                  fill="#C7152A"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.77783 -0.0666656H10.2223V3.66667H16.4445V8.33333H10.2223V12.0667H5.77783V8.33333H-0.444397V3.66667H5.77783V-0.0666656Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.66671 -0.0666656H9.33338V4.6H16.4445V7.4H9.33338V12.0667H6.66671V7.4H-0.444397V4.6H6.66671V-0.0666656Z"
                  fill="#C7152A"
                />
                <path
                  d="M15.5556 -0.53334H0.444479C-0.291901 -0.53334 -0.888855 0.0934609 -0.888855 0.86666V11.1333C-0.888855 11.9065 -0.291901 12.5333 0.444479 12.5333H15.5556C16.292 12.5333 16.8889 11.9065 16.8889 11.1333V0.86666C16.8889 0.0934609 16.292 -0.53334 15.5556 -0.53334Z"
                  stroke="black"
                  stroke-opacity="0.1"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_1_129">
                <rect
                  width="18.6667"
                  height="14"
                  fill="white"
                  transform="translate(-1.33331 -1)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="box">
          <div class="title">English</div>
          <div class="level">Professional working</div>
        </div>
      </div>

      <div class="item">
        <div class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
          >
            <g clip-path="url(#clip0_1_129)">
              <mask
                id="mask0_1_129"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="-2"
                y="-1"
                width="20"
                height="14"
              >
                <path
                  d="M15.5556 -1H0.444465C-0.537375 -1 -1.33331 -0.164265 -1.33331 0.866667V11.1333C-1.33331 12.1643 -0.537375 13 0.444465 13H15.5556C16.5374 13 17.3334 12.1643 17.3334 11.1333V0.866667C17.3334 -0.164265 16.5374 -1 15.5556 -1Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_1_129)">
                <path
                  d="M15.5556 -1H0.444465C-0.537375 -1 -1.33331 -0.164265 -1.33331 0.866667V11.1333C-1.33331 12.1643 -0.537375 13 0.444465 13H15.5556C16.5374 13 17.3334 12.1643 17.3334 11.1333V0.866667C17.3334 -0.164265 16.5374 -1 15.5556 -1Z"
                  fill="#22438B"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.33336 -0.0666656L-0.467529 -0.042399L-0.444418 1.8L14.6507 12.0928L16.4614 12.0583L16.4276 10.2271L1.33336 -0.0666656Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.444492 -0.0666656L-0.444397 0.866668L15.5556 12.0667L16.4445 11.1333L0.444492 -0.0666656Z"
                  fill="#C7152A"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.6667 -0.0666656H16.4444V1.8C16.4444 1.8 5.99999 8.70294 1.34932 12.0928C1.29332 12.1339 -0.426675 12.0956 -0.426675 12.0956L-0.564453 10.3213L14.6667 -0.0666656Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.5938 -0.092804L16.4445 0.866663L0.444492 12.0667L-0.444397 11.1333L15.5938 -0.092804Z"
                  fill="#C7152A"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.77783 -0.0666656H10.2223V3.66667H16.4445V8.33333H10.2223V12.0667H5.77783V8.33333H-0.444397V3.66667H5.77783V-0.0666656Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.66671 -0.0666656H9.33338V4.6H16.4445V7.4H9.33338V12.0667H6.66671V7.4H-0.444397V4.6H6.66671V-0.0666656Z"
                  fill="#C7152A"
                />
                <path
                  d="M15.5556 -0.53334H0.444479C-0.291901 -0.53334 -0.888855 0.0934609 -0.888855 0.86666V11.1333C-0.888855 11.9065 -0.291901 12.5333 0.444479 12.5333H15.5556C16.292 12.5333 16.8889 11.9065 16.8889 11.1333V0.86666C16.8889 0.0934609 16.292 -0.53334 15.5556 -0.53334Z"
                  stroke="black"
                  stroke-opacity="0.1"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_1_129">
                <rect
                  width="18.6667"
                  height="14"
                  fill="white"
                  transform="translate(-1.33331 -1)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="box">
          <div class="title">Spanish</div>
          <div class="level">Elementary</div>
        </div>
      </div>
    </div>

    <div class="hobbies">
      <div class="title">Hobbies & Interests</div>

      <div class="item">
        <div class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
          >
            <circle
              cx="8.5"
              cy="9"
              r="6.375"
              stroke="black"
              stroke-width="1.41667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.72919 11.1652V6.83477C6.72919 6.25863 7.38041 5.9235 7.84923 6.25838L10.8806 8.42362C11.2761 8.70611 11.2761 9.29391 10.8806 9.57641L7.84923 11.7416C7.38041 12.0765 6.72919 11.7414 6.72919 11.1652Z"
              stroke="black"
              stroke-width="1.41667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="title">Gaming</div>
      </div>

      <div class="item">
        <div class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
          >
            <circle
              cx="7.5"
              cy="8"
              r="6.375"
              stroke="black"
              stroke-width="1.41667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.20832 1.65906C7.96181 1.86652 7.73972 2.11136 7.55077 2.39186C6.45796 4.01413 6.88716 6.21513 8.50943 7.30794C8.63748 7.3942 8.76914 7.47098 8.90358 7.53843C10.3333 8.25583 10.8792 7.28894 11.6533 7.81039C12.1554 8.14864 12.2882 8.8299 11.95 9.33202C11.5955 9.85823 11.0416 10.125 11.1375 10.9869C11.1916 11.4733 11.4904 11.8925 11.8777 12.25"
              stroke="black"
              stroke-width="1.41667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.83331 6.07336C2.59964 6.25986 3.30877 6.70221 3.8209 7.38088C4.36679 8.10429 4.59309 8.96927 4.52345 9.80653C4.48658 10.25 4.77577 10.6975 5.14789 10.9415C5.32769 11.0593 5.4906 11.2096 5.62753 11.3911C6.23388 12.1946 6.1129 13.3203 5.37498 13.9788"
              stroke="black"
              stroke-width="1.41667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="title">Travelling</div>
      </div>

      <div class="item">
        <div class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
          >
            <path
              d="M2.83331 12.5417C2.83331 11.3681 3.78471 10.4167 4.95831 10.4167V10.4167C6.13192 10.4167 7.08331 11.3681 7.08331 12.5417V12.5417C7.08331 13.7153 6.13192 14.6667 4.95831 14.6667H3.11444C2.95918 14.6667 2.83331 14.5408 2.83331 14.3855V13.6042V12.5417V12.5417Z"
              stroke="black"
              stroke-width="1.41667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.66669 10.2425L11.0428 4.26906C11.5858 3.66576 12.5236 3.6411 13.0975 4.21502L13.1913 4.30875L13.285 4.40248C13.8589 4.97641 13.8342 5.91424 13.231 6.45721L7.2575 11.8333"
              stroke="black"
              stroke-width="1.41667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="title">Sketching/Graffitti</div>
      </div>

      <div class="item">
        <div class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
          >
            <rect
              x="2.83331"
              y="3.33334"
              width="11.3333"
              height="11.3333"
              rx="2.125"
              stroke="black"
              stroke-width="1.41667"
              stroke-linecap="round"
            />
            <path
              d="M2.83331 10.4167H6.37498"
              stroke="black"
              stroke-width="1.41667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.625 10.4167H14.1667"
              stroke="black"
              stroke-width="1.41667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.4968 10.4351C10.3473 10.8461 10.0745 11.2009 9.71581 11.4512C9.35711 11.7014 8.92994 11.8349 8.49258 11.8333C8.05523 11.8318 7.629 11.6954 7.27205 11.4426C6.91511 11.1899 6.64484 10.8332 6.49813 10.4212"
              stroke="black"
              stroke-width="1.41667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="title">Blogging</div>
      </div>
    </div>

    <div class="details">
      <div class="title">Personal Details</div>
      <dl class="list">
        <div class="item">
          <dt class="subtitle">Mother’s Name:</dt>
          <dd class="descr">Pramila Devi</dd>
        </div>

        <div class="item">
          <dt class="subtitle">Father’s Name:</dt>
          <dd class="descr">Girish Chandra</dd>
        </div>

        <div class="item">
          <dt class="subtitle">D.O.B. :</dt>
          <dd class="descr">10 - 04 - 2004</dd>
        </div>
      </dl>
    </div>
  </aside>
</template>

<style scoped lang="scss">
@import "../assets/styles/vars";

.aside {
  @extend %f-col;
  gap: 16px;
  padding: 24px;
  background-color: $bg;
  .title {
    color: $text;
    font-size: 6px;
    line-height: 8px;
    letter-spacing: 0.06px;
  }
  .item {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .box {
    @extend %f-col;
    gap: 2px;
  }
}
.info {
  .avatar {
    border-radius: 50%;
    width: 48px;
    height: 48px;
    object-fit: cover;
    margin-bottom: 8px;
  }
  .name {
    @extend %dms-500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.32px;
    color: $darker;
    margin-bottom: 16px;
  }
  .text {
    @extend %dms-500;
    font-size: 9px;
    line-height: 12px;
    letter-spacing: 0.18px;
    border-bottom: 0.5px solid #e2e6ee;
    padding-bottom: 5px;
  }
}
.contact {
  @extend %f-col;
  gap: 12px;
  padding-bottom: 16px;
  border-bottom: 0.5px solid #e2e6ee;
  .icon {
    @extend %f-cc;
    min-width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #e2e6ee;
  }
  .link {
    @extend %dms-500;
    color: $dark;
    font-size: 7px;
    line-height: 9px;
  }
}
.socials {
  @extend %f-col;
  gap: 10px;
  .icon {
    @extend %f-cc;
    min-width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #ffffff;
  }
  .link {
    @extend %dms-500;
    color: $dark;
    font-size: 7px;
    line-height: 9px;
    text-decoration-line: underline;
  }
}
.languages {
  @extend %f-col;
  gap: 10px;
  .icon {
    @extend %f-cc;
    min-width: 16px;
    height: 12px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
  }
  .icon svg {
    border-radius: 2px;
  }
  .caption {
    @extend %dms-500;
    color: $dark;
    font-size: 7px;
    line-height: 9px;
  }
  .level {
    @extend %dms-500;
    color: $text;
    font-size: 6px;
    line-height: 8px;
    letter-spacing: 0.06px;
  }
}
.hobbies {
  @extend %f-col;
  gap: 8px;
  .icon {
    @extend %f-cc;
    width: 17px;
    height: 17px;
  }
  .caption {
    @extend %dms-500;
    color: $dark;
    font-size: 7px;
    line-height: 9px;
  }
}
.details {
  .title {
    margin-bottom: 8px;
  }
  .list {
    @extend %f-col;
    @extend %dms-500;
    gap: 8px;
    font-size: 7px;
    line-height: 9px;
  }
  .subtitle {
    color: #100f0f;
  }
  .descr {
    color: #989fb2;
  }
}
</style>
