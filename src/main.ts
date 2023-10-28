import { createApp } from 'vue'
import Wedding from './Wedding.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faPaperclip, faCalendar, faImages, faInfo, faCommentDollar } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faPaperclip, faCalendar, faImages, faInfo, faCommentDollar)

const app = createApp(Wedding)

app
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
