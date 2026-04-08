import React from 'react'

type MainPageLayoutProps = {
  children: React.ReactNode
}

export function MainPageLayout({ children }: MainPageLayoutProps) {
  return (
    <main className="ri-app-shell">
      <section className="ri-app-frame">{children}</section>
    </main>
  )
}
