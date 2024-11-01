import DocumentFreelance from '@/components/documents/document-Freelance'
import { Separator } from '@/components/ui/separator'
import React from 'react'

export default function NewQuotePage() {
  return (
    <div className='flex justify-center'>
      <div className='min-h-[842px] relative min-w-[542px] py-12 px-8 bg-white'>
<DocumentFreelance/>
      <div  className='absolute translate-x-[-50%] translate-y-[-50%]    bottom-0 left-[50%]  '>
        
        
          <div className='flex items-center gap-2'>
          <span className='text-muted text-xs'>Buil with</span>  <span className='text-[#0285c7c0] font-bold text-xl'> Sharaco</span>
          </div>
        
       
                        
                  </div>
      </div>
      
    </div>
  )
}
