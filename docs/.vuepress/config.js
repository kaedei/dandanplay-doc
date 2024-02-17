import { defaultTheme } from 'vuepress'

export default ({
    lang: 'zh-CN',
    title: '弹弹play',
    description: '这是弹弹play帮助文档',
    base: process.env.VUEPRESS_BASE || '/',
    head: [
        ['link', { rel: 'icon', href: '/images/logo.png' }]
    ],
    theme: defaultTheme({
        logo: '/images/logo.png',
        repo: 'https://www.dandanplay.com/',
        repoLabel: '弹弹play官网',
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
            '这里什么都没有',
            '我们怎么到这来了？',
            '这是一个 404 页面',
            '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
        sidebar: [
            {
                text: '指南',
                link: '/guide/',
                children: [
                    '/guide/',
                    '/guide/pc.md',
                    '/guide/android.md',
                ]
            },
            {
                text: '常见问题',
                link: '/faq/'
            },
            {
                text: '常用功能',
                link: '/function/',
                children: [
                    '/function/member.md',
                    '/function/danmaku-overlay.md',
                    '/function/kernel-compare.md',
                    '/function/video-frame-interpolation.md',
                    '/function/cast-to-tv.md',
                    '/function/backuped-danmaku.md',
                    '/function/ai-speech-recognition.md',
                    '/function/ai-translate.md',
                    '/function/ai-video-summary.md'
                ]
            },
            {
                text: '其他',
                link: '/other/',
                children: [
                    '/other/feedback.md',
                    '/other/privacy.md',
                    '/other/donate.md',
                ]
            },
        ]
    }),
})