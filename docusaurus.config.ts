import {themes as prismThemes} from 'prism-react-renderer'
import type {Config} from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'Dark Forest',
  tagline: '链上星际文明策略游戏官方文档',
  favicon: 'img/favicon.svg',

  url: 'https://docs.darkforest.uk',
  baseUrl: '/',

  organizationName: 'RabbitChaindevs',
  projectName: 'docs-darkforest',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,

  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en', 'hi', 'es', 'fr', 'ar', 'bn', 'pt', 'ru', 'ur'],
    localeConfigs: {
      zh: { label: '中文' },
      en: { label: 'English' },
      hi: { label: 'हिन्दी' },
      es: { label: 'Español' },
      fr: { label: 'Français' },
      ar: { label: 'العربية', direction: 'rtl' },
      bn: { label: 'বাংলা' },
      pt: { label: 'Português' },
      ru: { label: 'Русский' },
      ur: { label: 'اردو', direction: 'rtl' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/RabbitChaindevs/docs-darkforest/tree/main',
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
          label: '📚 Docs',
        },
        {
          href: 'https://darkforest.uk',
          label: '🎮 Game',
          position: 'right',
        },
        {
          href: 'https://github.com/RabbitChaindevs/docs-darkforest',
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
          title: 'Docs',
          items: [
            { label: 'Quickstart', to: '/docs/quickstart/install-wallet' },
            { label: 'Game Guide', to: '/docs/guide/civilization' },
            { label: 'Economy', to: '/docs/economy/dft-overview' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: 'https://discord.gg/darkforest' },
            { label: 'Twitter', href: 'https://twitter.com/darkforest' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Game Website', href: 'https://darkforest.uk' },
            { label: 'GitHub', href: 'https://github.com/RabbitChaindevs/docs-darkforest' },
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
