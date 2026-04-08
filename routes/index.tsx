import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import ProtectedRoute from '../component/ProtectedRoute'
import '../styles/global.css'
import '../styles/appHome.css'
import PlatformHomePage from '../pages/platformHomePage'
import Home from '../pages/homePage'
import NotFound from '../pages/notFoundPage'
import ProductPlaceholderPage from '../pages/productPlaceholderPage'
import { riTargetingToolRoutes } from './constants'
import SignifyHHVYTDSuppressionStatsPage from '../pages/signifyHHV/ytdSuppressionStats'
import SignifyHHVModelPerformancePage from '../pages/signifyHHV/modelPerformance'
import SignifyHHVFutureSuppressionsPage from '../pages/signifyHHV/futureSuppressions'
import OptumIOAYTDSuppressionStatsPage from '../pages/optumIOA/ytdSuppressionStats'
import OptumIOAModelPerformancePage from '../pages/optumIOA/modelPerformance'
import OptumIOAFutureSuppressionsPage from '../pages/optumIOA/futureSuppressions'

export const RiTargetingToolRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PlatformHomePage />} />
      <Route
        path="/population-health-compass"
        element={
          <ProductPlaceholderPage
            title="Population Health Compass"
            summary="This is a dummy product page showing where a future Population Health Compass experience can plug into the platform."
            accentClassName="app-placeholder-card--teal"
          />
        }
      />
      <Route
        path="/care-opportunity-studio"
        element={
          <ProductPlaceholderPage
            title="Care Opportunity Studio"
            summary="This is a dummy product page reserved for a future care opportunity workflow and analyst review experience."
            accentClassName="app-placeholder-card--amber"
          />
        }
      />
      <Route
        path="/member-engagement-pulse"
        element={
          <ProductPlaceholderPage
            title="Member Engagement Pulse"
            summary="This is a dummy product page showing how future engagement products can share the same launcher and route pattern."
            accentClassName="app-placeholder-card--slate"
          />
        }
      />

      {/* RI Targeting Tool product routes - protected */}
      <Route
        path={riTargetingToolRoutes.home}
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path={riTargetingToolRoutes.signifyHHV.base} element={<Navigate to={riTargetingToolRoutes.signifyHHV.ytdSuppressionStats} replace />} />
      <Route
        path={riTargetingToolRoutes.signifyHHV.ytdSuppressionStats}
        element={
          <ProtectedRoute>
            <SignifyHHVYTDSuppressionStatsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={riTargetingToolRoutes.signifyHHV.modelPerformance}
        element={
          <ProtectedRoute>
            <SignifyHHVModelPerformancePage />
          </ProtectedRoute>
        }
      />
      <Route
        path={riTargetingToolRoutes.signifyHHV.futureSuppressions}
        element={
          <ProtectedRoute>
            <SignifyHHVFutureSuppressionsPage />
          </ProtectedRoute>
        }
      />
      <Route path={riTargetingToolRoutes.optumIOA.base} element={<Navigate to={riTargetingToolRoutes.optumIOA.ytdSuppressionStats} replace />} />
      <Route
        path={riTargetingToolRoutes.optumIOA.ytdSuppressionStats}
        element={
          <ProtectedRoute>
            <OptumIOAYTDSuppressionStatsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={riTargetingToolRoutes.optumIOA.modelPerformance}
        element={
          <ProtectedRoute>
            <OptumIOAModelPerformancePage />
          </ProtectedRoute>
        }
      />
      <Route
        path={riTargetingToolRoutes.optumIOA.futureSuppressions}
        element={
          <ProtectedRoute>
            <OptumIOAFutureSuppressionsPage />
          </ProtectedRoute>
        }
      />

      {/* Catch all unmatched routes within RI Targeting Tool */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RiTargetingToolRoutes
