import './assets/styles/main.scss';

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

function accordeon(triggersSelector) {
  const btns = document.querySelectorAll(triggersSelector);

  btns.forEach((item) => {
    item.addEventListener('click', function () {
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('active-content');

      if (this.classList.contains('active')) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
      } else {
        this.nextElementSibling.style.maxHeight = '0px';
      }
    });
  });
}

accordeon('.title');
