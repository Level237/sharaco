import React from 'react'

export default function ActivityForm() {
  return (
    <div className='flex flex-col gap-8'>
   
   <div className=' flex flex-col gap-2 flex-1'>
          <label htmlFor="prenom" className='text-gray-500'>Quelle est la nature de votre activité ?</label>
   <select className='w-[100%]
      border 
      rounded-md
      bg-slate-50
      py-3
      
      px-4' name="" 
     
      id="">
        
        <option value="freelancer">Prestation de services uniquement</option>
        <option value="Entreprise">Activité libérale</option>
        <option value="Entreprise">Prestation de services et vente de produits physiques</option>
        <option value="Entreprise">Prestation de services avec installation de materiel</option>
        <option value="Entreprise">vente de produits physiques uniquement</option>
        <option value="Entreprise">Organisme de formation</option>
      </select>
   </div>
   <div className='flex items-end justify-end'>
    <button className='bg-sky-600 hover:bg-sky-700 text-white rounded-full px-6 py-3'>Continuer</button>
   </div>
  </div>
  )
}
