import { h,createApp } from 'vue'
import App from './App.vue'
const vueInstance = createApp(App);

import { vueBridge } from '@garfish/bridge-vue-v3';

if (!window.__GARFISH__) {
    // 非微前端环境运行
    vueInstance.mount('#appAntv');
} else {
    console.log('微前端环境运行');
}

export const provider = vueBridge({
    createApp,
    rootComponent: App,
    loadRootComponent: ({ basename, dom, appName, props }) => {
        return Promise.resolve(App);
    },
    // 可选的，注册 vue-router 或状态管理对象
    handleInstance: (vueInstance, { basename, dom, appName, props }) => {
        // vueInstance.use(garfishRouter(basename));
    },
    // 可选，注册 vue-router或状态管理对象
    appOptions: ({ basename, dom, appName, props }) => ({
        el: '#appAntv',
        render: () => h(App),
        // router: garfishRouter(basename),
    }),
});
