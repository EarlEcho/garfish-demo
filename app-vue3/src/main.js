import { h, createApp } from 'vue';
import { createRouter, createWebHistory, useRouter, useRoute } from 'vue-router';
import { routes } from './route/index.js';
import App from './App.vue';
import { vueBridge } from '@garfish/bridge-vue-v3';
const vueInstance = createApp(App);
vueInstance.config.$router = useRouter();
vueInstance.config.$route = useRoute();

// 我们强烈建议使用从主应用传递过来的 basename 作为子应用的 basename
// 而非主、子应用约定式，避免 basename 后期变更未同步带来的问题
const garfishRouter = (basename) => {
    const router = createRouter({
      history: createWebHistory(basename),
      base: basename,
      routes,
    });
    return router;
};
const vueRouter = createRouter({
    history: createWebHistory(),
    routes,
});
if (!window.__GARFISH__) {
  // 非微前端环境运行
  vueInstance.use(vueRouter);
  vueInstance.mount('#app3');
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
    vueInstance.use(garfishRouter(basename));
  },
  // 可选，注册 vue-router或状态管理对象
  appOptions: ({ basename, dom, appName, props }) => ({
    el: '#app3',
    render: () => h(App),
    router: garfishRouter(basename),
  }),
});
