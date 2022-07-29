export const MenuConfig = [
    {
        name: '主应用',
        icon: '',
        key: '1',
        childrens: [{
            name: '主应用路由 ONE',
            isMain: true,
            icon: '',
            key: '1-1',
            path: '/main/child1',
        }, {
            name: '主应用路由 TWO',
            isMain: true,
            icon: '',
            key: '1-2',
            path: '/main/child2',
        }]
    }, {
        name: '子应用一（自动挂载）',
        icon: '',
        key: '2',
        childrens: [{
            name: '子应用二（自动挂载）',
            isSub: true,
            icon: '',
            key: '2-1',
            path: '/appVue3',
        },{
            name: '子应用三（自动挂载）',
            isSub: true,
            icon: '',
            key: '2-1',
            path: '/appVue3/child1',
        }]
    }, {
        name: '子应用二（手动挂载）',
        isSub: true,
        isLazyLoad: true, // 手动挂载
        icon: '',
        key: '2',
        path: '/appAntv',
    }
];
