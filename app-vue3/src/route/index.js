// 定义路由

const App = () => import('../App.vue');
const ChildMenu = () => import('../components/ChildView1.vue');

export const routes = [
  { path: '/', component: App },
  { path: '/childMenu', name: 'ChildMenu', component: ChildMenu },
];
