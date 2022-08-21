import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import Store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(Router)
app.use(Store)
app.mount('#app')


