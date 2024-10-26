

import { Unlock } from 'lucide-react'
import React, { useEffect,useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { useLoginMutation } from '@/services/auth';
import { authTokenChange } from '@/store/authSlice';

export default function LoginForm() {
    const userRef=useRef();
    const errRef=useRef()
    const [user,setUser]=useState('');
    const [pwd,setPwd]=useState('');
    const [errMsg,setErrMsg]=useState('');
    //const token=useSelector(selectCurrentToken)
    const [login,{isLoading,isError,error}]=useLoginMutation()
    const dispatch=useDispatch();
    const navigate=useNavigate()

    
    useEffect(()=>{
        //userRef.current.focus()
    })
    
    useEffect(()=>{
        setErrMsg('')
    },[user,pwd])
    const handleSubmit=async(e:any)=>{
        e.preventDefault();

           
            const userObject={email:user,password:pwd}
            const userData=await login(userObject)
            console.log(userData.data.refresh_token)
            
            const userState={
                'refreshToken':userData.data.refresh_token,
                'accessToken':userData.data.access_token
            }
           
            dispatch(authTokenChange(userState))
            
            setUser('')
            setPwd('')
            navigate('/admin/dashboard')

    }

const handleUserInput=(e:any)=>setUser(e.target.value)
const handlePwdInput=(e:any)=>setPwd(e.target.value)
  return (
    
        <form onSubmit={handleSubmit} action="">
          
            <div className="flex w-[68%] mt-8 flex-col gap-4">
            {isError && <div className='rounded-sm text-red-500 text-center w-[100%]'>{error?.error}</div>}
        <div className=''>
        <input 
        onChange={handleUserInput}
        type='email' 
        name='email'
        value={user} 
        placeholder='Email'
        className='w-[100%]
        border
        border-[#00000067]
        rounded-md
        bg-slate-50
        py-3
        
        px-4'
        />
        
        </div>
        <div className=''>
        <input 
        type='password' 
        name='password' 
        value={pwd}
        placeholder='Password'
        onChange={handlePwdInput}
        className='w-full
        border
        border-[#00000067]
        rounded-md
        bg-gray-50
        opacity-75
        py-3
        px-4'
        />
        <div className='flex items-center mt-3 w-full flex-row justify-between'>
            <div className='flex items-center gap-2'>
            <input type="checkbox" />
            <label className='text-gray-500 text-sm' htmlFor="remember">Remember me</label>
            </div>
            <div>
                <h2 className='text-sky-500 text-sm'>Forgot Password?</h2>
            </div>
        </div>

        <div className='mt-8'>
            <button disabled={isLoading} type='submit' className={`bg-sky-400 flex items-center justify-center ${isLoading ? "bg-sky-400 cursor-wait" : ""} text-white py-2 rounded-lg w-full`}> {isLoading ? "Loading..." : "Login" }</button>
        </div>

        <div className='mt-8 text-sm text-center'>
            <h2>Already have an account? <Link to="/register"><span className='text-sky-600 cursor-pointer'>Create an account</span></Link></h2>
        </div>
        </div>
        </div>
        </form>
        
       
     
  )
}
