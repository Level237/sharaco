import React from 'react'

export default function UserTypeForm() {
  return (
    <div className='flex flex-col gap-8'>
   
   <div className=' flex flex-col gap-2 flex-1'>
          <label htmlFor="prenom" className='text-gray-500'>Vous etes ?</label>
   <select className='w-[100%]
      border 
      rounded-md
      bg-slate-50
      py-3
      
      px-4' name="" id="">
        <option value="">Selectionnez votre statut</option>
        <option value="freelancer">Freelancer</option>
        <option value="Entreprise">Entreprise</option>
      </select>
   </div>
   <div className='flex items-end justify-end'>
    <button className='bg-sky-600 text-sm hover:bg-sky-700 text-white rounded-full px-6 py-3'>Continuer</button>
   </div>
  </div>
  )
}
