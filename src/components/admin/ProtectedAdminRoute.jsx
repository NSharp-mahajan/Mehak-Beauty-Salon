import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedAdminRoute = () => {
  const isAdminAuth = localStorage.getItem('adminAuth') === 'true'

  if (!isAdminAuth) {
    return <Navigate to="/admin/login" replace />
  }

  return <Outlet />
}

export default ProtectedAdminRoute
