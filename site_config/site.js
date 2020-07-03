// 全局的一些配置
export default {
    rootPath: '', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
    port: 8080, // 本地开发服务器的启动端口
    domain: 'go-spring.com', // 站点部署域名，无需协议和path等
    defaultSearch: 'google', // 默认搜索引擎，baidu或者google
    defaultLanguage: 'en-us',
    'en-us': {
        pageMenu: [
            {
                key: 'home', // 用作顶部菜单的选中
                text: 'Home',
                link: '/en-us/index.html',
            },
            {
                key: 'docs',
                text: 'Documentation',
                link: '/en-us/docs/quick-start.html',
            },
            {
                key: 'blog',
                text: 'Blog',
                link: '/en-us/blog/index.html',
            },
        ],
        documentation: {
            title: 'Documentation',
            list: [
                {
                    text: 'Quick Start',
                    link: '/en-us/docs/quick-start.html',
                },
            ],
        },
        resources: {
            title: 'Resources',
            list: [
                {
                    text: 'Blog',
                    link: '/en-us/blog/index.html',
                },
            ],
        },
        copyright: '©2020 The Go-Spring Authors All Rights Reserved',
    },
    'zh-cn': {
        pageMenu: [
            {
                key: 'home',
                text: '首页',
                link: '/zh-cn/index.html',
            },
            {
                key: 'docs',
                text: '文档',
                link: '/zh-cn/docs/quick-start.html',
            },
            {
                key: 'blog',
                text: '博客',
                link: '/zh-cn/blog/index.html',
            },
        ],
        documentation: {
            title: '文档',
            list: [
                {
                    text: '快速开始',
                    link: '/zh-cn/docs/quick-start.html',
                },
            ],
        },
        resources: {
            title: '资源',
            list: [
                {
                    text: '博客',
                    link: '/zh-cn/blog/index.html',
                },
            ],
        },
        copyright: '©2020 The Go-Spring Authors 保留所有权利',
    },
};
