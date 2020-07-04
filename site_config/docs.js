export default {
    'en-us': {
        sidemenu: [
            {
                title: 'User Documentation',
                children: [
                    {
                        title: 'Quick Start',
                        link: '/en-us/docs/quick-start.html',
                    },
                    {
                        title: 'Spring IoC',
                        opened: true,
                        children: [
                            {
                                title: 'Overview',
                                link: '/en-us/docs/spring-ioc/overview.html',
                            },
                        ],
                    },
                ],
            },
            {
                title: 'Developer Guide',
                children: [],
            },
        ],
        barText: 'Documentation',
    },
    'zh-cn': {
        sidemenu: [
            {
                title: '用户文档',
                children: [
                    {
                        title: '快速开始',
                        link: '/zh-cn/docs/quick-start.html',
                    },
                    {
                        title: 'Spring IoC',
                        opened: true,
                        children: [
                            {
                                title: '简介',
                                link: '/zh-cn/docs/spring-ioc/overview.html',
                            },
                        ],
                    },
                ],
            },
            {
                title: '开发者指南',
                children: [],
            },
        ],
        barText: '文档',
    },
};
