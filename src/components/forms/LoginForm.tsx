
import { Unlock } from 'lucide-react'
import React from 'react'

export default function LoginForm() {
  return (
    <div className="flex w-[68%] mt-8 flex-col gap-4">
        <div className=''>
        <input 
        type='email' 
        name='email' 
        placeholder='Email'
        className='w-[100%]
        border 
        rounded-md
        bg-gray-50
        py-2
        opacity-75
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
        rounded-md
        bg-gray-50
        opacity-75
        py-2
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
            <button className='bg-sky-600 text-white py-2 rounded-lg w-full'>Log in</button>
        </div>

        <div className='mt-8 text-sm text-center'>
            <h2>Don't have an account? <span className='text-sky-600 cursor-pointer'>Create an account</span></h2>
        </div>
        </div>
        
      </div>
  )
}
