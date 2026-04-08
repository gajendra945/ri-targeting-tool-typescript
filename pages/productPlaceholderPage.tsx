import React from 'react'
import { Link } from 'react-router-dom'

type ProductPlaceholderPageProps = {
  title: string
  summary: string
  accentClassName?: string
}

export function ProductPlaceholderPage({ title, summary, accentClassName }: ProductPlaceholderPageProps) {
  return (
    <main className="app-placeholder-shell">
      <section className={`app-placeholder-card ${accentClassName ?? ''}`.trim()}>
        <p className="app-placeholder-eyebrow">Dummy Product</p>
        <h1 className="app-placeholder-title">{title}</h1>
        <p className="app-placeholder-summary">{summary}</p>

        <div className="app-placeholder-block">
          <h2 className="app-placeholder-block-title">Why this page exists</h2>
          <p className="app-placeholder-block-copy">
            This placeholder shows how additional products can plug into the same landing page and routing pattern before
            their full implementation is ready.
          </p>
        </div>

        <div className="app-placeholder-actions">
          <Link to="/" className="app-placeholder-button app-placeholder-button--primary">
            Logout
          </Link>
          <Link to="/ri-targeting-tool" className="app-placeholder-button app-placeholder-button--secondary">
            Open RI Targeting Tool
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ProductPlaceholderPage
