import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { vueBridge } from '@garfish/bridge-vue-v3'

createApp(App).mount('#appVue3')

export const provider = vueBridge({
    createApp,
    rootComponent: App
})