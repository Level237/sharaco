import React from 'react'

export default function ProfessionForm() {
  return (
    <div className='flex flex-col gap-8'>
   
   <div className=' flex flex-col gap-2 flex-1'>
          <label htmlFor="prenom" className='text-gray-500'>Quelle est votre profession ?</label>
   <select className='w-[100%]
      border 
      rounded-md
      bg-slate-50
      py-3
      
      px-4' name="" 
     
      id="">
        
        <option value="freelancer">Medecin</option>
        <option value="Entreprise">Developpeur</option>
        <option value="Entreprise">Consultant</option>
        <option value="Entreprise">Developpeur</option>
        <option value="Entreprise">Comptable</option>
      </select>
   </div>
   <div className='flex items-end justify-end'>
    <button className='bg-sky-600 hover:bg-sky-700 text-white rounded-full px-6 py-3'>Continuer</button>
   </div>
  </div>
  )
}
