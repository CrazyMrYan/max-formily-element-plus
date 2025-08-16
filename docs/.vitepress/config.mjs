import { defineConfig } from 'vitepress'
import path from 'path'
import { fileURLToPath, URL } from 'node:url'

// 组件文件列表
const componentFiles = [
  'array-cards',
  'array-collapse',
  'array-items',
  'array-table',
  'array-tabs',
  'cascader',
  'checkbox',
  'date-picker',
  'editable',
  'form-button-group',
  'form-collapse',
  'form-dialog',
  'form-drawer',
  'form-grid',
  'form-item',
  'form-layout',
  'form-step',
  'form-tab',
  'form',
  'input-number',
  'input',
  'password',
  'preview-text',
  'radio',
  'reset',
  'select',
  'space',
  'submit',
  'switch',
  'time-picker',
  'transfer',
  'upload',
]

export default defineConfig({
  title: 'Element-plus',
  description: 'Alibaba unified front-end form solution',
  outDir: './doc-site',

  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '//img.alicdn.com/imgextra/i3/O1CN01XtT3Tv1Wd1b5hNVKy_!!6000000002810-55-tps-360-360.svg',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/element-plus/dist/index.css',
      },
    ],
  ],

  themeConfig: {
    logo: '//img.alicdn.com/imgextra/i2/O1CN01Kq3OHU1fph6LGqjIz_!!6000000004056-55-tps-1141-150.svg',

    nav: [
      {
        text: 'ElementPlus',
        link: '/guide/',
      },
      {
        text: '主站',
        link: 'https://formilyjs.org',
      },
      {
        text: 'GITHUB',
        link: 'https://github.com/CrazyMrYan/max-formily-element-plus.git',
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/' },
            ...componentFiles.map((file) => ({
              text: file
                .replace(/-/g, ' ')
                .replace(/\b\w/g, (l) => l.toUpperCase()),
              link: `/guide/${file}`,
            })),
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/CrazyMrYan/max-formily-element-plus.git',
      },
    ],

    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
  },

  markdown: {
    lineNumbers: false,
  },

  vite: {
    resolve: {
      alias: {
        '@formily/element-plus': fileURLToPath(
          new URL('../../packages/components/src', import.meta.url)
        ),
      },
    },
  },
})
