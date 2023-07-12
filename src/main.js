import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import { LoadingPlugin } from 'vue-loading-overlay';
// import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.use(store)
app.use(LoadingPlugin)
app.mount('#app')

