// 定义路由
import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../views/home/index.vue');
const App1 = () => import('../views/childApp1/index.vue');
const App2 = () => import('../views/childApp2/index.vue');

const routes = [
    { path: '/', component: Home },
    // { path: '/home', component: Home },
    // { path: '/app1', name: 'App1', component: App1 },
    // { path: '/app2', name: 'App2', component: App2 },
];


export const vueRouter = createRouter({
    history: createWebHistory(),
    routes,
});