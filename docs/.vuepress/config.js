module.exports = {
    base: '/introduction-to-front-end-engineering/',
    title: '带你入门前端工程',
    head: [
        ['meta', { name: 'referrer', content: 'no-referrer' }],
    ],
    themeConfig: {
        sidebar: [
            '/',
            ['/01', '技术选型'],
            ['/02', '统一规范'],
            ['/03', '前端组件化'],
            ['/04', '测试'],
            ['/05', '构建工具'],
            ['/06', '自动化部署'],
            ['/07', '前端监控'],
            ['/08', '性能优化（一）'],
            ['/09', '性能优化（二）'],
            ['/10', '重构'],
            ['/11', '微服务'],
            ['/12', 'Serverless'],
            ['/13', '参考资料'],
        ],
        displayAllHeaders: true,
        repo: 'https://github.com/woai3c/introduction-to-front-end-engineering',
        repoLabel: 'Github',
        smoothScroll: true,
    }
}