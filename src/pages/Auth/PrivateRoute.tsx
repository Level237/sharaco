import React, { ReactNode, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'

export  const  PrivateRoute: React.FC<{ children: ReactNode }> = ({ children }) => {

    const isAuthenticated=useSelector((state:any)=>state.auth.isAuthenticated)
    const navigate=useNavigate()
    useEffect(()=>{

        if(!isAuthenticated){

            navigate('/login')
            
        }
    },[!isAuthenticated])
    return isAuthenticated && children;
}
