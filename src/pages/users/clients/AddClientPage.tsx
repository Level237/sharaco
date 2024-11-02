import ClientForm from '@/components/clients/ClientForm'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import { Link } from 'react-router-dom'

export default function AddClientPage() {
  return (
    <section  className="flex flex-col gap-5 ">
    <div className='flex mt-4 items-center justify-between'>
      <h2 className='text-black dark:text-white text-xl font-bold'>New Client</h2>
      
      <Link to="/clients" >
        <Button variant="default" className='text-white'>Clients</Button>
      </Link>
      
      
      
  </div>
  <Separator/>
 <ClientForm/>
</section>
  )
}
