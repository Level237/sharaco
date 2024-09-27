import React from 'react'
import PersonalForm from '../../components/forms/PersonalForm';
import StepAccount from '../../components/StepAccount';
import UserTypeForm from '../../components/forms/UserTypeForm';
import ProfessionForm from '../../components/forms/ProfessionForm';

export default function ProfessionPage() {
  return (
    <section className="flex overflow-hidden bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-stone-100 via-sky-100 to-stone-200 items-center flex-row h-[100vh]  w-full">
    <div className="w-96 flex justify-start items-center h-[100vh] bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-sky-600 via-purple-900 to-sky-800">
   <div className="flex pl-12  justify-start items-start">
     <StepAccount typeStep={2}/>
   </div>
</div>
 <div className="flex flex-1 flex-col pl-40 gap-6 py-24"> 
     <div>
    
     </div>
     <div className="flex flex-col gap-4">
       <h2 className="text-3xl font-bold">
         Votre Profession
       </h2>
      
   
     </div>
     <div className='mr-36'>
   <ProfessionForm/>
 </div>
 </div>

</section>
  )
}
