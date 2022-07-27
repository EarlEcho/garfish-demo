// 定义路由
import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../views/home/index.vue');
const Index = () => import('../views/index.vue');
const App1 = () => import('../views/childApp1/index.vue');
const App2 = () => import('../views/childApp2/index.vue');

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/main',
        component: Index,
        children: [{
            path: 'child1',
            component: App1,
            name: 'App1'
        }, {
            path: 'child2',
            component: App2,
            name: 'App2'
        }]
    },
    // { path: '/app1', name: 'App1', component: App1 },
    // { path: '/app2', name: 'App2', component: App2 },
];


export const vueRouter = createRouter({
    history: createWebHistory(),
    routes,
});