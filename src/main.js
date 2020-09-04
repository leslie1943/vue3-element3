import { createApp } from 'vue'
const app = createApp(App)

import App from './App.vue'
import Element3 from "element3"
import "element3/lib/theme-chalk/index.css"

app.use(Element3)

app.mount("#app")
