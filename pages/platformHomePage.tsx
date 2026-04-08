import React from 'react'
import { Link } from 'react-router-dom'

const productCards = [
  {
    id: 'ri-targeting-tool',
    name: 'RI Targeting Tool',
    status: 'Live Product',
    path: '/ri-targeting-tool',
    description: 'Review suppression performance, model behavior, and future targeting scenarios for active RI workflows.',
    highlights: ['Performance dashboards', 'Routing in place', 'Ready for demo'],
    accentClassName: 'app-product-card--primary',
    buttonLabel: 'Open Product',
  },
  {
    id: 'population-health-compass',
    name: 'Population Health Compass',
    status: 'Dummy Product',
    path: '/population-health-compass',
    description: 'Placeholder product shell for member segmentation, market drilldowns, and population-level monitoring.',
    highlights: ['Future product slot', 'Card-based entry', 'Placeholder route'],
    accentClassName: 'app-product-card--teal',
    buttonLabel: 'Open Demo',
  },
  {
    id: 'care-opportunity-studio',
    name: 'Care Opportunity Studio',
    status: 'Dummy Product',
    path: '/care-opportunity-studio',
    description: 'Placeholder experience for surfacing campaign-ready opportunities, prioritization logic, and analyst review.',
    highlights: ['Future product slot', 'Reusable layout', 'Placeholder route'],
    accentClassName: 'app-product-card--amber',
    buttonLabel: 'Open Demo',
  },
  {
    id: 'member-engagement-pulse',
    name: 'Member Engagement Pulse',
    status: 'Dummy Product',
    path: '/member-engagement-pulse',
    description: 'Placeholder workspace for outbound engagement monitoring, member response trends, and action tracking.',
    highlights: ['Future product slot', 'Scalable navigation', 'Placeholder route'],
    accentClassName: 'app-product-card--slate',
    buttonLabel: 'Open Demo',
  },
]

const PlatformHomePage = () => {
  return (
    <main className="app-home-shell">
      <section className="app-home-hero">
        <div className="app-home-hero-copy">
          <p className="app-home-eyebrow">Product Hub</p>
          <h1 className="app-home-title">Select a product workspace</h1>
          <p className="app-home-description">
            This landing page gives us a scalable entry point for multiple products. The live RI Targeting Tool opens the
            existing implementation, and the other cards act as dummy products for future expansion.
          </p>
        </div>

        <div className="app-home-hero-panel">
          <div className="app-home-stat-card">
            <span className="app-home-stat-label">Live now</span>
            <strong className="app-home-stat-value">1 product</strong>
          </div>
          <div className="app-home-stat-card">
            <span className="app-home-stat-label">Planned</span>
            <strong className="app-home-stat-value">3 placeholders</strong>
          </div>
        </div>
      </section>

      <section className="app-product-grid" aria-label="Available products">
        {productCards.map((product) => (
          <article key={product.id} className={`app-product-card ${product.accentClassName}`}>
            <div className="app-product-card-top">
              <span className="app-product-status">{product.status}</span>
              <h2 className="app-product-title">{product.name}</h2>
              <p className="app-product-description">{product.description}</p>
            </div>

            <ul className="app-product-highlights" aria-label={`${product.name} highlights`}>
              {product.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <Link to={product.path} className="app-product-button">
              {product.buttonLabel}
            </Link>
          </article>
        ))}
      </section>
    </main>
  )
}

export default PlatformHomePage
