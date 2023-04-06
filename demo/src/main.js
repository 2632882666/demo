import { createApp } from 'vue'
import './style.css'
//ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
//Router
import router from '../router/index'

const app = createApp(App)
app.use(ElementPlus)

import 'virtual:windi.css'
app.use(router)
app.mount('#app')