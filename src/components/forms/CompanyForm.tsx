import React from 'react'

export default function CompanyForm() {
  return (
    <div className='flex flex-col gap-8'>
   
   <div className='flex mt-4 gap-4'>
          <div className=' flex flex-col gap-2 flex-1'>
            <label htmlFor="prenom" className='text-gray-500'>Nom d'entreprise</label>
          <input 
        type='text' 
        placeholder='Entrez le nom de votre entreprise'
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
            <label htmlFor="prenom" className='text-gray-500'>Logo</label>
          <input 
        type='file' 
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
   <div className='flex items-end justify-end'>
    <button className='bg-sky-600 text-sm hover:bg-sky-700 text-white rounded-full px-6 py-3'>Continuer</button>
   </div>
  </div>
  )
}
