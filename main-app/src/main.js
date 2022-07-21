import { createApp } from 'vue'
import Garfish from 'garfish';
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')


Garfish.run({
    // 子应用的基础路径、默认值为/ 、整个微前端应用的 basename
    basename: '/',
    // 子应用的挂载节点
    domGetter: '#subApp',
    // 是否禁用子应用的资源预加载，默认值为 false，开启子应用的预加载能力，预加载能力在弱网环境和手机端不会开启
    disablePreloadApp: false,
    apps: [
        {
            name: 'appVue3', // 每个应用的 name 需要保持唯一
            activeWhen: '/appVue3',
            entry: 'http://127.0.0.1:3001'
        },
        {
            name: 'appAntv', // 每个应用的 name 需要保持唯一
            activeWhen: '/appAntv',
            entry: 'http://127.0.0.1:3002'
        }
    ],
})
