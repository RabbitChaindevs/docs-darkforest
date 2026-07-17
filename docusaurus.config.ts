import {themes as prismThemes} from 'prism-react-renderer'
import type {Config} from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'Dark Forest',
  tagline: '链上星际文明策略游戏官方文档',
  favicon: 'img/favicon.svg',

  url: 'https://docs.darkforest.uk',
  baseUrl: '/',

  organizationName: 'dark-forest',
  projectName: 'docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    localeConfigs: {
      zh: { label: '中文' },
      en: { label: 'English' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/dark-forest/docs/tree/main',
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/og-image.svg',
    navbar: {
      title: 'Dark Forest',
      logo: {
        alt: 'Dark Forest Logo',
        src: 'img/logo-icon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'sidebar',
          position: 'left',
          label: '📚 文档',
        },
        {
          href: 'https://darkforest.uk',
          label: '🎮 游戏',
          position: 'right',
        },
        {
          href: 'https://github.com/dark-forest',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            { label: '快速上手', to: '/docs/quickstart/install-wallet' },
            { label: '玩法指南', to: '/docs/guide/civilization' },
            { label: '经济系统', to: '/docs/economy/dft-overview' },
          ],
        },
        {
          title: '社区',
          items: [
            { label: 'Discord', href: 'https://discord.gg/darkforest' },
            { label: 'Twitter', href: 'https://twitter.com/darkforest' },
          ],
        },
        {
          title: '更多',
          items: [
            { label: '游戏官网', href: 'https://darkforest.uk' },
            { label: 'GitHub', href: 'https://github.com/dark-forest' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Dark Forest. Built on BNB Chain.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
