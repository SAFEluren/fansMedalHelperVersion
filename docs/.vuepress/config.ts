import { localTheme } from './theme'
import { defineUserConfig } from '@vuepress/cli'

export default defineUserConfig({
    base: '/',
    lang: "zh-CN",
    title: "B站粉丝牌助手文档",
    description: "B站粉丝牌助手文档",
    head: [
        [
            'link', { rel: 'icon', href: '/images/logo.jpg' }
        ]
    ],
    theme: localTheme({
        title: "B站粉丝牌助手文档",
        description: "B站粉丝牌助手文档",
        logo: '/images/logo.jpg',
        navbar: [
            { text: '首页', link: '/'},
            { text: '指南',link:'/guide/', children: [
                {
                  text: '项目介绍',
                  link: '/guide/',
                  activeMatch: '/guide/'

                },
                {
                    text: '部署方式',
                    children: [{
                        text: '本地/服务器部署',
                        link: '/guide/location',
      
                      },
                      {
                        text: '阿里云函数部署',
                        link: '/guide/ali-cloud',
                      },
                      {
                        text: '腾讯云函数部署',
                        link: '/guide/tx-cloud',
                      },
                      {
                        text: '其他方式部署',
                        link: '/guide/other',
                      }],
                  },
              ]},
              { text: '更新日志', link: '/changelog/'},
        ],
        repo: 'XiaoMiku01/fansMedalHelper',
        docsRepo: 'https://github.com/XiaoMiku01/fansMedalHelperVersion',
        docsBranch: 'master',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',
        editLink: true,
        editLinkText: "在 GitHub 上编辑此页",
        contributorsText: '文档贡献者'
    }),
  })
