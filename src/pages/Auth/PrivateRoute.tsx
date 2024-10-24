import { selectCurrentToken } from '@/store/authSlice'
import React, { ReactNode, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {  Navigate, Outlet, useLocation} from 'react-router-dom'

export  const  PrivateRoute=()=> {
    
    const token=useSelector(selectCurrentToken)
    const location=useLocation()


    return (
        token ? <Outlet/> : <Navigate to="/login" state={{ from:location }} replace/>
    )
}
