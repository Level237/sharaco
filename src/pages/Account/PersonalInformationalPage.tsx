import React from 'react'
import PersonalForm from '../../components/forms/PersonalForm';
import StepAccount from '../../components/StepAccount';

export default function PersonalInformationalPage() {
  return (
    <section className="flex overflow-hidden bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-stone-100 via-sky-100 to-stone-200 items-center flex-row h-[100vh]  w-full">
    <div className="flex-1 flex justify-start items-center h-[100vh] bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-sky-600 via-purple-900 to-sky-800">
   <div className="flex pl-36  justify-start items-start">
     <StepAccount/>
   </div>
</div>
 <div className="flex flex-1 flex-col pl-40 gap-6 py-24"> 
     <div>
    
     </div>
     <div className="flex flex-col gap-2">
       <h2 className="text-3xl font-bold">
         Bienvenue sur Sharaco
       </h2>
       <div>
       <h2 className="text-sm text-gray-700">
         Welcome back! Select method to log in:
       </h2>
     </div>
     </div>
     <div>
   <PersonalForm/>
 </div>
 </div>

</section>
  )
}
