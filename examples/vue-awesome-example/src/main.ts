import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faChild, faCircle, faArchive, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'

library.add(
  faCoffee,
  faChild,
  faCircle,
  faArchive,
  faEnvelope,
  faComment,
  faTwitter
)


createApp(App).mount('#app')
