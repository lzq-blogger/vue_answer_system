import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import {createPinia} from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
const pinia = createPinia()
app.use(ElementPlus)
app.use(Router)
app.use(pinia)
app.mount('#app')


