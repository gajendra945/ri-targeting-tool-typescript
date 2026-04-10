import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { riTargetingToolRoutes } from '../routes/constants'
import '../styles/homePage.css'

const OverviewIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3.5" y="3.5" width="6.5" height="6.5" rx="0.9" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <rect x="14" y="3.5" width="6.5" height="6.5" rx="0.9" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <rect x="3.5" y="14" width="6.5" height="6.5" rx="0.9" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <rect x="14" y="14" width="6.5" height="6.5" rx="0.9" fill="none" stroke="currentColor" strokeWidth="1.8" />
  </svg>
)

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 4 4 10v10h6v-6h4v6h6V10z" fill="currentColor" />
  </svg>
)

const NoteIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 4.5h8.2a2 2 0 0 1 2 2V20H7a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9 2.8h4.2v3H9z" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <path d="M9.7 9.2h4.8M9.7 12.8h4.8M9.7 16.4h3.6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="m14.6 18.5 3.1-3.1 1.3 1.3-3.1 3.1-2 .6z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
)

const LogoutIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M10 5.5H7.8a2.3 2.3 0 0 0-2.3 2.3v8.4a2.3 2.3 0 0 0 2.3 2.3H10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.5 12H9.5M15.5 8.5 19 12l-3.5 3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const navSections = [
  {
    key: 'signify',
    title: 'Signify HHV',
    base: riTargetingToolRoutes.signifyHHV.base,
    icon: <HomeIcon />,
    items: [
      { key: 'signify-ytd', label: 'YTD suppression stats', to: riTargetingToolRoutes.signifyHHV.ytdSuppressionStats },
      { key: 'signify-model', label: 'Model Performance', to: riTargetingToolRoutes.signifyHHV.modelPerformance },
      { key: 'signify-future', label: 'Future suppressions', to: riTargetingToolRoutes.signifyHHV.futureSuppressions },
    ],
  },
  {
    key: 'optum',
    title: 'Optum IOA',
    base: riTargetingToolRoutes.optumIOA.base,
    icon: <NoteIcon />,
    items: [
      { key: 'optum-ytd', label: 'YTD suppression stats', to: riTargetingToolRoutes.optumIOA.ytdSuppressionStats },
      { key: 'optum-model', label: 'Model Performance', to: riTargetingToolRoutes.optumIOA.modelPerformance },
      { key: 'optum-future', label: 'Future suppressions', to: riTargetingToolRoutes.optumIOA.futureSuppressions },
    ],
  },
]

type ProductPageLayoutProps = {
  children: React.ReactNode
}

export function ProductPageLayout({ children }: ProductPageLayoutProps) {
  const location = useLocation()
  const normalizedPath = location.pathname.replace(/\/+$/, '') || '/'
  const isOverviewActive = normalizedPath === riTargetingToolRoutes.home

  return (
    <main className="ri-app-shell">
      <section className="ri-app-frame">
        <section className="ri-main-grid">
          <aside className="ri-sidebar">
            <h2 className="ri-sidebar-title">RI Targeting Tool</h2>

            <div className="ri-overview-row">
              <span className="ri-icon-cell">
                <OverviewIcon />
              </span>
              <NavLink
                end
                to={riTargetingToolRoutes.home}
                className={() => `ri-overview-btn ${isOverviewActive ? 'is-active' : ''}`}
              >
                Overview
              </NavLink>
            </div>

            {navSections.map((section) => {
              const isSectionActive = normalizedPath.startsWith(section.base)

              return (
                <div key={section.key} className={`ri-nav-row ${isSectionActive ? 'is-active' : ''}`}>
                  <span className={`ri-icon-cell ri-icon-cell--muted ${isSectionActive ? 'is-active' : ''}`}>{section.icon}</span>
                  <div className="ri-nav-group">
                    <p className={`ri-nav-heading ${isSectionActive ? 'is-active' : ''}`}>{section.title}</p>
                    <ul className="ri-nav-list">
                      {section.items.map((item) => (
                        <li key={item.key}>
                          <NavLink to={item.to} className={({ isActive }) => `ri-nav-item-btn ${isActive ? 'is-active' : ''}`}>
                            {item.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </aside>

          <section className="ri-content">
            <div className="ri-content-topbar">
              <Link to={riTargetingToolRoutes.home} className="ri-content-logout-btn" aria-label="Go to overview home page">
                <LogoutIcon />
                <span>Logout</span>
              </Link>
            </div>
            <div className="ri-content-body">{children}</div>
          </section>
        </section>
      </section>
    </main>
  )
}

export default ProductPageLayout
