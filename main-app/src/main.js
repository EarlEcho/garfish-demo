import { createApp } from 'vue'
import Garfish from 'garfish';
import App from './App.vue';
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import { vueRouter } from './router/index.js';


createApp(App).use(vueRouter).use(ArcoVue, {
    // 用于改变使用组件时的前缀名称
    componentPrefix: 'arco'
}).mount('#app')

// 可独立运行
if (!window.__GARFISH__) {
    console.log(111);
} else {
    console.log(222);
}

Garfish.run({
    // 子应用的基础路径、默认值为/ 、整个微前端应用的 basename
    basename: '/sub',
    // 子应用的挂载节点
    domGetter: '#subApp',
    // 是否禁用子应用的资源预加载，默认值为 false，开启子应用的预加载能力，预加载能力在弱网环境和手机端不会开启
    disablePreloadApp: false,
    apps: [
        {
            name: 'appVue3', // 每个应用的 name 需要保持唯一
            activeWhen: '/appVue3',
            entry: 'http://127.0.0.1:3001',
            sandbox: {
                open: false,
                // snapshot: true, 或者只开启快照沙箱
            },
        },
        {
            name: 'appAntv', // 每个应用的 name 需要保持唯一
            activeWhen: '/appAntv',
            entry: 'http://127.0.0.1:3002'
        }
    ],
    beforeLoad(appInfo) {
        console.log('子应用开始加载', appInfo.name);
    },
    afterLoad(appInfo) {
        console.log('子应用加载完成', appInfo.name);
    },
    errorLoadApp(error, appInfo) {
        console.log('子应用加载异常', appInfo.name);
        console.error(error);
    },
    beforeMount(appInfo) {
        console.log('子应用开始渲染', appInfo.name);
    },
    afterMount(appInfo) {
        console.log('子应用渲染结束', appInfo.name);
    },
    // 提供了该 hook，错误将不会 throw 到文档流中（不会被全局错误监听到），提供给开发者决定如何处理错误
    errorMountApp(error, appInfo) {
        console.log('子应用渲染异常', appInfo.name);
        console.error(error);
    },
    beforeUnmount(appInfo) {
        console.log('子应用开始销毁', appInfo.name);
    },
    afterUnmount(appInfo) {
        console.log('子应用销毁结束', appInfo.name);
    },
    // 提供了该 hook，错误将不会 throw 到文档流中（不会被全局错误监听到），提供给开发者决定如何处理错误
    errorUnmountApp(error, appInfo) {
        console.log('子应用销毁异常', appInfo.name);
        console.error(error);
    },
    // 在路由发生变化时并且未匹配到任何子应用时触发
    onNotMatchRouter(path) {
        console.log('子应用路由未匹配', path);
    },
})
