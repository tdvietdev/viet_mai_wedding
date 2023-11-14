import { createApp } from 'vue'
import Wedding from './Wedding.vue'
// import Vue from 'vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faUserSecret,
  faPaperclip,
  faCalendar,
  faImages,
  faInfo,
  faCommentDollar,
  faBars,
  faXmark,
  faLocationArrow, faMapLocationDot, faCopy, faCheck
} from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faPaperclip, faCalendar, faImages, faInfo, faCommentDollar, faBars, faXmark, faLocationArrow, faMapLocationDot, faCopy, faCheck)

const app = createApp(Wedding)

app.directive('scroll-animate', {
  mounted(el, binding) {
    console.log("binding")
    console.log(binding)
    const animateName = binding.value || "animate__bounceInLeft"
    // Hàm xử lý sự kiện scroll
    function handleScroll() {
      const rect = el.getBoundingClientRect();
      // const isAnimated = el.classList.contains('animate__animated');
      const elementInView = rect.top <= window.innerHeight;
      
      if (elementInView) {
        el.classList.add('animate__animated');
        el.classList.add(animateName);
      } else {
        el.classList.remove(animateName);
      }
    }
    
    // Thêm sự kiện scroll và gọi hàm xử lý
    window.addEventListener('scroll', handleScroll);
    
    // Gọi hàm xử lý ngay khi directive được kích hoạt
    // handleScroll();
  },
})

app
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
