// 定义路由

const Index = () => import('../views/index.vue');
const ChildMenu = () => import('../components/ChildView1.vue');

export const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    childrens: [
      {
        path: '/childMenu',
        name: 'ChildMenu',
        component: ChildMenu,
      },
    ],
  },
  ,
];
