import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoute() {

    const isAuthenticated=useSelector((state:any)=>state.auth.isAuthenticated)
  
    return isAuthenticated ? <Outlet/> : <Navigate to="/login"/>
}
