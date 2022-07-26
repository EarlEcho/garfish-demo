export const MenuConfig = [
    {
        name: '主应用',
        icon: '',
        key: '1',
        path: '/main',
        childrens: [{
            name: '主应用路由 ONE',
            icon: '',
            key: '1-1',
            path: '/main/child1',
        }, {
            name: '主应用路由 TWO',
            icon: '',
            key: '1-2',
            path: '/main/child2',
        }]
    }, {
        name: '子应用一',
        icon: '',
        key: '2',
        path: '/sub/appVue3',
        childrens: [{
            name: '子应用三（手动挂载）',
            icon: '',
            key: '2-1',
            path: '/appVue3/child1',
        }]
    }, {
        name: '子应用二',
        icon: '',
        key: '2',
        path: '/sub/appAntv',
    }
];
