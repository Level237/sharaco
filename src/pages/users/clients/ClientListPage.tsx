import { ClientList } from '@/components/clients/ClientList'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { SelectModel } from '@/components/user/select-model'
import { SelectTypeUser } from '@/components/user/select-type-user'
import React from 'react'

export default function ClientListPage() {
  return (
    <section  className="flex flex-col gap-5 ">
    <div className='flex mt-4 items-center justify-between'>
      <h2 className='text-black dark:text-white text-xl font-bold'>Clients</h2>
      <SelectTypeUser>
      <Button variant="default" className='text-white'>New Client</Button>
      </SelectTypeUser>
      
  </div>
  <Separator/>
  <ClientList/>
</section>
  )
}
