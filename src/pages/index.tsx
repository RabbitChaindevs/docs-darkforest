import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import type { ReactNode } from 'react'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext()
  return (
    <header
      style={{
        textAlign: 'center',
        padding: '6rem 2rem 4rem',
        background: 'linear-gradient(180deg, rgba(0,212,170,0.08) 0%, transparent 100%)',
      }}>
      <h1 style={{fontSize: '3rem', marginBottom: '0.5rem'}}>
        ✦ {siteConfig.title}
      </h1>
      <p style={{fontSize: '1.2rem', color: 'var(--ifm-color-emphasis-600)', maxWidth: 600, margin: '0 auto 2rem'}}>
        {siteConfig.tagline}
      </p>
      <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
        <Link
          className="button button--primary button--lg"
          to="/docs/quickstart/install-wallet">
          🚀 开始玩
        </Link>
        <Link
          className="button button--secondary button--lg"
          to="/docs/guide/civilization">
          📖 玩法指南
        </Link>
      </div>
    </header>
  )
}

function Feature({title, description, icon}: {title: string; description: string; icon: string}) {
  return (
    <div style={{
      padding: '1.5rem',
      borderRadius: '12px',
      border: '1px solid var(--ifm-color-emphasis-200)',
    }}>
      <h3>{icon} {title}</h3>
      <p>{description}</p>
    </div>
  )
}

const features = [
  {
    title: '完全上链',
    description: '所有游戏逻辑由智能合约执行，数据公开透明、不可篡改。部署在 BNB Smart Chain。',
    icon: '🔗',
  },
  {
    title: '文明建设',
    description: '升级六大系统 - 采集、武器、护盾、雷达、引擎、总等级，提升你的文明实力。',
    icon: '🏛️',
  },
  {
    title: '策略战斗',
    description: '攻击其他文明掠夺资源，使用追踪跳跃和战术配合克敌制胜。',
    icon: '⚔️',
  },
  {
    title: 'AI Agent',
    description: '配置自动化策略，24/7 守护你的文明，支持 Telegram/Discord 通知。',
    icon: '🤖',
  },
  {
    title: '经济系统',
    description: 'DFT 代币经济、订单簿能源市场、每日铸造 - 完整的游戏经济生态。',
    icon: '💰',
  },
  {
    title: '社区联盟',
    description: '加入联盟，与全球玩家协同作战，共同探索星际。',
    icon: '🤝',
  },
]

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext()
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main style={{maxWidth: 1000, margin: '0 auto', padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem'}}>
        {features.map((f, idx) => (
          <Feature key={idx} {...f} />
        ))}
      </main>
    </Layout>
  )
}
