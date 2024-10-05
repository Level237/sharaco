import { Building, Lock, User, UserPen } from 'lucide-react'
import React from 'react'

export default function StepAccount({typeStep}:any) {
  return (
    

<ol className="relative text-gray-500 border-s border-gray-200 dark:border-sky-600 dark:text-gray-400"> 

<li className="mb-16 flex items-center ms-6">            
<span className={`absolute flex items-center ${typeStep===0 ? "bg-white ring-white" : "bg-gray-400 ring-gray-400"} justify-center w-8 h-8  rounded-full -start-4 ring-4 `}>
            <UserPen className='w-4 h-4 text-black font-bold'/>
          
        </span>
        <h3 className={`font-medium ${typeStep === 0 ? "text-white" : ""} text-md ml-2 leading-tight`}>User type</h3>
    </li>
    <li className="mb-16 flex items-center ms-6">             
    <span className={`absolute flex items-center ${typeStep===1 ? "bg-white ring-white" : "bg-gray-400 ring-gray-400"} justify-center w-8 h-8  rounded-full -start-4 ring-4 `}>
            <Lock className='w-4 h-4 text-black font-bold'/>
          
        </span>
        <h3 className={`font-medium ${typeStep === 1 ? "text-white" : ""} text-md ml-2 leading-tight`}>Your Personal Information</h3>
    </li>
    <li className="mb-16 flex items-center ms-6"> 
    <span className={`absolute flex items-center ${typeStep===2 ? "bg-white ring-white" : "bg-gray-400 ring-gray-400"} justify-center w-8 h-8  rounded-full -start-4 ring-4 `}>
            <Building className='w-4 h-4 text-black font-bold'/>
          
        </span>
        <h3 className={`font-medium ${typeStep === 2 ? "text-white" : ""} text-md ml-2 leading-tight`}>Entreprise</h3>
        
    </li>
  
    <li className="flex items-center ms-6"> 
    <span className={`absolute flex items-center ${typeStep===3 ? "bg-white ring-white" : "bg-gray-400 ring-gray-400"} justify-center w-8 h-8  rounded-full -start-4 ring-4 `}>
            <User className='w-4 h-4 text-black font-bold'/>
          
        </span>
        <h3 className={`font-medium ${typeStep === 3 ? "text-white" : ""} text-md ml-2 leading-tight`}>your account</h3>
        
    </li>
</ol>

  )
}
