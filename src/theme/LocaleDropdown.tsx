import React from 'react'
import {useLocation} from '@docusaurus/router'
import {useSiteConfig} from '@docusaurus/theme-common'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

const locales: Record<string, string> = {
  zh: '中文', en: 'English', hi: 'हिन्दी', es: 'Español',
  fr: 'Français', ar: 'العربية', bn: 'বাংলা', pt: 'Português',
  ru: 'Русский', ur: 'اردو', ja: '日本語', ko: '한국어',
}

export default function LocaleDropdown(): JSX.Element {
  const {i18n} = useDocusaurusContext()
  const {pathname} = useLocation()

  const currentLocale = i18n.currentLocale
  const defaultLocale = i18n.defaultLocale

  // Remove ANY existing locale prefix from the path
  const knownLocales = i18n.locales.filter(l => l !== defaultLocale)
  let cleanPath = pathname
  for (const loc of knownLocales) {
    if (cleanPath === `/${loc}` || cleanPath.startsWith(`/${loc}/`)) {
      cleanPath = cleanPath.slice(loc.length + 1) || '/'
      break
    }
  }

  return (
    <div style={{position: 'relative', display: 'inline-block'}}>
      <select
        value={currentLocale}
        onChange={e => {
          const targetLang = e.target.value
          const newPath = targetLang === defaultLocale
            ? cleanPath
            : `/${targetLang}${cleanPath}`
          window.location.href = newPath
        }}
        style={{
          background: 'transparent',
          color: 'var(--ifm-navbar-link-color)',
          border: '1px solid var(--ifm-color-emphasis-300)',
          borderRadius: 'var(--ifm-global-radius)',
          padding: '0.25rem 1.5rem 0.25rem 0.5rem',
          fontSize: '0.9rem',
          cursor: 'pointer',
          appearance: 'auto',
        }}
      >
        {i18n.locales.map(locale => (
          <option key={locale} value={locale}>
            {locales[locale] || locale}
          </option>
        ))}
      </select>
    </div>
  )
}
