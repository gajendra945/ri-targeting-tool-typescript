import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import '../styles/global.css'
import Home from '../pages/homePage'
import NotFound from '../pages/notFoundPage'
import { riTargetingToolRoutes } from './constants'

export const RiTargetingToolFirstPageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={riTargetingToolRoutes.home} replace />} />
      <Route path={riTargetingToolRoutes.home} element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RiTargetingToolFirstPageRoutes