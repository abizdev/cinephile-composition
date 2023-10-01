import './assets/scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

import BtnMore from './components/BtnMore.vue'

const app = createApp(App)
app.component('btn-more', BtnMore)
app.component('fa', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.mount('#app')
