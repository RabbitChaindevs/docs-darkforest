import type {SidebarsConfig} from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  sidebar: [
    {
      type: 'category',
      label: '🚀 快速上手',
      collapsed: false,
      items: [
        'quickstart/install-wallet',
        'quickstart/connect-bsc',
        'quickstart/get-dft',
        'quickstart/create-civ',
      ],
    },
    {
      type: 'category',
      label: '🎮 玩法指南',
      items: [
        'guide/civilization',
        'guide/battle',
        'guide/movement',
        'guide/energy',
        'guide/alliance',
        'guide/totem',
      ],
    },
    {
      type: 'category',
      label: '💰 经济系统',
      items: [
        'economy/dft-overview',
        'economy/energy-market',
        'economy/daily-minter',
      ],
    },
    {
      type: 'category',
      label: '🤖 AI 自动战斗',
      items: [
        'agent/what-is-agent',
        'agent/quickstart',
        'agent/strategies',
      ],
    },
    {
      type: 'category',
      label: '📎 附录',
      items: [
        'reference/addresses',
        'reference/glossary',
        'reference/faq',
      ],
    },
  ],
}

export default sidebars
