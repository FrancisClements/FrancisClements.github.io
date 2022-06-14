import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueKinesis from 'vue-kinesis'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueKinesis)

app.mount('#app')
