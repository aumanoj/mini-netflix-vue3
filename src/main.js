import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/scss/main.scss'
import router from './router'

import LoaderComponent from '@/components/LoaderComponent.vue'

const app = createApp(App)

app.use(router)
app.component('LoaderComponent', LoaderComponent)
app.mount('#app')
