
import { useLoginMutation } from '@/api/auth/authApiSlice';
import { Login } from '../../api/auth/LoginServer';
import { Unlock } from 'lucide-react'
import React, { useEffect,useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setCredentials } from '@/store/authSlice';

export default function LoginForm() {
    const userRef=useRef();
    const errRef=useRef()
    const [user,setUser]=useState('');
    const [pwd,setPwd]=useState('');
    const [errMsg,setErrMsg]=useState('');

    const [login,{isLoading}]=useLoginMutation()
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
        try {
            const userData=await login({user,pwd}).unwrap()
            dispatch(setCredentials({...userData,user}))
            setUser('')
            setPwd('')
            navigate('/dashboard')
        } catch (error:any) {
            console.log(error.status)
             if(error.status===400){
                //console.log("error")
                setErrMsg('Missing Username or Password')
            }else if(error.response?.status===401){
                setErrMsg('Unauthorized')
            }else{
                setErrMsg('Login Failed')
            }
            //errRef.current.focus();
        }
    }

const handleUserInput=(e:any)=>setUser(e.target.value)
const handlePwdInput=(e:any)=>setPwd(e.target.value)
  return (
    
        <form onSubmit={handleSubmit} action="">
           
            <div className="flex w-[68%] mt-8 flex-col gap-4">
            {errMsg && <div className='rounded-sm text-red-500 text-center w-[100%]'>{errMsg}</div>}
        <div className=''>
        <input 
        onChange={handleUserInput}
        type='email' 
        name='email' 
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
