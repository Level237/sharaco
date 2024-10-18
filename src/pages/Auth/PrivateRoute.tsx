import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export  const  PrivateRoute: React.FC<{ children: ReactNode }> = ({ children }) => {

    const isAuthenticated=useSelector((state:any)=>state.auth.isAuthenticated)
  
    return isAuthenticated ? children : <Navigate to="/login"/>
}
