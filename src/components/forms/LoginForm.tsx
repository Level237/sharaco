
import { Login } from '../../api/auth/LoginServer';
import { Unlock } from 'lucide-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginForm() {
    const { isAuthenticated } = useSelector((state:any) => state.auth);
    const dispatch=useDispatch();
    const navigate=useNavigate()

    const handleSubmit=(e:any)=>{
        e.preventDefault();

        const credentials={
            email:'admin@sharaco.com',
            password:"password"
        }
        dispatch(Login(credentials))
    }

    useEffect(()=>{
        if(isAuthenticated){
            navigate('/dashboard');
        }
    },[isAuthenticated,navigate])
  return (
    
        <form onSubmit={handleSubmit} action="">
            <div className="flex w-[68%] mt-8 flex-col gap-4">
        <div className=''>
        <input 
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
            <button type='submit' className='bg-sky-600 text-white py-2 rounded-lg w-full'>Log in</button>
        </div>

        <div className='mt-8 text-sm text-center'>
            <h2>Already have an account? <Link to="/register"><span className='text-sky-600 cursor-pointer'>Create an account</span></Link></h2>
        </div>
        </div>
        </div>
        </form>
        
       
     
  )
}
