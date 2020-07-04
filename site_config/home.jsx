import React from 'react';

export default {
    'zh-cn': {
        brand: {
            brandName: 'Go-Spring',
            briefIntroduction: '基于 IoC 的一站式开发框架',
            buttons: [
                {
                    text: '快速开始',
                    link: '/zh-cn/docs/quick-start.html',
                    type: 'primary',
                },
                {
                    text: '查看 Github',
                    link: 'https://github.com/go-spring/go-spring',
                    type: 'normal',
                },
            ],
        },
        features: {
            title: '特性一览',
            list: [
                {
                    img: '/img/feature_transpart.png',
                    title: '依赖注入',
                    content: '提供高性能的基于代理的远程调用能力，服务以接口为粒度，为开发者屏蔽远程调用底层细节。',
                },
                {
                    img: '/img/feature_loadbalances.png',
                    title: '属性绑定',
                    content: '内置多种负载均衡策略，智能感知下游节点健康状况，显著减少调用延迟，提高系统吞吐量。',
                },
                {
                    img: '/img/feature_service.png',
                    title: '自动配置',
                    content: '支持多种注册中心服务，服务实例上下线实时感知。',
                },
                {
                    img: '/img/feature_hogh.png',
                    title: '领域抽象',
                    content: '遵循微内核+插件的设计原则，所有核心能力如Protocol、Transport、Serialization被设计为扩展点，平等对待内置实现和第三方实现。',
                },
            ],
        },
    },
    'en-us': {
        brand: {
            brandName: 'Go-Spring',
            briefIntroduction: 'One-Stop Development Framework on IoC',
            buttons: [
                {
                    text: 'Quick Start',
                    link: '/en-us/docs/quick-start.html',
                    type: 'primary',
                },
                {
                    text: 'View on Github',
                    link: 'https://github.com/go-spring/go-spring',
                    type: 'normal',
                },
            ],
        },
        features: {
            title: '特性一览',
            list: [
                {
                    img: '/img/feature_transpart.png',
                    title: '依赖注入',
                    content: '提供高性能的基于代理的远程调用能力，服务以接口为粒度，为开发者屏蔽远程调用底层细节。',
                },
                {
                    img: '/img/feature_loadbalances.png',
                    title: '属性绑定',
                    content: '内置多种负载均衡策略，智能感知下游节点健康状况，显著减少调用延迟，提高系统吞吐量。',
                },
                {
                    img: '/img/feature_service.png',
                    title: '自动配置',
                    content: '支持多种注册中心服务，服务实例上下线实时感知。',
                },
                {
                    img: '/img/feature_hogh.png',
                    title: '领域抽象',
                    content: '遵循微内核+插件的设计原则，所有核心能力如Protocol、Transport、Serialization被设计为扩展点，平等对待内置实现和第三方实现。',
                },
            ],
        },
    },
};
