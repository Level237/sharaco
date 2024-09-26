import React from 'react'

export default function PersonalForm() {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex mt-4 gap-4'>
          <div className=' flex flex-col gap-2 flex-1'>
            <label htmlFor="prenom" className='text-gray-500'>Prénom</label>
          <input 
        type='text' 
        name='email' 
        
        className='w-[100%]
        border 
        rounded-md
        bg-slate-50
        py-3
        
        px-4'
        />
          </div>
          <div className=' flex flex-col gap-2 flex-1'>
            <label htmlFor="prenom" className='text-gray-500'>Nom</label>
          <input 
        type='text' 
        name='name' 
        
        className='w-[100%]
        border 
        rounded-md
        bg-slate-50
        py-3
        
        px-4'
        />
          </div>
      </div>
      <div className=' flex flex-col gap-2 flex-1'>
            <label htmlFor="prenom" className='text-gray-500'>Numéro de téléphone</label>
     <input 
        type='text' 
        name='phone' 
        
        className='w-[100%]
        border 
        rounded-md
        bg-slate-50
        py-3
        
        px-4'
        />
     </div>
     <div className=' flex flex-col gap-2 flex-1'>
            <label htmlFor="prenom" className='text-gray-500'>Comment avez-vous entendu parler de sharaco ?</label>
     <input 
        type='text' 
        name='phone' 
        
        className='w-[100%]
        border 
        rounded-md
        bg-slate-50
        py-3
        
        px-4'
        />
     </div>
     <div className='flex items-end justify-end'>
      <button className='bg-sky-600 hover:bg-sky-700 text-white rounded-full px-6 py-3'>Continuer</button>
     </div>
    </div>
  )
}
