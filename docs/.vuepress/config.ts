import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    bundler: viteBundler(),
    lang: 'zh-CN',
    title: '弹弹play',
    description: '这是弹弹play帮助文档',
    base: (process.env.VUEPRESS_BASE as `/${string}/`) || '/',
    head: [
        ['link', { rel: 'icon', href: '/images/logo.png' }],
        ['link', { rel:'stylesheet', href: '/css/style.css'}]
    ],
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜索 Ⓢ'
                },
            },
            maxSuggestions: 10,
        }),
    ],
    theme: defaultTheme({
        logo: '/images/logo.png',
        repo: 'https://www.dandanplay.com/',
        repoLabel: '弹弹play官网',
        // page meta
        next: '下一篇',
        prev: '上一篇',
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
                    '/guide/clients.md',
                    '/guide/pc.md',
                    '/guide/android.md',
                ]
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
                    '/function/ai-video-summary.md',
                    '/function/download-banlist.md',
                    '/function/media-sniff.md',
                    '/function/media-library.md',
                    '/function/medialibrary-remote-emby.md',
                    '/function/medialibrary-remote-dandanplay.md',
                    '/function/medialibrary-remote-onedrive.md',
                    '/function/medialibrary-remote-plex.md',
                ]
            },
            {
                text: '常见问题',
                link: '/faq/',
                children: [
                    '/faq/download.md',
                    '/faq/resource-service.md',
                    '/faq/pc-beta.md',
                    '/faq/account.md',
                    '/faq/pc-cannot-start.md',
                    '/faq/load-danmaku.md',
                    '/faq/pc-backup.md',
                    '/faq/pc-performance.md',
                ]
            },
            {
                text: '开放平台',
                link: '/open/',
                children: [
                    '/open/README.md',
                    '/open/changelog.md',
                    '/open/client-protocol.md',
                    '/open/library-api.md',
                    '/open/resource-service-api.md'
                ]
            },
            {
                text: '客户端更新日志',
                link: '/changelog/'
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