import { createApp } from 'vue'
import Wedding from './Wedding.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faPaperclip, faCalendar, faImages, faInfo, faCommentDollar, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faPaperclip, faCalendar, faImages, faInfo, faCommentDollar, faBars, faXmark)

const app = createApp(Wedding)

app
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
