module.exports = {
    base: '/introduction-to-front-end-engineering/',
    title: '带你入门前端工程',
    head: [
        ['meta', { name: 'referrer', content: 'no-referrer' }],
    ],
    themeConfig: {
        sidebar: [
            '/',
            ['/01', '1. 技术选型'],
            ['/02', '2. 统一规范'],
            ['/03', '3. 前端组件化'],
            ['/04', '4. 测试'],
            ['/05', '5. 构建工具'],
            ['/06', '6. 自动化部署'],
            ['/07', '7. 前端监控'],
            ['/08', '8. 性能优化（一）'],
            ['/09', '9. 性能优化（二）'],
            ['/10', '10. 重构'],
            ['/11', '11. 微服务'],
            ['/12', '12. Serverless'],
        ],
        displayAllHeaders: true,
        repo: 'https://github.com/woai3c/introduction-to-front-end-engineering',
        repoLabel: '给作者的 Github 点个 star 吧！',
        smoothScroll: true,
    }
}