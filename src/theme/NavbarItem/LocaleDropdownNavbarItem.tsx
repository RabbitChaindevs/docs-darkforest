import React from 'react'
import {useLocation} from '@docusaurus/router'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export default function LocaleDropdownNavbarItem(): JSX.Element {
  const {i18n} = useDocusaurusContext()
  const {pathname, search, hash} = useLocation()

  const currentLocale = i18n.currentLocale
  const defaultLocale = i18n.defaultLocale
  const knownLocales = i18n.locales.filter(l => l !== defaultLocale)

  // Strip the FIRST matching locale prefix from the path if present
  let cleanPath = pathname
  for (const loc of knownLocales) {
    const prefix = `/${loc}`
    if (cleanPath === prefix || cleanPath.startsWith(prefix + '/')) {
      cleanPath = cleanPath.slice(prefix.length) || '/'
      break
    }
  }

  return (
    <select
      value={currentLocale}
      onChange={e => {
        const target = e.target.value
        const newPath = target === defaultLocale
          ? cleanPath
          : `/${target}${cleanPath}`
        window.location.href = newPath + search + hash
      }}
      style={{
        background: 'var(--ifm-navbar-background-color)',
        color: 'var(--ifm-navbar-link-color)',
        border: '1px solid var(--ifm-color-primary)',
        borderRadius: 'var(--ifm-global-radius)',
        padding: '0.15rem 1.5rem 0.15rem 0.5rem',
        fontSize: '0.85rem',
        cursor: 'pointer',
        boxShadow: '0 0 0 0 transparent',
        transition: 'box-shadow 0.2s, opacity 0.2s',
      }}
      onMouseEnter={e => {
        e.target.style.boxShadow = '0 0 6px var(--ifm-color-primary-darker)'
        e.target.style.opacity = '1'
      }}
      onMouseLeave={e => {
        e.target.style.boxShadow = '0 0 0 0 transparent'
        e.target.style.opacity = '0.85'
      }}
    >
      {i18n.locales.map(loc => (
        <option key={loc} value={loc}>
          {loc === 'zh' ? '中文' : loc === 'en' ? 'English' : loc === 'hi' ? 'हिन्दी' : loc === 'es' ? 'Español' : loc === 'fr' ? 'Français' : loc === 'ar' ? 'العربية' : loc === 'bn' ? 'বাংলা' : loc === 'pt' ? 'Português' : loc === 'ru' ? 'Русский' : loc === 'ur' ? 'اردو' : loc === 'ja' ? '日本語' : loc === 'ko' ? '한국어' : loc}
        </option>
      ))}
    </select>
  )
}
