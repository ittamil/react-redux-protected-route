import { Navigate, Outlet } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'

const PrivateRoutes = () => {
  const auth = useSelector((state) => state.user.isLoggedIn)
  return !auth ? <Navigate to="/login" /> : <Outlet/>
}
export default PrivateRoutes
