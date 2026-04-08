import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RiTargetingToolRoutes } from './routes'

type AppErrorBoundaryProps = {
  children: React.ReactNode
}

type AppErrorBoundaryState = {
  error: Error | null
}

class AppErrorBoundary extends React.Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  constructor(props: AppErrorBoundaryProps) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error: Error): AppErrorBoundaryState {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <main
          style={{
            minHeight: '100vh',
            padding: '24px',
            background: '#f1f2f4',
            fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
          }}
        >
          <section
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              background: '#fff',
              border: '1px solid #d4d8e0',
              borderRadius: '12px',
              padding: '20px',
            }}
          >
            <h1 style={{ margin: 0, fontSize: '24px', color: '#173f6f' }}>Application Error</h1>
            <p style={{ margin: '12px 0 0', color: '#576071' }}>
              The product hit a runtime error while rendering. The details are shown below.
            </p>
            <pre
              style={{
                marginTop: '16px',
                padding: '16px',
                overflowX: 'auto',
                background: '#f7f8fa',
                borderRadius: '8px',
                color: '#8b1e1e',
                whiteSpace: 'pre-wrap',
              }}
            >
              {this.state.error?.stack ?? String(this.state.error)}
            </pre>
          </section>
        </main>
      )
    }

    return this.props.children
  }
}

function App() {
  return (
    <BrowserRouter>
      <AppErrorBoundary>
        <RiTargetingToolRoutes />
      </AppErrorBoundary>
    </BrowserRouter>
  )
}

export default App
