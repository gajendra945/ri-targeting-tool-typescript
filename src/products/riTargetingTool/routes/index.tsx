import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import '../styles/global.css'
import Home from '../pages/homePage'
import NotFound from '../pages/notFoundPage'
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
      <Route path="/" element={<Navigate to={riTargetingToolRoutes.home} replace />} />
      <Route path={riTargetingToolRoutes.home} element={<Home />} />
      <Route path={riTargetingToolRoutes.signifyHHV.base} element={<Navigate to={riTargetingToolRoutes.signifyHHV.ytdSuppressionStats} replace />} />
      <Route path={riTargetingToolRoutes.signifyHHV.ytdSuppressionStats} element={<SignifyHHVYTDSuppressionStatsPage />} />
      <Route path={riTargetingToolRoutes.signifyHHV.modelPerformance} element={<SignifyHHVModelPerformancePage />} />
      <Route path={riTargetingToolRoutes.signifyHHV.futureSuppressions} element={<SignifyHHVFutureSuppressionsPage />} />
      <Route path={riTargetingToolRoutes.optumIOA.base} element={<Navigate to={riTargetingToolRoutes.optumIOA.ytdSuppressionStats} replace />} />
      <Route path={riTargetingToolRoutes.optumIOA.ytdSuppressionStats} element={<OptumIOAYTDSuppressionStatsPage />} />
      <Route path={riTargetingToolRoutes.optumIOA.modelPerformance} element={<OptumIOAModelPerformancePage />} />
      <Route path={riTargetingToolRoutes.optumIOA.futureSuppressions} element={<OptumIOAFutureSuppressionsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RiTargetingToolRoutes
