import { Building, Lock, User } from 'lucide-react'
import React from 'react'

export default function StepAccount() {
  return (
    

<ol className="relative text-gray-500 border-s border-gray-200 dark:border-sky-600 dark:text-gray-400">                  
    <li className="mb-24 flex items-center ms-6">            
        <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -start-4 ring-4 ring-white">
            <Lock className='w-4 h-4 text-black font-bold'/>
          
        </span>
        <h3 className="font-medium text-white text-md ml-2 leading-tight">Your Personal Information</h3>
    </li>
    <li className="mb-24 flex items-center ms-6">
    <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full -start-4 ring-4 ring-gray-400">
            <Building className='w-4 h-4 text-black font-bold'/>
          
        </span>
        <h3 className="font-medium text-md ml-2 leading-tight">Entreprise</h3>
        
    </li>
  
    <li className=" flex items-center ms-6">
    <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full -start-4 ring-4 ring-gray-400">
            <User className='w-4 h-4 text-black font-bold'/>
          
        </span>
        <h3 className="font-medium text-md ml-2 leading-tight">your account</h3>
        
    </li>
</ol>

  )
}
